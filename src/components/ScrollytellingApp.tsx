import React, { useState } from 'react';
import { SLIDES_METADATA } from '../data/slidesMetadata';
import { PresentationEngine } from './PresentationEngine';
import { ArrowUp, Monitor } from 'lucide-react';

// Import All 21 Slide Components
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

export const ScrollytellingApp: React.FC = () => {
  const [viewMode, setViewMode] = useState<'scrollytelling' | 'slide'>('scrollytelling');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (viewMode === 'slide') {
    return (
      <div className="relative w-screen h-screen">
        <div className="fixed top-3 right-4 z-50">
          <button
            onClick={() => setViewMode('scrollytelling')}
            className="px-3.5 py-1.5 rounded-full bg-white text-slate-800 font-bold text-xs shadow-lg hover:bg-slate-50 transition-all cursor-pointer border border-slate-300 font-mono"
          >
            ← Chế độ Cuộn Dọc
          </button>
        </div>
        <PresentationEngine />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ambient-flow text-[#1a1a2e] font-sans selection:bg-[#0f766e] selection:text-white relative">
      {/* Main Continuous Scrollytelling Stream with Ambient Flowing Canvas */}
      <main className="w-full">
        {SLIDES_METADATA.map((slide) => {
          const sid = `slide-${String(slide.slideNumber).padStart(2, '0')}`;

          let SlideContent: React.ReactNode = null;
          switch (slide.slideNumber) {
            case 1: SlideContent = <Slide01 />; break;
            case 2: SlideContent = <Slide02 />; break;
            case 3: SlideContent = <Slide03 />; break;
            case 4: SlideContent = <Slide04 />; break;
            case 5: SlideContent = <Slide05 />; break;
            case 6: SlideContent = <Slide06 />; break;
            case 7: SlideContent = <Slide07 />; break;
            case 8: SlideContent = <Slide08 />; break;
            case 9: SlideContent = <Slide09 />; break;
            case 10: SlideContent = <Slide10 />; break;
            case 11: SlideContent = <Slide11 />; break;
            case 12: SlideContent = <Slide12 />; break;
            case 13: SlideContent = <Slide13 />; break;
            case 14: SlideContent = <Slide14 />; break;
            case 15: SlideContent = <Slide15 />; break;
            case 16: SlideContent = <Slide16 />; break;
            case 17: SlideContent = <Slide17 />; break;
            case 18: SlideContent = <Slide18 />; break;
            case 19: SlideContent = <Slide19 />; break;
            case 20: SlideContent = <Slide20 />; break;
            case 21: SlideContent = <Slide21 />; break;
          }

          // Alternate subtle flowing section background for visual rhythm
          const isEven = slide.slideNumber % 2 === 0;

          return (
            <section
              key={slide.id}
              id={sid}
              className={`editorial-section ${isEven ? 'editorial-section-even' : 'editorial-section-odd'}`}
            >
              <div className="w-full">
                {SlideContent}
              </div>
            </section>
          );
        })}
      </main>

      {/* Floating Controls at bottom-right (Scroll to top & Slide Mode) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={() => setViewMode(viewMode === 'scrollytelling' ? 'slide' : 'scrollytelling')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold shadow-xl hover:bg-white hover:text-teal-800 transition-all cursor-pointer border border-stone-200/90 font-mono"
          title="Chuyển sang chế độ Slide 16:9 toàn màn hình"
        >
          <Monitor className="w-4 h-4 text-teal-700" />
          <span className="hidden sm:inline">Chế độ Slide 16:9</span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xl hover:bg-white hover:text-teal-800 transition-all cursor-pointer border border-stone-200/90"
          title="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-4 h-4 text-teal-700" />
        </button>
      </div>

      {/* Clean Global Academic Editorial Footer */}
      <footer className="w-full bg-[#f0f0eb] border-t border-slate-200 py-12 px-6 text-center text-xs text-slate-600 space-y-2">
        <div className="text-sm font-bold text-slate-900">
          Chương 6: Đổi Mới Từ Thị Trường · Quản Trị Đổi Mới và Sáng Tạo
        </div>
        <div>
          Trường Đại học Ngân hàng TP. Hồ Chí Minh (HUB) • Khoa Quản trị Kinh doanh • Nhóm 4
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Thiết kế theo chuẩn Visual-First Editorial Scrollytelling. Dữ liệu học thuật chính xác, hình ảnh tài liệu xác thực 100%.
        </div>
      </footer>
    </div>
  );
};
