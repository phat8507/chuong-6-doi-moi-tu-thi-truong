import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Package, DollarSign, MapPin, Megaphone, CheckCircle, BarChart3, AlertTriangle } from 'lucide-react';

const MARKETING_MIX = [
  {
    key: "Product",
    title: "Sản phẩm (Product)",
    icon: Package,
    desc: "Tạo tính năng mới, nâng cao độ bền, tích hợp công nghệ, hoặc thiết kế lại trải nghiệm.",
    example: "Ứng dụng đặt đồ ăn cải tiến giao diện theo dõi lộ trình shipper theo thời gian thực."
  },
  {
    key: "Price",
    title: "Giá cả (Price)",
    icon: DollarSign,
    desc: "Đổi mới mô hình định giá: đăng ký định kỳ (subscription), freemium, chia sẻ doanh thu.",
    example: "Chuyển từ mua bản quyền vĩnh viễn đắt đỏ sang gói trả theo tháng vừa túi tiền."
  },
  {
    key: "Place",
    title: "Phân phối (Place)",
    icon: MapPin,
    desc: "Đổi mới kênh tiếp cận: bán hàng trực tiếp D2C, giao hàng siêu tốc, tích hợp điểm bán.",
    example: "Mở rộng dịch vụ tài chính qua hệ thống cửa hàng tiện lợi và mạng lưới tạp hóa đối tác."
  },
  {
    key: "Promotion",
    title: "Xúc tiến (Promotion)",
    icon: Megaphone,
    desc: "Đổi mới cách truyền đạt giá trị, giảm rủi ro cảm nhận, giáo dục khách hàng dùng thử.",
    example: "Video hướng dẫn thực tế trực quan thay vì brochure thông số kỹ thuật khô khan."
  }
];

export const Slide04: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedP, setSelectedP] = useState(0);

  return (
    <SlideLayout slide={slide} rightBadge="Khung 4P & Hai cấp độ quyết định">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive 4P Mix Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {MARKETING_MIX.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = selectedP === idx;
              return (
                <button
                  key={p.key}
                  onClick={() => setSelectedP(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-32 ${
                    isSelected
                      ? 'bg-white border-[#147D82] shadow-md ring-2 ring-[#147D82]/20'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#102A43]">{p.title}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`} />
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-snug">
                    {p.desc}
                  </p>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`}>
                    Xem ví dụ chi tiết →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Example Box */}
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#147D82] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#102A43]">
                Minh họa thực tế: {MARKETING_MIX[selectedP].title}
              </div>
              <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                {MARKETING_MIX[selectedP].example}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Strategic vs Tactical & 110 Projects Evidence */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Strategic vs Tactical Decision Box */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-[#102A43] uppercase tracking-wider flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-[#147D82]" /> Phân biệt hai cấp độ quyết định
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-150">
                <span className="font-bold text-[#147D82]">1. Marketing Chiến lược:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  Xác định có nên gia nhập thị trường mới, giải quyết công việc mới hoặc phục vụ phân khúc mới hay không.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-150">
                <span className="font-bold text-amber-700">2. Marketing Chiến thuật:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  Triển khai định vị, định giá, thông điệp truyền thông và kênh bán cho sản phẩm đã được lựa chọn.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Evidence: Survey of 110 Innovation Projects */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs space-y-1.5">
            <div className="flex items-center gap-2 text-[#102A43] font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Nghiên cứu 110 dự án phát triển sản phẩm</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Không có một quy trình đổi mới duy nhất tối ưu cho mọi hoàn cảnh. Dự án quen thuộc phù hợp với phân tích phân khúc truyền thống; còn dự án mới lạ đòi hỏi tạo mẫu thực nghiệm và nhóm chuyên gia đa ngành.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
