import React, { useState } from 'react';
import { SlideCard } from '../SlideCard';

const STEPS = [
  { id: 1, title: 'Nhận diện thị trường', desc: 'Phát hiện vấn đề chưa giải quyết và cơ hội mới.' },
  { id: 2, title: 'Khác biệt hóa sản phẩm', desc: 'Tạo giá trị tương đối cao hơn chi phí và đối thủ.' },
  { id: 3, title: 'Phát triển chiến lược', desc: 'Chọn 1 trong 5 hướng phát triển sản phẩm cốt lõi.' },
  { id: 4, title: 'Thương mại hóa', desc: 'Đưa sản phẩm ra thị trường, kiểm soát sở hữu trí tuệ.' },
  { id: 5, title: 'Lan tỏa đổi mới', desc: 'Quản trị tốc độ chấp nhận của các nhóm khách hàng.' },
];

export const Slide03: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <SlideCard
      slideNum="03"
      categoryTag="KHUNG QUẢN TRỊ"
      title="Hành trình quản trị đổi mới từ thị trường"
      subtitle="Từ nhu cầu thị trường đến giá trị bền vững."
      theme="dark"
      bottomLabel="03. Hành trình quản trị đổi mới (10 phút)"
    >
      <div className="flex flex-col justify-center items-center h-full space-y-8 max-w-4xl mx-auto w-full">
        {/* 5 Connected Circular Nodes */}
        <div className="relative w-full flex items-center justify-between px-4">
          {/* Connecting line */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-1 bg-slate-800 -z-0" />

          {STEPS.map((s, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center gap-3 relative z-10 cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    isSelected
                      ? 'bg-teal-500 text-slate-950 ring-4 ring-teal-500/30 scale-110 shadow-lg shadow-teal-500/20'
                      : 'bg-slate-900 border-2 border-slate-700 text-slate-300 group-hover:border-slate-500'
                  }`}
                >
                  {s.id}
                </div>
                <div className="text-center max-w-[120px]">
                  <span
                    className={`text-xs font-bold transition-colors ${
                      isSelected ? 'text-teal-300' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Loop Curved Path */}
        <div className="w-full relative flex flex-col items-center">
          <div className="w-full flex items-center justify-center gap-2 text-xs font-mono text-teal-400 bg-teal-950/40 border border-teal-800/60 px-4 py-2 rounded-full">
            <span>← Phản hồi thị trường (Feedback Loop liên tục cải tiến) ←</span>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-center text-slate-300 max-w-2xl">
            <strong className="text-teal-300">Giai đoạn {activeStep + 1}: {STEPS[activeStep].title}</strong> — {STEPS[activeStep].desc}
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
