import React from 'react';
import { SlideCard } from '../SlideCard';

const CORE_POINTS = [
  '1. Công nghệ cơ bản vs. Sản phẩm hoàn chỉnh: Khách hàng mua giải pháp hoàn chỉnh',
  '2. Thành phần hỗ trợ (Complementary Assets): Kênh phân phối, bảo hành, linh kiện',
  '3. Khác biệt hóa công nghệ: Tốc độ xử lý, tiết kiệm năng lượng, độ tin cậy',
  '4. Lỗi thời công nghệ: Chu kỳ thay thế ngày càng rút ngắn',
  '5. Chi phí chuyển đổi (Switching Costs): Rào cản giữ chân hoặc ngăn cản khách hàng'
];

export const Slide11: React.FC = () => {
  return (
    <SlideCard
      slideNum="11"
      categoryTag="TÍCH HỢP"
      title="Từ công nghệ đến sản phẩm thương mại"
      subtitle="Chuyển hóa năng lực kỹ thuật phòng thí nghiệm thành giải pháp hoàn chỉnh trên thị trường."
      theme="dark"
      bottomLabel="11. Từ công nghệ đến sản phẩm thương mại (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: 5 Integration Dimensions */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            {CORE_POINTS.map((pt, idx) => (
              <div key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                <span className="w-5 h-5 rounded-md bg-teal-950 text-teal-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-teal-800/60">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-800/60 text-xs text-teal-200">
            <strong>Nguyên tắc Teece:</strong> Ai kiểm soát tài sản bổ trợ (kênh bán hàng, thương hiệu, dịch vụ kỹ thuật) thường thu giữ nhiều lợi nhuận hơn chính người phát minh ra công nghệ lõi.
          </div>
        </div>

        {/* Right Column: Layered Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
          <div className="w-full max-w-xs space-y-2.5">
            {/* Outer Layer: Dịch vụ & Phụ trợ */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">TẦNG 3</span>
              <span className="text-xs font-bold text-white">Tài sản hỗ trợ &amp; Dịch vụ sau bán</span>
            </div>

            {/* Middle Layer: Vỏ máy & Trải nghiệm UI */}
            <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/80 text-center">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">TẦNG 2</span>
              <span className="text-xs font-bold text-teal-200">Sản phẩm hoàn chỉnh (Hardware/UI)</span>
            </div>

            {/* Core Layer: Công nghệ lõi */}
            <div className="p-4 rounded-xl bg-teal-500 text-slate-950 text-center shadow-lg">
              <span className="text-[10px] font-mono font-black block text-slate-900">TẦNG 1 (CỐT LÕI)</span>
              <span className="text-sm font-black">Công nghệ nền tảng (Core Tech)</span>
            </div>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
