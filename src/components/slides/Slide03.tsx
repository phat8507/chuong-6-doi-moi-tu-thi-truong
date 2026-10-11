import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Search, Sparkles, Cpu, ShoppingBag, Share2, RefreshCw, ChevronRight } from 'lucide-react';

const STAGES = [
  {
    step: 1,
    title: "1. Nhận diện thị trường",
    subtitle: "Lắng nghe tín hiệu & cơ hội",
    desc: "Khám phá vấn đề chưa được giải quyết của người dùng, phân tích nhu cầu chưa bộc lộ và đánh giá bối cảnh cạnh tranh.",
    icon: Search,
    color: "from-sky-500 to-blue-600"
  },
  {
    step: 2,
    title: "2. Khác biệt hóa",
    subtitle: "Xây dựng giá trị tương đối",
    desc: "Chuyển tiếng nói khách hàng (QFD) thành chỉ tiêu kỹ thuật thực tiễn; tập trung vào lợi ích cảm nhận so với chi phí bỏ ra.",
    icon: Sparkles,
    color: "from-teal-500 to-emerald-600"
  },
  {
    step: 3,
    title: "3. Phát triển chiến lược",
    subtitle: "Phân khúc & 5 hướng",
    desc: "Lựa chọn phân khúc B2C/B2B và 5 hướng phát triển từ thiết kế cốt lõi (thêm tính năng, lên/xuống phân khúc, tùy chọn, hỗn hợp).",
    icon: Cpu,
    color: "from-indigo-500 to-purple-600"
  },
  {
    step: 4,
    title: "4. Thương mại hóa",
    subtitle: "Chuyển giao giải pháp hoàn chỉnh",
    desc: "Tích hợp công nghệ với sản phẩm hỗ trợ, cấp phép sở hữu trí tuệ (ARM), xử lý sản phẩm phức tạp và giảm bất định cho khách hàng.",
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-600"
  },
  {
    step: 5,
    title: "5. Lan tỏa & Dự báo",
    subtitle: "Chấp nhận & Mở rộng quy mô",
    desc: "Theo dõi 5 đặc tính lan tỏa Rogers, đường cong chữ S, dự báo phía cầu/cung và liên tục thu thập phản hồi để tinh chỉnh.",
    icon: Share2,
    color: "from-rose-500 to-pink-600"
  }
];

export const Slide03: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  return (
    <SlideLayout slide={slide} rightBadge="Tiến trình 5 Giai đoạn">
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Analogous Metaphor banner */}
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm">
              💡
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-white">Ẩn dụ quản trị:</strong> Giống như quy trình mở một nhà hàng — tìm hiểu khẩu vị khu vực, định vị phong cách, chọn nhóm thực khách, tổ chức phục vụ và quan sát xem khách có quay lại không!
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-xs text-teal-400 font-semibold shrink-0">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Vòng phản hồi liên tục</span>
          </div>
        </div>

        {/* 5-Stage Interactive Progression Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {STAGES.map((stg, idx) => {
            const Icon = stg.icon;
            const isSelected = selectedStage === idx;
            return (
              <button
                key={stg.step}
                onClick={() => setSelectedStage(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'bg-slate-800 border-teal-400 shadow-lg shadow-teal-900/30 ring-1 ring-teal-400 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stg.color} text-white flex items-center justify-center font-bold text-xs shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">0{stg.step}</span>
                </div>

                <div>
                  <div className="text-xs font-bold text-white leading-tight mt-2">{stg.title}</div>
                  <div className="text-[10px] text-teal-400 font-medium truncate mt-0.5">{stg.subtitle}</div>
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel with Feedback Loop Indicator */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/20 text-teal-300 uppercase">
                Giai đoạn {STAGES[selectedStage].step}
              </span>
              <h3 className="text-base font-bold text-white">{STAGES[selectedStage].title}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {STAGES[selectedStage].desc}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 shrink-0 max-w-xs flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-amber-300">Phản hồi thị trường:</span> Nếu khách hàng chê hoặc không chấp nhận, doanh nghiệp phải lập tức quay lại điều chỉnh thiết kế ban đầu.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
