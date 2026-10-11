import React from 'react';
import { SlideCard } from '../SlideCard';

const PILLARS = [
  {
    title: 'Con người & Tổ chức',
    desc: 'Văn hóa học hỏi, tái cấu trúc vận hành, trao quyền cho các đội ngũ sản phẩm thích ứng nhanh với thị trường.'
  },
  {
    title: 'Công nghệ & Dữ liệu',
    desc: 'Số hóa toàn diện quy trình, ứng dụng AI/Chatbot và phân tích dữ liệu lớn để ra quyết định dựa trên hành vi thực.'
  },
  {
    title: 'Khách hàng & Giá trị',
    desc: 'Trải nghiệm minh bạch, gắn kết dài hạn, chuyển từ số lượng tài khoản sang giá trị sử dụng lặp lại bền vững.'
  }
];

export const Slide20: React.FC = () => {
  return (
    <SlideCard
      slideNum="20"
      categoryTag="BÀI HỌC THỰC TIỄN"
      title="FE CREDIT: Bài học quản trị đổi mới"
      subtitle="Ba trụ cột kiến tạo năng lực đổi mới sáng tạo bền vững trong kỷ nguyên số."
      theme="dark"
      bottomLabel="20. Bài học quản trị (10 phút)"
    >
      <div className="flex flex-col justify-center h-full space-y-6">
        {/* 3 Circular / Shield Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center flex flex-col items-center justify-between h-56 hover:border-teal-400 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-teal-950 border-2 border-teal-500/60 text-teal-300 font-bold font-mono text-base flex items-center justify-center group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>

              <div className="w-10 h-1 bg-teal-500 rounded" />
            </div>
          ))}
        </div>
      </div>
    </SlideCard>
  );
};
