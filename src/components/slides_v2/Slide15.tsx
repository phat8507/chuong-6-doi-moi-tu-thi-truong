import React from 'react';
import { SlideCard } from '../SlideCard';

const ROGERS_ATTRIBUTES = [
  { id: 1, name: 'Lợi thế tương đối', en: 'Relative Advantage', desc: 'Sản phẩm vượt trội hơn giải pháp cũ về chi phí, tốc độ hoặc sự tiện lợi.' },
  { id: 2, name: 'Tính tương thích', en: 'Compatibility', desc: 'Phù hợp với thói quen, giá trị văn hóa và hạ tầng sẵn có của khách hàng.' },
  { id: 3, name: 'Độ phức tạp', en: 'Complexity', desc: 'Càng khó hiểu và khó sử dụng thì tốc độ lan tỏa càng chậm chạp.' },
  { id: 4, name: 'Khả năng thử nghiệm', en: 'Trialability', desc: 'Khách hàng có thể trải nghiệm một phần hoặc dùng thử không rủi ro trước khi mua.' },
  { id: 5, name: 'Khả năng quan sát', en: 'Observability', desc: 'Kết quả và lợi ích của sản phẩm dễ dàng được người xung quanh nhìn thấy.' },
];

export const Slide15: React.FC = () => {
  return (
    <SlideCard
      slideNum="15"
      categoryTag="LÝ THUYẾT ROGERS"
      title="Năm đặc điểm ảnh hưởng đến sự lan tỏa"
      subtitle="Theo Everett Rogers, 5 đặc tính nhận thức này quyết định 49% - 87% tốc độ chấp nhận một đổi mới."
      theme="light"
      bottomLabel="15. Năm đặc điểm lan tỏa (10 phút)"
    >
      <div className="flex flex-col justify-center h-full space-y-6">
        {/* 5 Vertical Cards Grid */}
        <div className="grid grid-cols-5 gap-3">
          {ROGERS_ATTRIBUTES.map((attr) => (
            <div
              key={attr.id}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-between h-56 hover:border-teal-500 hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-800 font-bold font-mono text-sm flex items-center justify-center mx-auto">
                0{attr.id}
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">{attr.name}</div>
                <div className="text-[10px] text-teal-700 font-mono italic">({attr.en})</div>
                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">{attr.desc}</p>
              </div>
              <div className="w-8 h-1 bg-teal-500 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </SlideCard>
  );
};
