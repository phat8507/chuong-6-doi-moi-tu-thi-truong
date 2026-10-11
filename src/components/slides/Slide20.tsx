import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { ShieldCheck, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  metrics: string[];
  lesson: string;
}

const PILLARS: Pillar[] = [
  {
    id: "innovation",
    title: "1. Hoạt động Đổi mới (Implementation)",
    subtitle: "Kênh số & Hạ tầng công nghệ",
    metrics: [
      "Triển khai ứng dụng FE ONLINE 2.0",
      "Tích hợp Chatbot AI chăm sóc khách hàng 24/7",
      "Số hóa quy trình thẩm định hồ sơ tại điểm bán"
    ],
    lesson: "Đổi mới kỹ thuật số phải gắn liền với quy trình thẩm định nội bộ, không đơn thuần chỉ là thay đổi giao diện."
  },
  {
    id: "customer",
    title: "2. Giá trị Khách hàng (Customer Value)",
    subtitle: "Minh bạch & Trải nghiệm thực tế",
    metrics: [
      "Dễ dàng tra cứu số tiền phải trả và ngày đến hạn",
      "Minh bạch lãi suất, điều khoản phí và lịch trả nợ",
      "Rút ngắn thời gian giải quyết sự cố hỗ trợ"
    ],
    lesson: "Một giao diện đẹp mắt không thể bù đắp cho việc sai sót thông tin tài chính hoặc sự thiếu minh bạch trong hợp đồng."
  },
  {
    id: "economic",
    title: "3. Hiệu quả Kinh tế (Economic Return)",
    subtitle: "Chất lượng tài sản & Kiểm soát rủi ro",
    metrics: [
      "Kiểm soát tỷ lệ nợ xấu (NPL) trong ngưỡng an toàn",
      "Tối ưu chi phí vận hành trên mỗi khoản vay giải ngân",
      "Phục hồi lợi nhuận trước thuế bền vững (>500 tỷ VND)"
    ],
    lesson: "Hiệu quả kinh tế phải dựa trên chất lượng tín dụng và thu hồi nợ, không chỉ nhìn vào số lượng người tải app."
  }
];

export const Slide20: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activePillar, setActivePillar] = useState<string>("customer");

  const current = PILLARS.find(p => p.id === activePillar) || PILLARS[1];

  return (
    <SlideLayout slide={slide}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: 3 Pillars Interactive Selection */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            {PILLARS.map((p) => {
              const isSelected = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    isSelected
                      ? 'bg-slate-800 border-teal-500 ring-1 ring-teal-400'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold text-white">{p.title}</span>
                  <div className="text-[10px] text-slate-400">{p.subtitle}</div>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-400' : 'text-slate-500'}`}>
                    Xem chi tiết →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Detailed Panel */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-300 uppercase">
                Chỉ số đo lường: {current.title}
              </span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              {current.metrics.map((m, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-amber-300 mt-2">
              <strong>Hàm ý quản trị rủi ro:</strong> {current.lesson}
            </div>
          </div>
        </div>

        {/* Right Column: Real Team Photography & University Analogy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 h-44 group shadow-md">
            <img 
              src="/images/team-collaboration.jpg" 
              alt="Interdisciplinary Team Risk Management Hub" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-2.5">
              <span className="text-[10px] text-slate-200">
                Đổi mới dịch vụ tài chính đòi hỏi phối hợp toàn diện giữa Công nghệ, Thẩm định và Quản trị Rủi ro
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            🎓 <strong>Ẩn dụ giáo dục:</strong> Giống như trường đại học chuyển cổng đăng ký môn học lên online — nếu sinh viên không thể tra cứu rõ môn hay hệ thống nghẽn mạng, việc bỏ mẫu giấy đơn thuần chưa thể coi là đổi mới thành công.
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
