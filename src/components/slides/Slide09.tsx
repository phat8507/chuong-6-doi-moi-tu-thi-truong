import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface B2BStakeholder {
  id: string;
  role: string;
  title: string;
  cncPriority: string;
  riskConcern: string;
}

const STAKEHOLDERS: B2BStakeholder[] = [
  {
    id: "users",
    role: "Người dùng (Users)",
    title: "Công nhân vận hành & Thợ cơ khí đứng máy",
    cncPriority: "Bảng điều khiển trực quan, lập trình gá đặt nhanh, ít mỏi mắt và an toàn lao động tuyệt đối khi thao tác ca đêm.",
    riskConcern: "Lo sợ máy mới khó dùng, dễ phát sinh thao tác lỗi làm hỏng phôi kim loại."
  },
  {
    id: "gatekeepers",
    role: "Người giữ cổng (Gatekeepers)",
    title: "Chuyên viên bảo trì cơ điện & Phòng IT",
    cncPriority: "Sàng lọc tiêu chuẩn kỹ thuật điện áp, tính sẵn có của linh kiện thay thế tại Việt Nam và tài liệu hướng dẫn kỹ thuật rõ ràng.",
    riskConcern: "Từ chối hồ sơ nhà thầu nếu máy dùng linh kiện độc quyền khó tìm hoặc không tương thích nguồn điện xưởng."
  },
  {
    id: "influencers",
    role: "Người ảnh hưởng (Influencers)",
    title: "Kỹ sư trưởng phòng R&D & Trưởng phòng Kỹ thuật",
    cncPriority: "Đánh giá dung sai sai số cơ khí (&lt;0.01mm), tốc độ cắt gọt và độ ổn định khi gia công vật liệu hợp kim cứng.",
    riskConcern: "Lo ngại máy không đạt chứng nhận chất lượng quốc tế của khách hàng xuất khẩu."
  },
  {
    id: "buyers",
    role: "Bên mua (Buyers)",
    title: "Giám đốc tài chính & Trưởng phòng Mua hàng",
    cncPriority: "Đàm phán tổng chi phí sở hữu (TCO), tiến độ giải ngân trả chậm, chính sách bảo hành 2 năm và cam kết khấu hao.",
    riskConcern: "Máy tốt về thông số nhưng thời gian hoàn vốn (ROI) quá lâu sẽ bị bác bỏ."
  }
];

export const Slide09: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[8];
  const [selectedRole, setSelectedRole] = useState<string>("users");

  const current = STAKEHOLDERS.find(s => s.id === selectedRole) || STAKEHOLDERS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: 4-Party Network Diagram & CNC Machine Purchasing Scenario */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Sơ đồ mạng lưới 4 bên: Chọn vai trò để hiện mối quan tâm khi mua máy CNC
            </span>

            {/* 4 Roles Interactive Network */}
            <div className="grid grid-cols-2 gap-2.5">
              {STAKEHOLDERS.map((stk) => {
                const isSelected = selectedRole === stk.id;
                return (
                  <button
                    key={stk.id}
                    onClick={() => setSelectedRole(stk.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900">{stk.role}</span>
                    <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-400'}`}>
                      Bấm xem ưu tiên đánh giá →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Role Detail Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-teal-900 font-mono uppercase block">
                Mối quan tâm khi mua máy CNC: {current.title}
              </span>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 leading-relaxed text-[11px]">
                <strong className="text-slate-900">Ưu tiên kỹ thuật / vận hành:</strong> {current.cncPriority}
              </div>
              <p className="text-[11px] text-rose-700">
                <strong>Rào cản từ chối:</strong> {current.riskConcern}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Industrial B2B Photo & Multi-sided Value Logic */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-48">
            <img 
              src="/images/b2b-cnc.jpg" 
              alt="High Precision CNC Industrial Milling Equipment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Mua sắm thiết bị công nghiệp B2B: Người dùng, người trả tiền và người phê duyệt là các bên hoàn toàn khác nhau
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs space-y-1.5">
            <span className="font-bold text-slate-900 uppercase font-mono">So sánh với thị trường tiêu dùng:</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Trong B2C, người mua và người dùng thường là một. Trong B2B, một giải pháp công nghệ dù rất tốt vẫn có thể bị bác bỏ nếu người giữ cổng thấy khó bảo trì hoặc giám đốc tài chính thấy thời gian hoàn vốn chưa hợp lý.
            </p>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
