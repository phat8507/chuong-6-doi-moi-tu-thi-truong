import React, { useState, useMemo } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Scale, Sparkles } from 'lucide-react';

const BENEFIT_COST_DATA = [
  { name: "Mẫu A: Nhiều tính năng", benefit: 85, cost: 95, netValue: -10, desc: "Giá 850k, LED cảm ứng, sạc pin phức tạp" },
  { name: "Mẫu B: Thực dụng bền", benefit: 90, cost: 35, netValue: 55, desc: "Giá 220k, giữ nhiệt 18h, chống tràn 100%" },
];

export const Slide06: React.FC = React.memo(() => {
  const meta = CHAPTER6_SECTIONS[5];
  const [activeModel, setActiveModel] = useState<'A' | 'B'>('B');
  const [customBenefit, setCustomBenefit] = useState<number>(90);
  const [customCost, setCustomCost] = useState<number>(35);

  const netValue = useMemo(() => customBenefit - customCost, [customBenefit, customCost]);
  
  // Angle for the interactive balance beam (-15deg to +15deg)
  const balanceAngle = useMemo(() => {
    const raw = (customBenefit - customCost) / 100 * 20;
    return Math.max(-18, Math.min(18, raw));
  }, [customBenefit, customCost]);

  const selectPreset = (model: 'A' | 'B') => {
    setActiveModel(model);
    if (model === 'A') {
      setCustomBenefit(85);
      setCustomCost(95);
    } else {
      setCustomBenefit(90);
      setCustomCost(35);
    }
  };

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Benefit-Cost Chart Comparison & Dynamic Physics Simulation */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider flex items-center gap-2">
                <Scale className="w-4 h-4 text-teal-700" />
                Đồ thị so sánh: Lợi ích cảm nhận vs Chi phí bỏ ra (Net Value)
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 font-mono">
                PIMS Framework
              </span>
            </div>

            {/* Responsive Chart Container with high contrast and readable labels */}
            <div className="w-full h-56 sm:h-60 pt-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={BENEFIT_COST_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
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
                  <Bar dataKey="benefit" name="benefit" fill="#0d9488" radius={[6, 6, 0, 0]} barSize={40} />
                  <Bar dataKey="cost" name="cost" fill="#e11d48" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Overdrive Feature: Interactive Physics Balance Simulator */}
            <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  Mô phỏng cân bằng giá trị thời gian thực:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => selectPreset('A')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono ${
                      activeModel === 'A'
                        ? 'bg-rose-100 text-rose-800 border border-rose-300'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Mẫu A (LED)
                  </button>
                  <button
                    onClick={() => selectPreset('B')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono ${
                      activeModel === 'B'
                        ? 'bg-teal-100 text-teal-800 border border-teal-300'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Mẫu B (Inox)
                  </button>
                </div>
              </div>

              {/* Dynamic Physical Tilt Indicator */}
              <div className="relative py-4 px-2 flex flex-col items-center justify-center bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
                <div 
                  className="w-48 sm:w-64 h-3 bg-slate-700 rounded-full transition-transform duration-500 ease-out flex items-center justify-between px-2 shadow-xs"
                  style={{ transform: `rotate(${-balanceAngle}deg)` }}
                >
                  <div className="w-5 h-5 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center -translate-y-4 shadow-sm">
                    +
                  </div>
                  <div className="w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center -translate-y-4 shadow-sm">
                    −
                  </div>
                </div>
                {/* Fulcrum */}
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-slate-800 mt-1" />
                
                <div className="mt-2 text-xs font-mono font-bold">
                  Giá trị ròng (Net Relative Value):{' '}
                  <span className={netValue >= 0 ? 'text-teal-700' : 'text-rose-700'}>
                    {netValue >= 0 ? `+${netValue} điểm (Vượt trội)` : `${netValue} điểm (Thâm hụt)`}
                  </span>
                </div>
              </div>

              {/* Sliders for instant live experimentation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-teal-900 font-semibold">Lợi ích cảm nhận:</span>
                    <span className="font-bold text-teal-700">{customBenefit}đ</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={customBenefit}
                    onChange={(e) => setCustomBenefit(Number(e.target.value))}
                    className="w-full accent-teal-700 cursor-pointer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-rose-900 font-semibold">Chi phí &amp; Rào cản:</span>
                    <span className="font-bold text-rose-700">{customCost}đ</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={customCost}
                    onChange={(e) => setCustomCost(Number(e.target.value))}
                    className="w-full accent-rose-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Historical PIMS Citation */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[14px] text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-semibold font-mono">Bằng chứng thực nghiệm PIMS:</strong> Khảo sát hơn 3.000 đơn vị kinh doanh toàn cầu chứng minh rằng tỷ suất sinh lời bắt nguồn từ <em>chất lượng tương đối</em> và <em>giá trị cảm nhận tương đối</em>, chứ không đến từ việc nhồi nhét tối đa thông số kỹ thuật đắt đỏ.
            </div>
          </div>
        </div>

        {/* Right Column: Historical Nokia Photo with Correct Dating */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            {/* Historical Nokia Documentary Photo with Lazy Loading */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm h-56 group bg-slate-900">
              <img 
                src="/images/nokia-phone.jpg" 
                alt="Nokia 6600 & Early 2000s Mobile Devices" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex items-end p-4">
                <p className="text-xs sm:text-[13px] text-white font-medium leading-relaxed">
                  <strong>Nokia 6600 (Giai đoạn 2003):</strong> Dòng sản phẩm định hình thị trường trước khi các đối thủ tạo bước ngoặt thiết kế nắp gập.
                </p>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
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
    </EditorialSectionFrame>
  );
});

