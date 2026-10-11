import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

const JOURNEY = [
  { step: 1, title: "1. Giải thích công dụng", desc: "Giúp người dùng hình dung rõ giải pháp giúp họ làm được gì dễ dàng hơn cách cũ." },
  { step: 2, title: "2. Cung cấp dùng thử", desc: "Cho phép trải nghiệm ở quy mô nhỏ (Freemium, demo) để giảm rủi ro chi phí cam kết." },
  { step: 3, title: "3. Xây dựng niềm tin", desc: "Chứng minh độ tin cậy qua bảo mật, chính sách bảo hành và cam kết hỗ trợ khi phát sinh lỗi." },
  { step: 4, title: "4. Hỗ trợ chuyển đổi", desc: "Đào tạo người dùng, di chuyển dữ liệu cũ và giảm thiểu thời gian gián đoạn vận hành." },
  { step: 5, title: "5. Học hỏi thực tế", desc: "Theo dõi xem khách hàng có dùng đúng mục đích và có tiếp tục quay lại hay không." },
];

export const Slide14: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={14} label="MARKETING SẢN PHẨM ĐỔI MỚI" accent="#059669" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#059669" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: 5 Steps Journey */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Marketing Đổi Mới:<br />
              <span className="text-emerald-700">Giảm Bất Định Cho Người Dùng</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Hành trình chuyển đổi từ giải thích công dụng đến xây dựng niềm tin sử dụng lặp lại
            </p>
          </div>

          <div className="space-y-2">
            {JOURNEY.map((s, idx) => {
              const isSelected = currentStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setCurrentStep(idx)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-50/70 border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {s.step}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{s.title}</span>
                  </div>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`}>
                    Xem chi tiết →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs space-y-1">
            <span className="font-bold text-emerald-900 uppercase font-mono">
              Chi tiết: {JOURNEY[currentStep].title}
            </span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              {JOURNEY[currentStep].desc}
            </p>
          </div>
        </div>

        {/* Right Column: Real Customer Consultation Photo */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-52">
            <img 
              src="/images/customer-journey.jpg" 
              alt="Customer consulting and onboarding" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Khách hàng luôn hỏi: “Sản phẩm giúp tôi điều gì và nếu xảy ra lỗi thì ai hỗ trợ?”
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Bản chất Marketing đổi mới:</strong> Không chỉ là quảng bá thông điệp, mà là hỗ trợ người dùng vượt qua sự bỡ ngỡ ban đầu để chuyển hóa thành hành vi quen thuộc.
          </div>
        </div>
      </div>
    </div>
  );
};
