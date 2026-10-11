import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Briefcase, Users, ShieldCheck, UserCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface Stakeholder {
  role: string;
  label: string;
  icon: any;
  schoolExample: string;
  cncPriority: string;
  color: string;
}

const STAKEHOLDERS: Stakeholder[] = [
  {
    role: "users",
    label: "1. Người sử dụng (Users)",
    icon: Users,
    schoolExample: "Giáo viên đứng lớp cần máy chiếu kết nối tức thì, giao diện trực quan dễ dạy.",
    cncPriority: "Thao tác gá đặt nhanh, bảng điều khiển CNC an toàn, ít gây lỗi mỏi mắt khi vận hành ca đêm.",
    color: "text-teal-300 border-teal-500/30 bg-teal-950/20"
  },
  {
    role: "gatekeepers",
    label: "2. Người kiểm soát tin (Gatekeepers)",
    icon: ShieldCheck,
    schoolExample: "Kỹ thuật viên IT lọc cấu hình tương thích với mạng Wi-Fi và phần mềm bản quyền.",
    cncPriority: "Chuyên viên cơ điện sàng lọc nhà cung cấp theo tiêu chuẩn an toàn lao động và phụ tùng sẵn có.",
    color: "text-amber-300 border-amber-500/30 bg-amber-950/20"
  },
  {
    role: "influencers",
    label: "3. Người ảnh hưởng (Influencers)",
    icon: UserCheck,
    schoolExample: "Tổ trưởng chuyên môn tư vấn khả năng trình chiếu bài giảng thực hành.",
    cncPriority: "Kỹ sư trưởng phòng R&D đánh giá dung sai sai số cơ khí và độ ổn định khi gia công chi tiết phức tạp.",
    color: "text-blue-300 border-blue-500/30 bg-blue-950/20"
  },
  {
    role: "buyers",
    label: "4. Bên mua / Phê duyệt (Buyers)",
    icon: Briefcase,
    schoolExample: "Bộ phận tài chính duyệt ngân sách & Ban giám hiệu ký hợp đồng mua sắm.",
    cncPriority: "Giám đốc tài chính và Trưởng phòng mua hàng đàm phán thời gian thanh toán, chi phí TCO và bảo hành.",
    color: "text-purple-300 border-purple-500/30 bg-purple-950/20"
  }
];

export const Slide09: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedRole, setSelectedRole] = useState<string>("users");

  const current = STAKEHOLDERS.find(s => s.role === selectedRole) || STAKEHOLDERS[0];

  return (
    <SlideLayout slide={slide} rightBadge="Mạng lưới mua tổ chức & Đa bên liên quan">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive Organizational Buying Center Matrix */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-teal-300">4 Vai trò quyết định trong thị trường B2B</span>
            <span className="text-[11px] italic">Bấm từng vai trò để xem góc nhìn đánh giá</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {STAKEHOLDERS.map((stk) => {
              const Icon = stk.icon;
              const isSelected = selectedRole === stk.role;
              return (
                <button
                  key={stk.role}
                  onClick={() => setSelectedRole(stk.role)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-teal-400 shadow-lg ring-1 ring-teal-400 scale-[1.01]'
                      : `${stk.color} hover:bg-slate-800/80`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{stk.label}</span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-[10px] text-slate-300 line-clamp-2 mt-1">
                    Trọng tâm: {stk.cncPriority}
                  </p>
                  <span className="text-[9px] font-mono text-teal-400">Bấm xem chi tiết →</span>
                </button>
              );
            })}
          </div>

          {/* Selected Role Detailed Evaluation Box */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-300">{current.label}</span>
              <span className="text-[10px] text-amber-300 font-mono">Đánh giá đa chiều</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-800/80 text-[11px] text-slate-200">
              <strong className="text-white">Ví dụ Mua sắm Trường học:</strong> {current.schoolExample}
            </div>
            <div className="p-2 rounded-lg bg-slate-800/80 text-[11px] text-slate-200">
              <strong className="text-teal-300">Đấu thầu Máy CNC:</strong> {current.cncPriority}
            </div>
          </div>
        </div>

        {/* Right Column: Mondex Electronic Cash Case Study & Multi-sided Benefit */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Bài học ví điện tử Mondex
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                Thí điểm Swindon
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Mondex thất bại khi chỉ tập trung vào lợi ích giảm chi phí tiền mặt của ngân hàng mà chưa đem lại lợi ích trực tiếp cho người tiêu dùng. Chỉ khi thí điểm tích hợp vào <strong>thẻ sinh viên và tiện ích trong trường đại học</strong>, sản phẩm mới dần được chấp nhận.
            </p>

            <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300 leading-snug">
              <strong>Hàm ý cho sản phẩm mạng lưới:</strong> Đổi mới B2B phải tạo ra giá trị đồng thời cho nhiều bên tham gia chuỗi — người ra quyết định, người dùng trực tiếp và người thụ hưởng cuối.
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-700 h-28 group">
            <img 
              src="/images/b2b-cnc.jpg" 
              alt="Industrial CNC Precision Equipment" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-2.5">
              <span className="text-[10px] text-slate-300 font-medium">
                Mua sắm thiết bị công nghiệp B2B: Quyết định dựa trên tổng chi phí sở hữu (TCO)
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
