import React, { useState } from 'react';
import { Search, Globe2, Layers, Zap, ArrowRight } from 'lucide-react';
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
    <div className="relative pt-16 pb-10">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4 drop-shadow-sm">
          欧洲跨境卖家信赖的<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">资源导航</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 uppercase tracking-[0.25em] font-bold mb-12 opacity-80">
          Trusted Resources for Cross-Border Business
        </p>

        {/* Search Component */}
        <div className="bg-white/70 backdrop-blur-xl p-2 rounded-2xl shadow-2xl shadow-blue-200/40 max-w-3xl mx-auto border border-white/80 ring-1 ring-slate-200/50 mb-10 transform transition-all hover:scale-[1.01]">
          {/* Tabs */}
          <div className="flex space-x-1 mb-2 px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-all duration-300
                  ${activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}
                `}
              >
                {tab === 'Baidu' ? '百度' : tab === 'Google' ? '谷歌' : tab === 'Amazon' ? '美亚' : '必应'}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative flex items-center group">
            <Search className="absolute left-4 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`在 ${activeTab} 中搜索...`}
              className="w-full pl-12 pr-32 py-4 bg-slate-50/50 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all border border-transparent focus:border-blue-100"
            />
            <button
              type="submit"
              className="absolute right-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95"
            >
              {activeTab === 'Baidu' ? '百度一下' : 'Search'}
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            <span className="flex items-center text-slate-400 font-bold text-xs uppercase tracking-wider mr-2">
                <span className="mr-2 text-orange-500 animate-pulse">●</span> 热门工具
            </span>
            {['FBA计算器', 'VAT注册', '海外仓', '汇率换算', '关键词反查'].map(tool => (
                <a key={tool} href="#" className="group bg-white/60 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-white hover:shadow-md hover:shadow-blue-100 transition-all duration-200">
                    {tool}
                </a>
            ))}
        </div>

        {/* Brand Trust Section (Company Promotion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group relative p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe2 className="w-24 h-24 text-blue-600" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <Globe2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">深耕欧洲市场</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        专注欧洲跨境电商生态，聚合英、德、法、意、西等本土化优质资源，助您精准布局。
                    </p>
                 </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layers className="w-24 h-24 text-indigo-600" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-10 h-10 bg-indigo-100/50 rounded-lg flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                        <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">全链资源聚合</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        从选品分析、关键词挖掘到物流支付，提供一站式跨境出海工具箱，提升运营效率。
                    </p>
                 </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-24 h-24 text-cyan-600" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-10 h-10 bg-cyan-100/50 rounded-lg flex items-center justify-center mb-4 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">品牌赋能增长</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        连接全球优质服务商与卖家，打破信息壁垒，为中国品牌出海提供强有力的信任背书。
                    </p>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;