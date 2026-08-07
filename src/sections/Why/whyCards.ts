export type WhyCard = {
  id: string;
  label: string;
  body: string;
  image: string;
  imageAlt: string;
};

export const whyCards: WhyCard[] = [
  {
    id: 'tech',
    label: '기술력&책임감',
    body: '말만 하고 끝나지 않습니다. 구축 이후 운영까지, 약속한 것은 끝까지 함께합니다.',
    image: '/assets/why-card-1.webp',
    imageAlt: '개방형 사무실에서 함께 업무를 진행하는 팀',
  },
  {
    id: 'expertise',
    label: '분야별 전문성',
    body: '공공·의료·제약 업무를 직접 경험한 전문가들이 현장에 맞는 솔루션을 제안합니다.',
    image: '/assets/why-card-2.webp',
    imageAlt: '여러 모니터와 노트북으로 업무를 수행하는 전문가',
  },
  {
    id: 'end-to-end',
    label: 'End-to-End',
    body: '컨설팅, 개발, 운영, 고도화까지 한 팀이 처음부터 끝까지 담당합니다.',
    image: '/assets/why-card-3.webp',
    imageAlt: '프로젝트 협업을 위한 회의실',
  },
];
