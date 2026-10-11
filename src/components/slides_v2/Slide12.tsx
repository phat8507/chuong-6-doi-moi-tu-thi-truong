import React, { useState } from 'react';
import { SlideCard } from '../SlideCard';

const PATENT_CONDITIONS = [
  '1. Tính mới (Novelty): Chưa từng công bố trước đó',
  '2. Trình độ sáng tạo: Không hiển nhiên đối với chuyên gia',
  '3. Khả năng áp dụng công nghiệp: Sản xuất được đại trà',
  '4. Đối tượng hợp pháp: Không thuộc nhóm loại trừ',
  '5. Bộc lộ đầy đủ: Đủ rõ để người trong ngành làm lại'
];

const PRICING_METHODS = [
  '1. So sánh thị trường: Đối chiếu mức phí các hợp đồng tương tự',
  '2. Chi phí đầu tư: Dựa trên chi phí R&D và tỷ suất lợi nhuận kỳ vọng',
  '3. Dòng tiền chiết khấu (DCF): Ước tính lợi nhuận tương lai công nghệ tạo ra',
  '4. Giá trị kinh tế (25% Rule): Thu 25% lợi nhuận gộp từ công nghệ'
];

export const Slide12: React.FC = () => {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(3);

  return (
    <SlideCard
      slideNum="12"
      categoryTag="TÀI SẢN TRÍ TUỆ"
      title="Khai thác tài sản trí tuệ và trường hợp ARM"
      subtitle="Không cần trực tiếp sản xuất, doanh nghiệp vẫn có thể thu giữ giá trị khổng lồ qua cấp phép sáng chế."
      theme="dark"
      bottomLabel="12. ARM: Không sản xuất vẫn có thể kinh doanh công nghệ (10 phút)"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Col 1: 5 Patent Conditions */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">5 Điều kiện cấp bằng sáng chế</span>
            {PATENT_CONDITIONS.map((c, idx) => (
              <div key={idx} className="text-[11px] text-slate-300 leading-tight">
                {c}
              </div>
            ))}
          </div>

          {/* Col 2: 4 Pricing Methods */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">4 Cách định giá cấp phép</span>
            {PRICING_METHODS.map((m, idx) => (
              <div key={idx} className="text-[11px] text-slate-300 leading-tight">
                {m}
              </div>
            ))}
          </div>

          {/* Col 3: ARM Model */}
          <div className="p-3.5 rounded-xl bg-teal-950/60 border border-teal-800/80 space-y-2">
            <span className="text-[10px] font-mono font-bold text-teal-300 uppercase">Mô hình ARM Holdings</span>
            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded bg-slate-900/80 border border-teal-900">
                <span className="font-bold text-white">Bán giấy phép (Upfront License):</span>
                <p className="text-[10px] text-slate-400">Thu phí thiết kế kiến trúc kiến tạo ban đầu.</p>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-teal-900">
                <span className="font-bold text-teal-300">Thu phí bản quyền (Royalty):</span>
                <p className="text-[10px] text-slate-400">Thu 1-2% trên mỗi con chip sản xuất ra (Apple, Qualcomm, Samsung).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Switcher Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setActiveTab(1)}
            className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              activeTab === 1 ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 text-slate-300 border-slate-800'
            }`}
          >
            1. Bảo hộ sáng chế
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              activeTab === 2 ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 text-slate-300 border-slate-800'
            }`}
          >
            2. Định giá
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              activeTab === 3 ? 'bg-teal-500 text-slate-950 border-teal-400' : 'bg-slate-900 text-slate-300 border-slate-800'
            }`}
          >
            3. Mô hình kinh doanh
          </button>
        </div>
      </div>
    </SlideCard>
  );
};
