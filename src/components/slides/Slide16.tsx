import React from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const SCURVE_DATA = [
  { t: "GĐ 1", adoption: 2.5, phase: "Khởi đầu chậm" },
  { t: "GĐ 2", adoption: 16.0, phase: "Cất cánh" },
  { t: "GĐ 3", adoption: 50.0, phase: "Tăng trưởng nhanh" },
  { t: "GĐ 4", adoption: 84.0, phase: "Bão hòa sớm" },
  { t: "GĐ 5", adoption: 98.0, phase: "Bão hòa hoàn toàn" },
  { t: "GĐ 6", adoption: 100.0, phase: "Giới hạn trần" },
];

const ROGERS_CATEGORIES = [
  { name: "Đổi mới", percent: 2.5, color: "#0d9488" },
  { name: "Sớm", percent: 13.5, color: "#14b8a6" },
  { name: "Đa số sớm", percent: 34.0, color: "#2563eb" },
  { name: "Đa số muộn", percent: 34.0, color: "#64748b" },
  { name: "Chậm", percent: 16.0, color: "#94a3b8" },
];

export const Slide16: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={16} label="LÝ THUYẾT ROGERS" accent="#0284c7" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0284c7" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="display-lg text-slate-900 leading-tight">
            Đường Cong Chữ S &amp;<br />
            <span className="text-sky-700">Các Nhóm Chấp Nhận Đổi Mới</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-serif italic">
            Phân biệt đường cong tích lũy S-curve và phân phối mật độ thời điểm chấp nhận của Rogers (2003)
          </p>
        </div>

        {/* Dual Clean Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart A: Cumulative S-Curve */}
          <div className="chart-wrapper">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900">Biểu đồ A: Đường cong tích lũy S-Curve (%)</span>
              <span className="text-[10px] font-mono text-slate-500">Tích lũy từ 0% → 100%</span>
            </div>
            <div className="w-full h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SCURVE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748b' }} domain={[0, 100]} unit="%" />
                  <Tooltip 
                    formatter={(val: any) => [`${val}%`, 'Mức tích lũy']}
                    contentStyle={{ borderRadius: 8, fontSize: 11 }}
                  />
                  <Area type="monotone" dataKey="adoption" stroke="#0284c7" strokeWidth={2.5} fill="#e0f2fe" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-1">
              3 Giai đoạn: Tăng chậm ban đầu → Tăng tốc bùng nổ → Chậm lại khi tiến đến bão hòa
            </p>
          </div>

          {/* Chart B: 5 Adopter Groups */}
          <div className="chart-wrapper">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900">Biểu đồ B: Phân phối 5 nhóm chấp nhận Rogers</span>
              <span className="text-[10px] font-mono text-slate-500">Mật độ thời điểm</span>
            </div>
            <div className="w-full h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ROGERS_CATEGORIES}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748b' }} domain={[0, 40]} unit="%" />
                  <Tooltip 
                    formatter={(val: any) => [`${val}%`, 'Tỷ lệ lý thuyết']}
                    contentStyle={{ borderRadius: 8, fontSize: 11 }}
                  />
                  <Bar dataKey="percent" radius={[4, 4, 0, 0]}>
                    {ROGERS_CATEGORIES.map((c, i) => (
                      <Cell key={i} fill={c.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-1">
              Innovators (2.5%) • Early Adopters (13.5%) • Early Maj. (34%) • Late Maj. (34%) • Laggards (16%)
            </p>
          </div>
        </div>

        {/* Academic Caveat Footer */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <em>Lưu ý khoa học:</em> Các tỷ lệ 2.5% – 13.5% – 34% – 34% – 16% là <strong>khung phân loại lý thuyết</strong> để mô tả sự khác biệt hành vi giữa các nhóm người dùng; không phải tỷ lệ định lượng ấn định sẵn cho mọi thị trường cụ thể.
        </div>
      </div>
    </div>
  );
};
