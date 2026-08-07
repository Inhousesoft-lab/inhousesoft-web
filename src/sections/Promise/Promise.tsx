import styles from './Promise.module.css';

export default function PromiseSection() {
  return (
    <section className={styles.section} id="promise">
      <img className={styles.background} src="/assets/section6/promise.webp" alt="" />
      <div className={styles.overlay} />
      <div className={styles.copy}>
        <p>인하우스소프트의 약속</p>
        <h2><span>시작부터 끝까지,</span><span> 고객과 함께합니다</span></h2>
      </div>
    </section>
  );
}
