import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-0">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <button onClick={() => onNavigate?.('about')} className="text-slate-400 hover:text-slate-500 text-sm">
            关于我们
          </button>
          {['免责声明', '隐私政策', '联系方式'].map((item) => (
            <a key={item} href="#" className="text-slate-400 hover:text-slate-500 text-sm">
              {item}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Lanlonge 蓝隆. All rights reserved. 
            <span className="block sm:inline sm:ml-2">欧洲跨境卖家首选导航站</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;