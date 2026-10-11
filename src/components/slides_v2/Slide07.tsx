import React from 'react';
import { SlideCard } from '../SlideCard';

const QFD_STEPS = [
  '1. Thu thập nhu cầu khách hàng (VOC)',
  '2. Triển khai ma trận QFD (House of Quality)',
  '3. Phân tích & xác định ưu tiên kỹ thuật',
  '4. Thiết lập ràng buộc và chỉ tiêu',
  '5. Tối ưu hóa thiết kế sản phẩm'
];

export const Slide07: React.FC = () => {
  return (
    <SlideCard
      slideNum="07"
      categoryTag="PHƯƠNG PHÁP"
      title="QFD: Từ nhu cầu đến thiết kế sản phẩm"
      subtitle="Chuyển tiếng nói của khách hàng thành các chỉ tiêu kỹ thuật đo lường được."
      theme="light"
      bottomLabel="07. QFD: Từ nhu cầu đến thiết kế sản phẩm (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
        {/* Left Column: 5 QFD Steps */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[10px] font-mono font-bold text-teal-800 uppercase">Quy trình QFD 5 bước:</span>
          {QFD_STEPS.map((s, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
              {s}
            </div>
          ))}
        </div>

        {/* Center Column: House of Quality Matrix */}
        <div className="lg:col-span-5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs space-y-2">
          <div className="text-[11px] font-bold text-slate-900 border-b border-slate-100 pb-1 flex justify-between">
            <span>Ma trận House of Quality</span>
            <span className="text-teal-700 font-mono">Nhu cầu vs Kỹ thuật</span>
          </div>

          <table className="w-full text-[10px] text-center border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold">
                <th className="p-1.5 text-left border border-slate-200">Nhu cầu KH</th>
                <th className="p-1.5 border border-slate-200">Độ bền</th>
                <th className="p-1.5 border border-slate-200">Trọng lượng</th>
                <th className="p-1.5 border border-slate-200">Thời lượng pin</th>
                <th className="p-1.5 border border-slate-200">Dễ dùng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1.5 text-left font-medium border border-slate-200">Dễ cầm nắm</td>
                <td className="p-1.5 border border-slate-200 text-teal-600 font-bold">●</td>
                <td className="p-1.5 border border-slate-200 text-teal-600 font-bold">◎</td>
                <td className="p-1.5 border border-slate-200 text-slate-300">-</td>
                <td className="p-1.5 border border-slate-200 text-teal-600 font-bold">◎</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-1.5 text-left font-medium border border-slate-200">Dùng cả ngày</td>
                <td className="p-1.5 border border-slate-200 text-slate-300">-</td>
                <td className="p-1.5 border border-slate-200 text-slate-300">-</td>
                <td className="p-1.5 border border-slate-200 text-teal-600 font-bold">◎</td>
                <td className="p-1.5 border border-slate-200 text-slate-300">-</td>
              </tr>
              <tr>
                <td className="p-1.5 text-left font-medium border border-slate-200">Không bị trầy xước</td>
                <td className="p-1.5 border border-slate-200 text-teal-600 font-bold">◎</td>
                <td className="p-1.5 border border-slate-200 text-teal-600 font-bold">●</td>
                <td className="p-1.5 border border-slate-200 text-slate-300">-</td>
                <td className="p-1.5 border border-slate-200 text-slate-300">-</td>
              </tr>
            </tbody>
          </table>

          <div className="text-[9px] text-slate-500 font-mono flex justify-between pt-1">
            <span>◎ Tương quan mạnh (9)</span>
            <span>● Tương quan vừa (3)</span>
            <span>△ Tương quan yếu (1)</span>
          </div>
        </div>

        {/* Right Column: 3 Kano Attribute Types */}
        <div className="lg:col-span-3 space-y-2">
          <span className="text-[10px] font-mono font-bold text-teal-800 uppercase">3 Nhóm thuộc tính Kano:</span>
          
          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs">
            <div className="font-bold text-amber-900">1. Must-be (Phải có)</div>
            <p className="text-[10px] text-amber-800 mt-0.5">Không có thì bị loại bỏ ngay.</p>
          </div>

          <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-xs">
            <div className="font-bold text-teal-900">2. One-dimensional</div>
            <p className="text-[10px] text-teal-800 mt-0.5">Càng đáp ứng cao càng hài lòng.</p>
          </div>

          <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 text-xs">
            <div className="font-bold text-purple-900">3. Delighters (Thích thú)</div>
            <p className="text-[10px] text-purple-800 mt-0.5">Vượt ngoài mong đợi của khách hàng.</p>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
