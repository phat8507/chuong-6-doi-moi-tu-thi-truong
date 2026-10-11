import React from 'react';
import { SlideCard } from '../SlideCard';

const NOKIA_POINTS = [
  '1. Chất lượng tương đối: Không tuyệt đối hóa thông số kỹ thuật',
  '2. Giá trị tương đối: Lợi ích nhận được so với chi phí bỏ ra',
  '3. Lợi ích cảm nhận: Khách hàng chỉ trả tiền cho cái họ thấy có ích',
  '4. Phân tích chi phí - lợi ích: Tránh bẫy nâng cấp tính năng dư thừa',
  '5. Bài học Nokia: Dẫn đầu GSM nhưng mất thị phần vì chậm theo kịp nắp gập & máy ảnh'
];

export const Slide06: React.FC = () => {
  return (
    <SlideCard
      slideNum="06"
      categoryTag="GIÁ TRỊ"
      title="Khác biệt hóa phải tạo ra giá trị"
      subtitle="Nhiều tính năng hơn không đồng nghĩa với giá trị hơn."
      theme="dark"
      bottomLabel="06. Khác biệt hóa sản phẩm (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: 5 Value Dimensions */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            {NOKIA_POINTS.map((pt, idx) => (
              <div key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                <span className="w-5 h-5 rounded-md bg-teal-950 text-teal-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-teal-800/60">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-800/60 text-xs text-teal-200">
            <strong>Nguyên lý PIMS:</strong> Lợi nhuận và vị thế thị trường dài hạn bắt nguồn từ chất lượng tương đối trong mắt khách hàng, chứ không phải số lượng tính năng trong catalogue.
          </div>
        </div>

        {/* Right Column: Historical Nokia Photo with Logo */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-2">
          <div className="h-56 md:h-64 w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
            <img
              src="/images/nokia-phone.jpg"
              alt="Điện thoại Nokia lịch sử"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-blue-900/90 text-white font-black tracking-widest text-xs px-3 py-1 rounded shadow">
              NOKIA
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] text-slate-300">
                Giai đoạn 1998–2003: Bài học về tốc độ chuyển dịch kỳ vọng thị trường
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
