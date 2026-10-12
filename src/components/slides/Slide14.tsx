import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { CheckCircle2, ChevronRight, HelpCircle, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

export const Slide14: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[13];
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: '1. Hiểu lợi ích',
      subtitle: 'Xóa bỏ hoài nghi ban đầu',
      icon: HelpCircle,
      detail: 'Khách hàng không thể mong muốn điều họ chưa từng hiểu rõ. Marketing phải diễn giải công nghệ thành giải pháp trực quan cho một công việc cụ thể (Jobs to be Done).',
      metric: '75% người dùng từ bỏ ngay lần đầu nếu không nắm được giá trị cốt lõi trong 30 giây đầu tiên.'
    },
    {
      id: 1,
      title: '2. Dùng thử',
      subtitle: 'Hạ thấp rào cản chi phí cam kết',
      icon: Sparkles,
      detail: 'Cho phép khách hàng thử nghiệm với rủi ro bằng 0 (bản dùng thử demo, miễn phí tính năng cơ bản Freemium, hoặc cam kết hoàn tiền) để trực tiếp kiểm chứng giá trị.',
      metric: 'Trải nghiệm dùng thử làm giảm cảm giác e ngại rủi ro tài chính và kỹ thuật xuống mức thấp nhất.'
    },
    {
      id: 2,
      title: '3. Tin tưởng',
      subtitle: 'Xây dựng sự an tâm dài hạn',
      icon: ShieldCheck,
      detail: 'Chứng minh độ tin cậy qua bảo mật dữ liệu, độ ổn định hệ thống, chính sách bảo hành rõ ràng và đội ngũ hỗ trợ túc trực giải quyết sự cố phát sinh tức thì.',
      metric: 'Niềm tin chuyển hóa một người dùng tò mò vãng lai sang một khách hàng có ý định gắn bó lâu dài.'
    },
    {
      id: 3,
      title: '4. Chấp nhận',
      subtitle: 'Tích hợp vào thói quen hàng ngày',
      icon: CheckCircle2,
      detail: 'Sản phẩm chính thức trở thành một phần không thể thiếu trong quy trình làm việc hoặc đời sống của khách hàng, vượt qua rào cản chi phí chuyển đổi (switching costs).',
      metric: 'Quyết định thanh toán mua và triển khai chính thức trên toàn bộ quy trình cá nhân / tổ chức.'
    },
    {
      id: 4,
      title: '5. Phản hồi & Duy trì',
      subtitle: 'Vòng lặp tái sử dụng và lan tỏa',
      icon: RefreshCw,
      detail: 'Thu thập dữ liệu hành vi thực tế (sử dụng tính năng nào thường xuyên, bỏ tính năng nào) để liên tục tinh chỉnh giải pháp, kích hoạt hiệu ứng truyền miệng tự nhiên.',
      metric: 'Đổi mới chỉ hoàn tất trọn vẹn khi người dùng tiếp tục quay lại và chủ động giới thiệu cho cộng đồng.'
    }
  ];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Top: 1-Line Continuous Journey Stepper with Double-Bezel Frame */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs sm:text-sm font-mono uppercase font-bold text-slate-900 tracking-wider">
                Hành Trình Khách Hàng Tuyến Tính: 5 Bước Giảm Bất Định
              </span>
              <span className="text-xs font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full font-bold">
                Chặng {activeStep + 1} / 5
              </span>
            </div>

            {/* Stepper Bar */}
            <div className="relative pt-2 pb-2">
              <div className="absolute top-1/2 left-6 right-6 h-1.5 bg-slate-200/80 -translate-y-1/2 z-0 rounded-full" />
              <div 
                className="absolute top-1/2 left-6 h-1.5 bg-emerald-600 -translate-y-1/2 z-0 transition-all duration-300 rounded-full" 
                style={{ width: `${(activeStep / 4) * 88}%` }}
              />

              <div className="relative z-10 grid grid-cols-5 gap-2">
                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  const isSelected = activeStep === idx;
                  const isPast = activeStep > idx;

                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveStep(idx)}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? 'bg-emerald-700 text-white ring-4 ring-emerald-200 shadow-md scale-110'
                            : isPast
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-white border-2 border-slate-200 text-slate-500 hover:border-slate-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs sm:text-[13px] font-bold mt-2.5 hidden sm:block leading-tight ${
                        isSelected ? 'text-emerald-950 font-extrabold' : 'text-slate-600'
                      }`}>
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Split Layout (Active Step In-Depth + Authentic Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Active Step Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 pb-3 border-b border-slate-100">
                    <span className="w-10 h-10 rounded-xl bg-emerald-700 text-white font-mono font-bold flex items-center justify-center text-base shadow-sm shrink-0">
                      0{activeStep + 1}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {steps[activeStep].title}: {steps[activeStep].subtitle}
                      </h3>
                      <span className="text-xs font-mono text-emerald-800 uppercase font-semibold">
                        Giai đoạn giảm thiểu rủi ro tâm lý và rào cản hành vi
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[15px] text-slate-800 leading-relaxed bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200">
                    {steps[activeStep].detail}
                  </p>

                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-[14px]">
                    <div className="font-bold text-emerald-950 font-mono text-xs uppercase mb-1">
                      Ý NGHĨA QUẢN TRỊ TRONG MARKETING ĐỔI MỚI:
                    </div>
                    <p className="text-emerald-900 leading-relaxed font-medium">
                      {steps[activeStep].metric}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    ← Chặng trước
                  </button>
                  <div className="text-xs text-slate-500 font-mono">
                    Điều hướng từng chặng trải nghiệm
                  </div>
                  <button
                    disabled={activeStep === 4}
                    onClick={() => setActiveStep(prev => Math.min(4, prev + 1))}
                    className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs sm:text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-800 cursor-pointer flex items-center gap-1.5 transition-colors shadow-2xs"
                  >
                    Chặng tiếp theo <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Real Customer Interaction Photo */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
                <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/customer-journey.jpg"
                    alt="Real user exploring technology interface"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex items-end p-4">
                    <p className="text-xs sm:text-[13px] text-white font-medium leading-relaxed">
                      <strong>Trải nghiệm khách hàng thực tế:</strong> Tương tác trực quan, học hỏi và dần hình thành niềm tin tự nhiên.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h4 className="font-bold text-sm text-slate-900">
                    Điểm chạm và sự chuyển giao niềm tin
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Người dùng không đón nhận sản phẩm vì tính năng phức tạp mà vì họ vượt qua được sự e ngại ban đầu qua từng tương tác mượt mà, minh bạch và an toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
