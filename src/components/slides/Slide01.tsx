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
            Công nghệ giống như nguyên liệu nấu ăn: nguyên liệu đắt tiền chưa chắc tạo ra món ăn hợp khẩu vị nếu người nấu không hiểu thực khách thích gì. Doanh nghiệp phải biết <strong className="text-slate-900 font-semibold">ai cần giải pháp, cần để làm gì và sử dụng trong hoàn cảnh nào</strong>.
          </p>

          {/* Double-Bezel Value Conversion Framework */}
          <div className="double-bezel">
            <div className="double-bezel-inner space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800">
                  Khung chuyển hóa giá trị
                </span>
                <span className="text-[10px] font-mono text-stone-400">3 Giai đoạn cốt lõi</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 transition-all hover:bg-stone-100/70">
                  <span className="text-[10px] text-stone-500 font-mono uppercase font-bold tracking-wider">Bước 01</span>
                  <div className="text-sm font-bold text-slate-900 mt-1">Nhu cầu</div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">Vấn đề có thực của khách hàng</p>
                </div>
                <div className="p-3.5 rounded-xl bg-teal-50/80 border border-teal-200 transition-all hover:bg-teal-100/70">
                  <span className="text-[10px] text-teal-700 font-mono uppercase font-bold tracking-wider">Bước 02</span>
                  <div className="text-sm font-bold text-teal-950 mt-1">Giá trị</div>
                  <p className="text-[11px] text-teal-800 mt-1 leading-snug">Lợi ích vượt chi phí chuyển đổi</p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 transition-all hover:bg-stone-100/70">
                  <span className="text-[10px] text-stone-500 font-mono uppercase font-bold tracking-wider">Bước 03</span>
                  <div className="text-sm font-bold text-slate-900 mt-1">Chấp nhận</div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">Sử dụng lặp lại trên diện rộng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Double-Bezel Frame around Real Photography */}
        <div className="lg:col-span-5 space-y-3">
          <div className="double-bezel p-2">
            <div className="relative rounded-2xl overflow-hidden shadow-sm h-[400px] group">
              <img 
                src="/images/user-tech-real.jpg" 
                alt="Người sử dụng sản phẩm công nghệ trong đời sống thực" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Editorial Typography Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-300 font-bold mb-1">
                  Câu hỏi nền tảng
                </span>
                <h3 className="display-lg text-white text-xl md:text-2xl leading-snug font-bold">
                  “Ai thực sự quyết định sự thành công của một đổi mới?”
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-mono">
                  Không phải phòng Lab — mà chính là Người dùng trên thị trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
