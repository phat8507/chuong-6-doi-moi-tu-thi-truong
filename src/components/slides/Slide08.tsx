import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface Persona {
  id: string;
  name: string;
  subtitle: string;
  context: string;
  needs: string[];
  buyingBehavior: string;
}

const PERSONAS: Persona[] = [
  {
    id: "student",
    name: "Persona 1: Sinh viên học trực tuyến",
    subtitle: "Học tập trong môi trường nhiều tạp âm",
    context: "Ngân sách 1.5 triệu đồng, học tại phòng trọ hoặc thư viện 5–6 tiếng/ngày, dùng laptop thường xuyên.",
    needs: [
      "Micrô khử tiếng ồn môi trường để phát biểu bài tập",
      "Đệm tai êm ái thoáng khí, không gây đau vành tai khi đeo lâu",
      "Dây cắm jack 3.5mm ổn định, không lo gián đoạn pin"
    ],
    buyingBehavior: "Nghiên cứu kỹ lưỡng các bài đánh giá về micrô trên diễn đàn học tập; hoàn toàn không bận tâm đến chỉ số kháng nước hay chống sốc thể thao."
  },
  {
    id: "athlete",
    name: "Persona 2: Vận động viên chạy bộ",
    subtitle: "Luyện tập ngoài trời cường độ cao",
    context: "Cùng độ tuổi 20 & cùng ngân sách 1.5 triệu đồng, chạy bộ mỗi sáng trên cung đường phố đô thị.",
    needs: [
      "Móc vành tai công thái học chống rơi tuột khi chạy nhanh",
      "Kháng mồ hôi và nước mưa chuẩn IPX7",
      "Công nghệ xuyên âm mở (ambient sound) để nghe được còi xe an toàn"
    ],
    buyingBehavior: "Ra quyết định dựa trên độ bám chắc và khả năng chịu thời tiết; chất lượng micrô đàm thoại chỉ cần ở mức trung bình cơ bản."
  }
];

export const Slide08: React.FC = React.memo(() => {
  const meta = CHAPTER6_SECTIONS[7];
  const [activePersona, setActivePersona] = useState<string>("student");

  const current = PERSONAS.find(p => p.id === activePersona) || PERSONAS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Interactive Two Contexts Persona Switcher */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                Chân dung người dùng B2C: Cùng ngân sách — Khác bối cảnh
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                Chuyển đổi chân dung
              </span>
            </div>

            {/* Persona Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PERSONAS.map((p) => {
                const isSelected = activePersona === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(p.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/30 shadow-sm translate-y-[-1px]'
                        : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">{p.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{p.subtitle}</p>
                    <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex items-center justify-between">
                      <span className={`text-xs font-semibold ${isSelected ? 'text-teal-700 font-bold' : 'text-slate-400'}`}>
                        {isSelected ? 'Đang chọn •' : 'Xem chi tiết nhu cầu →'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Revealed Persona Card with Enlarged Legible Text */}
            <div className="p-5 rounded-xl bg-teal-50/50 border border-teal-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-teal-200/60 pb-2">
                <h3 className="text-sm sm:text-base font-bold text-teal-950 font-mono uppercase tracking-wide">
                  {current.name}
                </h3>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  Ngân sách: 1.5 triệu VNĐ
                </span>
              </div>

              <div className="text-xs sm:text-[14px] text-slate-800 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Bối cảnh sử dụng (Context):</strong> {current.context}
              </div>

              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase font-mono tracking-wider block">
                  Nhu cầu trọng tâm ưu tiên:
                </span>
                <ul className="space-y-1.5 pl-1">
                  {current.needs.map((n, i) => (
                    <li key={i} className="text-xs sm:text-[14px] text-slate-700 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-white/95 border border-teal-100 text-xs sm:text-[13px] text-slate-800 leading-relaxed shadow-2xs">
                <strong className="text-teal-950 font-semibold font-mono">Hành vi ra quyết định:</strong> {current.buyingBehavior}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real Context Photography & Persil Power Historical Case */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            {/* Watercolor Context Illustration with Lazy Loading */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-amber-50/20 group">
              <img 
                src="/images/consumer-two-personas-watercolor.jpg" 
                alt="Watercolor illustration of Student with laptop and Urban runner in two lifestyle contexts" 
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex items-end p-4">
                <p className="text-xs sm:text-[13px] text-white font-medium leading-relaxed">
                  <strong>Bối cảnh thực tế:</strong> Cùng một tầm giá &amp; độ tuổi, sinh viên học trực tuyến và vận động viên đô thị đòi hỏi hai tập thuộc tính sản phẩm hoàn toàn đối lập.
                </p>
              </div>
            </div>

            {/* Historical Warning: Persil Power */}
            <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-3">
              <div className="flex items-center justify-between border-b border-rose-200/80 pb-2">
                <span className="font-bold text-sm text-rose-900 uppercase font-mono tracking-wider">
                  Bài học thất bại: Persil Power
                </span>
                <span className="text-xs text-rose-700 font-mono font-bold bg-rose-100 px-2 py-0.5 rounded">
                  Unilever 1994
                </span>
              </div>
              <p className="text-xs sm:text-[14px] text-rose-950/90 leading-relaxed">
                Dù đã thử nghiệm trên <strong>60.000 hộ gia đình</strong>, mẫu thử lại bị thiên lệch ở Bắc Âu mà bỏ qua thói quen giặt giũ nước ấm ở Nam Âu. Hậu quả là chất xúc tác Mangan làm mục rách sợi vải quần áo, buộc phải thu hồi và tổn thất hàng trăm triệu USD.
              </p>
              <div className="pt-2 border-t border-rose-200/80 text-xs sm:text-[13px] text-rose-900 font-medium italic">
                “Không tồn tại khách hàng trung bình; doanh nghiệp buộc phải định hình rõ bối cảnh cụ thể.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
});
