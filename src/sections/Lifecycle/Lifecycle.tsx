import styles from './Lifecycle.module.css';

const steps = [
  { step: 'Step 1', title: '설계', body: '기능 요건 정의, 시스템 구조 및 데이터 모델 설계' },
  { step: 'Step 2', title: '구축', body: '애자일 기반 개발, 품질 보증, 테스트 및 배포' },
  { step: 'Step 3', title: '운영', body: '24시간 모니터링, 장애 대응, 성능 최적화' },
  { step: 'Step 4', title: '고도화', body: '신규 요건 반영, 기술 스택 업그레이드, 확장성 확보' },
];

export default function Lifecycle() {
  return (
    <section className={styles.section} id="si-sm">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>SYSTEM INTEGRATION &amp; MANAGEMENT</p>
            <h2 className={styles.title}>SI · SM<br />전 과정을 책임지는 파트너</h2>
          </div>
          <p className={styles.lead}>프로젝트가 끝나도 인연이 끊기지 않습니다.<br />기획부터 운영까지 같은 팀이 함께하기 때문에,<br />시스템을 가장 잘 아는 사람이 항상 곁에 있습니다.</p>
        </div>
        <ol className={styles.steps}>
          {steps.map((item) => (
            <li className={styles.step} key={item.step}>
              <span className={styles.stepNumber}>{item.step}</span>
              <div className={styles.stepCopy}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
