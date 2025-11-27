import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import ResourceCard from './components/ResourceCard';
import Footer from './components/Footer';
import { CATEGORIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#f8f9fa]">
      <Header />
      <Hero />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex lg:gap-8">
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 space-y-12">
            {CATEGORIES.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-28">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-5 pl-1">
                  <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    {category.title}
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 text-xs font-normal">
                      {category.items.length}
                    </span>
                  </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.items.map((item) => (
                    <ResourceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
