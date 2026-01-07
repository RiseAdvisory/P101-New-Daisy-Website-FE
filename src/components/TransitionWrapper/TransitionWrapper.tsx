'use client';
import { useEffect, useState, ReactNode, useRef } from 'react';
import { useChangeLanguage } from '@/store/language';
import { useMyContext } from '@/app/MyContext';
import styles from './TransitionWrapper.module.css';

interface TransitionWrapperProps {
  children: ReactNode;
}

export const TransitionWrapper = ({ children }: TransitionWrapperProps) => {
  const { lang } = useChangeLanguage();
  const { userChange } = useMyContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevLang = useRef(lang);
  const prevUserChange = useRef(userChange);

  useEffect(() => {
    // Only trigger transition if lang or userChange actually changed
    if (prevLang.current === lang && prevUserChange.current === userChange) {
      return;
    }

    // Start fade out
    setIsTransitioning(true);

    // Wait for fade out to complete (200ms), then fade back in
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      prevLang.current = lang;
      prevUserChange.current = userChange;
    }, 200);

    return () => clearTimeout(timer);
  }, [lang, userChange]);

  return (
    <div className={`${styles.wrapper} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
      {children}
    </div>
  );
};
