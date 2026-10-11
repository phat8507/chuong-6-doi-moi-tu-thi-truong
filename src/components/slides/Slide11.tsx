import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Cpu, Battery, Wrench, Shield, ArrowRight, HelpCircle, AlertCircle } from 'lucide-react';

export const Slide11: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <SlideLayout slide={slide} rightBadge="Chuỗi giá trị thương mại hóa">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive Transformation from Component to Whole Product */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-teal-300">Biến phát minh kỹ thuật thành giải pháp thương mại hoàn chỉnh</span>
            <span className="text-[11px] italic">Bấm chuyển đổi giai đoạn hoàn thiện</span>
          </div>

          {/* Interactive Whole Product Architecture Stages */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-around">
              <button
                onClick={() => setActiveStep(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeStep === 1 
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/30' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                1. Công nghệ lõi (Linh kiện)
              </button>
              <ArrowRight className="w-4 h-4 text-slate-600" />
              <button
                onClick={() => setActiveStep(2)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeStep === 2 
                    ? 'bg-teal-500 text-white shadow-md ring-2 ring-teal-400/30' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                2. Hệ sinh thái bổ trợ
              </button>
              <ArrowRight className="w-4 h-4 text-slate-600" />
              <button
                onClick={() => setActiveStep(3)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeStep === 3 
                    ? 'bg-sky-500 text-white shadow-md ring-2 ring-sky-400/30' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                3. Giải pháp thương mại
              </button>
            </div>

            {/* Visual stage display */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 min-h-[140px] flex flex-col justify-center">
              {activeStep === 1 && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <Battery className="w-4 h-4" /> Ví dụ: Cell pin mật độ năng lượng cao thế hệ mới
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Công nghệ lõi chỉ là một bộ phận kỹ thuật. Nếu chỉ phát minh ra pin dùng lâu hơn nhưng pin tỏa nhiệt cao, chưa có mạch sạc điều tiết và kích thước không tương thích, khách hàng sẽ không thể mua và sử dụng.
                  </p>
                </div>
              )}
              {activeStep === 2 && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                    <Wrench className="w-4 h-4" /> Bổ sung các tài sản bổ trợ (Complementary Assets)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Bổ sung hệ điều hành quản lý điện năng, mạch bảo vệ quá dòng, chuẩn cáp sạc nhanh an toàn, tài liệu chứng nhận tiêu chuẩn kỹ thuật và chuỗi cung ứng sản xuất vỏ máy chống cháy nổ.
                  </p>
                </div>
              )}
              {activeStep === 3 && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                    <Shield className="w-4 h-4" /> Sản phẩm hoàn chỉnh (Whole Product) sẵn sàng bán
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Một chiếc smartphone mỏng nhẹ với thời lượng pin 48 giờ, bảo hành chính hãng 12 tháng tại 500 trung tâm toàn quốc, mức giá cạnh tranh và hỗ trợ đổi mới khi gặp sự cố.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white">Nguyên tắc quản trị cốt lõi:</strong> Doanh nghiệp không thể thu giữ giá trị chỉ dựa trên việc phát minh ra linh kiện; giá trị phụ thuộc vào năng lực điều phối toàn bộ chuỗi thương mại hóa và kiểm soát tài sản bổ trợ khó thay thế.
          </div>
        </div>

        {/* Right Column: Three High-Tech Purchasing Considerations */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-400" /> Ba nhận thức quyết định khi mua công nghệ cao
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-bold text-teal-300">1. Khác biệt công nghệ (Differentiation):</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Người mua có thấy giải pháp mới thực sự vượt trội so với công nghệ cũ hay chỉ là biến thể tương tự?
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-bold text-amber-300">2. Tốc độ lỗi thời (Obsolescence Pace):</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Người mua lo ngại vừa mua xong thì phiên bản kế tiếp ra mắt, dẫn đến trì hoãn quyết định đầu tư.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-bold text-rose-300">3. Chi phí chuyển đổi (Switching Costs):</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Chi phí đào tạo nhân viên, chuyển đổi dữ liệu và rủi ro gián đoạn vận hành khi bỏ giải pháp quen thuộc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
