import React from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

export const Slide01: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Full Editorial Text */}
        <div className="lg:col-span-7 space-y-6">
          <p className="drop-cap text-slate-800 text-lg leading-relaxed">
            Khi nhắc đến đổi mới, chúng ta thường hình dung một phát minh kỹ thuật đột phá, một thiết bị hiện đại hoặc một phần mềm vừa ra mắt. Tuy nhiên, tính mới của công nghệ chưa bao giờ đủ để giải thích vì sao sản phẩm thành công hay thất bại.
          </p>

          <p className="text-slate-700 leading-relaxed text-base">
            Công nghệ giống như nguyên liệu nấu ăn: nguyên liệu đắt tiền chưa chắc tạo ra món ăn hợp khẩu vị nếu người nấu không hiểu thực khách thích gì. Doanh nghiệp phải biết <strong className="text-slate-900">ai cần giải pháp, cần để làm gì và sử dụng trong hoàn cảnh nào</strong>.
          </p>

          {/* Academic 3-step value formula */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
              Khung chuyển hóa giá trị:
            </span>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-mono">Bước 1</span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">Nhu cầu</div>
                <p className="text-[11px] text-slate-600 mt-1">Vấn đề có thực của khách hàng</p>
              </div>
              <div className="p-3 rounded-xl bg-teal-50 border border-teal-200">
                <span className="text-xs text-teal-700 font-mono">Bước 2</span>
                <div className="text-sm font-bold text-teal-900 mt-0.5">Giá trị</div>
                <p className="text-[11px] text-teal-800 mt-1">Lợi ích vượt chi phí chuyển đổi</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-mono">Bước 3</span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">Chấp nhận</div>
                <p className="text-[11px] text-slate-600 mt-1">Sử dụng lặp lại trên diện rộng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real Photograph with Bold Editorial Typography on top */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-[420px] group">
            <img 
              src="/images/user-tech-real.jpg" 
              alt="Real person adopting technology product in real life" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Bold Typography Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="display-lg text-white text-2xl md:text-3xl mt-1 leading-snug">
                “Ai thực sự quyết định sự thành công của một đổi mới?”
              </h3>
              <p className="text-xs text-slate-300 mt-2 font-mono">
                Không phải kỹ sư phòng Lab — mà chính là Người dùng trên thị trường.
              </p>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
