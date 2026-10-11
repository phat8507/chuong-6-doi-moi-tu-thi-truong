import React from 'react';

interface SectionLabelProps {
  index: number;
  total?: number;
  label: string;
  accent?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ 
  index, 
  total = 21, 
  label, 
  accent = '#147D82' 
}) => {
  return (
    <div className="flex items-center gap-2.5 mb-3 select-none">
      <span 
        className="section-eyebrow px-2.5 py-0.5 rounded-full text-[11px] font-bold"
        style={{ 
          backgroundColor: `${accent}15`, 
          color: accent,
          border: `1px solid ${accent}30`
        }}
      >
        PHẦN {String(index).padStart(2, '0')} / {total}
      </span>
      <span className="text-slate-300 text-xs">—</span>
      <span className="section-eyebrow text-slate-500 text-[11px]">
        {label}
      </span>
    </div>
  );
};
