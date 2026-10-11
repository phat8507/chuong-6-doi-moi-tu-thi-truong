import React from 'react';
import { SlideData } from '../data/slidesMetadata';
import { User, Clock, BookOpen } from 'lucide-react';

interface SlideLayoutProps {
  slide: SlideData;
  children: React.ReactNode;
  rightBadge?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ slide, children, rightBadge }) => {
  const isLight = slide.theme === 'light';
  const isTeal = slide.theme === 'teal';
  const isNavy = slide.theme === 'navy';

  // Base background theme
  const bgClass = isLight
    ? 'bg-[#F6F5F1] text-[#102A43]'
    : isTeal
    ? 'bg-gradient-to-br from-[#0c2e33] via-[#102A43] to-[#081826] text-[#F6F5F1]'
    : isNavy
    ? 'bg-gradient-to-br from-[#0f2438] via-[#102A43] to-[#091522] text-[#F6F5F1]'
    : 'bg-[#0f1d2d] text-[#F6F5F1]';

  return (
    <div className={`relative w-full h-full flex flex-col justify-between p-8 md:p-12 transition-colors duration-500 overflow-hidden select-none ${bgClass}`}>
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#147D82]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C08755]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <header className="relative z-10 flex items-start justify-between border-b pb-4 border-current/10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-1.5">
            <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
              isLight 
                ? 'bg-[#102A43]/10 text-[#147D82]' 
                : 'bg-[#147D82]/25 text-[#209EA6] border border-[#147D82]/40'
            }`}>
              {slide.sectionNumber} • SLIDE {String(slide.slideNumber).padStart(2, '0')}
            </span>
            <span className={`text-xs font-medium tracking-wide ${isLight ? 'text-[#657580]' : 'text-slate-400'}`}>
              {slide.section}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            {slide.title}
          </h1>
          <p className={`text-sm md:text-base mt-1 font-medium ${isLight ? 'text-[#657580]' : 'text-slate-300/80'}`}>
            {slide.subtitle}
          </p>
        </div>

        {/* Presenter & Timing Tag */}
        <div className="flex flex-col items-end gap-1.5 shrink-0 pl-4">
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md shadow-xs ${
              slide.presenterId === 1
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : slide.presenterId === 2
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
            }`}>
              <User className="w-3.5 h-3.5" />
              <span>{slide.presenter}</span>
            </div>
            <div className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-md ${
              isLight ? 'bg-slate-200/80 text-slate-700' : 'bg-slate-800/80 text-slate-300 border border-slate-700'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{slide.duration}</span>
            </div>
          </div>
          {rightBadge && (
            <span className="text-[11px] font-semibold text-[#C08755] uppercase tracking-wider">
              {rightBadge}
            </span>
          )}
        </div>
      </header>

      {/* Main Slide Body */}
      <main className="relative z-10 flex-1 my-4 overflow-hidden flex flex-col justify-center">
        {children}
      </main>

      {/* Slide Footer */}
      <footer className="relative z-10 flex items-center justify-between pt-3 border-t border-current/10 text-[11px]">
        <div className="flex items-center gap-2 opacity-75">
          <BookOpen className="w-3.5 h-3.5 text-[#147D82]" />
          <span className="truncate max-w-xl font-medium">Nguồn: {slide.references}</span>
        </div>
        <div className="flex items-center gap-4 opacity-75 font-mono">
          <span>HUB · Quản trị Đổi mới và Sáng tạo</span>
          <span className="font-bold text-[#147D82]">{slide.slideNumber} / 21</span>
        </div>
      </footer>
    </div>
  );
};
