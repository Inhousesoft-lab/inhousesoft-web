import styles from './Why.module.css';
import { whyCards } from './whyCards';

export default function Why() {
  return (
    <section className={styles.why} id="company">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <p className={styles.eyebrow}>WHY 인하우스소프트</p>
            <h2 className={styles.title}>
              <span className={styles.line}>공공 · 의료 · 제약 분야의</span>
              <span className={styles.line}>신뢰할 수 있는 파트너</span>
            </h2>
          </div>
          <p className={styles.lead}>
            <span className={styles.line}>화려한 약속보다 실제 결과로 증명합니다.</span>
            <span className={styles.line}>지금까지 그래왔고, 앞으로도 그럴 것입니다.</span>
          </p>
        </div>

        <ul className={styles.cards}>
          {whyCards.map((card) => (
            <li key={card.id} className={styles.card}>
              <img className={styles.cardImage} src={card.image} alt={card.imageAlt} />
              <div className={styles.cardScrim} />
              <p className={styles.cardLabel}>{card.label}</p>
              <p className={styles.cardBody}>{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
