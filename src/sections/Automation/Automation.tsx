import styles from './Automation.module.css';

const features = [
  { icon: 'file.svg', title: '문서 처리 자동화', body: '계약서, 보고서 등 문서 작성 및 처리 자동화' },
  { icon: 'mail.svg', title: '이메일 자동화', body: '정기 발송, 응답 처리 및 분류 자동화' },
  { icon: 'data.svg', title: '데이터 입력', body: '시스템 간 데이터 이관 및 자동 입력' },
  { icon: 'calendar.svg', title: '스케줄 관리', body: '일정 확인, 알림 및 자동 예약 처리' },
  { icon: 'receipt.svg', title: '청구서 처리', body: '송장 및 청구서 자동 생성·처리' },
  { icon: 'user.svg', title: 'HR 업무', body: '입퇴사, 근태 및 급여 관리 자동화' },
];

const stats = [
  ['80% ↑', '업무 처리 속도 향상'],
  ['24/7', '무중단 자동 운영'],
  ['95% ↓', '휴먼 에러 감소'],
  ['ROI+', '빠른 투자 회수'],
];

export default function Automation() {
  return (
    <section className={styles.section} id="rpa">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>ROBOTIC PROCESS AUTOMATION</p>
            <h2>RPA<br />지능형 업무 자동화</h2>
          </div>
          <p className={styles.lead}>매일 반복되는 단순 업무, 사람이 꼭 해야 할까요?<br />RPA로 자동화하면 실수도 줄고, 직원들은<br className={styles.mobileBreak} /> 더 중요한 일에 집중할 수 있습니다.</p>
        </div>

        <ul className={styles.features}>
          {features.map((feature) => (
            <li className={styles.feature} key={feature.title}>
              <span className={styles.iconBox}><img src={`/assets/section7/${feature.icon}`} alt="" /></span>
              <div><h3>{feature.title}</h3><p>{feature.body}</p></div>
            </li>
          ))}
        </ul>

        <div className={styles.cta} data-reveal-group>
          <img src="/assets/section7/cta.webp" alt="" />
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaCopy}><p>업무 자동화가 필요하신가요?</p><h3>지금 바로 RPA 도입 상담을 받아보세요</h3></div>
          <a href="mailto:inhousesoft@inhousesoft.com" className={styles.ctaButton}>RPA 도입 상담하기</a>
        </div>

        <ul className={styles.stats}>
          {stats.map(([value, label]) => <li key={value}><strong>{value}</strong><span>{label}</span></li>)}
        </ul>
      </div>
    </section>
  );
}
