import React, { useState } from 'react';
import { SLIDES_METADATA } from '../data/slidesMetadata';
import { EditorialNavBar } from './EditorialNavBar';
import { PresentationEngine } from './PresentationEngine';
import { ArrowUp } from 'lucide-react';

// Import All 21 Redesigned Slide Components (v2)
import { Slide01 } from './slides_v2/Slide01';
import { Slide02 } from './slides_v2/Slide02';
import { Slide03 } from './slides_v2/Slide03';
import { Slide04 } from './slides_v2/Slide04';
import { Slide05 } from './slides_v2/Slide05';
import { Slide06 } from './slides_v2/Slide06';
import { Slide07 } from './slides_v2/Slide07';
import { Slide08 } from './slides_v2/Slide08';
import { Slide09 } from './slides_v2/Slide09';
import { Slide10 } from './slides_v2/Slide10';
import { Slide11 } from './slides_v2/Slide11';
import { Slide12 } from './slides_v2/Slide12';
import { Slide13 } from './slides_v2/Slide13';
import { Slide14 } from './slides_v2/Slide14';
import { Slide15 } from './slides_v2/Slide15';
import { Slide16 } from './slides_v2/Slide16';
import { Slide17 } from './slides_v2/Slide17';
import { Slide18 } from './slides_v2/Slide18';
import { Slide19 } from './slides_v2/Slide19';
import { Slide20 } from './slides_v2/Slide20';
import { Slide21 } from './slides_v2/Slide21';

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
            className="px-3.5 py-1.5 rounded-full bg-slate-900 text-teal-300 font-bold text-xs shadow-lg hover:bg-slate-800 transition-all cursor-pointer border border-teal-500/30 font-mono"
          >
            ← Chế độ Cuộn Dọc
          </button>
        </div>
        <PresentationEngine />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060e17] text-[#f1f5f9] font-sans selection:bg-[#147D82] selection:text-white">
      {/* Sticky Top Clean Navigation */}
      <EditorialNavBar 
        currentMode={viewMode} 
        onToggleMode={() => setViewMode(viewMode === 'scrollytelling' ? 'slide' : 'scrollytelling')} 
      />

      {/* Main Continuous Presentation Stream */}
      <main className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8 space-y-12">
        <section id="slide-01"><Slide01 /></section>
        <section id="slide-02"><Slide02 /></section>
        <section id="slide-03"><Slide03 /></section>
        <section id="slide-04"><Slide04 /></section>
        <section id="slide-05"><Slide05 /></section>
        <section id="slide-06"><Slide06 /></section>
        <section id="slide-07"><Slide07 /></section>
        <section id="slide-08"><Slide08 /></section>
        <section id="slide-09"><Slide09 /></section>
        <section id="slide-10"><Slide10 /></section>
        <section id="slide-11"><Slide11 /></section>
        <section id="slide-12"><Slide12 /></section>
        <section id="slide-13"><Slide13 /></section>
        <section id="slide-14"><Slide14 /></section>
        <section id="slide-15"><Slide15 /></section>
        <section id="slide-16"><Slide16 /></section>
        <section id="slide-17"><Slide17 /></section>
        <section id="slide-18"><Slide18 /></section>
        <section id="slide-19"><Slide19 /></section>
        <section id="slide-20"><Slide20 /></section>
        <section id="slide-21"><Slide21 /></section>
      </main>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-900 text-teal-400 shadow-2xl hover:bg-slate-800 transition-all cursor-pointer border border-teal-500/30"
        title="Cuộn lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Global Academic Presentation Footer */}
      <footer className="w-full bg-[#040a10] border-t border-slate-800/80 py-12 px-6 text-center text-xs text-slate-400 space-y-2">
        <div className="text-sm font-bold text-white">
          Chương 6: Đổi Mới Từ Thị Trường · Quản Trị Đổi Mới và Sáng Tạo
        </div>
        <div>
          Trường Đại học Ngân hàng TP. Hồ Chí Minh (HUB) • Khoa Quản trị Kinh doanh • Nhóm 4
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Thiết kế theo chuẩn 21 Slide Thuyết Trình Visual-First Scrollytelling. Dữ liệu học thuật chính xác 100%.
        </div>
      </footer>
    </div>
  );
};
