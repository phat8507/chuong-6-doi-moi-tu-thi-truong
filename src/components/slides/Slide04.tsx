import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const FOUR_P = [
  {
    name: "Product (Sản phẩm)",
    desc: "Cải tiến tính năng, tối ưu độ bền, thiết kế lại trải nghiệm người dùng.",
    example: "Cải tiến giao diện tra cứu lịch trả góp của app tài chính chỉ trong 1 chạm."
  },
  {
    name: "Price (Giá cả)",
    desc: "Đổi mới mô hình định giá: thu phí thuê bao định kỳ, freemium, chia sẻ doanh thu.",
    example: "Chuyển từ mua bản quyền trọn gói đắt đỏ sang gói trả theo tháng linh hoạt."
  },
  {
    name: "Place (Phân phối)",
    desc: "Đổi mới kênh tiếp cận khách hàng: bán trực tiếp D2C, giao hàng siêu tốc.",
    example: "Mở rộng dịch vụ tài chính qua hệ thống cửa hàng tiện lợi và tạp hóa đối tác."
  },
  {
    name: "Promotion (Xúc tiến)",
    desc: "Đổi mới cách truyền đạt giá trị, giảm rủi ro cảm nhận, hỗ trợ dùng thử.",
    example: "Video hướng dẫn thực tế trực quan thay vì brochure thông số kỹ thuật khô khan."
  }
];

export const Slide04: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[3];
  const [selectedP, setSelectedP] = useState(0);

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Real Product at Center with 4P Branches appearing */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Sản phẩm thật ở trung tâm và bốn nhánh 4P định hướng đổi mới:
            </span>

            {/* Central Product Banner */}
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-center">
              <span className="text-[10px] font-mono uppercase font-bold text-teal-800">Sản phẩm trung tâm</span>
              <div className="text-sm font-bold text-slate-900">Ứng dụng Giao đồ ăn &amp; Đặt hàng Trực tuyến</div>
              <p className="text-[11px] text-teal-900 mt-0.5">
                Giá trị không chỉ nằm ở bản thân món ăn, mà lan tỏa ra toàn bộ 4 khâu phối thức Marketing:
              </p>
            </div>

            {/* 4P Interactive Selector */}
            <div className="grid grid-cols-2 gap-2.5">
              {FOUR_P.map((item, idx) => {
                const isSelected = selectedP === idx;
                return (
                  <button
                    key={item.name}
                    onClick={() => setSelectedP(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-2xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900">{item.name}</span>
                    <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-500'}`}>
                      Xem đổi mới nhánh này →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="font-bold text-teal-800">{FOUR_P[selectedP].name}:</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">{FOUR_P[selectedP].desc}</p>
              <p className="text-[11px] text-slate-800 pt-0.5 font-medium">
                <strong>Minh họa:</strong> {FOUR_P[selectedP].example}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Strategic vs Tactical & Explicit Citation at 110 Projects */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase font-mono">
              Phân biệt hai cấp độ quyết định marketing
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-teal-800">1. Marketing Chiến lược:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">Xác định có nên gia nhập thị trường mới, phát triển công nghệ mới hoặc phục vụ phân khúc mới hay không.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-amber-800">2. Marketing Chiến thuật:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">Triển khai định vị, giá, thông điệp và kênh phân phối của sản phẩm đã chọn.</p>
              </div>
            </div>
          </div>

          {/* Research 110 Projects with explicit citation at number location */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1.5">
            <div className="flex items-center gap-2 text-amber-900 font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Khảo sát 110 dự án đổi mới sản phẩm</span>
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Kết quả khảo sát 110 dự án phát triển sản phẩm cho thấy: <strong>không có một quy trình đổi mới duy nhất tối ưu cho mọi hoàn cảnh</strong>. Độ mới lạ và độ phức tạp quyết định công cụ nghiên cứu phù hợp.
            </p>
            <div className="pt-1 text-[10px] font-mono text-amber-800 font-semibold border-t border-amber-200/60">
              [Nguồn tham chiếu: Giáo trình Quản trị Đổi mới sáng tạo HUB, Tr. 82–83]
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
