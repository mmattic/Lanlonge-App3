import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchEngine } from '../types';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SearchEngine>('Baidu');
  const [query, setQuery] = useState('');

  const tabs: SearchEngine[] = ['Baidu', 'Google', 'Amazon', 'Bing'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if(!query) return;
    let url = '';
    switch(activeTab) {
      case 'Baidu': url = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`; break;
      case 'Google': url = `https://www.google.com/search?q=${encodeURIComponent(query)}`; break;
      case 'Amazon': url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`; break;
      case 'Bing': url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`; break;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-transparent pt-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
          欧洲跨境卖家信赖的资源导航
        </h1>
        <p className="text-sm sm:text-base text-slate-500 uppercase tracking-widest font-semibold mb-10">
          Trusted Resources for Cross-Border Business
        </p>

        {/* Search Component */}
        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-blue-100/50 max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-1 mb-2 px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200
                  ${activeTab === tab 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}
                `}
              >
                {tab === 'Baidu' ? '百度' : tab === 'Google' ? '谷歌' : tab === 'Amazon' ? '美亚' : '必应'}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative flex items-center">
            <Search className="absolute left-4 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`在 ${activeTab} 中搜索...`}
              className="w-full pl-12 pr-32 py-4 bg-slate-50 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30"
            >
              {activeTab === 'Baidu' ? '百度一下' : 'Search'}
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="flex items-center text-orange-500 font-semibold text-sm">
                <span className="mr-1">⚡</span> 热门工具:
            </span>
            {['FBA计算器', 'VAT注册', '海外仓', '汇率换算'].map(tool => (
                <a key={tool} href="#" className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs sm:text-sm text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors">
                    {tool}
                </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
