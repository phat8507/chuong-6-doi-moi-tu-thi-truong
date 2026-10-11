import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Compass, HelpCircle, CheckCircle, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';

const JOURNEY_STEPS = [
  {
    step: 1,
    title: "1. Giải thích công dụng",
    subtitle: "Giúp người dùng hình dung lợi ích",
    desc: "Khi gặp công nghệ mới lạ, khách hàng chưa có khái niệm sử dụng. Doanh nghiệp phải chứng minh công nghệ giúp họ hoàn thành công việc gì dễ dàng hơn.",
    icon: HelpCircle
  },
  {
    step: 2,
    title: "2. Cho dùng thử (Trial)",
    subtitle: "Giảm rủi ro cảm nhận",
    desc: "Cung cấp phiên bản dùng thử miễn phí (Freemium, Sandbox, bản demo) để khách hàng trải nghiệm quy mô nhỏ trước khi quyết định chi tiền.",
    icon: Compass
  },
  {
    step: 3,
    title: "3. Xây dựng niềm tin",
    subtitle: "Bằng chứng kỹ thuật & pháp lý",
    desc: "Cung cấp cam kết bảo mật dữ liệu, chính sách hoàn tiền, chứng chỉ an toàn quốc tế và hỗ trợ kỹ thuật tận nơi khi có sự cố.",
    icon: ShieldCheck
  },
  {
    step: 4,
    title: "4. Hỗ trợ chuyển đổi",
    subtitle: "Đồng hành qua giai đoạn đầu",
    desc: "Đào tạo người dùng, chuyển đổi dữ liệu từ hệ thống cũ và thiết lập kênh hỗ trợ 24/7 để loại bỏ nỗi sợ lỗi thời.",
    icon: CheckCircle
  },
  {
    step: 5,
    title: "5. Học hỏi sau triển khai",
    subtitle: "Thu thập phản hồi lặp lại",
    desc: "Theo dõi xem khách hàng có dùng đúng tính năng không, điểm nghẽn ở đâu để nhanh chóng cập nhật bản vá hoặc tính năng mới.",
    icon: RefreshCw
  }
];

export const Slide14: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <SlideLayout slide={slide} rightBadge="Hành trình giảm bất định thị trường">
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Horizontal Process Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {JOURNEY_STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = currentStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setCurrentStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-32 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#147D82] shadow-md ring-2 ring-[#147D82]/20 scale-[1.02]'
                    : 'bg-white/60 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-[#147D82] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#147D82]' : 'text-slate-400'}`} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#102A43] leading-snug">{s.title}</div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">{s.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail View */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-100 text-[#147D82] uppercase">
                Giai đoạn {JOURNEY_STEPS[currentStep].step}
              </span>
              <h3 className="text-base font-bold text-[#102A43]">{JOURNEY_STEPS[currentStep].title}</h3>
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              {JOURNEY_STEPS[currentStep].desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shrink-0 max-w-xs space-y-1 text-xs">
            <span className="font-bold text-[#102A43]">Tâm lý khách hàng thường gặp:</span>
            <p className="text-slate-600 text-[11px] leading-snug">
              “Sản phẩm này giúp ích gì cho tôi? Nếu xảy ra lỗi thì ai chịu trách nhiệm? Có đáng để tôi từ bỏ thói quen cũ không?”
            </p>
          </div>
        </div>

        {/* Bottom Editorial Quote */}
        <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <strong className="text-[#147D82]">Đổi mới Marketing:</strong> Không đơn thuần là quảng bá rầm rộ, mà là một quy trình tương tác hai chiều nhằm tháo gỡ từng tầng rào cản bất định cho người sử dụng.
          </div>
          <ArrowRight className="w-4 h-4 text-[#147D82] shrink-0" />
        </div>
      </div>
    </SlideLayout>
  );
};
