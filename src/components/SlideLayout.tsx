import React from 'react';
import { SlideData } from '../data/slidesMetadata';
import { BookOpen } from 'lucide-react';

interface SlideLayoutProps {
  slide: SlideData;
  children: React.ReactNode;
  rightBadge?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ slide, children }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-[#0d131f] text-[#f1f5f9] select-none overflow-hidden">
      {/* Clean Solid Header with Single Pill Label & Single Speaker Tag */}
      <header className="relative z-10 flex items-start justify-between border-b border-slate-800 pb-4">
        <div className="max-w-4xl space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-400 border border-teal-800">
              {slide.sectionNumber} • SLIDE {String(slide.slideNumber).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              {slide.section}
            </span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {slide.title}
          </h1>
          <p className="text-xs md:text-sm font-medium text-slate-400">
            {slide.subtitle}
          </p>
        </div>

        {/* Single Speaker & Duration Badge */}
        <div className="flex items-center gap-2 shrink-0 pl-4 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>{slide.presenter}</span>
            <span className="text-slate-500">·</span>
            <span className="font-mono text-slate-400">{slide.duration}</span>
          </div>
        </div>
      </header>

      {/* Main Slide Body */}
      <main className="relative z-10 flex-1 my-3 overflow-hidden flex flex-col justify-center">
        {children}
      </main>

      {/* Slide Footer */}
      <footer className="relative z-10 flex items-center justify-between pt-2.5 border-t border-slate-800 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5 font-medium">
          <BookOpen className="w-3.5 h-3.5 text-teal-500" />
          <span className="truncate max-w-xl">Nguồn: {slide.references}</span>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <span>HUB · Quản trị Đổi mới và Sáng tạo</span>
          <span className="font-bold text-teal-400">{slide.slideNumber} / 21</span>
        </div>
      </footer>
    </div>
  );
};
