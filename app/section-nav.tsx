'use client';

import { useEffect, useRef, useState } from 'react';

type Section = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: readonly Section[];
};

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    setActiveSection(sections[0]?.id ?? '');
  }, [sections]);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = sections.map((section) => section.id);
    const ratios = new Map<string, number>();
    const topOffset = 120;

    const findNearestSection = () => {
      let lastSectionAboveOffset = sectionIds[0] ?? '';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= topOffset) {
          lastSectionAboveOffset = sectionId;
          continue;
        }

        return lastSectionAboveOffset;
      }

      return lastSectionAboveOffset;
    };

    const syncHash = () => {
      const currentHash = window.location.hash.replace('#', '');

      if (sectionIds.includes(currentHash)) {
        setActiveSection(currentHash);
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const nextActiveSection = sectionIds.reduce(
          (currentBest, sectionId) => {
            const sectionRatio = ratios.get(sectionId) ?? 0;

            if (sectionRatio > currentBest.ratio) {
              return { id: sectionId, ratio: sectionRatio };
            }

            return currentBest;
          },
          {
            id: activeSectionRef.current,
            ratio: ratios.get(activeSectionRef.current) ?? 0,
          },
        );

        if (nextActiveSection.ratio > 0) {
          setActiveSection(nextActiveSection.id);
          return;
        }

        const nearestSection = findNearestSection();

        if (nearestSection) {
          setActiveSection(nearestSection);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        ratios.set(id, 0);
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('hashchange', syncHash);
      observer.disconnect();
    };
  }, [sections]);

  return (
    <nav aria-label="Primary" className="section-nav">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? 'location' : undefined}
            className={`nav-link${isActive ? ' nav-link-active' : ''}`}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
