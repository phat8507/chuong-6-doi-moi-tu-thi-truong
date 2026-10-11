import React from 'react';
import { SlideCard } from '../SlideCard';

const B2B_STAKEHOLDERS = [
  { role: 'Người mua (Buyer)', desc: 'Đàm phán giá, điều khoản hợp đồng & thời hạn thanh toán' },
  { role: 'Người sử dụng (User)', desc: 'Trực tiếp vận hành thiết bị/phần mềm hàng ngày' },
  { role: 'Người quyết định (Decider)', desc: 'Ký duyệt ngân sách đầu tư cuối cùng (C-level)' },
  { role: 'Người ảnh hưởng (Influencer)', desc: 'Chuyên gia kỹ thuật đánh giá tiêu chuẩn tương thích' },
];

export const Slide09: React.FC = () => {
  return (
    <SlideCard
      slideNum="09"
      categoryTag="THỊ TRƯỜNG B2B"
      title="Phân khúc thị trường doanh nghiệp"
      subtitle="Quyết định mua B2B là một tiến trình đa bên liên quan với các mục tiêu kinh tế khác nhau."
      theme="dark"
      bottomLabel="09. Phân khúc thị trường doanh nghiệp (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
        {/* Left Column: Stakeholders List */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">Các bên liên quan (B2B DMU):</span>
          {B2B_STAKEHOLDERS.map((s, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
              <div className="font-bold text-teal-300">{s.role}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Center: B2B Network Diagram */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* Center Core: Doanh nghiệp */}
            <div className="w-20 h-20 rounded-full bg-teal-500 text-slate-950 font-black text-xs flex items-center justify-center text-center p-1 z-10 shadow-lg">
              Doanh nghiệp
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute top-1 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[10px] font-bold text-teal-300">
              Mua hàng
            </div>
            <div className="absolute right-1 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[10px] font-bold text-teal-300">
              Vận hành
            </div>
            <div className="absolute bottom-1 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[10px] font-bold text-teal-300">
              Tài chính
            </div>
            <div className="absolute left-1 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[10px] font-bold text-teal-300">
              Kỹ thuật
            </div>

            <div className="absolute inset-4 rounded-full border border-dashed border-slate-700 -z-0" />
          </div>
        </div>

        {/* Right Column: Industrial Case */}
        <div className="lg:col-span-3 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Ví dụ thực tế:</span>
            <div className="font-bold text-white text-sm">Máy CNC Công nghiệp</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Tập trung vào hiệu suất vận hành, giảm thời gian chết máy (downtime) và chi phí bảo trì trọn vòng đời sản phẩm.
            </p>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
