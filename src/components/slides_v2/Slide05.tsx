import React, { useState } from 'react';
import { SlideCard } from '../SlideCard';

const QUADRANTS = [
  { id: 1, title: '1. Thâm nhập thị trường', tech: 'Hiện có', market: 'Hiện có', desc: 'Tối ưu hóa sản phẩm quen thuộc trên thị trường sẵn có.' },
  { id: 2, title: '2. Phát triển sản phẩm', tech: 'Mới', market: 'Hiện có', desc: 'Đưa công nghệ mới vào phục vụ khách hàng hiện tại.' },
  { id: 3, title: '3. Phát triển thị trường', tech: 'Hiện có', market: 'Mới', desc: 'Mang giải pháp hiện có đến thị trường địa lý hoặc phân khúc mới.' },
  { id: 4, title: '4. Đa dạng hóa', tech: 'Mới', market: 'Mới', desc: 'Đổi mới triệt để, rủi ro cao nhất, cần học hỏi thực nghiệm sâu sắc.' },
];

const IDEO_STEPS = [
  '1. Quan sát người dùng trong bối cảnh thực tế',
  '2. Xác định vấn đề cốt lõi tiềm ẩn',
  '3. Tạo ý tưởng đa dạng',
  '4. Tạo nguyên mẫu nhanh (Rapid Prototyping)',
  '5. Thử nghiệm và hoàn thiện liên tục'
];

export const Slide05: React.FC = () => {
  const [selectedQuad, setSelectedQuad] = useState<number>(2);

  return (
    <SlideCard
      slideNum="05"
      categoryTag="MA TRẬN"
      title="Công nghệ và thị trường quyết định cách đổi mới"
      subtitle="Mức trưởng thành của thị trường và công nghệ định hình chiến lược học hỏi từ người dùng."
      theme="dark"
      bottomLabel="05. Ma trận công nghệ - thị trường (12 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
        {/* Left Column: 2x2 Matrix */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1">
            <span>Ma trận: Công nghệ × Thị trường</span>
            <span className="text-teal-400">Chọn góc phần tư để xem</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {QUADRANTS.map((q) => {
              const isSelected = selectedQuad === q.id;
              return (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuad(q.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    isSelected
                      ? 'bg-teal-950/60 border-teal-400 ring-2 ring-teal-500/20 shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-white leading-snug">{q.title}</div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{q.desc}</p>
                  <div className="text-[10px] font-mono text-teal-400">
                    CN: {q.tech} · TT: {q.market}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: IDEO Photo & 5 Steps */}
        <div className="lg:col-span-5 space-y-3">
          <div className="h-36 rounded-xl overflow-hidden border border-slate-700/80 shadow-md relative">
            <img
              src="/images/ideo-design.jpg"
              alt="Quy trình học hỏi của IDEO"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white font-medium">Quy trình học hỏi của IDEO</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
            <div className="font-bold text-teal-300 font-mono text-[11px]">5 BƯỚC HỌC HỎI THỰC NGHIỆM:</div>
            {IDEO_STEPS.map((step, idx) => (
              <div key={idx} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                <span className="text-teal-400 font-mono text-[10px]">●</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
