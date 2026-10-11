import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Layers, ArrowRight, CheckCircle2, Star, ShieldAlert, Sparkles } from 'lucide-react';

interface CustomerNeed {
  id: string;
  category: 'must-be' | 'one-dimensional' | 'delighter';
  voiceOfCustomer: string;
  technicalMetric: string;
  benchmark: string;
  explanation: string;
}

const NEEDS: CustomerNeed[] = [
  {
    id: "accuracy",
    category: "must-be",
    voiceOfCustomer: "Số tiền đến hạn và dư nợ phải tuyệt đối chính xác",
    technicalMetric: "Hệ thống Core Banking đối soát tự động, sai số 0.00%",
    benchmark: "Bắt buộc 100% không được sai sót tài chính",
    explanation: "Thuộc tính nền tảng (Must-be). Nếu tính sai tiền hoặc thông tin ảo, khách hàng sẽ mất niềm tin ngay lập tức dù app có đẹp đến đâu."
  },
  {
    id: "speed",
    category: "one-dimensional",
    voiceOfCustomer: "Tôi muốn tra cứu lịch trả nợ nhanh trong 2 giây",
    technicalMetric: "Tối ưu API phản hồi < 800ms, giao diện 1 chạm",
    benchmark: "Tốc độ tải dữ liệu dưới 1 giây trên mạng 4G/5G",
    explanation: "Thuộc tính một chiều (One-dimensional). Tốc độ càng nhanh và số bước thao tác càng ít thì mức độ hài lòng của người dùng càng tăng tuyến tính."
  },
  {
    id: "reminder",
    category: "delighter",
    voiceOfCustomer: "Tự động nhắc lịch trả nợ qua Zalo/App trước 3 ngày",
    technicalMetric: "Notification engine cá nhân hóa đa kênh thời gian thực",
    benchmark: "Thông báo thông minh kèm nút thanh toán tức thì",
    explanation: "Thuộc tính gây thích thú (Delighter). Khách hàng không yêu cầu ban đầu, nhưng khi có sẽ tạo trải nghiệm bất ngờ vượt trội so với đối thủ."
  }
];

export const Slide07: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedNeed, setSelectedNeed] = useState<string>("speed");

  const current = NEEDS.find(n => n.id === selectedNeed) || NEEDS[0];

  return (
    <SlideLayout slide={slide} rightBadge="Ngôi nhà chất lượng & Mô hình Kano">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive QFD Matrix Selection */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-teal-300">Dịch tiếng nói khách hàng (VOC) sang Chỉ tiêu Kỹ thuật</span>
            <span className="text-[11px] italic">Bấm chọn nhu cầu để kích hoạt QFD</span>
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
                  className={`w-full p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-teal-400 shadow-lg ring-1 ring-teal-400 scale-[1.01]'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        isMustBe 
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                          : isOneDim 
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' 
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {isMustBe ? 'Thuộc tính phải có' : isOneDim ? 'Thuộc tính một chiều' : 'Thuộc tính thích thú'}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white mt-1">
                      “{item.voiceOfCustomer}”
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-teal-400 translate-x-1' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* QFD Translation Mapping Card */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                Chỉ tiêu kỹ thuật đo lường tương ứng:
              </span>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded">
                Mục tiêu thiết kế
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-white font-mono">
              {current.technicalMetric}
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              <strong>Hàm ý phân loại:</strong> {current.explanation}
            </p>
          </div>
        </div>

        {/* Right Column: 5 Steps of QFD & Toyota Case Study */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" /> Năm bước triển khai QFD
            </h3>
            
            <ol className="text-xs space-y-1.5 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-teal-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Xác định nhu cầu chính, thứ cấp & tiếng nói khách hàng</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-teal-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Xếp hạng thứ tự ưu tiên và trọng số của khách hàng</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-teal-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Chuyển nhu cầu thành các thông số kỹ thuật đo lường được</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-teal-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Thiết lập ma trận liên kết giữa nhu cầu và thông số kỹ thuật</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-teal-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <span>Xác lập mục tiêu thiết kế dựa trên đối chuẩn cạnh tranh</span>
              </li>
            </ol>
          </div>

          {/* Academic Evidence Box: Toyota vs US Industry Study */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
            <div className="flex items-center gap-2 text-white font-bold">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Bài học từ thực nghiệm sản xuất Toyota</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Toyota giảm <strong>~40% thời gian và chi phí phát triển</strong> nhờ QFD. Tuy nhiên nghiên cứu cũng chỉ ra QFD đòi hỏi năng lực đối thoại liên chức năng giữa Marketing, Kỹ thuật và Vận hành — không thể áp dụng máy móc như một biểu mẫu hình thức.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
