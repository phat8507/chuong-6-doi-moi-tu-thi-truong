import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES_METADATA, SlideData } from '../data/slidesMetadata';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid, 
  HelpCircle, MessageSquare, Volume2, User, Clock, BookOpen, X, RefreshCw
} from 'lucide-react';

// Slide Component Imports
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03 } from './slides/Slide03';
import { Slide04 } from './slides/Slide04';
import { Slide05 } from './slides/Slide05';
import { Slide06 } from './slides/Slide06';
import { Slide07 } from './slides/Slide07';
import { Slide08 } from './slides/Slide08';
import { Slide09 } from './slides/Slide09';
import { Slide10 } from './slides/Slide10';
import { Slide11 } from './slides/Slide11';
import { Slide12 } from './slides/Slide12';
import { Slide13 } from './slides/Slide13';
import { Slide14 } from './slides/Slide14';
import { Slide15 } from './slides/Slide15';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';
import { Slide18 } from './slides/Slide18';
import { Slide19 } from './slides/Slide19';
import { Slide20 } from './slides/Slide20';
import { Slide21 } from './slides/Slide21';

const SLIDE_COMPONENTS: Record<number, React.FC<{ slide: SlideData }>> = {
  1: Slide01,
  2: Slide02,
  3: Slide03,
  4: Slide04,
  5: Slide05,
  6: Slide06,
  7: Slide07,
  8: Slide08,
  9: Slide09,
  10: Slide10,
  11: Slide11,
  12: Slide12,
  13: Slide13,
  14: Slide14,
  15: Slide15,
  16: Slide16,
  17: Slide17,
  18: Slide18,
  19: Slide19,
  20: Slide20,
  21: Slide21,
};

export const PresentationEngine: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showOverview, setShowOverview] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlide = SLIDES_METADATA[currentSlideIndex];
  const CurrentSlideComponent = SLIDE_COMPONENTS[currentSlide.slideNumber] || Slide01;

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < SLIDES_METADATA.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES_METADATA.length) {
      setCurrentSlideIndex(index);
      setShowOverview(false);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(err => console.log(err));
      setIsFullscreen(false);
    }
  };

  // Listen to fullscreen changes via browser escape
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid hotkeys when typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES_METADATA.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case 'o':
        case 'O':
        case 'g':
        case 'G':
          e.preventDefault();
          setShowOverview((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setShowHelp((prev) => !prev);
          break;
        case 'Escape':
          setShowOverview(false);
          setShowHelp(false);
          setShowNotes(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      ref={containerRef}
      className="relative w-screen h-screen bg-[#070e17] text-[#F6F5F1] flex flex-col items-center justify-center overflow-hidden font-sans select-none"
    >
      {/* 16:9 Presentation Stage with dynamic viewport scaling */}
      <div 
        className="relative w-full max-w-[1920px] aspect-16/9 max-h-screen shadow-2xl overflow-hidden bg-[#0c1825] flex flex-col"
        onClick={(e) => {
          // Prevent advancing slide when clicking interactive controls
          if ((e.target as HTMLElement).closest('button, a, input, select, svg, .recharts-wrapper')) return;
          // Background click does not advance to prevent accidents
        }}
      >
        <CurrentSlideComponent slide={currentSlide} />

        {/* Global Progress Bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/80 z-50">
          <div 
            className="h-full bg-gradient-to-r from-[#147D82] to-[#209EA6] transition-all duration-300"
            style={{ width: `${((currentSlideIndex + 1) / SLIDES_METADATA.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Floating Control Bar (Persistent on hover or discrete) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl opacity-90 hover:opacity-100 transition-opacity">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Slide trước (← / Mũi tên trái)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter / Overview Trigger */}
        <button
          onClick={() => setShowOverview(true)}
          className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-800/80 hover:bg-slate-700 text-teal-300 transition-colors flex items-center gap-1 cursor-pointer"
          title="Tổng quan 21 slide (Phím G hoặc O)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span>{currentSlideIndex + 1} / {SLIDES_METADATA.length}</span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === SLIDES_METADATA.length - 1}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Slide kế tiếp (→ / Phím Cách)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-px h-4 bg-slate-700 mx-1" />

        {/* Presenter Notes Button */}
        <button
          onClick={() => setShowNotes((prev) => !prev)}
          className={`p-1.5 rounded-full transition-colors cursor-pointer ${
            showNotes ? 'bg-amber-500/20 text-amber-300' : 'hover:bg-slate-800 text-slate-300 hover:text-white'
          }`}
          title="Ghi chú người thuyết trình (Phím N)"
        >
          <MessageSquare className="w-4 h-4" />
        </button>

        {/* Keyboard Shortcuts Help */}
        <button
          onClick={() => setShowHelp(true)}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Phím tắt điều khiển (Phím ?)"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Chế độ toàn màn hình (Phím F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Presenter Notes Modal Drawer */}
      {showNotes && (
        <div className="fixed top-6 right-6 w-96 max-w-full z-50 p-5 rounded-2xl bg-slate-900/95 border border-amber-500/40 backdrop-blur-md shadow-2xl space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <User className="w-4 h-4" />
              <span>Ghi chú diễn giả: {currentSlide.presenter} ({currentSlide.duration})</span>
            </div>
            <button 
              onClick={() => setShowNotes(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold">{currentSlide.title}</div>
            <p className="text-slate-300 leading-relaxed max-h-60 overflow-y-auto pr-2">
              {currentSlide.transcriptNotes}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>Bấm 'N' để ẩn/hiện</span>
            <span className="text-amber-400">Slide {currentSlide.slideNumber}</span>
          </div>
        </div>
      )}

      {/* Slide Overview Grid Modal */}
      {showOverview && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-8 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto w-full">
            <div>
              <h2 className="text-xl font-bold text-white">Lộ trình 21 Slide Thuyết Trình</h2>
              <p className="text-xs text-slate-400">Chương 6: Đổi mới từ thị trường · 3 Diễn giả luân phiên (34:30)</p>
            </div>
            <button
              onClick={() => setShowOverview(false)}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-7xl mx-auto w-full">
            {SLIDES_METADATA.map((s, idx) => {
              const isActive = currentSlideIndex === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-32 cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 border-teal-400 ring-2 ring-teal-400 shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono font-bold text-teal-400">{String(s.slideNumber).padStart(2, '0')}</span>
                    <span className="text-slate-400">{s.presenter}</span>
                  </div>
                  <div className="text-[11px] font-bold text-white line-clamp-2 leading-tight">
                    {s.title}
                  </div>
                  <div className="text-[9px] text-slate-400 font-mono truncate">
                    {s.duration}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-400" />
                <span>Phím tắt điều khiển thuyết trình</span>
              </h3>
              <button 
                onClick={() => setShowHelp(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-800/80 flex items-center justify-between">
                <span className="text-slate-300">Slide kế tiếp</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 font-mono text-[10px] text-teal-300">→ / Space</kbd>
              </div>
              <div className="p-2 rounded bg-slate-800/80 flex items-center justify-between">
                <span className="text-slate-300">Slide trước</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 font-mono text-[10px] text-teal-300">←</kbd>
              </div>
              <div className="p-2 rounded bg-slate-800/80 flex items-center justify-between">
                <span className="text-slate-300">Toàn màn hình</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 font-mono text-[10px] text-teal-300">F</kbd>
              </div>
              <div className="p-2 rounded bg-slate-800/80 flex items-center justify-between">
                <span className="text-slate-300">Ghi chú diễn giả</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 font-mono text-[10px] text-teal-300">N</kbd>
              </div>
              <div className="p-2 rounded bg-slate-800/80 flex items-center justify-between">
                <span className="text-slate-300">Tổng quan 21 slide</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 font-mono text-[10px] text-teal-300">G / O</kbd>
              </div>
              <div className="p-2 rounded bg-slate-800/80 flex items-center justify-between">
                <span className="text-slate-300">Về Slide đầu / cuối</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 font-mono text-[10px] text-teal-300">Home / End</kbd>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 text-center pt-2">
              Bấm phím <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-teal-300">ESC</kbd> để đóng các cửa sổ trợ giúp.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
