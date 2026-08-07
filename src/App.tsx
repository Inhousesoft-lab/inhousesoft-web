import { useRef } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import Why from './sections/Why/Why';
import Solutions from './sections/Solutions/Solutions';
import Consulting from './sections/Consulting/Consulting';
import Lifecycle from './sections/Lifecycle/Lifecycle';
import PromiseSection from './sections/Promise/Promise';
import Automation from './sections/Automation/Automation';
import Contact from './sections/Contact/Contact';
import { useSectionSnap } from './hooks/useSectionSnap';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const pageRef = useRef<HTMLElement>(null);
  useSectionSnap(pageRef);
  useScrollReveal(pageRef);

  return (
    <>
      <Header />
      <main className={styles.page} ref={pageRef}>
        <Hero />
        <Why />
        <Solutions />
        <Consulting />
        <Lifecycle />
        <PromiseSection />
        <Automation />
        <Contact />
      </main>
    </>
  );
}
