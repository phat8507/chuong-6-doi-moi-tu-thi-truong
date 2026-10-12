import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { Download, Sparkles, Repeat } from 'lucide-react';

export const Slide02: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[1];
  const [activeState, setActiveState] = useState<'download' | 'trial' | 'retention'>('retention');

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative & Empathy Hook */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 text-teal-950">
            <p className="text-base md:text-lg leading-relaxed font-semibold italic text-slate-800">
              “Mọi người đã từng tải một ứng dụng vì quảng cáo rất hấp dẫn, nhưng chỉ mở ra một hai lần rồi bỏ chưa?”
            </p>
          </div>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Nguyên nhân thông thường không phải vì ứng dụng thiếu chức năng, mà là khách hàng <strong className="text-slate-900 font-semibold">không thật sự cần chức năng ấy</strong>, hoặc cách thao tác quá phức tạp. Một ứng dụng ghi chú có 20 màu sắc và hiệu ứng 3D nhưng giấu nút tìm kiếm sẽ nhanh chóng bị gỡ bỏ.
          </p>

          {/* Academic Principle Double-Bezel Card */}
          <div className="double-bezel">
            <div className="double-bezel-inner space-y-1.5 p-4 text-xs">
              <span className="font-bold text-teal-900 font-mono uppercase tracking-wider text-[11px] block">
                Hàm ý nghiên cứu hành vi:
              </span>
              <p className="text-slate-600 leading-relaxed text-xs">
                Doanh nghiệp cần tìm hiểu hành vi thực tế thay vì chỉ phát bảng hỏi khảo sát xem người dùng thích tính năng nào. Một cải tiến rất nhỏ như giảm số bước xác nhận thanh toán có thể tạo ra giá trị kinh tế gấp nhiều lần tính năng trang trí.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Custom 3 States Interactive Display */}
        <div className="lg:col-span-5 space-y-3">
          <div className="double-bezel">
            <div className="double-bezel-inner space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="text-xs font-bold text-slate-900 font-mono uppercase">
                  Ba trạng thái của một ứng dụng
                </span>
                <span className="text-[10px] text-teal-700 font-mono font-semibold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                  Interactive
                </span>
              </div>

              {/* 3 State Switcher Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveState('download')}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    activeState === 'download'
                      ? 'bg-rose-50 border-rose-500 text-rose-800 font-bold shadow-2xs'
                      : 'bg-stone-50 border-stone-200 text-slate-600 hover:bg-stone-100'
                  }`}
                >
                  <Download className="w-4 h-4 text-rose-600" />
                  <span className="text-[11px]">1. Tải xuống</span>
                </button>

                <button
                  onClick={() => setActiveState('trial')}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    activeState === 'trial'
                      ? 'bg-amber-50 border-amber-500 text-amber-800 font-bold shadow-2xs'
                      : 'bg-stone-50 border-stone-200 text-slate-600 hover:bg-stone-100'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-[11px]">2. Dùng thử</span>
                </button>

                <button
                  onClick={() => setActiveState('retention')}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    activeState === 'retention'
                      ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-2xs'
                      : 'bg-stone-50 border-stone-200 text-slate-600 hover:bg-stone-100'
                  }`}
                >
                  <Repeat className="w-4 h-4 text-teal-600" />
                  <span className="text-[11px]">3. Sử dụng tiếp</span>
                </button>
              </div>

              {/* State Canvas */}
              <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/80 border border-stone-200 min-h-[180px] flex flex-col justify-center text-xs sm:text-[14px]">
                {activeState === 'download' && (
                  <div className="space-y-2 animate-fadeInUp">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                      <Download className="w-4 h-4 text-rose-600" /> Trạng thái 1: Lượt tải về từ App Store
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-[13px]">
                      Kích thích bởi thông điệp quảng cáo hấp dẫn hoặc sự tò mò nhất thời. Doanh nghiệp dễ lầm tưởng số lượt cài đặt là thành công thương mại.
                    </p>
                    <div className="text-xs font-mono text-rose-900 bg-rose-100/80 p-2.5 rounded-xl border border-rose-200">
                      Rủi ro: 70–80% người dùng bỏ rơi ứng dụng sau 48 giờ nếu gặp rào cản thao tác.
                    </div>
                  </div>
                )}

                {activeState === 'trial' && (
                  <div className="space-y-2 animate-fadeInUp">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                      <Sparkles className="w-4 h-4 text-amber-600" /> Trạng thái 2: Dùng thử lần đầu (First Run)
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-[13px]">
                      Khách hàng kiểm tra xem giải pháp có giúp giải quyết đúng việc họ cần hay không. Thời gian tìm thấy giá trị (Time-to-Value) là yếu tố sống còn.
                    </p>
                    <div className="text-xs font-mono text-amber-900 bg-amber-100/80 p-2.5 rounded-xl border border-amber-200">
                      Điểm nghẽn: Giao diện rườm rà, bắt đăng ký quá nhiều thông tin không cần thiết.
                    </div>
                  </div>
                )}

                {activeState === 'retention' && (
                  <div className="space-y-2 animate-fadeInUp">
                    <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
                      <Repeat className="w-4 h-4 text-teal-700" /> Trạng thái 3: Sử dụng lặp lại bền vững (Adoption)
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-[13px]">
                      Sản phẩm hòa nhập vào thói quen hàng ngày. Đây mới là thước đo chân thực nhất của một đổi mới thành công trên thị trường.
                    </p>
                    <div className="text-xs font-mono text-teal-950 bg-teal-100/80 p-2.5 rounded-xl border border-teal-200">
                      Bằng chứng giá trị: Tỷ lệ quay lại (Retention) &amp; Khuyến nghị người khác dùng theo.
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-500 font-mono text-center">
                Tải xuống ≠ Dùng thử ≠ Tiếp tục sử dụng
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
