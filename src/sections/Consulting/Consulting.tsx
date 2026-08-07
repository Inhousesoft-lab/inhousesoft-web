import styles from './Consulting.module.css';

const tags = [
  ['# 나라장터 · G2B 공고 모니터링', '# 배점 기준 심층 분석'],
  ['# 경쟁사 동향 파악', '# 제안서 목차 · 내용 · 디자인'],
  ['# 투찰 가격 데이터 설계', '# 결과 분석 및 개선 제안'],
];

const services = [
  {
    image: '/assets/section4/strategy.webp',
    imageAlt: '노트북 화면을 보며 입찰 전략을 논의하는 모습',
    title: '공고 분석 · 입찰 전략',
    body: '어떤 공고에 들어가야 하는지부터 시작합니다. 조건, 배점, 경쟁사까지 보고 전략을 세웁니다.',
  },
  {
    image: '/assets/section4/proposal.webp',
    imageAlt: '제안서 작성을 위한 컴퓨터 키보드',
    title: '제안서 작성 지원',
    body: '평가위원이 원하는 방향으로 제안서를 구성합니다. 목차 · 내용 · 디자인 모두 함께합니다.',
  },
  {
    image: '/assets/section4/price.webp',
    imageAlt: '기업 의사결정을 상징하는 업무 지구의 고층 빌딩',
    title: '가격 전략 · 사후 관리',
    body: '낙찰 가능한 가격을 데이터 기반으로 설계하고, 결과에 따른 개선 방향도 안내합니다.',
  },
];

export default function Consulting() {
  return (
    <section className={styles.section} id="consulting">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.intro}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>PUBLIC BIDDING CONSULTING</p>
              <h2 className={styles.title}>공공입찰<br />컨설팅 솔루션</h2>
              <p className={styles.lead}>
                혼자 하면 오래 걸리고 빠뜨리기 쉬운 것들이 있습니다. 공고 분석부터 제출까지,
                익숙한 사람이 옆에서 함께하면 달라집니다.
              </p>
            </div>
            <a className={styles.primaryButton} href="mailto:inhousesoft@inhousesoft.com">입찰 컨설팅 문의하기</a>
          </div>

          <div className={styles.tags}>
            {tags.map((row, rowIndex) => (
              <div className={styles.tagRow} key={row.join('')}>
                {row.map((tag, tagIndex) => (
                  <span
                    className={styles.tag}
                    data-tone={`${rowIndex}-${tagIndex}`}
                    data-reveal-item
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.serviceList}>
          {services.map((service) => (
            <article className={styles.service} key={service.title}>
              <img className={styles.serviceImage} src={service.image} alt={service.imageAlt} />
              <div className={styles.serviceScrim} />
              <div className={styles.serviceCopy}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
