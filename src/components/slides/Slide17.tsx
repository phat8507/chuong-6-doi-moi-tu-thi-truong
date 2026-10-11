import React, { useState, useMemo } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine
} from 'recharts';
import { Sliders, AlertTriangle, Layers, TrendingUp, Info } from 'lucide-react';

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
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-950 font-mono text-[11px] block">
              NGUYÊN TẮC QUẢN TRỊ CỐT LÕI: DỰ BÁO NHU CẦU KHÔNG PHẢI LÀ TIÊN TRI
            </strong>
            <p className="text-amber-900 leading-relaxed text-[11px]">
              Dự báo thị trường đổi mới phụ thuộc vào sự tương tác giữa <strong>hành vi chấp nhận (phía cầu)</strong>, <strong>năng lực cung ứng &amp; chi phí giảm theo quy mô (phía cung)</strong> và các cú sốc bên ngoài. Dữ liệu chạy mô hình là công cụ hỗ trợ tư duy, không phải lời hứa bảo đảm doanh số.
            </p>
          </div>
        </div>

        {/* Middle: Interactive Bass Model Workbench & Side-by-side Apple Newton Case */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Simulation Workbench (8 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-700" />
                  <span className="text-xs font-bold text-slate-900">
                    Mô Phỏng Mô Hình Bass (1969)
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-indigo-50 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">
                  NHÃN: MINH HỌA TOÁN HỌC
                </span>
              </div>

              {/* Sliders for p and q */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-700 mb-1">
                    <span>Hệ số Đổi mới (p):</span>
                    <strong>{pFactor.toFixed(2)}</strong>
                  </div>
                  <input
                    type="range"
                    min="0.01"
                    max="0.08"
                    step="0.01"
                    value={pFactor}
                    onChange={(e) => setPFactor(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-400 block mt-0.5">Tác động quảng cáo ban đầu</span>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-700 mb-1">
                    <span>Hệ số Bắt chước (q):</span>
                    <strong>{qFactor.toFixed(2)}</strong>
                  </div>
                  <input
                    type="range"
                    min="0.10"
                    max="0.60"
                    step="0.05"
                    value={qFactor}
                    onChange={(e) => setQFactor(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-400 block mt-0.5">Hiệu ứng truyền miệng xã hội</span>
                </div>
              </div>

              {/* Simulation Chart */}
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={simulationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#475569' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#475569' }} />
                    <Tooltip
                      formatter={(val: any, name: any) => [
                        val,
                        name === 'newAdopters' ? 'Lượng mua mới' : 'Tích lũy'
                      ]}
                      labelFormatter={(lbl) => `Chu kỳ: ${lbl}`}
                      contentStyle={{ borderRadius: 8, fontSize: 11, border: '1px solid #cbd5e1' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="newAdopters"
                      stroke="#4f46e5"
                      strokeWidth={2.5}
                      dot={{ r: 4, fill: '#4f46e5' }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] font-mono text-slate-400 text-center">
                Đường cong số người mua mới tại từng chu kỳ thay đổi tức thì theo hệ số p và q
              </div>
            </div>

            {/* Demand Models Switcher */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block mb-2">
                Bốn Mô Hình Phía Cầu (Click để tra cứu công thức):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DEMAND_MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                      selectedModel === m.id
                        ? 'bg-indigo-50 border-indigo-600 text-indigo-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-[11px] line-clamp-1">{m.name}</div>
                  </button>
                ))}
              </div>
              <div className="mt-2.5 p-2.5 rounded-lg bg-slate-50 text-[11px] text-slate-700 font-mono">
                <strong>Công thức:</strong> {activeModelObj.formula} — <span className="font-sans text-slate-600">{activeModelObj.desc}</span>
              </div>
            </div>
          </div>

          {/* Right: Apple Newton Failure Case Study (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold font-mono text-xs">
                <AlertTriangle className="w-4 h-4" />
                <span>BÀI HỌC LỊCH SỬ: DỰ BÁO APPLE NEWTON (1993)</span>
              </div>

              {/* Numbers comparison bar */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Dự báo ban đầu nội bộ:</span>
                    <span className="text-indigo-800 font-mono">400.000 thiết bị</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-rose-800">Doanh số thực tế năm đầu:</span>
                    <span className="text-rose-800 font-mono">~70.000 thiết bị (sai số ~82%)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-600 rounded-full" style={{ width: '17.5%' }} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>Nguyên nhân lệch pha dự báo:</strong>
                </p>
                <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-700">
                  <li><strong>Lợi thế nhận thức kém:</strong> Tính năng nhận diện chữ viết tay bị lỗi thường xuyên, biến sản phẩm thành trò cười trên truyền thông.</li>
                  <li><strong>Giá bán quá đắt:</strong> Mức giá \$700 (thập niên 1990) tạo rào cản quá cao so với sổ tay ghi chú truyền thống.</li>
                  <li><strong>Chưa có hạ tầng số:</strong> Thiếu internet di động và hệ sinh thái ứng dụng đồng bộ.</li>
                </ul>
              </div>
            </div>

            {/* Supply-side and empirical methods footer */}
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <div><strong>Cơ chế phía cung:</strong> Năng lực sản xuất · Đường cong kinh nghiệm · Tài sản bổ trợ · Tiêu chuẩn ngành.</div>
              <div><strong>Phương pháp dự báo:</strong> Hồi quy chuỗi thời gian · Chỉ báo dẫn dắt · Chuyên gia Delphi · Phân tích kịch bản.</div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
