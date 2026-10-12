import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface B2BStakeholder {
  id: string;
  role: string;
  title: string;
  cncPriority: string;
  riskConcern: string;
  badgeColor: string;
}

const STAKEHOLDERS: B2BStakeholder[] = [
  {
    id: "users",
    role: "1. Người dùng (Users)",
    title: "Công nhân vận hành & Thợ cơ khí đứng máy",
    cncPriority: "Bảng điều khiển trực quan, lập trình gá đặt nhanh chóng, ít gây mỏi mắt và bảo đảm an toàn lao động tuyệt đối khi thao tác ca đêm.",
    riskConcern: "Lo sợ máy mới quá phức tạp, giao diện khó hiểu dẫn đến thao tác sai làm hỏng phôi kim loại đắt tiền.",
    badgeColor: "teal"
  },
  {
    id: "gatekeepers",
    role: "2. Người giữ cổng (Gatekeepers)",
    title: "Chuyên viên bảo trì cơ điện & Phòng IT xưởng",
    cncPriority: "Sàng lọc tiêu chuẩn kỹ thuật điện áp 3 pha, tính sẵn có của linh kiện thay thế tại Việt Nam và tài liệu hướng dẫn kỹ thuật chi tiết.",
    riskConcern: "Sẽ thẳng thừng loại hồ sơ nhà thầu nếu máy dùng linh kiện độc quyền khó tìm hoặc không tương thích nguồn điện lưới xưởng.",
    badgeColor: "blue"
  },
  {
    id: "influencers",
    role: "3. Người ảnh hưởng (Influencers)",
    title: "Kỹ sư trưởng phòng R&D & Trưởng ban Kỹ thuật",
    cncPriority: "Đánh giá dung sai sai số cơ khí siêu nhỏ (&lt;0.01mm), tốc độ trục chính cắt gọt và độ ổn định khi gia công hợp kim cứng.",
    riskConcern: "Lo ngại máy không đạt chứng nhận dung sai quốc tế, gây nguy cơ bị đối tác xuất khẩu hủy đơn hàng.",
    badgeColor: "indigo"
  },
  {
    id: "buyers",
    role: "4. Bên mua (Buyers / Deciders)",
    title: "Giám đốc tài chính (CFO) & Trưởng phòng Mua hàng",
    cncPriority: "Đàm phán tổng chi phí sở hữu (TCO), tiến độ giải ngân trả chậm linh hoạt, cam kết bảo hành 2 năm và thời gian hoàn vốn.",
    riskConcern: "Dù máy tốt về mặt kỹ thuật nhưng giá thành quá cao, ROI vượt quá 3 năm thì hợp đồng vẫn sẽ bị bác bỏ lập tức.",
    badgeColor: "amber"
  }
];

export const Slide09: React.FC = React.memo(() => {
  const meta = CHAPTER6_SECTIONS[8];
  const [selectedRole, setSelectedRole] = useState<string>("users");

  const current = STAKEHOLDERS.find(s => s.id === selectedRole) || STAKEHOLDERS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: 4-Party Network Diagram & CNC Machine Purchasing Scenario */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                Mạng lưới 4 bên mua sắm B2B (Đơn vị ra quyết định DMU)
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                Chọn bên tham gia
              </span>
            </div>

            {/* 4 Roles Interactive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STAKEHOLDERS.map((stk) => {
                const isSelected = selectedRole === stk.id;
                return (
                  <button
                    key={stk.id}
                    onClick={() => setSelectedRole(stk.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[90px] ${
                      isSelected
                        ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/30 shadow-sm translate-y-[-1px]'
                        : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{stk.role}</span>
                    <span className={`text-xs mt-1.5 font-medium ${isSelected ? 'text-teal-700 font-bold' : 'text-slate-400'}`}>
                      {isSelected ? 'Đang chọn •' : 'Xem ưu tiên &amp; rào cản →'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Role Detail Box */}
            <div className="p-5 rounded-xl bg-teal-50/50 border border-teal-200/80 space-y-3.5">
              <div className="flex items-center justify-between border-b border-teal-200/60 pb-2">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 font-mono uppercase tracking-wide">
                  {current.title}
                </h3>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  Bối cảnh mua máy CNC
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/95 border border-teal-100 space-y-1 shadow-2xs">
                <strong className="text-xs sm:text-sm font-bold text-slate-900 block font-mono">
                  Ưu tiên kỹ thuật &amp; vận hành cốt lõi:
                </strong>
                <p 
                  className="text-xs sm:text-[14px] text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: current.cncPriority }}
                />
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1">
                <strong className="text-xs sm:text-sm font-bold text-rose-900 block font-mono">
                  Rào cản từ chối (Veto power):
                </strong>
                <p className="text-xs sm:text-[14px] text-rose-900/90 leading-relaxed">
                  {current.riskConcern}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Industrial B2B Photo & Multi-sided Value Logic */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            {/* DMU Stakeholders Watercolor Diagram with Lazy Loading */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-amber-50/20 group">
              <img 
                src="/images/b2b-dmu-stakeholders.jpg" 
                alt="Watercolor ink diagram showing B2B DMU 4 roles around industrial CNC equipment" 
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex items-end p-4">
                <p className="text-xs sm:text-[13px] text-white font-medium leading-relaxed">
                  <strong>Mô hình DMU 4 bên:</strong> Người dùng, Người giữ cổng, Người ảnh hưởng và Bên mua cùng tương tác xung quanh quyết định đầu tư thiết bị.
                </p>
              </div>
            </div>

            {/* B2B vs B2C Strategic Comparison Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <span className="font-bold text-xs sm:text-sm text-slate-900 uppercase font-mono tracking-wider block">
                Quy luật giá trị đa phương B2B:
              </span>
              <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                Trong B2C, người ra quyết định và người thụ hưởng thường trùng khớp. Trong B2B, một sản phẩm công nghệ dẫu có tính năng kỹ thuật xuất sắc vẫn có thể bị thất bại thảm hại nếu <em>người giữ cổng</em> phát hiện khó tích hợp hoặc <em>giám đốc tài chính</em> thấy chi phí TCO vượt định mức.
              </p>
              <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-xs sm:text-[13px] text-teal-900 font-medium">
                <strong>Khuyến nghị thiết kế:</strong> Phải cung cấp tài liệu giá trị chuyên biệt cho từng mắt xích trong DMU.
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
});
