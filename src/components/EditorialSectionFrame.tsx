import React from 'react';
import { SectionMetadata } from '../data/chapter6Outline';
import { BookOpen } from 'lucide-react';

interface EditorialSectionFrameProps {
  meta: SectionMetadata;
  children: React.ReactNode;
}

export const EditorialSectionFrame: React.FC<EditorialSectionFrameProps> = ({ meta, children }) => {
  return (
    <div className="editorial-container space-y-6">
      {/* Editorial Header System - Inspired directly by MacroEco_N4_MarketFailure */}
      <div className="border-b border-slate-200 pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Section Part Eyebrow */}
          <div className="flex items-center gap-2 select-none">
            <span className="font-mono text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 uppercase tracking-wider">
              {meta.partNumber} / {meta.partTitle}
            </span>
            <span className="text-slate-300 text-xs font-mono">—</span>
            <span className="text-slate-500 text-xs font-medium">
              {meta.partTheme}
            </span>
          </div>

          {/* Clean Speaker Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-xs select-none">
            <span className="w-2 h-2 rounded-full bg-[#147D82]" />
            <span className="font-semibold text-slate-900">{meta.presenter}</span>
            <span className="text-slate-300">·</span>
            <span className="font-mono text-slate-500">{meta.time}</span>
            <span className="text-slate-300">·</span>
            <span className="font-mono text-teal-700 font-bold">{meta.transcriptRef}</span>
          </div>
        </div>

        {/* Section Headline */}
        <div>
          <div className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase">
            SECTION {meta.sectionCode}
          </div>
          <h2 className="display-lg text-slate-900 mt-0.5 leading-tight tracking-tight">
            {meta.title}
          </h2>
          <p className="text-base text-slate-600 mt-1 max-w-4xl leading-relaxed">
            {meta.coreMessage}
          </p>
        </div>

        {/* Keywords Pill Ribbon */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Trọng tâm:</span>
          {meta.webKeywords.split('·').map((kw: string, i: number) => (
            <span key={i} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
              {kw.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Main Narrative & Visual Content */}
      <div className="py-2">
        {children}
      </div>

      {/* Speech Flow Anchor Footer */}
      <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-teal-800 uppercase text-[10px] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Mạch nói diễn giả:
          </span>
          <span className="italic text-slate-700">{meta.speechFlow}</span>
        </div>
        <div className="font-mono text-[11px] text-slate-400">
          HUB · Quản trị Đổi mới &amp; Sáng tạo
        </div>
      </div>
    </div>
  );
};
