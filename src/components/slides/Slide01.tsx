import React from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

export const Slide01: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={1} label="KHỞI ĐẦU CHỦ ĐỀ" accent="#147D82" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#147D82" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h1 className="display-xl text-slate-900 leading-[1.08]">
              Đổi Mới<br />
              <span className="text-[#147D82]">Từ Thị Trường</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-slate-700 italic">
              Từ công nghệ mới đến giá trị được thị trường chấp nhận
            </p>
          </div>

          <p className="drop-cap text-slate-700 text-base md:text-lg leading-relaxed">
            Khi nhắc đến đổi mới, chúng ta thường hình dung một phát minh công nghệ vượt trội hoặc một thiết bị hiện đại. Tuy nhiên, tính mới của công nghệ chưa đủ để giải thích vì sao sản phẩm thành công hay thất bại. Công nghệ giống như nguyên liệu nấu ăn: nguyên liệu đắt tiền chưa chắc tạo nên món ăn hợp khẩu vị nếu không giải quyết được vấn đề người dùng đang gặp phải.
          </p>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Học phần</span>
              <div className="text-xs font-bold text-slate-900 mt-1">Quản trị Đổi mới & Sáng tạo</div>
              <div className="text-[10px] text-teal-600 font-mono mt-0.5">MAG323_261_L01</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Nhóm thực hiện</span>
              <div className="text-xs font-bold text-slate-900 mt-1">Nhóm 4 · 3 Diễn giả</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Đại học Ngân hàng TP.HCM</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Giảng viên hướng dẫn</span>
              <div className="text-xs font-bold text-slate-900 mt-1">ThS. Nguyễn Thị Thanh</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Khoa Quản trị Kinh doanh</div>
            </div>
          </div>
        </div>

        {/* Right High-Impact Documentary Photo Card */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-[400px] group">
            <img 
              src="/images/hero-innovation.jpg" 
              alt="Technology and Global Network Ecosystem" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <div className="text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 font-bold">
                  Luận điểm trung tâm
                </span>
                <p className="text-xs leading-snug text-slate-200">
                  Ưu thế kỹ thuật chỉ chuyển hóa thành lợi thế cạnh tranh khi giải pháp phù hợp với phương thức tiêu dùng và được kiểm chứng qua hành vi thực tế.
                </p>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between">
            <span>Tư liệu: NASA Earth Science Archives</span>
            <span>Chương 6 · Tr. 81–85</span>
          </div>
        </div>
      </div>
    </div>
  );
};
