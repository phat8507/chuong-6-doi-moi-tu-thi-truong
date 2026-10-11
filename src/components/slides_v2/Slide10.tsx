import React from 'react';
import { SlideCard } from '../SlideCard';

const DIRECTIONS = [
  { id: 1, name: 'Thêm tính năng', desc: 'Bổ sung chức năng mới trên nền tảng sẵn có', tag: 'Duy trì' },
  { id: 2, name: 'Nâng cấp', desc: 'Tăng hiệu năng, tốc độ, dung lượng hoặc độ bền', tag: 'Duy trì' },
  { id: 3, name: 'Hạ cấp', desc: 'Cắt giảm bớt thành phần để giảm giá thành tối đa', tag: 'Đột phá giá rẻ' },
  { id: 4, name: 'Thêm tùy chọn', desc: 'Đa dạng hóa biến thể theo từng phân khúc ngách', tag: 'Tùy biến' },
  { id: 5, name: 'Tái cấu trúc', desc: 'Thay đổi hoàn toàn kiến trúc sản phẩm cốt lõi', tag: 'Đổi mới đột phá' },
];

export const Slide10: React.FC = () => {
  return (
    <SlideCard
      slideNum="10"
      categoryTag="CHIẾN LƯỢC"
      title="Năm hướng phát triển sản phẩm chiến lược"
      subtitle="Khai thác nền tảng thiết kế cốt lõi để mở rộng danh mục và ngăn ngừa tự cạnh tranh."
      theme="dark"
      bottomLabel="10. Chiến lược phát triển sản phẩm (10 phút)"
    >
      <div className="flex flex-col justify-center h-full space-y-6">
        {/* 5 Strategy Cards Grid */}
        <div className="grid grid-cols-5 gap-3">
          {DIRECTIONS.map((d) => (
            <div
              key={d.id}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-40 text-center hover:border-teal-500/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 text-teal-400 font-bold font-mono text-xs flex items-center justify-center mx-auto">
                {d.id}
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white leading-snug">{d.name}</div>
                <div className="text-[10px] text-slate-400 leading-tight">{d.desc}</div>
              </div>
              <div className="text-[9px] font-mono text-teal-300 bg-teal-950/80 border border-teal-800/40 rounded py-0.5">
                {d.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Frameworks at bottom */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
            <span className="font-bold text-teal-300 font-mono text-[11px] block mb-1">
              Đổi mới duy trì vs. Đột phá (Clayton Christensen):
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Các hãng lớn thường mải mê nâng cấp (sustaining) cho khách hàng cao cấp, tạo kẽ hở cho đối thủ hạ cấp chiếm lĩnh phân khúc đáy thị trường.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
            <span className="font-bold text-amber-300 font-mono text-[11px] block mb-1">
              Khung Jobs-to-be-Done (JTBD):
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Khách hàng không mua một mũi khoan 5mm, họ "thuê" mũi khoan để tạo ra một cái lỗ 5mm trên tường nhà mình.
            </p>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
