import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { CheckCircle2, Compass } from 'lucide-react';

interface Quadrant {
  id: string;
  title: string;
  techStatus: string;
  marketStatus: string;
  focus: string;
  implication: string;
  example: string;
}

const QUADRANTS: Quadrant[] = [
  {
    id: "diff",
    title: "1. Khác Biệt Hóa (Differentiation)",
    techStatus: "Công nghệ ổn định",
    marketStatus: "Thị trường ổn định",
    focus: "Cải tiến giá trị tương đối, chất lượng, chi phí và dịch vụ.",
    implication: "Khách hàng đã biết rõ sản phẩm, dễ so sánh tiêu chuẩn kỹ thuật; cạnh tranh chuyển sang định vị và uy tín thương hiệu.",
    example: "Các mẫu smartphone cận cao cấp hoàn thiện vật liệu vỏ máy hoặc camera zoom."
  },
  {
    id: "arch",
    title: "2. Đổi Mới Kiến Trúc (Architectural)",
    techStatus: "Công nghệ hiện có",
    marketStatus: "Thị trường / Phân khúc mới",
    focus: "Tái kết hợp thành phần hiện có phục vụ công việc hoặc bối cảnh sử dụng khác.",
    implication: "Không cần phát minh công nghệ lõi mới; chìa khóa là thấu hiểu bối cảnh khách hàng mới chưa được khai thác.",
    example: "Máy quét mã vạch công nghiệp thu nhỏ thành thiết bị kiểm kho cầm tay hoặc bán vé xe bus."
  },
  {
    id: "tech",
    title: "3. Đổi Mới Công Nghệ (Technological)",
    techStatus: "Công nghệ mới lạ",
    marketStatus: "Thị trường hiện hữu",
    focus: "Xác lập ưu thế hiệu năng, kiểm chứng khả năng sử dụng và tốc độ thay thế.",
    implication: "Nhu cầu thị trường đã rõ ràng nhưng người mua thận trọng về độ tin cậy và chi phí chuyển đổi giải pháp.",
    example: "Động cơ điện thay thế động cơ đốt trong trên các phương tiện quen thuộc."
  },
  {
    id: "complex",
    title: "4. Sản Phẩm Phức Tạp (Complex / Radical)",
    techStatus: "Công nghệ mới lạ",
    marketStatus: "Thị trường mới hình thành",
    focus: "Đồng phát triển với người dùng, điều chỉnh kiến trúc và cơ chế chấp nhận.",
    implication: "Khách hàng chưa đủ từ vựng để diễn đạt nhu cầu; đòi hỏi tạo mẫu thực nghiệm nhiều vòng lặp nhanh.",
    example: "Thiết bị y tế chẩn đoán hình ảnh tiên tiến hoặc hệ thống viễn thông lượng tử."
  }
];

const IDEO_STEPS = [
  { step: 1, name: "1. Thấu hiểu", desc: "Tìm hiểu thị trường & công nghệ" },
  { step: 2, name: "2. Quan sát", desc: "Quan sát hành vi thực tế" },
  { step: 3, name: "3. Trực quan", desc: "Tạo mô hình & nguyên mẫu nhanh" },
  { step: 4, name: "4. Kiểm tra", desc: "Đánh giá qua các vòng lặp" },
  { step: 5, name: "5. Triển khai", desc: "Thương mại hóa giải pháp" },
];

export const Slide05: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedQuad, setSelectedQuad] = useState<string>("diff");

  const current = QUADRANTS.find(q => q.id === selectedQuad) || QUADRANTS[0];

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={5} label="MA TRẬN CÔNG NGHỆ × THỊ TRƯỜNG" accent="#4f46e5" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#4f46e5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive 2x2 Clean Matrix */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Công Nghệ Và Thị Trường<br />
              <span className="text-indigo-600">Quyết Định Cách Đổi Mới</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Ma trận 2×2 độ trưởng thành và quy trình học hỏi thực nghiệm 5 bước từ IDEO
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="grid grid-cols-2 text-center text-xs font-bold text-slate-500 pb-1">
              <span>Thị trường Đã có / Ổn định</span>
              <span>Thị trường Mới / Đang hình thành</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {QUADRANTS.map((quad) => {
                const isSelected = selectedQuad === quad.id;
                return (
                  <button
                    key={quad.id}
                    onClick={() => setSelectedQuad(quad.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                      isSelected
                        ? 'bg-indigo-50/70 border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{quad.title}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                    </div>
                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-tight">
                      {quad.focus}
                    </p>
                    <span className="text-[10px] font-mono text-indigo-600 font-semibold">
                      {quad.techStatus}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-indigo-900">{current.title} — Hàm ý quản trị:</span>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              {current.implication}
            </p>
            <p className="text-[11px] text-slate-500 pt-1 font-mono">
              <strong>Ví dụ:</strong> {current.example}
            </p>
          </div>
        </div>

        {/* Right Column: Case study IDEO and Documentary Photo */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-48 group">
            <img 
              src="/images/ideo-design.jpg" 
              alt="IDEO Prototyping Workshop" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Thực nghiệm nguyên mẫu tại xưởng thiết kế IDEO: Người dùng thể hiện nhu cầu qua hành động
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Quy trình 5 bước học hỏi IDEO
              </span>
              <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-bold">
                Design Thinking
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              {IDEO_STEPS.map((s) => (
                <div key={s.step} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-800 text-[11px]">{s.name}</span>
                  <span className="text-[10px] text-slate-500">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
