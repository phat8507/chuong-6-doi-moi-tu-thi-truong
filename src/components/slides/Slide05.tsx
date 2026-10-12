import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

const QUADRANTS = [
  {
    id: "diff",
    title: "1. Khác biệt hóa",
    tech: "Công nghệ ổn định",
    market: "Thị trường ổn định",
    implication: "Cải tiến giá trị tương đối, chất lượng, chi phí và dịch vụ để giữ chân khách hàng.",
    example: "Các mẫu smartphone cận cao cấp hoàn thiện khung viền kim loại và camera zoom quang học.",
    color: "emerald"
  },
  {
    id: "arch",
    title: "2. Đổi mới kiến trúc",
    tech: "Công nghệ hiện có",
    market: "Thị trường mới",
    implication: "Tái kết hợp thành phần hiện có phục vụ công việc hoặc bối cảnh sử dụng hoàn toàn khác.",
    example: "Máy quét mã vạch công nghiệp thu nhỏ thành thiết bị kiểm kho cầm tay cho nhân viên bán lẻ.",
    color: "blue"
  },
  {
    id: "tech",
    title: "3. Đổi mới công nghệ",
    tech: "Công nghệ mới lạ",
    market: "Thị trường hiện hữu",
    implication: "Xác lập ưu thế hiệu năng đột phá, kiểm chứng khả năng sử dụng và tốc độ thay thế.",
    example: "Động cơ thuần điện thay thế động cơ đốt trong trên các phương tiện quen thuộc hàng ngày.",
    color: "indigo"
  },
  {
    id: "complex",
    title: "4. Sản phẩm phức tạp",
    tech: "Công nghệ mới lạ",
    market: "Thị trường mới",
    implication: "Đồng phát triển với người dùng tiên phong, điều chỉnh kiến trúc và cơ chế chấp nhận.",
    example: "Hệ thống thiết bị y tế chẩn đoán hình ảnh thế hệ đầu tiên phối hợp cùng viện nghiên cứu.",
    color: "amber"
  }
];

const IDEO_CHAIN = [
  { step: "01", name: "Quan sát sâu sắc", desc: "Quan sát người dùng trong bối cảnh thực tế thay vì chỉ phát bảng hỏi khảo sát." },
  { step: "02", name: "Tạo mẫu nhanh", desc: "Tạo mô hình thử nghiệm thô ráp bằng xốp/bìa để chạm và tương tác thực thể." },
  { step: "03", name: "Kiểm thử lặp lại", desc: "Hiệu chỉnh liên tục qua phản hồi thực chiến trước khi thương mại hóa quy mô lớn." }
];

export const Slide05: React.FC = React.memo(() => {
  const meta = CHAPTER6_SECTIONS[4];
  const [activeQuad, setActiveQuad] = useState<string>("diff");

  const current = QUADRANTS.find(q => q.id === activeQuad) || QUADRANTS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Interactive 2x2 Matrix */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                Ma trận 2×2: Trưởng thành công nghệ × Thị trường
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                Chọn góc phần tư
              </span>
            </div>

            {/* Matrix axes labels */}
            <div className="grid grid-cols-2 text-center text-xs sm:text-sm font-bold text-slate-600 px-1">
              <span className="py-1 bg-slate-50/80 rounded-lg border border-slate-200/50">Thị trường Đã có / Ổn định</span>
              <span className="py-1 bg-slate-50/80 rounded-lg border border-slate-200/50">Thị trường Mới / Đang hình thành</span>
            </div>

            {/* 4 Quadrants Interactive Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {QUADRANTS.map((q) => {
                const isSelected = activeQuad === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuad(q.id)}
                    className={`p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[130px] sm:min-h-[140px] ${
                      isSelected
                        ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/30 shadow-md translate-y-[-2px]'
                        : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white shadow-2xs'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-teal-950' : 'text-slate-900'}`}>
                        {q.title}
                      </span>
                      <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
                        {q.implication}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-mono text-teal-800 font-semibold bg-teal-100/80 px-2 py-0.5 rounded-md">
                        {q.tech}
                      </span>
                      <span className={`text-xs font-medium ${isSelected ? 'text-teal-700 font-bold' : 'text-slate-400'}`}>
                        {isSelected ? 'Đang chọn •' : 'Chi tiết →'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Quadrant Implication & Example Details */}
            <div className="p-4 sm:p-5 rounded-xl bg-teal-50/50 border border-teal-200/80 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-teal-950 uppercase font-mono tracking-wide">
                  {current.title} — Quản trị trọng tâm:
                </span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-slate-800 leading-relaxed font-medium">
                {current.implication}
              </p>
              <div className="p-3 rounded-lg bg-white/90 border border-teal-100 text-xs sm:text-sm text-slate-700">
                <strong className="text-teal-900 font-semibold font-mono">Ví dụ thực tế:</strong> {current.example}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: IDEO Documentary Photo & Empirical Learning Loop */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            {/* IDEO Photo Card with real documentary image */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm h-52 sm:h-56 group">
              <img 
                src="/images/ideo-design.jpg" 
                alt="Licensed IDEO Prototyping Workshop Archive" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-4">
                <p className="text-xs sm:text-[13px] text-white font-medium leading-relaxed">
                  <strong>Phương pháp IDEO:</strong> Quan sát người dùng thao tác thực tế thay vì chỉ thu thập ý kiến qua bảng hỏi trừu tượng.
                </p>
              </div>
            </div>

            {/* IDEO 3-step learning loop */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase font-mono tracking-wider block">
                Chuỗi học hỏi thực nghiệm IDEO:
              </span>
              <div className="space-y-2.5">
                {IDEO_CHAIN.map((step) => (
                  <div 
                    key={step.step} 
                    className="p-3 sm:p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:border-teal-200 transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-teal-800 bg-teal-100 px-2 py-1 rounded-md shrink-0">
                      {step.step}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{step.name}</h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaway Note */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-[13px] text-amber-900 leading-relaxed">
              <strong>Nguyên lý cốt lõi:</strong> Giảm rủi ro thị trường bằng cách đẩy nhanh tốc độ tạo mẫu và thất bại giá rẻ ngay từ giai đoạn ý tưởng.
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
});
