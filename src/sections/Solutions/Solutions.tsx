import styles from './Solutions.module.css';
import { solutionCards } from './solutionCards';

export default function Solutions() {
  return (
    <section className={styles.solutions} id="solution">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <p className={styles.eyebrow}>CORE SOLUTIONS</p>
            <h2 className={styles.title}>
              <span className={styles.line}>전문화된 핵심 솔루션으로</span>
              <span className={styles.line}>고객의 가치를 창출합니다</span>
            </h2>
          </div>
          <p className={styles.lead}>
            <span className={styles.line}>공공·의료·제약 산업에 특화된 3가지 핵심 서비스로</span>
            <span className={styles.line}>기업의 디지털 전환을 지원합니다.</span>
          </p>
        </div>

        <ul className={styles.cards}>
          {solutionCards.map((card) => (
            <li key={card.id} className={styles.card}>
              <img className={styles.cardImage} src={card.image} alt="" />
              <p className={styles.cardEyebrow}>{card.eyebrow}</p>
              <div className={styles.cardBlock}>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardBody}>{card.body}</p>
                <a className={styles.cardLink} href={card.href}>
                  {card.linkLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
