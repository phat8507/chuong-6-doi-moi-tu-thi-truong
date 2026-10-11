import React from 'react';
import { SlideCard } from '../SlideCard';

const EMI_POINTS = [
  'Độ phức tạp công nghệ: Tích hợp tia X, cảm biến & giải thuật máy tính sơ khai',
  'Độ phức tạp thị trường: Bán cho bệnh viện, quy trình thẩm định ngân sách khắt khe',
  'Marketing khám phá: Khách hàng chưa từng biết máy CT Scanner là gì',
  'Khách hàng dẫn dắt (Lead Users): Hợp tác trực tiếp với các bác sĩ đầu ngành',
  'Tích hợp hệ thống sản phẩm: Đào tạo, lắp đặt, bảo trì là chìa khóa sống còn'
];

export const Slide13: React.FC = () => {
  return (
    <SlideCard
      slideNum="13"
      categoryTag="SẢN PHẨM PHỨC TẠP"
      title="Thương mại hóa sản phẩm phức tạp"
      subtitle="Đổi mới không chỉ là bản thân cỗ máy mà là cả hệ sinh thái dịch vụ, đào tạo và bảo trì đi kèm."
      theme="dark"
      bottomLabel="13. Sản phẩm phức tạp (10 phút)"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Top Split: Narrative vs CT Scanner Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-2">
            {EMI_POINTS.map((pt, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-teal-950 text-teal-400 font-mono text-[10px] flex items-center justify-center shrink-0 border border-teal-800/60">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 h-48 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg relative">
            <img
              src="/images/ct-scanner.jpg"
              alt="Máy chụp CT Scanner của EMI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white font-medium">EMI CT Scanner — Bài học phát minh nhưng mất thị phần vào GE</span>
            </div>
          </div>
        </div>

        {/* Bottom: 5 Satellite Ecosystem Nodes */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] font-mono text-teal-400 font-bold uppercase text-center mb-2">
            Hệ sinh thái sản phẩm phức tạp
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            <div className="p-2 rounded bg-slate-850 border border-slate-800 text-slate-200">
              <div className="font-bold text-teal-300">Khách hàng</div>
              <div className="text-[10px] text-slate-400">Bệnh viện &amp; Bác sĩ</div>
            </div>
            <div className="p-2 rounded bg-slate-850 border border-slate-800 text-slate-200">
              <div className="font-bold text-teal-300">Công nghệ</div>
              <div className="text-[10px] text-slate-400">Phần cứng &amp; Thuật toán</div>
            </div>
            <div className="p-2 rounded bg-slate-850 border border-slate-800 text-slate-200">
              <div className="font-bold text-teal-300">Đào tạo</div>
              <div className="text-[10px] text-slate-400">Kỹ thuật viên thao tác</div>
            </div>
            <div className="p-2 rounded bg-slate-850 border border-slate-800 text-slate-200">
              <div className="font-bold text-teal-300">Bảo trì</div>
              <div className="text-[10px] text-slate-400">Hỗ trợ 24/7 tức thời</div>
            </div>
            <div className="p-2 rounded bg-slate-850 border border-slate-800 text-slate-200">
              <div className="font-bold text-teal-300">Thương mại</div>
              <div className="text-[10px] text-slate-400">Bảo hiểm &amp; Pháp lý</div>
            </div>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
