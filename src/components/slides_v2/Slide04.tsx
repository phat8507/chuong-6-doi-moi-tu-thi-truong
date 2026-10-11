import React from 'react';
import { SlideCard } from '../SlideCard';

export const Slide04: React.FC = () => {
  return (
    <SlideCard
      slideNum="04"
      categoryTag="MARKETING"
      title="Thị trường tác động đến đổi mới như thế nào?"
      subtitle="Đổi mới không dừng ở sản phẩm mà bao trùm cả bốn thành tố marketing mix và định hướng chiến lược."
      theme="light"
      bottomLabel="04. Thị trường tác động đến đổi mới (10 phút)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: 4P & Strategic Marketing */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono font-bold text-teal-700 uppercase">Marketing Mix</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">4P Đổi Mới</h4>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• <strong>Sản phẩm:</strong> Tính năng &amp; Trải nghiệm</li>
                <li>• <strong>Giá cả:</strong> Mô hình định giá linh hoạt</li>
                <li>• <strong>Phân phối:</strong> Kênh tiếp cận mới</li>
                <li>• <strong>Xúc tiến:</strong> Truyền thông giảm rủi ro</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono font-bold text-teal-700 uppercase">Định Hướng</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Chiến Lược</h4>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• Quyết định chiến lược vs. chiến thuật</li>
                <li>• Nghiên cứu 110 dự án đổi mới</li>
                <li>• Giới hạn của nghiên cứu truyền thống</li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900">
            <strong>Hàm ý quản trị:</strong> Khảo sát 110 dự án cho thấy thị trường biến động đòi hỏi công cụ nghiên cứu hành vi thực nghiệm thay vì chỉ hỏi ý kiến người dùng trên giấy.
          </div>
        </div>

        {/* Right Column: Central Diagram (Customer surrounded by 4 satellites) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Center Circle: Customer */}
            <div className="w-24 h-24 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center text-center p-2 z-10 shadow-lg">
              <span className="text-xs font-bold leading-tight">Customer</span>
              <span className="text-[10px] text-teal-300 font-mono">(Khách hàng)</span>
            </div>

            {/* Satellite Top: Nhu cầu khách hàng */}
            <div className="absolute top-0 px-3 py-1.5 rounded-full bg-white border-2 border-teal-600 shadow-sm text-xs font-bold text-teal-900">
              Nhu cầu khách hàng
            </div>

            {/* Satellite Right: Cạnh tranh */}
            <div className="absolute right-0 px-3 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-semibold text-slate-800">
              Cạnh tranh
            </div>

            {/* Satellite Bottom: Quản trị nội bộ */}
            <div className="absolute bottom-0 px-3 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-semibold text-slate-800">
              Quản trị nội bộ
            </div>

            {/* Satellite Left: Công nghệ */}
            <div className="absolute left-0 px-3 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-semibold text-slate-800">
              Công nghệ
            </div>

            {/* Dotted Orbit ring */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-slate-300 -z-0" />
          </div>
        </div>
      </div>
    </SlideCard>
  );
};
