import React from 'react';

interface SpeakerTagProps {
  name: string;
  time?: string;
  color?: string;
}

export const SpeakerTag: React.FC<SpeakerTagProps> = ({ 
  name, 
  time, 
  color = '#147D82' 
}) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs select-none">
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-slate-800 text-xs font-semibold">{name}</span>
      {time && (
        <>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-slate-500 text-xs font-mono">{time}</span>
        </>
      )}
    </div>
  );
};
