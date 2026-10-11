import React from 'react';
import { SlideCard } from '../SlideCard';

const ADOPTION_CHAIN = [
  { id: 1, name: 'Nhận biết', desc: 'Biết đến sự tồn tại của sản phẩm' },
  { id: 2, name: 'Hiểu biết', desc: 'Nắm rõ tính năng và giá trị đem lại' },
  { id: 3, name: 'Dùng thử', desc: 'Trải nghiệm thử trong quy mô nhỏ' },
  { id: 4, name: 'Tin tưởng', desc: 'Xác nhận hiệu quả và độ tin cậy' },
  { id: 5, name: 'Chấp nhận', desc: 'Mua và sử dụng thường xuyên' },
  { id: 6, name: 'Tiếp tục sử dụng', desc: 'Trung thành và lan tỏa cho người khác' },
];

export const Slide14: React.FC = () => {
  return (
    <SlideCard
      slideNum="14"
      categoryTag="MARKETING ADOPTION"
      title="Marketing sản phẩm đổi mới"
      subtitle="Giảm bất định - Tăng niềm tin - Thúc đẩy hành vi."
      theme="dark"
      bottomLabel="14. Hành trình khách hàng (10 phút)"
    >
      <div className="flex flex-col justify-center items-center h-full space-y-6">
        {/* Background photo preview snippet */}
        <div className="w-full h-28 rounded-xl overflow-hidden border border-slate-800 relative">
          <img
            src="/images/customer-journey.jpg"
            alt="Khách hàng tiếp cận sản phẩm đổi mới"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/40 flex items-center px-6">
            <span className="text-sm font-bold text-teal-300">
              Chiến lược cốt lõi: Giảm thiểu rủi ro cảm nhận của khách hàng ở từng giai đoạn
            </span>
          </div>
        </div>

        {/* 6 Circular Adoption Chain Nodes */}
        <div className="w-full grid grid-cols-6 gap-3">
          {ADOPTION_CHAIN.map((step) => (
            <div
              key={step.id}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center flex flex-col items-center justify-between h-36"
            >
              <div className="w-10 h-10 rounded-full bg-teal-950 border border-teal-800/80 text-teal-400 font-bold font-mono text-sm flex items-center justify-center">
                {step.id}
              </div>
              <div>
                <div className="text-xs font-bold text-white mt-1">{step.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideCard>
  );
};
