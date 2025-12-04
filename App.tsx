import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import ResourceCard from './components/ResourceCard';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { CATEGORIES } from './constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PageView } from './types';

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<PageView>('home');

  // State to track collapsed categories. Key is category ID.
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (id: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 tech-grid">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      {currentView === 'home' ? (
        <>
          <Hero />
          <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 relative z-10">
            <div className="lg:flex lg:gap-8">
              <Sidebar />

              {/* Main Content Area */}
              <div className="flex-1 space-y-8 sm:space-y-12 pb-12">
                {CATEGORIES.map((category) => (
                  <section key={category.id} id={category.id} className="scroll-mt-28">
                    {/* Section Header - Clickable for collapse */}
                    <div 
                      className="flex items-center justify-between mb-4 sm:mb-6 pl-1 group cursor-pointer select-none"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-500/30 group-hover:scale-y-110 transition-transform"></div>
                        <h2 className="text-lg font-extrabold text-slate-800 flex items-center gap-3 tracking-tight">
                          {category.title}
                          <span className="px-2 py-0.5 rounded-full bg-slate-200/50 text-slate-500 text-[10px] font-bold tracking-wide">
                            {category.items.length}
                          </span>
                        </h2>
                      </div>
                      {/* Collapse Icon */}
                      <div className="text-slate-400 hover:text-blue-600 transition-colors p-1">
                        {collapsedCategories[category.id] ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                      </div>
                    </div>

                    {/* Grid - Conditional Rendering based on collapsed state */}
                    {!collapsedCategories[category.id] && (
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        {category.items.map((item) => (
                          <ResourceCard key={item.id} item={item} />
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </main>
        </>
      ) : (
        <AboutUs />
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;