import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  currentView?: PageView;
  onNavigate?: (view: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, view?: PageView) => {
    if (view && onNavigate) {
      onNavigate(view);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: '导航', href: '#', active: currentView === 'home', view: 'home' as PageView },
    { name: '搜索', href: '#' },
    { name: '热榜', href: '#', badge: 'hot' },
    { name: '快讯', href: '#' },
    { name: '工具箱', href: '#' },
    { name: '知识库', href: '#' },
    { name: 'AI问答', href: '#' },
    { name: '关于我们', href: '#', active: currentView === 'about', view: 'about' as PageView },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer select-none" onClick={() => onNavigate?.('home')}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }} className="flex items-center gap-1">
              <div className="relative py-1"> 
                {/* 
                   Fix: Added 'font-exo' for the new font.
                   Fix: Added 'pr-4' directly to the SPAN. This expands the box model of the text element itself,
                   ensuring the 'bg-clip-text' gradient covers the slanted italic tail of the last letter.
                */}
                <span className="text-3xl font-exo font-black italic tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm filter transition-all duration-300 group-hover:brightness-110 pr-4">
                  LANLONGE
                </span>
                {/* Decorative dynamic underline */}
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-80"></div>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                   if (link.view) {
                     e.preventDefault();
                     handleNavClick(link.href, link.view);
                   }
                }}
                className={`relative px-1 pt-1 text-sm font-bold transition-colors duration-200 flex items-center tracking-wide
                  ${link.active ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}
                `}
              >
                {link.name}
                {link.badge && (
                  <span className="absolute -top-1.5 -right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-bold rounded-full shadow-lg shadow-blue-500/20 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all transform hover:scale-105 hover:shadow-blue-500/40"
            >
              新手指南
            </a>
            <button
              className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md absolute w-full left-0 shadow-lg">
          <div className="pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                   if (link.view) {
                     e.preventDefault();
                     handleNavClick(link.href, link.view);
                   }
                }}
                className={`block pl-3 pr-4 py-3 border-l-4 text-base font-medium hover:bg-slate-50 hover:border-blue-500 hover:text-blue-700
                   ${link.active ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-slate-600'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;