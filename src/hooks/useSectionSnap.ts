import { useEffect } from 'react';

/** 데스크탑에서만 동작 (모바일은 기본 스크롤) */
const DESKTOP_QUERY = '(min-width: 900px)';

/** 섹션 간 이동 시간 */
const DURATION_MS = 450;

/** 이동이 끝난 뒤 다음 입력을 받기까지의 추가 대기 시간 */
const COOLDOWN_MS = 80;

/**
 * 이동을 유발하는 누적 스크롤량.
 *
 * 마우스 휠은 한 칸에 100 안팎이 한 번에 들어와 바로 넘어가고,
 * 트랙패드는 작은 delta가 쌓여 이 값에 도달하면 넘어간다.
 * (이벤트 "간격"으로 제스처를 구분하면 트랙패드로 연속 스크롤할 때
 *  간격이 계속 좁아 아예 막혀버린다.)
 */
const TRIGGER_DELTA = 40;

/** 이 시간 동안 입력이 없으면 누적을 초기화한다 */
const IDLE_RESET_MS = 200;

/**
 * smootherstep — 6t⁵ - 15t⁴ + 10t³
 *
 * 시작·끝에서 속도뿐 아니라 가속도까지 0이라 멈출 때 턱이 없다.
 * (easeInOutCubic 은 끝지점 가속도가 갑자기 꺾여 미세한 턱이 느껴진다.)
 */
const smootherstep = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

/**
 * 섹션 단위 스크롤 컨트롤러.
 *
 * CSS scroll-snap에만 맡기면 마우스 휠의 큰 단위 delta가 스냅 애니메이션과
 * 충돌해 화면이 튄다. wheel을 직접 받아 "한 제스처 = 한 섹션"으로 고정하고,
 * 이동 중에는 스냅을 잠시 꺼서 두 애니메이션이 겹치지 않게 한다.
 */
export function useSectionSnap(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    let lockUntil = 0;
    let lastWheelAt = 0;
    let accumulated = 0;
    let frame = 0;

    const sectionTops = () => {
      const base = container.getBoundingClientRect().top - container.scrollTop;
      return [...container.querySelectorAll(':scope > section')].map(
        (el) => el.getBoundingClientRect().top - base,
      );
    };

    const currentIndex = (tops: number[]) => {
      const middle = container.scrollTop + container.clientHeight / 2;
      let index = 0;
      for (let i = 0; i < tops.length; i += 1) {
        if (tops[i] <= middle) index = i;
      }
      return index;
    };

    /**
     * scrollTo({ behavior: 'smooth' })는 스냅 컨테이너에서 취소되는 경우가 있어
     * rAF로 직접 보간한다.
     */
    const animateTo = (target: number) => {
      cancelAnimationFrame(frame);

      const start = container.scrollTop;
      const distance = target - start;
      if (distance === 0) return;

      // 모션 최소화 설정이면 애니메이션 없이 바로 이동
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        container.scrollTop = target;
        return;
      }

      // 이동 중에는 스냅이 끼어들지 않도록 잠시 해제.
      // 복구는 인라인 스타일 제거로 한다 — 이전 이동이 중간에 끊겨도
      // 'none'이 그대로 남지 않게.
      container.style.scrollSnapType = 'none';

      const startedAt = performance.now();

      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / DURATION_MS);
        container.scrollTop = start + distance * smootherstep(progress);

        if (progress < 1) {
          frame = requestAnimationFrame(step);
        } else {
          container.scrollTop = target;
          container.style.scrollSnapType = '';
        }
      };

      frame = requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      if (!desktop.matches) return;

      // 기본 스크롤을 막고 섹션 단위 이동만 허용
      event.preventDefault();

      const now = performance.now();

      // 이동 중 + 쿨다운 동안은 무시하고, 그 사이 들어온 관성도 버린다.
      if (now < lockUntil) {
        accumulated = 0;
        lastWheelAt = now;
        return;
      }

      // 방향이 바뀌었거나 한동안 입력이 없었으면 새로 센다
      if (accumulated * event.deltaY < 0 || now - lastWheelAt > IDLE_RESET_MS) {
        accumulated = 0;
      }

      accumulated += event.deltaY;
      lastWheelAt = now;

      if (Math.abs(accumulated) < TRIGGER_DELTA) return;

      const tops = sectionTops();
      const from = currentIndex(tops);
      const to = Math.min(tops.length - 1, Math.max(0, from + (accumulated > 0 ? 1 : -1)));
      accumulated = 0;
      if (to === from) return;

      lockUntil = now + DURATION_MS + COOLDOWN_MS;
      animateTo(tops[to]);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('wheel', onWheel);
    };
  }, [containerRef]);
}
