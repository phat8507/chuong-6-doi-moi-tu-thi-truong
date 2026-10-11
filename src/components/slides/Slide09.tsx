import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

interface Stakeholder {
  role: string;
  label: string;
  schoolExample: string;
  cncPriority: string;
}

const STAKEHOLDERS: Stakeholder[] = [
  {
    role: "users",
    label: "1. Người sử dụng (Users)",
    schoolExample: "Giáo viên đứng lớp cần máy tính/máy chiếu kết nối tức thì, giao diện trực quan.",
    cncPriority: "Thao tác gá đặt nhanh, bảng điều khiển CNC an toàn, ít gây lỗi mỏi mắt khi vận hành ca đêm."
  },
  {
    role: "gatekeepers",
    label: "2. Người kiểm soát tin (Gatekeepers)",
    schoolExample: "Kỹ thuật viên IT lọc cấu hình phần cứng tương thích với mạng nội bộ trường.",
    cncPriority: "Chuyên viên cơ điện sàng lọc nhà cung cấp theo tiêu chuẩn an toàn lao động và phụ tùng sẵn có."
  },
  {
    role: "influencers",
    label: "3. Người ảnh hưởng (Influencers)",
    schoolExample: "Tổ trưởng chuyên môn tư vấn chất lượng trình chiếu bài giảng thực hành.",
    cncPriority: "Kỹ sư trưởng phòng R&D đánh giá dung sai sai số cơ khí và độ ổn định khi gia công chi tiết phức tạp."
  },
  {
    role: "buyers",
    label: "4. Bên mua / Phê duyệt (Buyers)",
    schoolExample: "Bộ phận tài chính xem xét ngân sách & Ban giám hiệu ký hợp đồng mua sắm.",
    cncPriority: "Giám đốc tài chính và Trưởng phòng mua hàng đàm phán điều khoản thanh toán, TCO và bảo hành."
  }
];

export const Slide09: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedRole, setSelectedRole] = useState<string>("users");

  const current = STAKEHOLDERS.find(s => s.role === selectedRole) || STAKEHOLDERS[0];

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={9} label="PHÂN KHÚC DOANH NGHIỆP (B2B)" accent="#0284c7" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0284c7" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Organizational Buying Center */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Phân Khúc Doanh Nghiệp:<br />
              <span className="text-sky-700">Mạng Lưới Mua Tổ Chức</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Bốn vai trò quyết định, phân khúc theo lợi ích và bài học ví điện tử Mondex
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {STAKEHOLDERS.map((stk) => {
              const isSelected = selectedRole === stk.role;
              return (
                <button
                  key={stk.role}
                  onClick={() => setSelectedRole(stk.role)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                    isSelected
                      ? 'bg-sky-50/70 border-sky-600 ring-2 ring-sky-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-900">{stk.label}</span>
                  <span className="text-[10px] text-sky-700 font-semibold">Xem góc nhìn đánh giá →</span>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2 text-xs">
            <span className="font-bold text-sky-900 uppercase font-mono">
              Góc nhìn của {current.label}:
            </span>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
              <strong className="text-slate-900">Mua sắm Trường học:</strong> {current.schoolExample}
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
              <strong className="text-sky-900">Đấu thầu Máy CNC:</strong> {current.cncPriority}
            </div>
          </div>
        </div>

        {/* Right Column: B2B CNC Photo & Mondex Case */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-44">
            <img 
              src="/images/b2b-cnc.jpg" 
              alt="Industrial CNC Precision Equipment" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase font-mono">
              Hiệu ứng mạng lưới Mondex
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mondex thất bại khi chỉ giảm chi phí cho ngân hàng mà người tiêu dùng không thấy lợi ích. Chỉ khi tích hợp vào <strong>thẻ sinh viên và dịch vụ trường học</strong>, sản phẩm mới được chấp nhận. Đổi mới mạng lưới phải tạo lợi ích đa bên.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
