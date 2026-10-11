import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

interface RogerAttribute {
  id: string;
  name: string;
  desc: string;
  ebikeExample: string;
  impact: string;
}

const ROGERS_ATTRIBUTES: RogerAttribute[] = [
  {
    id: "relative-advantage",
    name: "1. Lợi thế tương đối",
    desc: "Mức độ mà giải pháp mới được nhận thấy là tốt hơn phương án cũ về kinh tế, thuận tiện hoặc danh tiếng.",
    ebikeExample: "Đi nhanh hơn xe đạp thường, không tốn sức ngược gió, tiết kiệm tiền xăng so với xe máy.",
    impact: "Tương quan thuận chiều mạnh nhất với tốc độ lan tỏa."
  },
  {
    id: "compatibility",
    name: "2. Tính tương thích",
    desc: "Mức độ phù hợp với giá trị, niềm tin, kinh nghiệm đã có và thói quen sinh hoạt hiện tại.",
    ebikeExample: "Có chỗ cắm sạc thuận tiện tại bãi xe, vừa làn đường hiện hữu, dễ gửi xe.",
    impact: "Nếu không tương thích với hạ tầng, sản phẩm sẽ lan tỏa rất chậm."
  },
  {
    id: "complexity",
    name: "3. Độ phức tạp",
    desc: "Mức độ khó khăn cảm nhận trong việc thấu hiểu và sử dụng đổi mới.",
    ebikeExample: "Bảng điều khiển dễ hiểu, chỉ vặn ga là chạy, không đòi hỏi kỹ năng bảo trì điện phức tạp.",
    impact: "Tương quan nghịch chiều: càng phức tạp chi phí học cách dùng càng lớn."
  },
  {
    id: "trialability",
    name: "4. Khả năng dùng thử",
    desc: "Mức độ mà đổi mới có thể được trải nghiệm ở quy mô nhỏ trước khi cam kết mua.",
    ebikeExample: "Cho khách hàng mượn chạy thử một vòng quanh công viên trước khi thanh toán.",
    impact: "Giảm mạnh rủi ro cảm nhận và đẩy nhanh quyết định mua."
  },
  {
    id: "observability",
    name: "5. Khả năng quan sát",
    desc: "Mức độ mà kết quả hoặc hình ảnh sử dụng đổi mới có thể dễ dàng được người khác nhìn thấy.",
    ebikeExample: "Nhìn thấy bạn bè trong lớp đi xe đạp điện an toàn, đẹp mắt mỗi ngày.",
    impact: "Kích hoạt hiệu ứng truyền miệng và thúc đẩy đám đông bắt chước."
  }
];

export const Slide15: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedAttr, setSelectedAttr] = useState<string>("relative-advantage");

  const current = ROGERS_ATTRIBUTES.find(a => a.id === selectedAttr) || ROGERS_ATTRIBUTES[0];

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={15} label="LAN TỎA ĐỔI MỚI" accent="#0d9488" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0d9488" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="display-lg text-slate-900 leading-tight">
            Năm Đặc Điểm Quyết Định<br />
            <span className="text-teal-700">Tốc Độ Lan Tỏa Của Đổi Mới</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-serif italic">
            Khung lý thuyết kinh điển của Rogers (2003) và phương pháp ghi nhớ qua ví dụ xe đạp điện
          </p>
        </div>

        {/* 5 Attribute Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {ROGERS_ATTRIBUTES.map((attr) => {
            const isSelected = selectedAttr === attr.id;
            return (
              <button
                key={attr.id}
                onClick={() => setSelectedAttr(attr.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${
                  isSelected
                    ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className="text-xs font-bold text-slate-900 leading-snug">{attr.name}</span>
                <span className="text-[10px] text-teal-700 font-semibold mt-2">Xem chi tiết →</span>
              </button>
            );
          })}
        </div>

        {/* Selected Attribute Detail Box */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-teal-800 uppercase font-mono">{current.name}:</span>
            <p className="text-xs text-slate-700 leading-relaxed">{current.desc}</p>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800">
              ⚡ <strong>Ẩn dụ xe đạp điện:</strong> {current.ebikeExample}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 shrink-0 max-w-xs space-y-1 text-xs">
            <span className="font-bold text-teal-900">Tác động lan tỏa:</span>
            <p className="text-slate-700 text-[11px] leading-snug">{current.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
