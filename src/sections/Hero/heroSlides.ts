export type HeroSlide = {
  id: string;
  /** 타이틀 — 배열의 각 항목이 한 줄 */
  title: string[];
  /** 설명 — 배열의 각 항목이 한 줄 */
  description: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  background: string;
  /** 시안에서 배경을 좌우 반전한 슬라이드 여부 */
  flipBackground: boolean;
};

const PRIMARY_CTA = { label: '무료 상담신청', href: '#contact' };
const SECONDARY_CTA = { label: '솔루션 살펴보기', href: '#solution' };

export const heroSlides: HeroSlide[] = [
  {
    id: 'si-sm-rpa',
    title: ['공공 · 의료 · 제약 IT를 수행하는', 'SI · SM · RPA 전문 기업'],
    description: ['화려한 제안보다 실제 결과로 말합니다. 함께할 준비가 되어 있습니다.'],
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    background: '/assets/hero-bg-1.webp',
    flipBackground: true,
  },
  {
    id: 'one-team',
    title: ['시작부터 운영까지', '한 팀이 책임집니다'],
    description: ['담당자가 바뀌고 맥락이 끊기는 일, 저희와 함께라면 없습니다.'],
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    background: '/assets/hero-bg-2.webp',
    flipBackground: true,
  },
  {
    id: 'custom-solution',
    title: ['필요한 것만 정확하게', '맞춤 IT 솔루션'],
    description: [
      '입찰, 개발, 자동화 — 필요한 영역만 골라서 시작해도 됩니다.',
      '규모에 상관없이 함께합니다.',
    ],
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    background: '/assets/hero-bg-3.webp',
    flipBackground: false,
  },
];
