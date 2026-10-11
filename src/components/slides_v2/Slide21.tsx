import React from 'react';
import { SlideCard } from '../SlideCard';

const SUMMARY_DECISIONS = [
  '1. Nhận diện thị trường & nhu cầu thật',
  '2. Khác biệt hóa có giá trị vượt trội',
  '3. Lựa chọn hướng phát triển chiến lược',
  '4. Thương mại hóa & bảo vệ tài sản',
  '5. Quản trị lan tỏa & thu nhận phản hồi'
];

export const Slide21: React.FC = () => {
  return (
    <SlideCard
      slideNum="21"
      categoryTag="TỔNG KẾT"
      title="Đổi mới là quá trình học hỏi liên tục"
      subtitle="Thành công không đến từ một phát kiến cô lập, mà từ vòng lặp thích ứng bền bỉ với khách hàng."
      theme="dark"
      bottomLabel="21. Kết luận (5 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
        {/* Left Column: 5 Management Decisions Recap */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">
            5 Quyết định quản trị cốt lõi:
          </span>

          <div className="space-y-1.5">
            {SUMMARY_DECISIONS.map((d, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 font-medium">
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Center: Feedback Cycle Graphic with Silhouette */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center">
          <div className="w-40 h-40 rounded-full border-2 border-dashed border-teal-500/60 flex flex-col items-center justify-center text-center p-3 relative">
            <span className="text-xs font-bold text-teal-300">Học hỏi liên tục</span>
            <span className="text-[10px] text-slate-400 font-mono mt-1">(Continuous Learning)</span>
            <div className="absolute -top-3 bg-slate-900 px-2 text-[9px] font-mono text-teal-400">
              Vòng lặp đổi mới
            </div>
          </div>
        </div>

        {/* Right Column: Key Closing Question Quote */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-teal-950/40 border border-teal-800/80 text-center flex flex-col justify-center space-y-3">
          <span className="text-2xl text-teal-400">“</span>
          <p className="text-xs md:text-sm text-white font-medium italic leading-relaxed">
            Một ứng dụng có rất nhiều lượt tải nhưng ít người quay lại có được xem là đổi mới thành công không?
          </p>
          <div className="text-[10px] font-mono text-teal-300 pt-2 border-t border-teal-900">
            Thị trường chính là trọng tài cuối cùng.
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
