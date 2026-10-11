import React, { useState } from 'react';
import { SlideCard } from '../SlideCard';

const CUSTOMER_PAIN_POINTS = [
  { title: 'Nhu cầu tài chính tiêu dùng', desc: 'Các khoản chi tiêu đột xuất, sinh hoạt phí không có tài sản bảo đảm' },
  { title: 'Tiếp cận', desc: 'Thủ tục vay truyền thống quá phức tạp, mất nhiều ngày xét duyệt' },
  { title: 'Tiện lợi', desc: 'Mong muốn thao tác 100% online, giải ngân ngay trong ngày' },
  { title: 'Minh bạch thông tin', desc: 'Lãi suất, phí dịch vụ và lịch thanh toán rõ ràng, dễ đối soát' },
];

export const Slide18: React.FC = () => {
  const [targetAudience, setTargetAudience] = useState<'individual' | 'partner'>('individual');

  return (
    <SlideCard
      slideNum="18"
      categoryTag="TÌNH HUỐNG FE CREDIT"
      title="FE CREDIT: Cơ hội đổi mới từ nhu cầu thị trường"
      subtitle="Nhận diện khoảng trống tài chính toàn diện tại Việt Nam và ứng dụng công nghệ số."
      theme="dark"
      bottomLabel="18. FE CREDIT – Cơ hội đổi mới (10 phút)"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 4 Pain Points */}
          <div className="lg:col-span-7 space-y-2.5">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">
              Khoảng trống nhu cầu thị trường:
            </span>

            {CUSTOMER_PAIN_POINTS.map((pt, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="font-bold text-white flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-teal-950 text-teal-400 font-mono text-[10px] flex items-center justify-center border border-teal-800/60">
                    {idx + 1}
                  </span>
                  <span>{pt.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 ml-6">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column: FE ONLINE 2.0 Phone App Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-44 h-72 rounded-3xl border-4 border-slate-700 bg-slate-950 p-2 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto" />
              <div className="text-center my-auto space-y-2">
                <div className="text-emerald-400 font-black text-sm tracking-widest">FE CREDIT</div>
                <div className="text-xs font-bold text-white">FE ONLINE 2.0</div>
                <div className="w-20 h-2 bg-teal-500 rounded-full mx-auto" />
                <div className="text-[10px] text-slate-400 font-mono">Duyệt tự động 24/7</div>
              </div>
              <div className="text-[9px] text-center text-slate-500 font-mono pb-1">
                Giải pháp số toàn diện
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Switcher: Cá nhân vs Đối tác */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={() => setTargetAudience('individual')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              targetAudience === 'individual'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            Khách hàng cá nhân
          </button>
          <button
            onClick={() => setTargetAudience('partner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              targetAudience === 'partner'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            Đối tác phân phối
          </button>
        </div>
      </div>
    </SlideCard>
  );
};
