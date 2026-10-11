import React from 'react';

interface SlideCardProps {
  slideNum: string;
  totalSlides?: string;
  theme?: 'dark' | 'light';
  categoryTag?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bottomLabel: string;
}

export const SlideCard: React.FC<SlideCardProps> = ({
  slideNum,
  totalSlides = '21',
  theme = 'dark',
  categoryTag,
  title,
  subtitle,
  children,
  bottomLabel,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="w-full flex flex-col items-center my-6">
      {/* 16:9 Presentation Card Shell */}
      <div
        className={`w-full max-w-[1240px] aspect-[16/9] rounded-2xl shadow-2xl border overflow-hidden relative flex flex-col justify-between p-6 md:p-8 transition-all select-none ${
          isDark
            ? 'bg-[#081522] text-[#f1f5f9] border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'bg-[#ffffff] text-[#0f172a] border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* Slide Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className={`font-mono text-xs font-bold tracking-wider mb-1 ${
              isDark ? 'text-teal-400' : 'text-teal-600'
            }`}>
              {slideNum} / {totalSlides}
            </div>
            <h2 className={`text-xl md:text-2xl lg:text-[26px] font-black tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xs md:text-sm mt-1 max-w-3xl leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {subtitle}
              </p>
            )}
          </div>

          <div className="shrink-0 flex items-center gap-2">
            {categoryTag && (
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                isDark
                  ? 'bg-teal-950/80 text-teal-300 border border-teal-800/60'
                  : 'bg-teal-50 text-teal-800 border border-teal-200'
              }`}>
                {categoryTag}
              </span>
            )}
          </div>
        </div>

        {/* Slide Body */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          {children}
        </div>
      </div>

      {/* Bottom Label below card matching contact sheet */}
      <div className="mt-3 text-xs md:text-sm font-mono font-semibold text-slate-400 select-none tracking-wide">
        {bottomLabel}
      </div>
    </div>
  );
};
