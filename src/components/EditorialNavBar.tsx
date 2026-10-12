import React, { useRef, useState, useEffect } from 'react';
import { SLIDES_METADATA } from '../data/slidesMetadata';
import { useScrollProgress, useInViewSection } from '../hooks/useScrollNavigation';
import { Layers, Monitor, Type } from 'lucide-react';

interface EditorialNavBarProps {
  currentMode: 'scrollytelling' | 'slide';
  onToggleMode: () => void;
}

export const EditorialNavBar: React.FC<EditorialNavBarProps> = ({ currentMode, onToggleMode }) => {
  const sectionIds = SLIDES_METADATA.map((s) => `slide-${String(s.slideNumber).padStart(2, '0')}`);
  const activeId = useInViewSection(sectionIds, 0.25);
  const scrollProgress = useScrollProgress();
  const navContainerRef = useRef<HTMLDivElement>(null);

  const [currentFont, setCurrentFont] = useState<'montserrat' | 'inter' | 'jakarta' | 'vietnam'>('vietnam');
  const [showFontMenu, setShowFontMenu] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('chapter6_font') as 'montserrat' | 'inter' | 'jakarta' | 'vietnam';
    if (saved) {
      setCurrentFont(saved);
      document.documentElement.setAttribute('data-font', saved);
    } else {
      setCurrentFont('vietnam');
      document.documentElement.setAttribute('data-font', 'vietnam');
    }
  }, []);

  const changeFont = (font: 'inter' | 'jakarta' | 'montserrat' | 'vietnam') => {
    setCurrentFont(font);
    localStorage.setItem('chapter6_font', font);
    document.documentElement.setAttribute('data-font', font);
    setShowFontMenu(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const fontLabels = {
    inter: 'Inter',
    jakarta: 'Plus Jakarta',
    montserrat: 'Montserrat',
    vietnam: 'Be Vietnam'
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 transition-all select-none">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-12 flex items-center justify-between gap-4">
        {/* Brand & Chapter Tag */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#147D82] text-white flex items-center justify-center font-black text-xs shadow-xs">
            C6
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-black tracking-wide uppercase text-slate-900 font-mono">Đổi Mới Từ Thị Trường</div>
            <div className="text-[10px] text-teal-700 font-mono">HUB · Nhóm 4 · 21 Phần</div>
          </div>
        </div>

        {/* Horizontal Editorial Navigation Tabs */}
        <nav 
          ref={navContainerRef}
          className="flex-1 flex items-center gap-1 overflow-x-auto no-scrollbar py-1 px-2 text-xs"
        >
          {SLIDES_METADATA.map((s) => {
            const sid = `slide-${String(s.slideNumber).padStart(2, '0')}`;
            const isActive = activeId === sid;

            return (
              <button
                key={s.id}
                onClick={() => scrollToSection(sid)}
                className={`px-3 py-1 rounded-md font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer text-[11px] flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#147D82] text-white shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                title={s.title}
              >
                <span className="font-mono text-[10px] opacity-80">{String(s.slideNumber).padStart(2, '0')}</span>
                <span className="truncate max-w-[105px]">{s.title.split(':')[0]}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Tools: Font Switcher & Mode Switcher Button */}
        <div className="flex items-center gap-2 shrink-0 relative">
          {/* Font Selector Button */}
          <div className="relative">
            <button
              onClick={() => setShowFontMenu(!showFontMenu)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
              title="Đổi font chữ hiển thị"
            >
              <Type className="w-3.5 h-3.5 text-[#147D82]" />
              <span className="hidden lg:inline">{fontLabels[currentFont]}</span>
            </button>

            {showFontMenu && (
              <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-slate-200 rounded-xl shadow-xl p-1 z-50 text-xs">
                <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 uppercase font-bold border-b border-slate-100 mb-1">
                  Chọn font toàn bộ trang:
                </div>
                <button
                  onClick={() => changeFont('inter')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                    currentFont === 'inter' ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Inter</span>
                  <span className="text-[10px] text-teal-700 font-mono">Mặc định</span>
                </button>
                <button
                  onClick={() => changeFont('jakarta')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                    currentFont === 'jakarta' ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Plus Jakarta Sans</span>
                  <span className="text-[10px] text-slate-400 font-mono">Hiện đại</span>
                </button>
                <button
                  onClick={() => changeFont('montserrat')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                    currentFont === 'montserrat' ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Montserrat</span>
                  <span className="text-[10px] text-slate-400 font-mono">Đậm đà</span>
                </button>
                <button
                  onClick={() => changeFont('vietnam')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                    currentFont === 'vietnam' ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Be Vietnam Pro</span>
                  <span className="text-[10px] text-slate-400 font-mono">Việt ngữ</span>
                </button>
              </div>
            )}
          </div>

          {/* Mode Switcher */}
          <button
            onClick={onToggleMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-all cursor-pointer shadow-2xs font-mono"
            title="Chuyển đổi giữa chế độ Scrollytelling dạng cuộn & Chế độ Slide 16:9 toàn màn hình"
          >
            {currentMode === 'scrollytelling' ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-[#147D82]" />
                <span className="hidden md:inline">Chế độ Slide 16:9</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5 text-[#147D82]" />
                <span className="hidden md:inline">Chế độ Cuộn Dọc</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full h-[2px] bg-slate-100">
        <div 
          className="h-full bg-[#147D82] transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </header>
  );
};
