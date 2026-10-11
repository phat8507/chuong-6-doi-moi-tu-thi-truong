import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Info, TrendingUp, Users } from 'lucide-react';

// Theoretical cumulative S-Curve data
const SCURVE_DATA = [
  { t: "GĐ 1", adoption: 2.5, phase: "Khởi đầu chậm (Inception)" },
  { t: "GĐ 2", adoption: 16.0, phase: "Cất cánh (Takeoff)" },
  { t: "GĐ 3", adoption: 50.0, phase: "Tăng trưởng nhanh (Rapid Growth)" },
  { t: "GĐ 4", adoption: 84.0, phase: "Bão hòa sớm (Maturity)" },
  { t: "GĐ 5", adoption: 98.0, phase: "Bão hòa hoàn toàn (Saturation)" },
  { t: "GĐ 6", adoption: 100.0, phase: "Giới hạn thị trường (Ceiling)" },
];

// Rogers' adopter categories theoretical distribution
const ROGERS_CATEGORIES = [
  { name: "Người đổi mới (Innovators)", percent: 2.5, color: "#147D82", desc: "Mạo hiểm, đam mê công nghệ, sẵn sàng chịu rủi ro thất bại ban đầu" },
  { name: "Người chấp nhận sớm (Early Adopters)", percent: 13.5, color: "#209EA6", desc: "Người dẫn dắt ý kiến (Opinion Leaders), đánh giá cao lợi thế thực tế" },
  { name: "Đa số sớm (Early Majority)", percent: 34.0, color: "#C08755", desc: "Thận trọng, chỉ mua khi đã có bằng chứng xã hội và sản phẩm hoàn thiện" },
  { name: "Đa số muộn (Late Majority)", percent: 34.0, color: "#657580", desc: "Hoài nghi, chỉ chấp nhận do áp lực kinh tế hoặc chuẩn mực xã hội bắt buộc" },
  { name: "Chậm chạp (Laggards)", percent: 16.0, color: "#334E68", desc: "Truyền thống, cô lập, chỉ dùng khi phương án cũ hoàn toàn biến mất" },
];

export const Slide16: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeChart, setActiveChart] = useState<'both' | 'scurve' | 'bell'>('both');

  return (
    <SlideLayout slide={slide} rightBadge="Lý thuyết lan tỏa Rogers (2003)">
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Academic Warning Banner */}
        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Lưu ý học thuật:</strong> Đường cong tích lũy S-curve mô tả tổng số người dùng theo thời gian; biểu đồ hình chuông mô tả phân phối mật độ thời điểm chấp nhận. Các con số 2.5% – 13.5% – 34% – 34% – 16% là <strong>khung phân loại lý thuyết</strong>, không phải tỷ lệ dự báo định lượng cho mọi ngành!
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <button
              onClick={() => setActiveChart('both')}
              className={`px-2 py-1 text-[10px] font-bold rounded cursor-pointer ${activeChart === 'both' ? 'bg-[#147D82] text-white' : 'bg-slate-200 text-slate-700'}`}
            >
              Cả hai biểu đồ
            </button>
            <button
              onClick={() => setActiveChart('scurve')}
              className={`px-2 py-1 text-[10px] font-bold rounded cursor-pointer ${activeChart === 'scurve' ? 'bg-[#147D82] text-white' : 'bg-slate-200 text-slate-700'}`}
            >
              Đường chữ S
            </button>
            <button
              onClick={() => setActiveChart('bell')}
              className={`px-2 py-1 text-[10px] font-bold rounded cursor-pointer ${activeChart === 'bell' ? 'bg-[#147D82] text-white' : 'bg-slate-200 text-slate-700'}`}
            >
              5 Nhóm Rogers
            </button>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Chart A: Cumulative S-Curve */}
          {(activeChart === 'both' || activeChart === 'scurve') && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#102A43] flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#147D82]" /> Biểu đồ A: Đường cong tích lũy S-Curve (%)
                </span>
                <span className="text-[10px] font-mono text-slate-400">Tích lũy từ 0% → 100%</span>
              </div>
              <div className="w-full h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SCURVE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#64748b' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#64748b' }} domain={[0, 100]} unit="%" />
                    <Tooltip 
                      formatter={(val: any) => [`${val}%`, 'Mức tích lũy']}
                      labelFormatter={(label, payload) => payload?.[0]?.payload?.phase || label}
                      contentStyle={{ fontSize: 12, borderRadius: 8 }}
                    />
                    <Area type="monotone" dataKey="adoption" stroke="#147D82" strokeWidth={3} fill="#147D82" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate-500 text-center">
                3 Pha điển hình: Khởi đầu chậm → Tăng tốc bùng nổ qua hiệu ứng mạng → Giảm tốc tiến đến bão hòa
              </div>
            </div>
          )}

          {/* Chart B: Rogers 5 Adopter Groups */}
          {(activeChart === 'both' || activeChart === 'bell') && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#102A43] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C08755]" /> Biểu đồ B: Phân phối 5 nhóm chấp nhận Rogers
                </span>
                <span className="text-[10px] font-mono text-slate-400">Tỷ lệ theo mật độ %</span>
              </div>
              <div className="w-full h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ROGERS_CATEGORIES}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#64748b' }} interval={0} angle={-10} textAnchor="end" height={35} />
                    <YAxis tick={{ fontSize: 10, fill: '#64748b' }} domain={[0, 40]} unit="%" />
                    <Tooltip 
                      formatter={(val: any) => [`${val}%`, 'Tỷ lệ lý thuyết']}
                      contentStyle={{ fontSize: 12, borderRadius: 8 }}
                    />
                    <Bar dataKey="percent" fill="#C08755" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate-500 text-center">
                Mô hình lý thuyết: Innovators (2.5%) • Early Adopters (13.5%) • Early Maj. (34%) • Late Maj. (34%) • Laggards (16%)
              </div>
            </div>
          )}
        </div>

        {/* Bottom Classroom Analogy */}
        <div className="p-3 rounded-xl bg-slate-100 text-slate-700 text-xs flex items-center justify-between">
          <span>
            📚 <strong>Ẩn dụ lớp học:</strong> Khi một bạn sinh viên phát hiện phương pháp ghi chép hiệu quả mới bằng iPad, ban đầu chỉ vài bạn thử nghiệm (Innovators); khi điểm thi cải thiện rõ rệt, cả lớp bắt đầu học theo (Majority); cuối cùng ai cũng dùng thì việc lan tỏa bão hòa.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
