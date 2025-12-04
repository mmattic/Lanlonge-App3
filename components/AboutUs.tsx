import React from 'react';
import { 
  Target, 
  Heart, 
  Globe2, 
  TrendingUp, 
  Users, 
  Truck, 
  Database, 
  ShoppingCart, 
  Layout, 
  Share2,
  MapPin,
  Mail,
  Award,
  Zap
} from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section & Global Map */}
      <section className="relative flex flex-col items-center justify-start overflow-hidden bg-slate-900 pt-20 pb-10">
        {/* Sci-fi Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950 z-0"></div>
        
        {/* Abstract Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen"></div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            上海蓝隆电子科技有限公司
            <span className="block text-2xl md:text-3xl font-light mt-2 text-blue-200">
              Lanlonge Electronic Technology Co., Ltd.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <span className="px-6 py-2 border border-cyan-400/50 text-cyan-300 rounded-full text-lg tracking-widest uppercase bg-cyan-900/20 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              欧洲跨境电商领航者
            </span>
          </div>
          <p className="mt-6 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 filter drop-shadow-lg">
            选择我们 · 选择未来
          </p>
        </div>

        {/* World Map Visualization 
            Using aspect-ratio to ensure the image fills the container perfectly.
        */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 perspective-1000">
            <div className="relative w-full aspect-[2/1] select-none group/map">
                {/* Map Image - Lighter, more sci-fi look */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                        alt="Global Offices Map" 
                        className="w-full h-full object-fill filter invert sepia saturate-[3] hue-rotate-[190deg] brightness-125 drop-shadow-[0_0_8px_rgba(165,243,252,0.6)]" 
                    />
                </div>
                
                {/* Scanning Effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                    <div className="w-full h-2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent absolute top-0 animate-[scan_5s_ease-in-out_infinite] shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                </div>

                {/* Markers - Calibrated Coordinates */}
                
                {/* --- Europe Group --- */}
                
                {/* Germany (approx 51N, 10E) -> Adjusted to 50.5%, 26% */}
                <div className="absolute top-[26%] left-[50.5%] flex flex-col items-center group cursor-pointer z-30">
                    <div className="absolute bottom-3 flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-3 py-1 bg-slate-900/80 text-cyan-100 text-xs font-bold rounded-sm border border-cyan-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.4)] whitespace-nowrap transform group-hover:scale-105 transition-transform">
                            德国
                        </div>
                        <div className="h-6 w-[1px] bg-gradient-to-b from-cyan-500/60 to-transparent"></div>
                    </div>
                    <div className="relative">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute opacity-75"></div>
                        <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full relative z-10 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                    </div>
                </div>

                {/* France (approx 46N, 2E) -> Adjusted to 48%, 29% */}
                <div className="absolute top-[29%] left-[48%] flex flex-col items-center group cursor-pointer z-30">
                    <div className="absolute bottom-3 flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-3 py-1 bg-slate-900/80 text-cyan-100 text-xs font-bold rounded-sm border border-cyan-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.4)] whitespace-nowrap transform group-hover:scale-105 transition-transform">
                            法国
                        </div>
                        <div className="h-4 w-[1px] bg-gradient-to-b from-cyan-500/60 to-transparent"></div>
                    </div>
                    <div className="relative">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute delay-75 opacity-75"></div>
                        <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full relative z-10 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                    </div>
                </div>

                {/* Romania (approx 44N, 26E) -> Adjusted to 54.5%, 30% */}
                <div className="absolute top-[30%] left-[54.5%] flex flex-col items-center group cursor-pointer z-30">
                    <div className="absolute bottom-3 flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-3 py-1 bg-slate-900/80 text-cyan-100 text-xs font-bold rounded-sm border border-cyan-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.4)] whitespace-nowrap transform group-hover:scale-105 transition-transform">
                            罗马尼亚
                        </div>
                        <div className="h-4 w-[1px] bg-gradient-to-b from-cyan-500/60 to-transparent"></div>
                    </div>
                    <div className="relative">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute delay-150 opacity-75"></div>
                        <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full relative z-10 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                    </div>
                </div>

                {/* --- China Group --- */}
                
                {/* Shanghai (approx 31N, 121E) -> Moved inland to 73.5%, 38% */}
                <div className="absolute top-[38%] left-[73.5%] flex flex-col items-center group cursor-pointer z-40">
                    <div className="absolute bottom-4 flex flex-col items-center opacity-100 transition-opacity duration-300">
                        <div className="px-4 py-1.5 bg-slate-900/90 text-cyan-100 text-sm font-bold rounded-sm border border-cyan-400/80 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.5)] whitespace-nowrap transform group-hover:scale-110 transition-transform flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                            上海
                        </div>
                        <div className="h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"></div>
                    </div>
                    <div className="relative">
                        <div className="w-6 h-6 bg-cyan-400 rounded-full animate-ping absolute opacity-40 delay-300"></div>
                        <div className="w-3 h-3 bg-cyan-200 rounded-full relative z-10 shadow-[0_0_20px_rgba(34,211,238,1)] ring-2 ring-slate-900/50"></div>
                    </div>
                </div>

                {/* Shenzhen (approx 22N, 114E) -> Moved inland to 71.5%, 43% */}
                <div className="absolute top-[43%] left-[71.5%] flex flex-col items-center group cursor-pointer z-40">
                    <div className="absolute top-4 flex flex-col-reverse items-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-3 py-1 bg-slate-900/80 text-cyan-100 text-xs font-bold rounded-sm border border-cyan-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.4)] whitespace-nowrap transform group-hover:scale-105 transition-transform">
                            深圳
                        </div>
                        <div className="h-4 w-[1px] bg-gradient-to-t from-cyan-500/60 to-transparent"></div>
                    </div>
                    <div className="relative">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute opacity-50 delay-500"></div>
                        <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full relative z-10 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                    </div>
                </div>
                
                {/* Connecting Lines (Data Flow) - Coordinates matched to markers */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                    {/* Shanghai (73.5, 38) to Europe (Germany 50.5, 26) */}
                    <path d="M73.5 38 Q 62 20 50.5 26" fill="none" stroke="url(#gradientLine)" strokeWidth="0.2" strokeDasharray="1 1" className="animate-[dash_30s_linear_infinite]" />
                    {/* Shenzhen (71.5, 43) to Europe */}
                    <path d="M71.5 43 Q 60 30 50.5 27" fill="none" stroke="url(#gradientLine2)" strokeWidth="0.1" strokeOpacity="0.6" />
                    
                    <defs>
                        <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                        </linearGradient>
                         <linearGradient id="gradientLine2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <style>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: -100;
                      }
                    }
                    @keyframes scan {
                        0% { top: 0%; opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { top: 100%; opacity: 0; }
                    }
                `}</style>
            </div>
        </div>
      </section>

      {/* 2. Company Profile (Vision/Mission/Values) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
            <div className="w-10 h-1 bg-blue-600"></div>
            公司简介
            <div className="w-10 h-1 bg-blue-600"></div>
          </h2>
          <p className="text-slate-500 mt-4">Company Profile</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Target className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">公司愿景</h3>
            <p className="text-slate-600 leading-relaxed">
              成为连接中国优质产品与欧洲消费者的首选桥梁，打造跨境电商领域的标杆企业。
            </p>
          </div>

          {/* Mission */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
              <Award className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">公司使命</h3>
            <p className="text-slate-600 leading-relaxed">
              通过专业的跨境电商服务，为中国制造赋能，让优质产品走向世界。
            </p>
          </div>

          {/* Values */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <Heart className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">核心价值观</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              诚信为本 · 创新驱动 <br/> 客户至上 · 合作共赢
            </p>
          </div>
        </div>
      </section>

      {/* 3. Development History */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">发展历程</h2>
            <p className="text-slate-500 mt-2">Development History</p>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { year: '2009', title: '起步阶段', desc: '深耕国内电商市场，积累丰富的电商运营经验，建立完善的供应链体系和客户服务标准。', align: 'left' },
                { year: '2015', title: '经验积累', desc: '在国内电商平台取得优异成绩，掌握了产品选品、营销推广、客户服务等核心能力。', align: 'right' },
                { year: '2019', title: '转型跨境', desc: '顺应全球化趋势，正式进军跨境电商领域，开始布局海外市场，拓展国际业务。', align: 'left' },
                { year: '2021', title: '专注欧洲', desc: '聚焦欧洲市场，深入研究当地消费习惯和法规要求，建立本土化运营体系。', align: 'right' },
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12">
                    <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-all ${item.align === 'right' ? 'md:text-right' : ''}`}>
                      <span className="text-3xl font-black text-blue-100 absolute -mt-10 opacity-50">{item.year}</span>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2 relative z-10">{item.year} {item.title}</h3>
                      <p className="text-slate-600 relative z-10">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Market Insights */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-16">欧洲市场洞察</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Market Overview */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-600" /> 市场概况
            </h3>
            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
              <p className="text-slate-700 text-lg leading-relaxed">
                欧洲跨境电商市场规模快速增长，预计 <span className="font-bold text-blue-700">2025年底将达3500亿欧元</span>，年增长率约 <span className="font-bold text-red-500">15%</span>。
              </p>
            </div>
            
            <h4 className="font-bold text-slate-700 mb-4">欧洲主要电商平台市场份额</h4>
            <div className="space-y-4">
              {[
                { name: 'Amazon', val: 70, color: 'bg-orange-500' },
                { name: 'eBay', val: 40, color: 'bg-red-500' },
                { name: 'Zalando', val: 30, color: 'bg-orange-400' },
                { name: 'Otto', val: 25, color: 'bg-blue-600' },
                { name: 'Cdiscount', val: 20, color: 'bg-red-600' },
              ].map(p => (
                <div key={p.name}>
                  <div className="flex justify-between text-sm mb-1 text-slate-600">
                    <span>{p.name}</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consumer Behavior */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Users className="text-blue-600" /> 消费者行为分析
            </h3>
            <ul className="space-y-4">
              {[
                '68% 的欧洲消费者每月至少进行一次跨境购物',
                '移动端购物占比超过 55%，且持续增长',
                '注重产品质量、售后服务和环保包装',
                '对本地化的产品描述和客户服务有较高期望'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <span className="block font-bold text-slate-800 mb-1">🇩🇪 德国</span>
                <span className="text-sm text-slate-600">注重质量与可靠性，物流效率要求高</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <span className="block font-bold text-slate-800 mb-1">🇫🇷 法国</span>
                <span className="text-sm text-slate-600">重视设计与美感，本地化服务体验</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Advantages */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">我们的优势</h2>
            <p className="text-slate-400 mt-2">Our Core Advantages</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
              <Truck className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">供应链整合能力</h3>
              <p className="text-slate-400 text-sm">拥有完善的供应链体系，与国内优质工厂建立长期合作关系，确保产品质量和交付效率。</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
              <Globe2 className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">本土化运营策略</h3>
              <p className="text-slate-400 text-sm">深入了解欧洲各国市场特点，提供本土化的物流、支付和客户服务解决方案。</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
              <Database className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">数据驱动决策</h3>
              <p className="text-slate-400 text-sm">利用大数据分析消费者行为和市场趋势，精准选品和营销，提高转化率和客户满意度。</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
              <Users className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">专业团队</h3>
              <p className="text-slate-400 text-sm">拥有经验丰富的跨境电商专家团队，精通欧洲市场运营和多语言客户服务。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Model */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-16">核心业务模式</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Chart Visual (Simulated) */}
           <div className="relative h-80 w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 rounded-3xl"></div>
              <div className="w-64 h-64 rounded-full border-[20px] border-orange-500 border-r-blue-500 border-b-yellow-400 border-l-red-500 shadow-xl flex items-center justify-center bg-white z-10">
                <div className="text-center">
                  <span className="block text-3xl font-black text-slate-800">全渠道</span>
                  <span className="text-sm text-slate-500">销售网络</span>
                </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <ShoppingCart className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">B2C平台运营</h3>
                  <p className="text-slate-600">在 Cdiscount, eBay Europe, Kaufland, eMAG 等主流欧洲电商平台开设店铺，通过平台流量获取客户。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Layout className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">独立站运营</h3>
                  <p className="text-slate-600">建立自有品牌网站，打造差异化产品线，通过社交媒体和搜索引擎营销引流，提升品牌价值。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Share2 className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">多渠道销售策略</h3>
                  <p className="text-slate-600">整合线上平台、独立站、社交媒体等多种销售渠道，实现全方位市场覆盖，最大化销售机会。</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Success Stories */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-6">成功案例</h2>
          <p className="text-center text-slate-500 mb-16">各市场销售额增长率显著</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Case 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-orange-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">🇩🇪 德国智能家居品牌拓展</h3>
              <p className="text-slate-600 mb-6">为德国本土智能家居品牌在欧洲多国市场提供全方位运营服务。</p>
              <div className="flex justify-between text-center">
                <div>
                   <span className="block text-3xl font-black text-orange-500">156%</span>
                   <span className="text-xs text-slate-500 uppercase">销售增长</span>
                </div>
                <div>
                   <span className="block text-3xl font-black text-orange-500">5</span>
                   <span className="text-xs text-slate-500 uppercase">欧洲国家</span>
                </div>
                <div>
                   <span className="block text-3xl font-black text-orange-500">12</span>
                   <span className="text-xs text-slate-500 uppercase">月回本</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-blue-600">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">🇫🇷 法国3C电子孵化</h3>
              <p className="text-slate-600 mb-6">从零开始打造法国本土3C品牌，成功跻身法国市场前十。</p>
              <div className="flex justify-between text-center">
                <div>
                   <span className="block text-3xl font-black text-blue-600">Top 10</span>
                   <span className="text-xs text-slate-500 uppercase">市场排名</span>
                </div>
                <div>
                   <span className="block text-3xl font-black text-blue-600">85%</span>
                   <span className="text-xs text-slate-500 uppercase">复购率</span>
                </div>
                <div>
                   <span className="block text-3xl font-black text-blue-600">4.8</span>
                   <span className="text-xs text-slate-500 uppercase">用户评分</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Future Outlook */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-16">未来展望</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors group">
            <TrendingUp className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">市场拓展计划</h3>
            <p className="text-sm text-slate-500">深耕德、法、意，积极布局北欧和东欧新兴市场。</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors group">
            <Zap className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">技术创新与应用</h3>
            <p className="text-sm text-slate-500">加大AI选品、智能物流和大数据分析投入，提升效率。</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors group">
            <Users className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">人才发展战略</h3>
            <p className="text-sm text-slate-500">建立欧洲本地化团队，培养跨文化人才。</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors group">
            <Share2 className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">合作伙伴招募</h3>
            <p className="text-sm text-slate-500">共建跨境生态圈，寻求物流、支付、营销战略合作。</p>
          </div>
        </div>
      </section>

      {/* 9. Contact Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">联系我们</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                 <MapPin className="text-white" />
               </div>
               <h3 className="font-bold mb-2">公司地址</h3>
               <p className="text-slate-400 text-sm">上海市虹口区飞虹路118号<br/>T2-1601</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                 <Mail className="text-white" />
               </div>
               <h3 className="font-bold mb-2">电子邮箱</h3>
               <p className="text-slate-400 text-sm">contact@lanlonge.com</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                 <Globe2 className="text-white" />
               </div>
               <h3 className="font-bold mb-2">全球办事处</h3>
               <p className="text-slate-400 text-sm">德国 · 法国 · 深圳 · 上海 · 罗马尼亚</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;