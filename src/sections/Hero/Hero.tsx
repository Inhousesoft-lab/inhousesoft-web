import { useState } from 'react';
import styles from './Hero.module.css';
import { heroSlides } from './heroSlides';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  const go = (step: number) =>
    setIndex((current) => (current + step + heroSlides.length) % heroSlides.length);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.backgrounds}>
        {heroSlides.map((item, i) => (
          <img
            key={item.id}
            className={[
              styles.background,
              item.flipBackground ? styles.backgroundFlipped : '',
              i === index ? styles.backgroundActive : '',
            ].join(' ')}
            src={item.background}
            alt=""
            aria-hidden="true"
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.copy}>
            <div className={styles.headings}>
              <h1 className={styles.title}>
                {slide.title.map((line) => (
                  <span key={line} className={styles.line}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className={styles.description}>
                {slide.description.map((line) => (
                  <span key={line} className={styles.line}>
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className={styles.actions} data-reveal-ignore>
              <a
                className={`${styles.button} ${styles.buttonPrimary}`}
                href={slide.primaryCta.href}
              >
                {slide.primaryCta.label}
              </a>
              <a
                className={`${styles.button} ${styles.buttonSecondary}`}
                href={slide.secondaryCta.href}
              >
                {slide.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className={styles.controls} data-reveal-ignore>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              onClick={() => go(-1)}
              aria-label="이전 슬라이드"
            >
              <img className={styles.arrowIcon} src="/assets/arrow-right.svg" alt="" />
            </button>

            <div className={styles.indicators} aria-label="슬라이드 페이지">
              {heroSlides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}번 슬라이드로 이동`}
                  aria-current={i === index}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.arrow}
              onClick={() => go(1)}
              aria-label="다음 슬라이드"
            >
              <img className={styles.arrowIcon} src="/assets/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
