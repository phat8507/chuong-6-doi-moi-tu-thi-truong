import React from 'react';
import { SlideCard } from '../SlideCard';

export const Slide01: React.FC = () => {
  return (
    <SlideCard
      slideNum="01"
      categoryTag="C6"
      title="Chương 6: Đổi mới từ thị trường"
      subtitle="Biến tín hiệu thị trường thành giá trị cho khách hàng"
      theme="dark"
      bottomLabel="01. Đổi mới từ thị trường (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: Course Metadata Pills */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400 font-mono">Môn học:</span>
              <span className="font-bold text-teal-300">Quản trị Đổi mới và Sáng tạo</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400 font-mono">Trường:</span>
              <span className="font-bold text-white">ĐH Ngân hàng TP.HCM (HUB)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400 font-mono">Báo cáo:</span>
              <span className="font-bold text-teal-400">Nhóm 4 · 21 phần nội dung</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 text-xs text-teal-200 leading-relaxed">
            <span className="font-bold text-teal-300 block mb-1">Thông điệp cốt lõi:</span>
            Công nghệ chỉ trở thành đổi mới có ý nghĩa khi được thị trường chấp nhận và tạo ra giá trị kinh tế bền vững.
          </div>
        </div>

        {/* Right Column: Hero Photograph */}
        <div className="lg:col-span-5 h-[320px] md:h-[360px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/user-tech-real.jpg"
            alt="Người sử dụng sản phẩm công nghệ thực tế"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
            <span className="text-xs text-slate-300 font-medium italic">
              "Ai thực sự quyết định sự thành công của một đổi mới?"
            </span>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
