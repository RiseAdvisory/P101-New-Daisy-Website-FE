'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TOCItem[];
  includeIntro?: boolean;
  includeFaq?: boolean;
}

export function TableOfContents({
  sections,
  includeIntro = true,
  includeFaq = true,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  const allItems: TOCItem[] = [
    ...(includeIntro ? [{ id: 'introduction', title: 'Introduction' }] : []),
    ...sections,
    ...(includeFaq ? [{ id: 'faq', title: 'FAQ' }] : []),
  ];

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0,
    });

    for (const item of allItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Mobile TOC, collapsible, visible only on small screens */}
      <details className="mb-8 rounded-xl border border-[#E8E9E9] bg-[#F8F5F3] lg:hidden">
        <summary className="cursor-pointer p-4 font-semibold text-[#172524]">
          Table of Contents
        </summary>
        <nav className="border-t border-[#E8E9E9] p-4">
          <ul className="space-y-2">
            {allItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-sm text-[#455150] hover:text-primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </details>

      {/* Desktop TOC, sticky sidebar, hidden on small screens */}
      <aside className="hidden lg:block">
        <div className="sticky top-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#586968]">
            On this page
          </p>
          <nav>
            <ul className="space-y-1 border-l border-[#E8E9E9]">
              {allItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      activeId === item.id
                        ? 'border-primary font-medium text-primary'
                        : 'border-transparent text-[#586968] hover:border-[#586968]/30 hover:text-[#455150]'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            <Link
              href="/get-the-app"
              className="block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
