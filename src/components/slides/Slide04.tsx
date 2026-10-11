import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { Package, DollarSign, MapPin, Megaphone, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

const MARKETING_MIX = [
  {
    key: "Product",
    title: "1. Sản phẩm (Product)",
    icon: Package,
    desc: "Tạo tính năng mới, nâng cao độ bền, tích hợp công nghệ, hoặc thiết kế lại trải nghiệm.",
    example: "Ứng dụng đặt đồ ăn cải tiến quy trình theo dõi đơn hàng shipper theo thời gian thực."
  },
  {
    key: "Price",
    title: "2. Giá cả (Price)",
    icon: DollarSign,
    desc: "Đổi mới mô hình định giá: đăng ký thuê bao (subscription), freemium, chia sẻ doanh thu.",
    example: "Chuyển từ mua đứt bản quyền phần mềm đắt đỏ sang gói trả theo tháng vừa túi tiền."
  },
  {
    key: "Place",
    title: "3. Phân phối (Place)",
    icon: MapPin,
    desc: "Đổi mới kênh tiếp cận: bán hàng trực tiếp D2C, giao hàng siêu tốc, tích hợp điểm bán.",
    example: "Mở rộng dịch vụ tài chính qua hệ thống cửa hàng tiện lợi và mạng lưới đối tác bán lẻ."
  },
  {
    key: "Promotion",
    title: "4. Xúc tiến (Promotion)",
    icon: Megaphone,
    desc: "Đổi mới cách truyền đạt giá trị, giảm rủi ro cảm nhận, giáo dục khách hàng dùng thử.",
    example: "Video minh họa trực quan tình huống sử dụng thay cho brochure thông số kỹ thuật khô khan."
  }
];

export const Slide04: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedP, setSelectedP] = useState(0);

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={4} label="TÁC ĐỘNG THỊ TRƯỜNG" accent="#0d9488" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0d9488" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Clean 4P Cards */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Thị Trường Tác Động<br />
              <span className="text-[#147D82]">Đến Đổi Mới Như Thế Nào?</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Phối thức 4P, hai cấp độ quyết định và bài học từ khảo sát 110 dự án phát triển sản phẩm
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {MARKETING_MIX.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = selectedP === idx;
              return (
                <button
                  key={p.key}
                  onClick={() => setSelectedP(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    isSelected
                      ? 'bg-white border-[#147D82] shadow-sm ring-2 ring-teal-500/20'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{p.title}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`} />
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-snug">
                    {p.desc}
                  </p>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`}>
                    Xem ví dụ →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 text-xs text-slate-800 space-y-1">
            <span className="font-bold text-[#147D82]">Minh họa thực tế: {MARKETING_MIX[selectedP].title}</span>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              {MARKETING_MIX[selectedP].example}
            </p>
          </div>
        </div>

        {/* Right Column: Strategic vs Tactical & 110 Projects */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
              Phân biệt hai cấp độ quyết định
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#147D82]">1. Marketing Chiến lược:</span>
                <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">
                  Xác định có nên gia nhập thị trường mới, phát triển ứng dụng công nghệ mới hoặc phục vụ phân khúc mới hay không.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-amber-700">2. Marketing Chiến thuật:</span>
                <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">
                  Triển khai định vị, định giá, thông điệp truyền thông và kênh phân phối của sản phẩm đã được lựa chọn.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Nghiên cứu 110 dự án phát triển sản phẩm</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600">
              Không có một quy trình đổi mới duy nhất tối ưu cho mọi hoàn cảnh. Dự án quen thuộc tối ưu bằng phân khúc; dự án mới lạ đòi hỏi tạo mẫu thực nghiệm liên tục.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
