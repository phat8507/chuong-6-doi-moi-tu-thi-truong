import React, { useState, useMemo } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { Sliders, AlertTriangle } from 'lucide-react';

const DEMAND_MODELS = [
  {
    id: 'bass',
    name: '1. Mô hình Bass (1969)',
    tag: 'Phía cầu',
    formula: 'S(t) = [p + q·(Y(t)/M)] · [M - Y(t)]',
    desc: 'Phân tách người mua thành hai nhóm: nhóm đổi mới tự thân (hệ số p) và nhóm bắt chước theo số đông (hệ số q).'
  },
  {
    id: 'epidemic',
    name: '2. Mô hình Dịch bệnh',
    tag: 'Phía cầu',
    formula: 'dF/dt = β · F(t) · [1 - F(t)]',
    desc: 'Giả định sự lan tỏa như cơ chế lây truyền virus: thông tin tiếp xúc trực tiếp giữa người đã dùng và người chưa dùng.'
  },
  {
    id: 'probit',
    name: '3. Mô hình Probit',
    tag: 'Phía cầu',
    formula: 'Adoption = 1 nếu Lợi ích - Chi phí ≥ Ngưỡng z*',
    desc: 'Mỗi cá nhân có một ngưỡng chấp nhận riêng; người tiêu dùng chỉ mua khi chi phí giảm hoặc chất lượng vượt ngưỡng kỳ vọng.'
  },
  {
    id: 'bayesian',
    name: '4. Mô hình Bayesian',
    tag: 'Phía cầu',
    formula: 'P(Tin tưởng | Trải nghiệm) ∝ P(Trải nghiệm) · P(Ban đầu)',
    desc: 'Người dùng có định kiến ban đầu và liên tục cập nhật xác suất tin cậy mỗi khi nhận thêm dữ liệu hay dùng thử.'
  }
];

export const Slide17: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[16];
  const [selectedModel, setSelectedModel] = useState<string>('bass');
  const [qFactor, setQFactor] = useState<number>(0.35); // word of mouth / social factor
  const [pFactor, setPFactor] = useState<number>(0.03); // innovation / advertising factor

  // Compute Bass simulation data points based on p and q
  const simulationData = useMemo(() => {
    const M = 1000; // market ceiling index
    let currentCumulative = 0;
    const points = [];

    for (let t = 1; t <= 8; t++) {
      const remaining = Math.max(0, M - currentCumulative);
      const adoption = Math.round((pFactor + (qFactor * (currentCumulative / M))) * remaining);
      currentCumulative += adoption;
      points.push({
        year: `Năm ${t}`,
        newAdopters: Math.max(0, adoption),
        cumulative: Math.min(M, currentCumulative)
      });
    }
    return points;
  }, [pFactor, qFactor]);

  const activeModelObj = DEMAND_MODELS.find(m => m.id === selectedModel) || DEMAND_MODELS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Warning Callout: Dự báo không phải tiên tri */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-[14px] flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-amber-950 font-mono text-xs sm:text-sm block uppercase tracking-wide">
                NGUYÊN TẮC QUẢN TRỊ CỐT LÕI: DỰ BÁO NHU CẦU KHÔNG PHẢI LÀ TIÊN TRI
              </strong>
              <p className="text-amber-950/90 leading-relaxed">
                Dự báo thị trường đổi mới phụ thuộc vào sự tương tác giữa <strong>hành vi chấp nhận (phía cầu)</strong>, <strong>năng lực cung ứng &amp; chi phí giảm theo quy mô (phía cung)</strong> và các cú sốc bên ngoài. Dữ liệu chạy mô hình là công cụ hỗ trợ tư duy, không phải lời hứa bảo đảm doanh số.
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Interactive Bass Model Workbench & Side-by-side Apple Newton Case */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Simulation Workbench */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-indigo-700" />
                      <span className="text-xs sm:text-base font-bold text-slate-900">
                        Mô Phỏng Mô Hình Bass (1969)
                      </span>
                    </div>
                    <span className="text-xs font-mono bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full border border-indigo-200 font-semibold">
                      MINH HỌA TOÁN HỌC
                    </span>
                  </div>

                  {/* Sliders for p and q with large comfortable touch targets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px]">
                    <div>
                      <div className="flex justify-between font-mono text-slate-800 mb-1.5">
                        <span className="font-semibold">Hệ số Đổi mới (p):</span>
                        <strong className="text-indigo-700 text-sm">{pFactor.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.01"
                        max="0.08"
                        step="0.01"
                        value={pFactor}
                        onChange={(e) => setPFactor(parseFloat(e.target.value))}
                        className="w-full accent-indigo-600 cursor-pointer h-2"
                      />
                      <span className="text-xs text-slate-500 block mt-1">Tác động truyền thông quảng cáo ban đầu</span>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono text-slate-800 mb-1.5">
                        <span className="font-semibold">Hệ số Bắt chước (q):</span>
                        <strong className="text-indigo-700 text-sm">{qFactor.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.10"
                        max="0.60"
                        step="0.05"
                        value={qFactor}
                        onChange={(e) => setQFactor(parseFloat(e.target.value))}
                        className="w-full accent-indigo-600 cursor-pointer h-2"
                      />
                      <span className="text-xs text-slate-500 block mt-1">Hiệu ứng lan truyền xã hội (Word of Mouth)</span>
                    </div>
                  </div>

                  {/* Simulation Chart */}
                  <div className="w-full h-52 sm:h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={simulationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                        <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#334155', fontWeight: 600 }} stroke="#94a3b8" />
                        <YAxis tick={{ fontSize: 11, fill: '#64748b' }} stroke="#94a3b8" />
                        <Tooltip
                          formatter={(val: any, name: any) => [
                            `${val} đơn vị`,
                            name === 'newAdopters' ? 'Lượng người mua mới' : 'Tích lũy'
                          ]}
                          labelFormatter={(lbl) => `Chu kỳ: ${lbl}`}
                          contentStyle={{ borderRadius: '12px', fontSize: '13px', border: '1px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="newAdopters"
                          stroke="#4f46e5"
                          strokeWidth={3}
                          dot={{ r: 4, fill: '#4f46e5' }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-xs font-mono text-slate-500 text-center">
                    Đường cong số người mua mới tại từng chu kỳ thay đổi tức thì theo hệ số p và q
                  </div>
                </div>

                {/* Demand Models Switcher */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-xs font-mono uppercase font-bold text-slate-900 tracking-wider block">
                    Bốn Mô Hình Phía Cầu (Click để tra cứu công thức):
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {DEMAND_MODELS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedModel(m.id)}
                        className={`p-2.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                          selectedModel === m.id
                            ? 'bg-indigo-50/90 border-indigo-600 text-indigo-950 font-bold shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                        }`}
                      >
                        <div className="text-xs font-semibold line-clamp-1">{m.name}</div>
                      </button>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-800 font-mono leading-relaxed">
                    <strong>Công thức:</strong> {activeModelObj.formula} — <span className="font-sans text-slate-700">{activeModelObj.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Apple Newton Failure Case Study */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-rose-900 font-bold font-mono text-xs sm:text-sm pb-2 border-b border-slate-100">
                    <AlertTriangle className="w-5 h-5 text-rose-700" />
                    <span>BÀI HỌC LỊCH SỬ: DỰ BÁO APPLE NEWTON (1993)</span>
                  </div>

                  {/* Numbers comparison bar */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                        <span className="text-slate-700">Dự báo ban đầu nội bộ:</span>
                        <span className="text-indigo-800 font-mono">400.000 thiết bị</span>
                      </div>
                      <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                        <span className="text-rose-900">Doanh số thực tế năm đầu:</span>
                        <span className="text-rose-900 font-mono">~70.000 thiết bị (sai số ~82%)</span>
                      </div>
                      <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-600 rounded-full" style={{ width: '17.5%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                    <p className="font-semibold text-slate-900">
                      Nguyên nhân gây lệch pha dự báo thảm họa:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-[13px] list-disc list-inside text-slate-700">
                      <li><strong>Lợi thế nhận thức kém:</strong> Tính năng nhận diện chữ viết tay bị lỗi thường xuyên, biến sản phẩm thành trò cười trên truyền thông đại chúng.</li>
                      <li><strong>Giá bán quá đắt:</strong> Mức giá \$700 (thập niên 1990) tạo rào cản quá cao so với sổ tay ghi chú truyền thống.</li>
                      <li><strong>Chưa có hạ tầng số:</strong> Thiếu internet di động băng thông rộng và hệ sinh thái ứng dụng đồng bộ.</li>
                    </ul>
                  </div>
                </div>

                {/* Supply-side and empirical methods footer */}
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5 font-mono">
                  <div><strong>Cơ chế phía cung:</strong> Năng lực sản xuất · Đường cong kinh nghiệm · Tài sản bổ trợ · Tiêu chuẩn ngành.</div>
                  <div><strong>Phương pháp dự báo:</strong> Hồi quy chuỗi thời gian · Chỉ báo dẫn dắt · Chuyên gia Delphi · Phân tích kịch bản.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
