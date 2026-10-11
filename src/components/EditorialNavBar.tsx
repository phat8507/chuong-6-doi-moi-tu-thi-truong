import React, { useRef } from 'react';
import { SLIDES_METADATA } from '../data/slidesMetadata';
import { useScrollProgress, useInViewSection } from '../hooks/useScrollNavigation';
import { Layers, Monitor, ChevronRight } from 'lucide-react';

interface EditorialNavBarProps {
  currentMode: 'scrollytelling' | 'slide';
  onToggleMode: () => void;
}

export const EditorialNavBar: React.FC<EditorialNavBarProps> = ({ currentMode, onToggleMode }) => {
  const sectionIds = SLIDES_METADATA.map((s) => `slide-${String(s.slideNumber).padStart(2, '0')}`);
  const activeId = useInViewSection(sectionIds, 0.25);
  const scrollProgress = useScrollProgress();
  const navContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08121e]/95 backdrop-blur-md border-b border-slate-800/80 text-white transition-all select-none">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 h-12 flex items-center justify-between gap-4">
        {/* Brand & Chapter Tag */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#147D82] text-white flex items-center justify-center font-black text-xs shadow-md">
            C6
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-black tracking-wide uppercase text-white">Đổi Mới Từ Thị Trường</div>
            <div className="text-[10px] text-teal-400 font-mono">HUB · Nhóm 4 · 21 Phần</div>
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
                className={`px-3 py-1.5 rounded-md font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer text-[11px] flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#147D82] text-white shadow-xs font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
                title={s.title}
              >
                <span className="font-mono text-[10px] opacity-80">{String(s.slideNumber).padStart(2, '0')}</span>
                <span className="truncate max-w-[110px]">{s.title.split(':')[0]}</span>
              </button>
            );
          })}
        </nav>

        {/* Mode Switcher Button (Scrollytelling vs 16:9 Presentation Stage) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer shadow-xs"
            title="Chuyển đổi giữa chế độ Scrollytelling dạng cuộn & Chế độ Slide 16:9 toàn màn hình"
          >
            {currentMode === 'scrollytelling' ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Chế độ Slide 16:9</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Chế độ Scrollytelling</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Micro-Progress Bar at bottom edge of Navbar */}
      <div className="w-full h-[2px] bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-[#147D82] via-[#209EA6] to-[#C08755] transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </header>
  );
};
