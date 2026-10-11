import React from 'react';
import { SlideCard } from '../SlideCard';

const ADOPTER_GROUPS = [
  { name: 'Người tiên phong (Innovators)', share: '2.5%', desc: 'Thích mạo hiểm, sẵn sàng đón nhận rủi ro và lỗi kỹ thuật ban đầu.' },
  { name: 'Người chấp nhận sớm (Early Adopters)', share: '13.5%', desc: 'Nhà lãnh đạo ý kiến, tìm kiếm lợi thế chiến lược từ công nghệ mới.' },
  { name: 'Đa số sớm (Early Majority)', share: '34.0%', desc: 'Thực dụng, chỉ mua khi đã có bằng chứng rõ ràng và giải pháp hoàn thiện.' },
  { name: 'Đa số muộn (Late Majority)', share: '34.0%', desc: 'Hoài nghi, chỉ mua khi công nghệ trở thành chuẩn mực bắt buộc.' },
  { name: 'Người bảo thủ (Laggards)', share: '16.0%', desc: 'Chống đối thay đổi, chỉ mua khi giải pháp cũ không còn được bán nữa.' },
];

export const Slide16: React.FC = () => {
  return (
    <SlideCard
      slideNum="16"
      categoryTag="ĐƯỜNG CONG LAN TỎA"
      title="Đường cong chữ S và các nhóm chấp nhận"
      subtitle="Quá trình khuếch tán một sản phẩm mới diễn ra theo đường cong hình chữ S qua 5 nhóm khách hàng."
      theme="dark"
      bottomLabel="16. Đường cong chữ S (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: S-Curve Graphic */}
        <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[300px]">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="font-bold text-teal-400">Đường cong chữ S (Tích lũy)</span>
            <span className="text-slate-400">100% Thị phần</span>
          </div>

          {/* SVG S-Curve */}
          <div className="w-full flex-1 flex items-center justify-center py-2">
            <svg viewBox="0 0 400 180" className="w-full h-full max-h-[160px]">
              {/* Grid lines */}
              <line x1="40" y1="150" x2="380" y2="150" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="150" stroke="#334155" strokeWidth="1.5" />

              {/* S-curve path */}
              <path
                d="M 40,145 C 140,145 180,120 220,80 C 260,40 300,25 380,25"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="3.5"
              />

              {/* Chasm Indicator */}
              <line x1="160" y1="20" x2="160" y2="150" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" />
              <text x="165" y="45" fill="#f43f5e" fontSize="10" fontWeight="bold">Hố ngăn cách (The Chasm)</text>

              {/* Labels */}
              <text x="40" y="168" fill="#94a3b8" fontSize="10">Thời gian →</text>
              <text x="320" y="20" fill="#14b8a6" fontSize="10" fontWeight="bold">Bão hòa (100%)</text>
            </svg>
          </div>

          <div className="text-[10px] text-slate-500 font-mono text-center">
            Lưu ý: Đồ thị là thuyết minh hóa, không phải dữ liệu thực tế duy nhất.
          </div>
        </div>

        {/* Right Column: 5 Adopter Groups */}
        <div className="lg:col-span-6 space-y-2">
          <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">
            5 Nhóm khách hàng chấp nhận (Rogers):
          </span>

          {ADOPTER_GROUPS.map((g, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-white">{g.name}</span>
                <p className="text-[10px] text-slate-400 mt-0.5">{g.desc}</p>
              </div>
              <span className="font-mono font-bold text-teal-400 text-xs shrink-0 ml-3 bg-teal-950/80 px-2 py-1 rounded border border-teal-800/60">
                {g.share}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideCard>
  );
};
