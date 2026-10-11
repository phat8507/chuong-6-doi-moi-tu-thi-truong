import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

export const Slide11: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={11} label="THƯƠNG MẠI HÓA CÔNG NGHỆ" accent="#0d9488" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0d9488" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: From Technology to Whole Product */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Từ Công Nghệ Đến<br />
              <span className="text-teal-700">Sản Phẩm Thương Mại</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Hệ thống sản phẩm hoàn chỉnh (Whole Product) và ba nhận thức khi mua công nghệ cao
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-900">Quy trình hoàn thiện giải pháp:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((step) => (
                  <button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      activeStep === step 
                        ? 'bg-teal-700 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Bước {step}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[110px] flex flex-col justify-center">
              {activeStep === 1 && (
                <div className="space-y-1 animate-fadeIn">
                  <span className="text-xs font-bold text-amber-700">1. Công nghệ lõi (Linh kiện độc lập):</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ví dụ phát minh cell pin dung lượng cao. Pin tốt mới chỉ là một cấu phần. Nếu pin làm nóng máy, chưa có mạch sạc tương thích và giá thành quá đắt, khách hàng sẽ không mua.
                  </p>
                </div>
              )}
              {activeStep === 2 && (
                <div className="space-y-1 animate-fadeIn">
                  <span className="text-xs font-bold text-teal-700">2. Bổ sung các tài sản bổ trợ (Complementary Assets):</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bổ sung hệ điều hành tối ưu điện năng thoại, cáp sạc an toàn, bảo hành tại chuỗi cửa hàng và chính sách bảo hiểm cháy nổ.
                  </p>
                </div>
              )}
              {activeStep === 3 && (
                <div className="space-y-1 animate-fadeIn">
                  <span className="text-xs font-bold text-blue-700">3. Sản phẩm thương mại hoàn chỉnh (Whole Product):</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Một chiếc điện thoại pin 2 ngày, hỗ trợ sạc nhanh, dịch vụ sau bán tin cậy và có mặt tại 500 đại lý phân phối toàn quốc.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Nguyên tắc cốt lõi:</strong> Doanh nghiệp không thu giữ được giá trị chỉ nhờ bằng sáng chế linh kiện; giá trị phụ thuộc vào việc điều phối toàn bộ hệ thống giải pháp sử dụng.
          </div>
        </div>

        {/* Right Column: 3 Purchasing Considerations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase font-mono">
              Ba nhận thức khi mua công nghệ cao
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-teal-700">1. Khác biệt công nghệ:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">Người mua có thấy sản phẩm thực sự vượt trội hay chỉ là biến thể tương tự?</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-amber-700">2. Tốc độ lỗi thời:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">Người mua lo ngại vừa đầu tư xong thì phiên bản kế tiếp ra mắt.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-rose-700">3. Chi phí chuyển đổi (Switching costs):</span>
                <p className="text-slate-600 text-[11px] mt-0.5">Chi phí đào tạo nhân sự, chuyển dữ liệu và gián đoạn vận hành.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
