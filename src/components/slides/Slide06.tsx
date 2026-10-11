import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Scale, AlertOctagon, CheckCircle2 } from 'lucide-react';

export const Slide06: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedProduct, setSelectedProduct] = useState<'smart' | 'simple'>('simple');

  return (
    <SlideLayout slide={slide}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Visual Comparison with Real Bottle Photo */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-white">Thực nghiệm: Bình giữ nhiệt cho học sinh</span>
            <span className="text-[11px] italic text-slate-500">Bấm để chuyển đổi góc nhìn so sánh</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Product A: High Tech Bottle */}
            <button
              onClick={() => setSelectedProduct('smart')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedProduct === 'smart'
                  ? 'bg-slate-800 border-amber-600 ring-1 ring-amber-500'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">Mẫu A · Công Nghệ Cao</span>
                  <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded font-bold">850.000đ</span>
                </div>
                <h4 className="text-xs font-bold text-white mt-1">Bình LED Đo Nhiệt Độ AI</h4>
                <ul className="text-[11px] text-slate-300 space-y-1 mt-2">
                  <li>• Màn hình LED cảm ứng</li>
                  <li>• Cần cắm sạc pin định kỳ</li>
                  <li>• Nặng, vệ sinh phức tạp</li>
                </ul>
              </div>
              <div className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 p-1 rounded">
                Chất lượng kỹ thuật cao nhưng giá đắt & phức tạp
              </div>
            </button>

            {/* Product B: Simple Practical Bottle */}
            <button
              onClick={() => setSelectedProduct('simple')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedProduct === 'simple'
                  ? 'bg-slate-800 border-teal-500 ring-1 ring-teal-400'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-400">Mẫu B · Thực Dụng Bền Bỉ</span>
                  <span className="text-[10px] font-mono bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded font-bold">220.000đ</span>
                </div>
                <h4 className="text-xs font-bold text-white mt-1">Bình Inox Chân Không 316</h4>
                <ul className="text-[11px] text-slate-300 space-y-1 mt-2">
                  <li>• Giữ nhiệt 18h, chống tràn 100%</li>
                  <li>• Dễ vệ sinh, chịu va đập</li>
                  <li>• Không cần cắm sạc điện</li>
                </ul>
              </div>
              <div className="text-[10px] font-semibold text-teal-300 bg-teal-950/60 p-1 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 shrink-0" /> Giá trị tương đối vượt trội đối với học sinh
              </div>
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <div className="flex items-center gap-2 text-white font-bold">
              <Scale className="w-4 h-4 text-teal-400" />
              <span>Chất lượng tương đối ≠ Chất lượng tuyệt đối</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Khảo sát trên 3.000 đơn vị kinh doanh (PIMS): Lợi nhuận sinh ra từ <strong>giá trị tương đối mà khách hàng cảm nhận so với giá và so với giải pháp thay thế</strong>, chứ không đến từ việc nhồi nhét mọi thông số kỹ thuật đắt đỏ.
            </p>
          </div>
        </div>

        {/* Right Column: Historical Nokia Case with Real Photo */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 h-40 group shadow-md">
            <img 
              src="/images/nokia-phone.jpg" 
              alt="Classic Nokia Mobile Phone Era" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-2.5">
              <span className="text-[10px] text-slate-200">
                Nokia từng thống lĩnh nhờ GSM và độ bền, nhưng sụt giảm khi thị hiếu chuyển sang nắp gập & camera
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-amber-400" /> Bài học lịch sử: Nokia (2003)
              </span>
              <span className="text-[10px] font-mono text-slate-400">Thị phần giảm: 35% → &lt;30%</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Khác biệt hóa có tính chất tương đối và luôn biến đổi theo thị trường. Những thuộc tính từng tạo nên lợi thế vượt trội sẽ mất giá trị nếu không theo kịp nhu cầu thực tế của khách hàng.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
