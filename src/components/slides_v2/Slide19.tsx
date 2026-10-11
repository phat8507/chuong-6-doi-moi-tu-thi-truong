import React from 'react';
import { SlideCard } from '../SlideCard';

export const Slide19: React.FC = () => {
  return (
    <SlideCard
      slideNum="19"
      categoryTag="KẾT QUẢ THỰC TẾ"
      title="FE CREDIT: Hoạt động và kết quả năm 2024"
      subtitle="Minh chứng từ số liệu báo cáo tài chính thường niên VPBank và kiểm toán FE CREDIT."
      theme="dark"
      bottomLabel="19. FE CREDIT – Kết quả 2024 (10 phút)"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Top: 2 Metrics Columns (Hoạt động & Tài chính) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Col 1: Kết quả hoạt động */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">
              Kết quả hoạt động
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                <div className="text-xl font-bold text-teal-400">&gt; 43.000</div>
                <div className="text-[10px] text-slate-400 font-mono">tỷ đồng giải ngân</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                <div className="text-xl font-bold text-teal-400">+40%</div>
                <div className="text-[10px] text-slate-400 font-mono">tăng trưởng YoY</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                <div className="text-lg font-bold text-white">&gt; 130.000</div>
                <div className="text-[10px] text-slate-400 font-mono">người dùng chatbot</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                <div className="text-lg font-bold text-white">&gt; 200.000</div>
                <div className="text-[10px] text-slate-400 font-mono">tương tác kênh số/tháng</div>
              </div>
            </div>
          </div>

          {/* Col 2: Kết quả tài chính */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
              Kết quả tài chính
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                <div className="text-xl font-bold text-amber-300">512</div>
                <div className="text-[10px] text-slate-400 font-mono">tỷ đồng LNTT (VPBank)</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                <div className="text-xl font-bold text-amber-300">~515</div>
                <div className="text-[10px] text-slate-400 font-mono">tỷ đồng (Kiểm toán FE)</div>
              </div>
            </div>

            {/* Simple Bar Chart Visualization */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Giải ngân 2023: 30.700 tỷ</span>
                <span>Giải ngân 2024: 43.000 tỷ (+40%)</span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
                <div className="bg-slate-600 h-full w-[42%]" />
                <div className="bg-teal-500 h-full w-[58%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Source & Caution Line */}
        <div className="text-[10px] font-mono text-slate-500 text-center border-t border-slate-800/80 pt-2">
          Nguồn dữ liệu: Báo cáo thường niên VPBank 2024 · Báo cáo kiểm toán độc lập FE CREDIT 2024
        </div>
      </div>
    </SlideCard>
  );
};
