import React, { useState } from 'react';
import { SlideCard } from '../SlideCard';
import { Download, PlayCircle, RotateCcw } from 'lucide-react';

export const Slide02: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'download' | 'trial' | 'retention'>('retention');

  return (
    <SlideCard
      slideNum="02"
      categoryTag="THỊ TRƯỜNG"
      title="Mới có đồng nghĩa với có giá trị?"
      subtitle="Tính mới chỉ là điểm khởi đầu, điều quan trọng là khách hàng có sử dụng và quay lại hay không."
      theme="light"
      bottomLabel="02. Mới có đồng nghĩa với có giá trị? (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: Analytical Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            Một ứng dụng có thể được tải về hàng ngàn lần vì quảng cáo hấp dẫn, nhưng nếu không giải quyết đúng "công việc cần làm" (Jobs-to-be-Done), người dùng sẽ xóa ứng dụng sau vài ngày.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-800">Quy tắc 3 trạng thái chấp nhận:</div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[10px]">1</span>
              <span><strong>Tải xuống:</strong> Chỉ phản ánh sự tò mò ban đầu.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-[10px]">2</span>
              <span><strong>Dùng thử:</strong> Khách hàng đánh giá mức độ tiện lợi.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-[10px]">3</span>
              <span><strong>Tiếp tục sử dụng:</strong> Tạo ra giá trị thực sự cho doanh nghiệp.</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Phone Mockups matching contact sheet */}
        <div className="lg:col-span-7 grid grid-cols-3 gap-3 md:gap-4 items-center">
          {/* Phone 1: Download */}
          <div
            onClick={() => setActiveTab('download')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between h-[300px] text-center ${
              activeTab === 'download'
                ? 'bg-slate-50 border-teal-600 shadow-md ring-2 ring-teal-500/20'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mt-2">
              <Download className="w-5 h-5 text-teal-600" />
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="w-16 h-2 rounded bg-slate-200 mx-auto" />
              <div className="w-24 h-2 rounded bg-slate-100 mx-auto" />
              <div className="w-12 h-6 rounded-md bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center mx-auto mt-4">
                GET
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Tải xuống</div>
              <div className="text-[10px] text-slate-500 font-mono">(Download)</div>
            </div>
          </div>

          {/* Phone 2: Trial */}
          <div
            onClick={() => setActiveTab('trial')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between h-[300px] text-center ${
              activeTab === 'trial'
                ? 'bg-slate-50 border-teal-600 shadow-md ring-2 ring-teal-500/20'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mt-2">
              <PlayCircle className="w-5 h-5 text-amber-500" />
            </div>
            <div className="space-y-2 my-auto w-full px-2">
              <div className="w-full h-8 rounded-lg bg-amber-50 border border-amber-200 text-[10px] text-amber-900 flex items-center justify-center font-bold">
                Trải nghiệm 7 ngày
              </div>
              <div className="w-16 h-2 rounded bg-slate-100 mx-auto" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Dùng thử</div>
              <div className="text-[10px] text-slate-500 font-mono">(Trial)</div>
            </div>
          </div>

          {/* Phone 3: Adoption */}
          <div
            onClick={() => setActiveTab('retention')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between h-[300px] text-center ${
              activeTab === 'retention'
                ? 'bg-teal-50/50 border-teal-600 shadow-md ring-2 ring-teal-500/20'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mt-2">
              <RotateCcw className="w-5 h-5 text-teal-700" />
            </div>
            <div className="space-y-2 my-auto w-full px-2">
              <div className="w-full h-12 rounded-lg bg-teal-600 text-white text-[10px] p-1 flex flex-col items-center justify-center font-bold">
                <span>Thành viên thường xuyên</span>
                <span className="text-[9px] font-normal opacity-90">Retention &gt; 80%</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Tiếp tục sử dụng</div>
              <div className="text-[10px] text-slate-500 font-mono">(Adoption)</div>
            </div>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
