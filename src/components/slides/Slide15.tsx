import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Zap, Puzzle, Sliders, PlayCircle, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RogerAttribute {
  id: string;
  name: string;
  english: string;
  desc: string;
  ebikeExample: string;
  impact: string;
  icon: any;
  color: string;
}

const ROGERS_ATTRIBUTES: RogerAttribute[] = [
  {
    id: "relative-advantage",
    name: "1. Lợi thế tương đối",
    english: "Relative Advantage",
    desc: "Mức độ mà giải pháp mới được nhận thấy là tốt hơn phương án cũ về kinh tế, tiện lợi hay uy tín xã hội.",
    ebikeExample: "Đi nhanh hơn xe đạp thường, không tốn sức khi ngược gió, tiết kiệm tiền xăng so với xe máy.",
    impact: "Tương quan thuận chiều mạnh nhất với tốc độ lan tỏa.",
    icon: Zap,
    color: "text-amber-400 bg-amber-950/40 border-amber-500/30"
  },
  {
    id: "compatibility",
    name: "2. Tính tương thích",
    english: "Compatibility",
    desc: "Mức độ phù hợp với giá trị, niềm tin, kinh nghiệm đã có và thói quen sinh hoạt của người dùng.",
    ebikeExample: "Có chỗ cắm sạc thuận tiện tại chung cư, vừa vặn làn đường hiện hữu, luật giao thông cho phép.",
    impact: "Nếu không tương thích với hạ tầng, sản phẩm sẽ bị từ chối.",
    icon: Puzzle,
    color: "text-teal-400 bg-teal-950/40 border-teal-500/30"
  },
  {
    id: "complexity",
    name: "3. Độ phức tạp",
    english: "Complexity",
    desc: "Mức độ khó khăn cảm nhận trong việc thấu hiểu cách thức vận hành và sử dụng công nghệ mới.",
    ebikeExample: "Bảng đồng hồ dễ nhìn, chỉ cần vặn ga là chạy, không đòi hỏi kỹ năng sửa chữa điện phức tạp.",
    impact: "Tương quan nghịch chiều: càng phức tạp thì lan tỏa càng chậm.",
    icon: Sliders,
    color: "text-rose-400 bg-rose-950/40 border-rose-500/30"
  },
  {
    id: "trialability",
    name: "4. Khả năng dùng thử",
    english: "Trialability",
    desc: "Mức độ mà đổi mới có thể được trải nghiệm, dùng thử ở quy mô nhỏ mà không cần cam kết lớn.",
    ebikeExample: "Cho khách hàng mượn lái thử miễn phí một vòng quanh công viên trước khi ký hợp đồng mua.",
    impact: "Giảm mạnh rủi ro cảm nhận và đẩy nhanh quyết định mua.",
    icon: PlayCircle,
    color: "text-sky-400 bg-sky-950/40 border-sky-500/30"
  },
  {
    id: "observability",
    name: "5. Khả năng quan sát",
    english: "Observability",
    desc: "Mức độ mà kết quả, công dụng hoặc hình ảnh sử dụng đổi mới có thể dễ dàng nhìn thấy bởi người khác.",
    ebikeExample: "Thấy bạn bè, đồng nghiệp đi xe êm ái mỗi sáng, kiểu dáng đẹp mắt gây ấn tượng trên đường phố.",
    impact: "Kích hoạt hiệu ứng truyền miệng và thúc đẩy đám đông bắt chước.",
    icon: Eye,
    color: "text-purple-400 bg-purple-950/40 border-purple-500/30"
  }
];

export const Slide15: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedAttr, setSelectedAttr] = useState<string>("relative-advantage");

  const current = ROGERS_ATTRIBUTES.find(a => a.id === selectedAttr) || ROGERS_ATTRIBUTES[0];

  return (
    <SlideLayout slide={slide} rightBadge="Năm thuộc tính Rogers (2003)">
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Top 5 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {ROGERS_ATTRIBUTES.map((attr) => {
            const Icon = attr.icon;
            const isSelected = selectedAttr === attr.id;
            return (
              <button
                key={attr.id}
                onClick={() => setSelectedAttr(attr.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-36 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 border-teal-400 shadow-lg ring-1 ring-teal-400 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${attr.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </div>

                <div>
                  <div className="text-xs font-bold text-white leading-tight mt-2">{attr.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{attr.english}</div>
                </div>

                <div className="text-[9px] text-teal-400 font-medium">Bấm xem ví dụ →</div>
              </button>
            );
          })}
        </div>

        {/* Selected Attribute Detail Display with E-Bike Case */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-500/20 text-teal-300 uppercase">
                {current.english}
              </span>
              <h3 className="text-base font-bold text-white">{current.name}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.desc}
            </p>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-amber-200">
              ⚡ <strong>Ẩn dụ xe đạp điện:</strong> {current.ebikeExample}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 shrink-0 max-w-xs space-y-1 text-xs">
            <span className="font-bold text-teal-300">Tác động lên tốc độ lan tỏa:</span>
            <p className="text-slate-300 text-[11px] leading-snug">
              {current.impact}
            </p>
          </div>
        </div>

        {/* Academic Note Footer */}
        <div className="p-3 rounded-xl bg-slate-800/60 text-xs text-slate-400 flex items-center justify-between">
          <span>
            <em>Nguyên tắc học thuật:</em> Thuộc tính không nằm cố định ở sản phẩm mà được định hình qua lăng kính cảm nhận của từng phân khúc khách hàng cụ thể.
          </span>
          <ArrowRight className="w-4 h-4 text-teal-400 shrink-0" />
        </div>
      </div>
    </SlideLayout>
  );
};
