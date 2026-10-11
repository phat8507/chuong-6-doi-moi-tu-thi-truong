import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

const QUADRANTS = [
  {
    id: "diff",
    title: "1. Khác biệt hóa",
    tech: "Công nghệ ổn định",
    market: "Thị trường ổn định",
    implication: "Cải tiến giá trị tương đối, chất lượng, chi phí và dịch vụ.",
    example: "Các mẫu smartphone cận cao cấp hoàn thiện khung viền và camera zoom."
  },
  {
    id: "arch",
    title: "2. Đổi mới kiến trúc",
    tech: "Công nghệ hiện có",
    market: "Thị trường mới",
    implication: "Tái kết hợp thành phần hiện có phục vụ công việc hoặc bối cảnh sử dụng khác.",
    example: "Máy quét mã vạch công nghiệp thu nhỏ thành thiết bị kiểm kho cầm tay."
  },
  {
    id: "tech",
    title: "3. Đổi mới công nghệ",
    tech: "Công nghệ mới lạ",
    market: "Thị trường hiện hữu",
    implication: "Xác lập ưu thế hiệu năng, kiểm chứng khả năng sử dụng và tốc độ thay thế.",
    example: "Động cơ điện thay thế động cơ đốt trong trên các phương tiện quen thuộc."
  },
  {
    id: "complex",
    title: "4. Sản phẩm phức tạp",
    tech: "Công nghệ mới lạ",
    market: "Thị trường mới",
    implication: "Đồng phát triển với người dùng, điều chỉnh kiến trúc và cơ chế chấp nhận.",
    example: "Thiết bị y tế chẩn đoán hình ảnh thế hệ đầu tiên."
  }
];

const IDEO_CHAIN = [
  { name: "Quan sát", desc: "Quan sát người dùng trong tình huống thao tác thật" },
  { name: "Nguyên mẫu", desc: "Tạo mô hình thử nghiệm nhanh bằng bìa/vật liệu đơn giản" },
  { name: "Kiểm thử", desc: "Hiệu chỉnh lặp lại liên tục trước khi thương mại hóa" }
];

export const Slide05: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[4];
  const [activeQuad, setActiveQuad] = useState<string>("diff");

  const current = QUADRANTS.find(q => q.id === activeQuad) || QUADRANTS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive 2x2 Matrix */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Ma trận 2×2: Trưởng thành công nghệ × Trưởng thành thị trường
            </span>

            <div className="grid grid-cols-2 text-center text-xs font-bold text-slate-500 pb-1">
              <span>Thị trường Đã có / Ổn định</span>
              <span>Thị trường Mới / Đang hình thành</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {QUADRANTS.map((q) => {
                const isSelected = activeQuad === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuad(q.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-2xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900">{q.title}</span>
                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-tight">
                      {q.implication}
                    </p>
                    <span className="text-[10px] font-mono text-teal-700 font-semibold">
                      {q.tech}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="font-bold text-teal-900">{current.title} — Quản trị trọng tâm:</span>
              <p className="text-[11px] text-slate-700 leading-relaxed">{current.implication}</p>
              <p className="text-[11px] text-slate-500 font-mono"><strong>Ví dụ:</strong> {current.example}</p>
            </div>
          </div>
        </div>

        {/* Right Column: IDEO Documentary Photo & Observation-Prototype-Testing Sequence */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-48">
            <img 
              src="/images/ideo-design.jpg" 
              alt="Licensed IDEO Prototyping Workshop Archive" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Phương pháp IDEO: Quan sát người dùng thao tác thật thay vì chỉ phát bảng hỏi
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase font-mono">
              Chuỗi học hỏi thực nghiệm IDEO:
            </span>
            <div className="space-y-1.5 text-xs">
              {IDEO_CHAIN.map((step, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-teal-800 text-[11px]">{idx + 1}. {step.name}:</span>
                  <span className="text-[10px] text-slate-600">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
