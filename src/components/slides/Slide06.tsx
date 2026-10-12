import React from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const BENEFIT_COST_DATA = [
  { name: "Mẫu A: Nhiều tính năng", benefit: 85, cost: 95, netValue: -10, desc: "Giá 850k, LED cảm ứng, sạc pin phức tạp" },
  { name: "Mẫu B: Thực dụng bền", benefit: 90, cost: 35, netValue: 55, desc: "Giá 220k, giữ nhiệt 18h, chống tràn 100%" },
];

export const Slide06: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[5];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Benefit-Cost Chart Comparison */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                  Đồ thị so sánh: Lợi ích cảm nhận vs Chi phí bỏ ra (Net Value)
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800">
                  PIMS Framework
                </span>
              </div>

              {/* Responsive Chart Container with high contrast and readable labels */}
              <div className="w-full h-56 sm:h-64 pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={BENEFIT_COST_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 13, fill: '#1e293b', fontWeight: 600 }} 
                      stroke="#94a3b8" 
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: '#64748b' }} 
                      domain={[0, 100]} 
                      stroke="#94a3b8" 
                    />
                    <Tooltip 
                      formatter={(val: any, name: any) => [
                        `${val} điểm`, 
                        name === 'benefit' ? 'Lợi ích cảm nhận (Benefit)' : 'Chi phí & Bất tiện (Cost)'
                      ]}
                      contentStyle={{ 
                        borderRadius: '12px', 
                        fontSize: '13px', 
                        border: '1px solid #cbd5e1', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
                      }}
                    />
                    <Legend 
                      verticalAlign="top" 
                      height={36} 
                      formatter={(val) => (
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {val === 'benefit' ? 'Lợi ích cảm nhận' : 'Chi phí & Rào cản'}
                        </span>
                      )}
                    />
                    <Bar dataKey="benefit" name="benefit" fill="#0d9488" radius={[6, 6, 0, 0]} barSize={42} />
                    <Bar dataKey="cost" name="cost" fill="#e11d48" radius={[6, 6, 0, 0]} barSize={42} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Two Model Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200/90 text-rose-950 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-sm font-bold text-rose-900">Mẫu A (LED thông minh)</strong>
                    <span className="text-xs font-mono font-bold bg-rose-200/70 text-rose-800 px-2 py-0.5 rounded">Net: -10</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-rose-900/90 leading-relaxed">
                    Chi phí &amp; giá tiền (95đ) cao hơn lợi ích thực (85đ) → Giá trị tương đối âm đối với phân khúc học sinh, khó đạt doanh số kỳ vọng.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200/90 text-teal-950 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-sm font-bold text-teal-900">Mẫu B (Inox chân không)</strong>
                    <span className="text-xs font-mono font-bold bg-teal-200/70 text-teal-800 px-2 py-0.5 rounded">Net: +55</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-teal-900/90 leading-relaxed">
                    Lợi ích thực dụng (90đ) vượt xa chi phí bỏ ra (35đ) → Giá trị tương đối vượt trội, khách hàng quyết định mua ngay lập tức!
                  </p>
                </div>
              </div>

              {/* Historical PIMS Citation */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-semibold font-mono">Bằng chứng thực nghiệm PIMS:</strong> Khảo sát hơn 3.000 đơn vị kinh doanh toàn cầu chứng minh rằng tỷ suất sinh lời bắt nguồn từ <em>chất lượng tương đối</em> và <em>giá trị cảm nhận tương đối</em>, chứ không đến từ việc nhồi nhét tối đa thông số kỹ thuật đắt đỏ.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Historical Nokia Photo with Correct Dating */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
              {/* Relative Value Watercolor Illustration */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md h-52 sm:h-56 group">
                <img 
                  src="/images/relative-value-balance-watercolor.jpg" 
                  alt="Cán cân giá trị tương đối: Lợi ích cảm nhận vs Chi phí bỏ ra" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-4">
                  <p className="text-xs sm:text-[13px] text-white font-medium leading-relaxed">
                    <strong>Cán cân giá trị tương đối:</strong> Lợi ích thực dụng (Mẫu B) chiến thắng sản phẩm nhồi nhét tính năng đắt đỏ (Mẫu A).
                  </p>
                </div>
              </div>

              {/* Case Study Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="font-bold text-sm text-slate-900 uppercase font-mono tracking-wider">
                    Bài học lịch sử: Nokia
                  </span>
                  <span className="text-xs sm:text-sm text-rose-700 font-mono font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Thị phần: 35% → &lt;30% (2003)
                  </span>
                </div>
                <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                  Nokia từng dẫn đầu nhờ mạng GSM ổn định và chất lượng phần cứng vượt trội. Nhưng khi kỳ vọng thị trường chuyển dịch sang <strong>điện thoại nắp gập và tích hợp máy ảnh</strong>, Nokia chậm cải tiến phân khúc này khiến thị phần lập tức bị xói mòn.
                </p>
                <div className="pt-2 border-t border-slate-200/80 text-xs sm:text-[13px] text-slate-600 font-medium italic">
                  “Khác biệt hóa luôn mang tính tương đối và liên tục biến đổi theo thị hiếu người dùng theo thời gian.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
