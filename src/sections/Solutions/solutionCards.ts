export type SolutionCard = {
  id: string;
  /** 카드 좌상단 영문 라벨 */
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  image: string;
};

export const solutionCards: SolutionCard[] = [
  {
    id: 'bidding',
    eyebrow: 'Public Bidding Consulting',
    title: '공공입찰 컨설팅',
    body: '공공기관 입찰 전 과정을 전문적으로 지원합니다. 공고 분석, 제안서 작성, 가격 전략까지 수주 성공률을 극대화합니다.',
    linkLabel: '자세히 보기 →',
    href: '#consulting',
    image: '/assets/solution-card-1.webp',
  },
  {
    id: 'si-sm',
    eyebrow: 'System Integration & Management',
    title: 'SI · SM',
    body: 'ISP부터 설계, 구축, 운영, 고도화까지 IT 시스템 전 생애주기를 책임지는 통합 서비스를 제공합니다.',
    linkLabel: '자세히 보기 →',
    href: '#si-sm',
    image: '/assets/solution-card-2.webp',
  },
  {
    id: 'rpa',
    eyebrow: 'Robotic Process Automation',
    title: 'RPA',
    body: '반복적인 업무를 지능형 자동화로 처리합니다. 24/7 무중단 운영으로 업무 효율과 정확도를 동시에 향상시킵니다.',
    linkLabel: '자세히 보기 →',
    href: '#rpa',
    image: '/assets/solution-card-3.webp',
  },
];
