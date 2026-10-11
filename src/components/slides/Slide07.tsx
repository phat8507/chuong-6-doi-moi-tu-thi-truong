import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface CustomerNeed {
  id: string;
  category: 'must-be' | 'one-dimensional' | 'delighter';
  voiceOfCustomer: string;
  technicalMetric: string;
  explanation: string;
}

const NEEDS: CustomerNeed[] = [
  {
    id: "accuracy",
    category: "must-be",
    voiceOfCustomer: "Số tiền đến hạn và dư nợ phải tuyệt đối chính xác",
    technicalMetric: "Hệ thống Core Banking đối soát tự động, sai số 0.00%",
    explanation: "Thuộc tính nền tảng (Must-be). Nếu tính sai tiền hoặc thông tin ảo, khách hàng sẽ mất niềm tin ngay lập tức dù app có đẹp đến đâu."
  },
  {
    id: "speed",
    category: "one-dimensional",
    voiceOfCustomer: "Tôi muốn tra cứu lịch trả nợ nhanh trong 2 giây",
    technicalMetric: "Tối ưu API phản hồi < 800ms, giao diện 1 chạm",
    explanation: "Thuộc tính một chiều (One-dimensional). Tốc độ càng nhanh và số bước thao tác càng ít thì mức độ hài lòng của người dùng càng tăng tuyến tính."
  },
  {
    id: "reminder",
    category: "delighter",
    voiceOfCustomer: "Tự động nhắc lịch trả nợ qua Zalo/App trước 3 ngày",
    technicalMetric: "Notification engine cá nhân hóa đa kênh thời gian thực",
    explanation: "Thuộc tính gây thích thú (Delighter). Khách hàng không yêu cầu ban đầu, nhưng khi có sẽ tạo trải nghiệm bất ngờ vượt trội so với đối thủ."
  }
];

export const Slide07: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedNeed, setSelectedNeed] = useState<string>("speed");

  const current = NEEDS.find(n => n.id === selectedNeed) || NEEDS[0];

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={7} label="THIẾT KẾ SẢN PHẨM" accent="#0891b2" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0891b2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive QFD Selection */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              QFD: Từ Nhu Cầu Đến<br />
              <span className="text-cyan-700">Thiết Kế Sản Phẩm</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Ngôi nhà chất lượng và ba nhóm thuộc tính trong mô hình Kano
            </p>
          </div>

          <div className="space-y-2.5">
            {NEEDS.map((item) => {
              const isSelected = selectedNeed === item.id;
              const isMustBe = item.category === 'must-be';
              const isOneDim = item.category === 'one-dimensional';

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedNeed(item.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-cyan-50/60 border-cyan-600 ring-2 ring-cyan-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded-full ${
                      isMustBe 
                        ? 'bg-rose-100 text-rose-700' 
                        : isOneDim 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {isMustBe ? 'Thuộc tính phải có' : isOneDim ? 'Thuộc tính một chiều' : 'Thuộc tính thích thú'}
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      “{item.voiceOfCustomer}”
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-cyan-700' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <span className="text-xs font-bold text-cyan-800 uppercase font-mono">
              Chỉ tiêu kỹ thuật thiết kế tương ứng (QFD Translation):
            </span>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-mono text-slate-900 font-semibold">
              {current.technicalMetric}
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
              {current.explanation}
            </p>
          </div>
        </div>

        {/* Right Column: QFD 5 Steps & Toyota Case */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-44">
            <img 
              src="/images/patent-blueprint.jpg" 
              alt="Engineering Blueprint Quality House" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Bản vẽ kỹ thuật QFD: Cầu nối có cấu trúc giữa Marketing, Kỹ thuật và Vận hành
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase font-mono">
              Thực nghiệm sản xuất Toyota
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Toyota đã <strong>giảm khoảng 40% thời gian và chi phí phát triển</strong> nhờ QFD. Tuy nhiên, giá trị của QFD nằm ở năng lực đối thoại liên chức năng — không thể biến thành công thức giấy tờ hình thức.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
