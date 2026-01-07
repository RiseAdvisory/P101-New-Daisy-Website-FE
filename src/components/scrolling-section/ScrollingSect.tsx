import { useEffect, useState, useRef } from 'react';
import styles from './ScrollSection.module.css';
import Image from 'next/image';

interface Section {
  text: string;
  image: string;
}

const sections: Section[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image:
      'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
  },
  {
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  },
];

const ScrollSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use a single IntersectionObserver for all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    // Observe all section elements
    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.lockerContent}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={styles.lockerSection}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
            >
              <h3 className={styles.subtitle}>{`0${index + 1}`}</h3>
              <p className={styles.text}>{section.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.lockerImage}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`${styles.image} ${currentIndex === index ? styles.active : ''}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                src={section.image}
                alt={`Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
