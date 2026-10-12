import React from 'react';
import { SectionMetadata } from '../data/chapter6Outline';
import { ScrollReveal } from './ui/ScrollReveal';

interface EditorialSectionFrameProps {
  meta: SectionMetadata;
  children: React.ReactNode;
}

export const EditorialSectionFrame: React.FC<EditorialSectionFrameProps> = ({ meta, children }) => {
  return (
    <div className="editorial-container space-y-8">
      {/* Editorial Header System - Xuất hiện lướt nhẹ trước */}
      <ScrollReveal delay={0}>
        <div className="border-b border-stone-200/80 pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Section Part Eyebrow Pill */}
            <div className="flex items-center gap-2.5 select-none">
              <span className="font-mono text-[10.5px] font-bold text-teal-800 bg-teal-50/90 px-3 py-1 rounded-full border border-teal-200/80 uppercase tracking-widest shadow-2xs">
                {meta.partNumber} · {meta.partTitle}
              </span>
              <span className="text-stone-300 text-xs font-mono">/</span>
              <span className="text-stone-500 text-xs font-medium tracking-tight">
                {meta.partTheme}
              </span>
            </div>

            {/* Section Index Marker (Tabular Mono Figures) */}
            <div className="font-mono text-xs font-bold text-stone-400/90 bg-stone-100/80 px-2.5 py-1 rounded-md border border-stone-200/60 select-none">
              {meta.sectionCode} <span className="opacity-40">/</span> 21
            </div>
          </div>

          {/* Section Headline */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] font-bold text-teal-800 tracking-widest uppercase tabular-nums">
              SECTION {meta.sectionCode}
            </div>
            <h2 className="display-lg text-slate-900 leading-tight tracking-tight">
              {meta.title}
            </h2>
            <p className="text-base md:text-lg text-slate-700 prose-measure font-normal">
              {meta.coreMessage}
            </p>
          </div>

          {/* Keywords Pill Ribbon */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[10px] font-mono text-stone-400 uppercase font-semibold">Trọng tâm:</span>
            {meta.webKeywords.split('·').map((kw: string, i: number) => (
              <span 
                key={i} 
                className="text-[11px] font-mono bg-white/90 text-slate-700 px-2.5 py-0.5 rounded-full border border-stone-200 shadow-2xs transition-colors hover:border-teal-300"
              >
                {kw.trim()}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Main Narrative & Visual Content - Xuất hiện lướt kế tiếp sau 150ms */}
      <ScrollReveal delay={150} className="py-2">
        {children}
      </ScrollReveal>

      {/* Clean Bottom Academic Divider */}
      <div className="pt-6 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-400 font-mono select-none">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600/60" />
          Chương 6: Đổi Mới Từ Thị Trường
        </span>
        <span>HUB · Quản trị Đổi mới &amp; Sáng tạo</span>
      </div>
    </div>
  );
};
