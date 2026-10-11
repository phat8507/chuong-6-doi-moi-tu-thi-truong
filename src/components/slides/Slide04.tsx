import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Package, DollarSign, MapPin, Megaphone, CheckCircle, BarChart3, AlertTriangle } from 'lucide-react';

const MARKETING_MIX = [
  {
    key: "Product",
    title: "1. Sản phẩm (Product)",
    icon: Package,
    desc: "Tạo tính năng mới, nâng cao độ bền, tích hợp công nghệ, hoặc thiết kế lại trải nghiệm.",
    example: "Ứng dụng đặt đồ ăn cải tiến giao diện theo dõi lộ trình shipper theo thời gian thực."
  },
  {
    key: "Price",
    title: "2. Giá cả (Price)",
    icon: DollarSign,
    desc: "Đổi mới mô hình định giá: đăng ký định kỳ (subscription), freemium, chia sẻ doanh thu.",
    example: "Chuyển từ mua bản quyền vĩnh viễn đắt đỏ sang gói trả theo tháng vừa túi tiền."
  },
  {
    key: "Place",
    title: "3. Phân phối (Place)",
    icon: MapPin,
    desc: "Đổi mới kênh tiếp cận: bán hàng trực tiếp D2C, giao hàng siêu tốc, tích hợp điểm bán.",
    example: "Mở rộng dịch vụ tài chính qua hệ thống cửa hàng tiện lợi và mạng lưới tạp hóa đối tác."
  },
  {
    key: "Promotion",
    title: "4. Xúc tiến (Promotion)",
    icon: Megaphone,
    desc: "Đổi mới cách truyền đạt giá trị, giảm rủi ro cảm nhận, giáo dục khách hàng dùng thử.",
    example: "Video hướng dẫn thực tế trực quan thay vì brochure thông số kỹ thuật khô khan."
  }
];

export const Slide04: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedP, setSelectedP] = useState(0);

  return (
    <SlideLayout slide={slide}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Solid 4P Interactive Selector */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            {MARKETING_MIX.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = selectedP === idx;
              return (
                <button
                  key={p.key}
                  onClick={() => setSelectedP(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    isSelected
                      ? 'bg-slate-800 border-teal-500 ring-1 ring-teal-400'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{p.title}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-400' : 'text-slate-500'}`} />
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                    {p.desc}
                  </p>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-400' : 'text-slate-500'}`}>
                    Xem minh họa →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Example Card */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-teal-600/40 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-teal-300">
                Minh họa thực tế: {MARKETING_MIX[selectedP].title}
              </div>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                {MARKETING_MIX[selectedP].example}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Strategic vs Tactical Decision Levels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-teal-400" /> Phân biệt hai cấp độ quyết định
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                <span className="font-bold text-teal-300">1. Marketing Chiến lược:</span>
                <p className="text-slate-300 text-[11px] mt-0.5">
                  Xác định có nên gia nhập thị trường mới, phát triển ứng dụng công nghệ mới hoặc phục vụ phân khúc mới hay không.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                <span className="font-bold text-amber-300">2. Marketing Chiến thuật:</span>
                <p className="text-slate-300 text-[11px] mt-0.5">
                  Triển khai định vị, định giá, thông điệp truyền thông và kênh bán cho sản phẩm đã được lựa chọn.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Khảo sát 110 dự án đổi mới R&D</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-snug">
              Không có quy trình đổi mới duy nhất tối ưu cho mọi bối cảnh. Dự án quen thuộc tối ưu bằng phân khúc truyền thống; dự án mới lạ đòi hỏi tạo mẫu thực nghiệm liên tục.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
