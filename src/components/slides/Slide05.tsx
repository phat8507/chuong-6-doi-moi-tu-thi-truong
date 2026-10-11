import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Grid, Eye, Cpu, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface Quadrant {
  id: string;
  title: string;
  techStatus: string;
  marketStatus: string;
  focus: string;
  implication: string;
  example: string;
  color: string;
  activeColor: string;
}

const QUADRANTS: Quadrant[] = [
  {
    id: "diff",
    title: "1. Khác Biệt Hóa (Differentiation)",
    techStatus: "Công nghệ ổn định / Đã có",
    marketStatus: "Thị trường ổn định / Đã có",
    focus: "Cải tiến giá trị tương đối, chất lượng, dịch vụ và tối ưu chi phí.",
    implication: "Khách hàng đã biết rõ sản phẩm, dễ so sánh tiêu chuẩn kỹ thuật; cạnh tranh chuyển sang định vị và uy tín thương hiệu.",
    example: "Các mẫu smartphone cận cao cấp bổ sung camera zoom hoặc hoàn thiện vật liệu vỏ máy.",
    color: "border-teal-500/30 bg-teal-950/20",
    activeColor: "border-teal-400 bg-teal-950/60 ring-2 ring-teal-400"
  },
  {
    id: "arch",
    title: "2. Đổi Mới Kiến Trúc (Architectural)",
    techStatus: "Công nghệ hiện có / Ổn định",
    marketStatus: "Thị trường mới / Phân khúc mới",
    focus: "Tái kết hợp thành phần hiện có phục vụ công việc hoặc bối cảnh sử dụng khác.",
    implication: "Không cần phát minh công nghệ lõi mới; chìa khóa là thấu hiểu bối cảnh khách hàng mới chưa được khai thác.",
    example: "Máy quét mã vạch công nghiệp được thu nhỏ thành thiết bị kiểm kho cầm tay hoặc bán vé tàu điện.",
    color: "border-blue-500/30 bg-blue-950/20",
    activeColor: "border-blue-400 bg-blue-950/60 ring-2 ring-blue-400"
  },
  {
    id: "tech",
    title: "3. Đổi Mới Công Nghệ (Technological)",
    techStatus: "Công nghệ mới lạ / Biến đổi",
    marketStatus: "Thị trường hiện hữu / Quen thuộc",
    focus: "Xác lập ưu thế hiệu năng, kiểm chứng khả năng tương thích và tốc độ thay thế.",
    implication: "Nhu cầu thị trường đã rõ ràng nhưng người mua thận trọng về độ tin cậy và chi phí chuyển đổi giải pháp.",
    example: "Động cơ điện thay thế động cơ đốt trong trên các phương tiện giao thông quen thuộc.",
    color: "border-indigo-500/30 bg-indigo-950/20",
    activeColor: "border-indigo-400 bg-indigo-950/60 ring-2 ring-indigo-400"
  },
  {
    id: "complex",
    title: "4. Sản Phẩm Phức Tạp (Complex / Radical)",
    techStatus: "Công nghệ mới lạ",
    marketStatus: "Thị trường mới hình thành",
    focus: "Đồng phát triển với người dùng dẫn đầu, điều chỉnh kiến trúc và cùng định hình thị trường.",
    implication: "Khách hàng chưa đủ từ vựng để diễn đạt nhu cầu; đòi hỏi tạo mẫu thực nghiệm nhiều vòng lặp nhanh.",
    example: "Thiết bị y tế chẩn đoán tiên tiến thế hệ đầu tiên hoặc hệ thống viễn thông lượng tử.",
    color: "border-amber-500/30 bg-amber-950/20",
    activeColor: "border-amber-400 bg-amber-950/60 ring-2 ring-amber-400"
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

  const currentQuad = QUADRANTS.find(q => q.id === selectedQuad) || QUADRANTS[0];

  return (
    <SlideLayout slide={slide} rightBadge="Ma trận 2×2 & Nghiên cứu người dùng">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive 2x2 Matrix */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-teal-300">Ma trận Độ trưởng thành: Công nghệ × Thị trường</span>
            <span className="text-[11px] italic">Bấm vào từng góc phần tư để xem phân tích</span>
          </div>

          {/* The 2x2 Grid with Axis Labels */}
          <div className="relative p-2 bg-slate-900/80 rounded-2xl border border-slate-800">
            {/* Top axis: Market Maturity */}
            <div className="grid grid-cols-2 text-center text-[11px] font-bold pb-2 text-slate-400">
              <div>Thị trường Đã có / Ổn định</div>
              <div>Thị trường Mới / Đang hình thành</div>
            </div>

            {/* Matrix Body: 4 Quadrants */}
            <div className="grid grid-cols-2 gap-2.5">
              {QUADRANTS.map((quad) => {
                const isSelected = selectedQuad === quad.id;
                return (
                  <button
                    key={quad.id}
                    onClick={() => setSelectedQuad(quad.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer ${
                      isSelected ? quad.activeColor : `${quad.color} hover:bg-slate-800/80`
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white leading-tight">{quad.title}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />}
                    </div>
                    <div className="text-[10px] text-slate-300 line-clamp-2 leading-tight">
                      {quad.focus}
                    </div>
                    <div className="text-[9px] font-mono text-teal-400/90 truncate">
                      {quad.techStatus}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Explanation for Selected Quadrant */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-300">{currentQuad.title}</span>
              <span className="text-[10px] text-amber-300 font-mono">Quản trị trọng tâm</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-relaxed">
              <strong>Hàm ý:</strong> {currentQuad.implication}
            </p>
            <p className="text-[11px] text-slate-400">
              <strong className="text-slate-300">Ví dụ:</strong> {currentQuad.example}
            </p>
          </div>
        </div>

        {/* Right Column: Case study IDEO and 5-step User-Centered Learning Process */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
                <Compass className="w-4 h-4 text-amber-400" /> Tình huống IDEO
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                Design Thinking
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              IDEO chứng minh rằng người dùng không thể diễn đạt rõ ràng nhu cầu với những sản phẩm chưa từng trải nghiệm. Thay vì bảng hỏi tĩnh, cần <strong>làm nguyên mẫu nhanh và quan sát thao tác thật</strong>.
            </p>

            {/* 5-step IDEO sequence */}
            <div className="space-y-1.5 pt-1">
              {IDEO_STEPS.map((s) => (
                <div key={s.step} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                  <span className="font-bold text-teal-300 text-[11px]">{s.name}</span>
                  <span className="text-[10px] text-slate-400">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-700 h-28 group">
            <img 
              src="/images/ideo-design.jpg" 
              alt="IDEO Prototyping Workshop" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-2.5">
              <span className="text-[10px] text-slate-300 font-medium">
                Thực nghiệm nguyên mẫu tại xưởng thiết kế IDEO
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
