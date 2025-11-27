import React, { useEffect, useState } from 'react';
import { CATEGORIES } from '../constants';

const Sidebar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  // Smooth scroll handler
  const scrollToCategory = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' } 
    );

    CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block w-48 shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
          Categories
        </h3>
        <ul className="space-y-1">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => scrollToCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    activeId === cat.id
                      ? 'bg-white text-blue-600 shadow-sm border-l-4 border-blue-600'
                      : 'text-slate-500 hover:bg-white hover:text-slate-700'
                  }
                `}
              >
                <cat.icon size={16} className={activeId === cat.id ? 'text-blue-600' : 'text-slate-400'} />
                {cat.title.split(' ')[0]} {/* Show only Chinese part for brevity */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
