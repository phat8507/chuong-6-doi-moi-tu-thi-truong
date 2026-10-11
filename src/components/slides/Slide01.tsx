import React from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Award, Compass, Layers, Sparkles } from 'lucide-react';

export const Slide01: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <SlideLayout slide={slide} rightBadge="Khai mạc chương trình">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: Editorial Information */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#147D82]/20 border border-[#147D82]/40 text-[#209EA6] text-xs font-semibold uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#C08755]" />
            Trường Đại học Ngân hàng TP. Hồ Chí Minh (HUB) • Khoa QTKD
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Đổi Mới Từ Thị Trường
            </h2>
            <p className="text-lg md:text-xl text-teal-300 font-medium">
              Từ công nghệ mới đến giá trị được thị trường chấp nhận
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
              "Công nghệ giống như nguyên liệu nấu ăn: nguyên liệu đắt tiền chưa chắc tạo nên món ăn hợp khẩu vị nếu không giải quyết được đúng vấn đề khách hàng đang gặp phải."
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
              <div className="text-xs text-slate-400 font-medium">Môn học</div>
              <div className="text-sm font-bold text-white mt-0.5">Quản trị Đổi mới & Sáng tạo</div>
              <div className="text-[11px] text-teal-400 mt-1 font-mono">MAG323_261_L01</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
              <div className="text-xs text-slate-400 font-medium">Nhóm thực hiện</div>
              <div className="text-sm font-bold text-white mt-0.5">Nhóm 4</div>
              <div className="text-[11px] text-amber-400 mt-1">3 Diễn giả luân phiên</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
              <div className="text-xs text-slate-400 font-medium">Giảng viên hướng dẫn</div>
              <div className="text-sm font-bold text-white mt-0.5">ThS. Nguyễn Thị Thanh</div>
              <div className="text-[11px] text-slate-400 mt-1">Khoa QTKD · HUB</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Image with Editorial Badge */}
        <div className="lg:col-span-5 relative h-full flex items-center justify-center">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-teal-500/30 group">
            <img 
              src="/images/hero-innovation.jpg" 
              alt="Technology and Innovation Ecosystem" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#102A43]/85 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C08755] uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Luận điểm trọng tâm
              </div>
              <p className="text-xs text-slate-200 mt-1 leading-snug">
                Ưu thế kỹ thuật chỉ chuyển hóa thành lợi thế cạnh tranh khi giải pháp phù hợp với phương thức tiêu dùng và được thị trường xác nhận.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
