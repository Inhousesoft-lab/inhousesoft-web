import { useState } from 'react';
import type { MouseEvent } from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Company', href: '#company' },
  { label: 'Solutions', href: '#solution' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const moveToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    const container = document.querySelector<HTMLElement>('main');

    if (container) {
      const targetTop =
        container.scrollTop +
        target.getBoundingClientRect().top -
        container.getBoundingClientRect().top;
      container.scrollTo({ top: targetTop, behavior });
    } else {
      target.scrollIntoView({ behavior, block: 'start' });
    }
    window.history.replaceState(null, '', href);
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a
          className={styles.logoLink}
          href="#hero"
          aria-label="인하우스소프트 홈"
          onClick={(event) => moveToSection(event, '#hero')}
        >
          <img className={styles.logo} src="/assets/logo-white.svg" alt="inhousesoft" />
        </a>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              className={styles.navLink}
              href={item.href}
              onClick={(event) => moveToSection(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <RiCloseLine className={styles.menuIcon} aria-hidden="true" />
          ) : (
            <RiMenuLine className={styles.menuIcon} aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            className={styles.mobileNavLink}
            href={item.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={(event) => moveToSection(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
