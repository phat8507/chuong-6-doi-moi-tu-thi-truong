import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { Download, Sparkles, Repeat, AlertCircle, ArrowRight } from 'lucide-react';

export const Slide02: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[1];
  const [activeState, setActiveState] = useState<'download' | 'trial' | 'retention'>('retention');

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative & Empathy Hook */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium italic">
            “Mọi người đã từng tải một ứng dụng vì quảng cáo rất hấp dẫn, nhưng chỉ mở ra một hai lần rồi bỏ chưa?”
          </p>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Nguyên nhân thông thường không phải vì ứng dụng thiếu chức năng, mà là khách hàng <strong>không thật sự cần chức năng ấy</strong>, hoặc cách thao tác quá phức tạp. Một ứng dụng ghi chú có 20 màu sắc và hiệu ứng 3D nhưng giấu nút tìm kiếm sẽ nhanh chóng bị gỡ bỏ.
          </p>

          {/* Academic Principle Card */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
            <span className="font-bold text-slate-900 font-mono uppercase">Hàm ý nghiên cứu hành vi:</span>
            <p className="text-slate-600 leading-relaxed">
              Doanh nghiệp cần tìm hiểu hành vi thực tế thay vì chỉ phát bảng hỏi khảo sát xem người dùng thích tính năng nào. Một cải tiến rất nhỏ như giảm số bước xác nhận thanh toán có thể tạo ra giá trị kinh tế gấp nhiều lần tính năng trang trí.
            </p>
          </div>
        </div>

        {/* Right Column: Custom-built 3 States Diagram (No fake photos) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-900 font-mono uppercase">
                Sơ đồ ba trạng thái ứng dụng
              </span>
              <span className="text-[10px] text-teal-700 font-mono font-semibold">Tự dựng UI</span>
            </div>

            {/* 3 State Switcher Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveState('download')}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeState === 'download'
                    ? 'bg-rose-50 border-rose-500 text-rose-800 font-bold shadow-2xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
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
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
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
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Repeat className="w-4 h-4 text-teal-600" />
                <span className="text-[11px]">3. Sử dụng tiếp</span>
              </button>
            </div>

            {/* State Wireframe Canvas */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 min-h-[170px] flex flex-col justify-center text-xs">
              {activeState === 'download' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 text-rose-700 font-bold">
                    <Download className="w-4 h-4" /> Trạng thái 1: Lượt tải về từ App Store
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Kích thích bởi thông điệp quảng cáo hoặc tò mò công nghệ mới. Doanh nghiệp dễ lầm tưởng đây là thành công thương mại.
                  </p>
                  <div className="text-[10px] font-mono text-rose-600 bg-rose-100/60 p-1.5 rounded">
                    Rủi ro: 70–80% người dùng bỏ rơi ứng dụng sau 48 giờ nếu gặp rào cản.
                  </div>
                </div>
              )}

              {activeState === 'trial' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 text-amber-700 font-bold">
                    <Sparkles className="w-4 h-4" /> Trạng thái 2: Dùng thử lần đầu (First Run)
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Khách hàng kiểm tra xem giải pháp có giúp giải quyết đúng việc họ cần hay không. Thời gian tìm thấy giá trị (Time-to-Value) là yếu tố sống còn.
                  </p>
                  <div className="text-[10px] font-mono text-amber-700 bg-amber-100/60 p-1.5 rounded">
                    Điểm nghẽn: Giao diện rườm rà, bắt đăng ký quá nhiều thông tin không cần thiết.
                  </div>
                </div>
              )}

              {activeState === 'retention' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 text-teal-700 font-bold">
                    <Repeat className="w-4 h-4" /> Trạng thái 3: Sử dụng lặp lại bền vững (Adoption)
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Sản phẩm hòa nhập vào thói quen hàng ngày. Đây mới là thước đo chân thực nhất của một đổi mới thành công trên thị trường.
                  </p>
                  <div className="text-[10px] font-mono text-teal-700 bg-teal-100/60 p-1.5 rounded">
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
    </EditorialSectionFrame>
  );
};
