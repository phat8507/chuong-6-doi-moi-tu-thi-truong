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
      detail: 'Khách hàng không thể mong muốn điều họ chưa hiểu. Marketing phải diễn giải công nghệ thành giải pháp trực quan cho một công việc cụ thể (Jobs to be Done).',
      metric: '75% người dùng từ bỏ ngay lần đầu nếu không nắm được giá trị cốt lõi trong 30 giây.'
    },
    {
      id: 1,
      title: '2. Dùng thử',
      subtitle: 'Hạ thấp rào cản chi phí cam kết',
      icon: Sparkles,
      detail: 'Cho phép khách hàng thử nghiệm với rủi ro bằng 0 (bản demo, miễn phí tính năng cơ bản, dùng thử 30 ngày) để trực tiếp kiểm chứng lời hứa của sản phẩm.',
      metric: 'Dùng thử làm giảm cảm giác e ngại rủi ro tài chính và kỹ thuật xuống mức tối thiểu.'
    },
    {
      id: 2,
      title: '3. Tin tưởng',
      subtitle: 'Xây dựng an tâm dài hạn',
      icon: ShieldCheck,
      detail: 'Chứng minh độ tin cậy qua bảo mật dữ liệu, độ ổn định hệ thống, chính sách hoàn tiền và đội ngũ chăm sóc khách hàng hỗ trợ giải quyết sự cố tức thì.',
      metric: 'Niềm tin chuyển đổi một người tò mò sang một khách hàng có ý định gắn bó lâu dài.'
    },
    {
      id: 3,
      title: '4. Chấp nhận',
      subtitle: 'Tích hợp vào thói quen hàng ngày',
      icon: CheckCircle2,
      detail: 'Sản phẩm chính thức trở thành một phần không thể thiếu trong chu trình làm việc hoặc đời sống của khách hàng, vượt qua rào cản chi phí chuyển đổi (switching costs).',
      metric: 'Quyết định mua và triển khai chính thức trên toàn bộ quy trình cá nhân/tổ chức.'
    },
    {
      id: 4,
      title: '5. Phản hồi & Duy trì',
      subtitle: 'Vòng lặp tái sử dụng và lan tỏa',
      icon: RefreshCw,
      detail: 'Thu thập dữ liệu hành vi thực tế (sử dụng tính năng nào, bỏ tính năng nào) để liên tục điều chỉnh sản phẩm, kích hoạt truyền miệng và giữ chân khách hàng.',
      metric: 'Đổi mới chỉ hoàn tất khi người dùng tiếp tục quay lại và giới thiệu cho cộng đồng.'
    }
  ];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Top: 1-Line Continuous Journey Stepper */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase font-bold text-slate-500">
              Hành Trình Khách Hàng Tuyến Tính: 5 Bước Giảm Bất Định
            </span>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-medium">
              Bước {activeStep + 1} / 5
            </span>
          </div>

          {/* Stepper Bar */}
          <div className="relative">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-100 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-4 h-1 bg-emerald-500 -translate-y-1/2 z-0 transition-all duration-300" 
              style={{ width: `${(activeStep / 4) * 92}%` }}
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
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 shadow-md scale-110'
                          : isPast
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-white border-2 border-slate-200 text-slate-400 group-hover:border-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[11px] font-bold mt-2 hidden sm:block ${
                      isSelected ? 'text-emerald-900' : 'text-slate-600'
                    }`}>
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Middle: Split Layout (Active Step In-Depth + Authentic Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Active Step Details */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-mono font-bold flex items-center justify-center text-sm">
                  0{activeStep + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {steps[activeStep].title}: {steps[activeStep].subtitle}
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-700 uppercase">
                    Giai đoạn giảm thiểu rủi ro tâm lý
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {steps[activeStep].detail}
              </p>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs">
                <div className="font-bold text-emerald-950 font-mono text-[11px] mb-1">
                  Ý NGHĨA QUẢN TRỊ TRONG MARKETING ĐỔI MỚI:
                </div>
                <p className="text-emerald-900 text-[11px] leading-relaxed">
                  {steps[activeStep].metric}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              >
                ← Giai đoạn trước
              </button>
              <div className="text-[11px] text-slate-400 font-mono">
                Điều hướng từng chặng
              </div>
              <button
                disabled={activeStep === 4}
                onClick={() => setActiveStep(prev => Math.min(4, prev + 1))}
                className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-800 cursor-pointer flex items-center gap-1"
              >
                Giai đoạn kế tiếp <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Authentic Real Customer Interaction Photo */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src="/images/customer-journey.jpg"
                alt="Real user exploring technology interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium">
                  Trải nghiệm khách hàng thực tế: Tương tác chạm, học hỏi và quyết định tin dùng
                </span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs space-y-1">
              <div className="font-bold text-slate-800">
                Thực tiễn: Điểm chạm và sự chuyển giao niềm tin
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Người dùng không đón nhận sản phẩm vì tính năng phức tạp mà vì họ vượt qua được sự e ngại ban đầu qua từng tương tác mượt mà và minh bạch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
