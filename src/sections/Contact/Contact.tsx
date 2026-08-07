import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.contact}>
        <img className={styles.background} src="/assets/section8/contact.webp" alt="" />
        <div className={styles.overlay} />
        <div className={styles.contactInner}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>CONTACT</p>
            <h2>고객의 비즈니스에 맞는<br />실행 가능한 IT 서비스를 제공합니다</h2>
            <p className={styles.lead}>전문가 상담을 통해 귀사에 최적화된 IT솔루션을 설계해드립니다.<br />신속한 대응, 정확한 제안, 책임 기반의 서비스 제공을 약속드립니다.</p>
          </div>
          <div className={styles.email}><p>이메일 문의</p><a href="mailto:inhousesoft@inhousesoft.com">inhousesoft@inhousesoft.com</a></div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <img src="/assets/section8/logo-white.svg" alt="inhousesoft" />
          <div className={styles.companyInfo} data-reveal-ignore>
            <p>상호명 : (주)인하우스소프트</p>
            <p>이메일 : inhousesoft@inhousesoft.com</p>
            <p>주소: 경기도 광명시 일직로 43, GIDC광명역</p>
            <p>© 2026 InhouseSoft Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
