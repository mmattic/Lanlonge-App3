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
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2 pl-1 py-2">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-3">
          Categories
        </h3>
        <ul className="space-y-1">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => scrollToCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border-l-2
                  ${
                    activeId === cat.id
                      ? 'bg-gradient-to-r from-blue-50 to-transparent text-blue-700 shadow-sm border-blue-600 translate-x-1'
                      : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }
                `}
              >
                <cat.icon size={16} className={`transition-colors duration-200 ${activeId === cat.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-500'}`} />
                {cat.title.split(' ')[0]} 
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;