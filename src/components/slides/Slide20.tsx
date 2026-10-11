import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { ShieldCheck, HeartHandshake, TrendingUp, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  metrics: string[];
  lesson: string;
  icon: any;
  color: string;
}

const PILLARS: Pillar[] = [
  {
    id: "innovation",
    title: "1. Hoạt động Đổi mới (Implementation)",
    subtitle: "Kênh số & Hạ tầng công nghệ",
    metrics: [
      "Triển khai ứng dụng FE ONLINE 2.0 đa nền tảng",
      "Tích hợp Chatbot AI chăm sóc khách hàng 24/7",
      "Tối ưu hóa quy trình nhập liệu số tại điểm bán"
    ],
    lesson: "Đổi mới kỹ thuật số phải được tích hợp chặt chẽ vào quy trình nghiệp vụ thẩm định, không chỉ là giao diện bên ngoài.",
    icon: Layers,
    color: "text-teal-400 border-teal-500/30 bg-teal-950/20"
  },
  {
    id: "customer",
    title: "2. Giá trị Khách hàng (Customer Value)",
    subtitle: "Minh bạch & Trải nghiệm thực tế",
    metrics: [
      "Dễ dàng tra cứu thông tin dư nợ và ngày thanh toán",
      "Minh bạch lãi suất, điều khoản phí và lịch trả góp",
      "Giảm thời gian chờ đợi phản hồi từ hỗ trợ viên"
    ],
    lesson: "Một giao diện đẹp mắt không thể bù đắp cho việc sai sót thông tin tài chính hoặc sự mập mờ trong điều khoản tín dụng.",
    icon: HeartHandshake,
    color: "text-amber-400 border-amber-500/30 bg-amber-950/20"
  },
  {
    id: "economic",
    title: "3. Hiệu quả Kinh tế (Economic Return)",
    subtitle: "Chất lượng tài sản & Kiểm soát rủi ro",
    metrics: [
      "Kiểm soát tỷ lệ nợ xấu (NPL) trong ngưỡng an toàn",
      "Tiết giảm chi phí vận hành (CIR) trên mỗi giao dịch",
      "Phục hồi lợi nhuận trước thuế bền vững (>500 tỷ VND)"
    ],
    lesson: "Mục tiêu kinh tế phải được đo bằng năng lực sinh lợi dài hạn kết hợp an toàn tài chính, không chạy theo tăng trưởng nóng.",
    icon: TrendingUp,
    color: "text-sky-400 border-sky-500/30 bg-sky-950/20"
  }
];

export const Slide20: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activePillar, setActivePillar] = useState<string>("customer");

  const current = PILLARS.find(p => p.id === activePillar) || PILLARS[1];

  return (
    <SlideLayout slide={slide} rightBadge="Khung 3 Trụ cột Quản trị Đổi mới">
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* 3 Pillars Interactive Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            const isSelected = activePillar === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-36 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#147D82] shadow-md ring-2 ring-[#147D82]/20 scale-[1.01]'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#102A43]">{p.title}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`} />
                </div>
                <div className="text-[11px] text-slate-500 font-medium">{p.subtitle}</div>
                <span className={`text-[10px] font-semibold ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`}>
                  Xem chỉ số đo lường & bài học →
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Panel */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-100 text-[#147D82] uppercase">
                Trọng tâm đánh giá
              </span>
              <h3 className="text-base font-bold text-[#102A43]">{current.title}</h3>
            </div>
            <ul className="text-xs text-slate-700 space-y-1">
              {current.metrics.map((m, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#147D82] shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0 max-w-sm space-y-1 text-xs">
            <span className="font-bold text-[#102A43] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-600" /> Hàm ý quản trị rủi ro tín dụng
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {current.lesson}
            </p>
          </div>
        </div>

        {/* University Portal Analogy */}
        <div className="p-3 rounded-xl bg-slate-100 text-xs text-slate-700 flex items-center justify-between">
          <span>
            🎓 <strong>Ẩn dụ giáo dục:</strong> Giống như trường đại học chuyển đăng ký môn học lên cổng trực tuyến — nếu cổng liên tục nghẽn mạng và sinh viên không thể liên hệ phòng đào tạo, việc bỏ giấy tờ đơn thuần chưa thể coi là đổi mới thành công!
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
