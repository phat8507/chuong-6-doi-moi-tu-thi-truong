import React from 'react';
import { SlideCard } from '../SlideCard';

const CRITERIA = ['Nhân khẩu học', 'Vòng đời khách hàng', 'Lối sống & tâm lý', 'Hành vi mua sắm'];

const PERSONAS = [
  { name: 'Sinh viên', desc: 'Giá rẻ · Tiện lợi · Thao tác nhanh', img: '/images/consumer-two-contexts.jpg' },
  { name: 'Gia đình trẻ', desc: 'Chất lượng · An toàn · Bền vững', img: '/images/user-tech-real.jpg' },
  { name: 'Người cao tuổi', desc: 'Tin cậy · Dễ dùng · Hỗ trợ tận tình', img: '/images/customer-journey.jpg' },
];

export const Slide08: React.FC = () => {
  return (
    <SlideCard
      slideNum="08"
      categoryTag="PHÂN KHÚC"
      title="Phân khúc thị trường tiêu dùng"
      subtitle="Không có một khách hàng trung bình cho mọi sản phẩm; cùng thu nhập vẫn có hành vi khác nhau."
      theme="dark"
      bottomLabel="08. Phân khúc thị trường tiêu dùng (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
        {/* Left Column: 4 Criteria Pills */}
        <div className="lg:col-span-4 space-y-2.5">
          <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">Tiêu chí phân khúc B2C:</span>
          {CRITERIA.map((c, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-teal-950 text-teal-400 font-mono text-[10px] flex items-center justify-center border border-teal-800/60">
                0{idx + 1}
              </span>
              <span>{c}</span>
            </div>
          ))}
        </div>

        {/* Right Column: 3 Consumer Personas & Unilever Case */}
        <div className="lg:col-span-8 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {PERSONAS.map((p, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 flex flex-col justify-between h-44 group">
                <div className="h-24 overflow-hidden relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-2.5 text-center">
                  <div className="text-xs font-bold text-white">{p.name}</div>
                  <div className="text-[10px] text-teal-400 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span className="font-bold text-amber-300 font-mono text-[11px]">Case study: Bột giặt Persil Power (Unilever)</span>
            <span className="text-[10px] text-slate-400">Đổi mới công thức nhưng làm hư sợi vải → Phải thu hồi</span>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
