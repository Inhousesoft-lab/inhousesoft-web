import { useLayoutEffect } from 'react';

const REVEAL_SELECTOR =
  'h1, h2, h3, p, a, button, article, li, [data-reveal-group], [data-reveal-item]';

/**
 * 텍스트와 카드 UI가 화면에 들어올 때 한 번만 부드럽게 나타나게 한다.
 * 카드 내부 요소는 카드와 따로 움직이지 않고 카드 전체를 하나의 단위로 처리한다.
 */
export function useScrollReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = [...container.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)].filter(
      (element) => {
        if (element.closest('[data-reveal-ignore]')) return false;

        const group = element.closest('[data-reveal-group], article, li');
        return !group || group === element;
      },
    );

    let currentSection: Element | null = null;
    let order = 0;

    elements.forEach((element) => {
      const section = element.closest('section');
      if (section !== currentSection) {
        currentSection = section;
        order = 0;
      }

      element.dataset.reveal = '';
      element.style.setProperty('--reveal-delay', `${Math.min(order, 5) * 120}ms`);
      order += 1;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.classList.add('is-revealed');
          observer.unobserve(element);
        });
      },
      {
        root: container,
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      },
    );

    // 첫 화면 요소도 숨겨진 상태가 한 번 그려진 뒤 등장해야
    // Hero의 CTA 버튼 애니메이션이 생략되지 않는다.
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        elements.forEach((element) => observer.observe(element));
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      elements.forEach((element) => {
        delete element.dataset.reveal;
        element.classList.remove('is-revealed');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, [containerRef]);
}
