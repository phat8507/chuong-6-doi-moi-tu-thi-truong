import React from 'react';
import { SlideCard } from '../SlideCard';

export const Slide17: React.FC = () => {
  return (
    <SlideCard
      slideNum="17"
      categoryTag="DỰ BÁO"
      title="Dự báo sự lan tỏa của đổi mới"
      subtitle="Kết hợp mô hình cầu, cơ chế cung và các phương pháp dự báo thận trọng để tránh ngộ nhận quy mô."
      theme="dark"
      bottomLabel="17. Dự báo lan tỏa (10 phút)"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pillar 1: 4 Demand Models */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">4 Mô hình cầu (Demand)</span>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• <strong>Dịch bệnh (Epidemic):</strong> Lan truyền qua tiếp xúc</li>
              <li>• <strong>Bass Model:</strong> Đổi mới vs. Bắt chước</li>
              <li>• <strong>Probit:</strong> Khác biệt về ngưỡng kinh tế</li>
              <li>• <strong>Bayesian:</strong> Học hỏi &amp; cập nhật niềm tin</li>
            </ul>
          </div>

          {/* Pillar 2: Supply Side Mechanisms */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">Cơ chế cung (Supply Side)</span>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• Chất lượng sản phẩm hoàn thiện dần</li>
              <li>• Chi phí sản xuất giảm theo quy mô</li>
              <li>• Giá cả hợp lý hóa theo thời gian</li>
              <li>• Hạ tầng hỗ trợ được xây dựng đồng bộ</li>
            </ul>
          </div>

          {/* Pillar 3: 4 Forecasting Methods */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">4 Phương pháp dự báo</span>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• <strong>Mô phỏng (Simulation):</strong> Bass Curve</li>
              <li>• <strong>Ý kiến chuyên gia:</strong> Delphi Method</li>
              <li>• <strong>Khảo sát ý định:</strong> Người tiêu dùng</li>
              <li>• <strong>Phát triển kịch bản:</strong> Lạc quan vs Thận trọng</li>
            </ul>
          </div>
        </div>

        {/* Bottom: Apple Newton Lesson Banner */}
        <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-800/60 text-xs text-slate-300 flex items-center justify-between">
          <div>
            <strong className="text-amber-300 font-mono text-[11px] block">Thực hành: Apple Newton (1993)</strong>
            <p className="text-[11px] text-slate-400">
              Dự báo hàng triệu người dùng nhưng nhận diện chữ viết quá lỗi, giá quá đắt → Thất bại vì thị trường chưa sẵn sàng.
            </p>
          </div>
          <span className="text-[10px] font-mono text-teal-400 bg-teal-950 px-2.5 py-1 rounded border border-teal-800">
            Kịch bản: Thận trọng &gt; Lạc quan
          </span>
        </div>
      </div>
    </SlideCard>
  );
};
