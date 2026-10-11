import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Calculator, AlertTriangle, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface DiffusionModel {
  id: string;
  name: string;
  coreMechanism: string;
  question: string;
  strengths: string;
}

const MODELS: DiffusionModel[] = [
  {
    id: "epidemic",
    name: "1. Mô hình Dịch bệnh (Epidemic)",
    coreMechanism: "Thông tin lan truyền do tiếp xúc trực tiếp giữa người đã dùng và người chưa dùng.",
    question: "“Bạn đã nghe ai giới thiệu về sản phẩm này chưa?”",
    strengths: "Phù hợp giải thích tốc độ lan truyền thông điệp truyền miệng; giả định người dùng đồng nhất."
  },
  {
    id: "bass",
    name: "2. Mô hình Bass (1969)",
    coreMechanism: "Phân biệt 2 nhóm: Người tự đổi mới (Hệ số p) và Người bắt chước hiệu ứng xã hội (Hệ số q).",
    question: "“Bạn mua vì đam mê độc lập hay vì thấy số đông đang dùng?”",
    strengths: "Ứng dụng rất rộng cho sản phẩm tiêu dùng bền và thiết bị công nghệ."
  },
  {
    id: "probit",
    name: "3. Mô hình Probit (Ngưỡng chi phí - lợi ích)",
    coreMechanism: "Mỗi cá nhân có một ngưỡng kinh tế riêng; chỉ mua khi giá giảm hoặc lợi ích vượt ngưỡng.",
    question: "“Sản phẩm đã giảm giá đủ sâu để bạn chấp nhận chưa?”",
    strengths: "Giải thích rõ sự không đồng nhất về ngân sách và chi phí cơ hội giữa các cá nhân."
  },
  {
    id: "bayesian",
    name: "4. Mô hình Bayesian (Học hỏi & Cập nhật niềm tin)",
    coreMechanism: "Người dùng bắt đầu với nghi ngại, sau đó liên tục cập nhật xác suất khi có thêm dữ liệu trải nghiệm.",
    question: "“Sau khi thấy bằng chứng thử nghiệm thực tế, bạn đã tin tưởng hơn chưa?”",
    strengths: "Nhấn mạnh vai trò của bằng chứng xác thực, demo và cam kết độ tin cậy."
  }
];

// Illustrative Bass diffusion curve data (Clearly labeled simulated)
const BASS_SIMULATION = [
  { year: "Năm 1", adopters: 120, cumulative: 120 },
  { year: "Năm 2", adopters: 350, cumulative: 470 },
  { year: "Năm 3", adopters: 780, cumulative: 1250 },
  { year: "Năm 4", adopters: 1100, cumulative: 2350 },
  { year: "Năm 5", adopters: 850, cumulative: 3200 },
  { year: "Năm 6", adopters: 420, cumulative: 3620 },
  { year: "Năm 7", adopters: 180, cumulative: 3800 },
];

export const Slide17: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeModel, setActiveModel] = useState<string>("bass");

  const current = MODELS.find(m => m.id === activeModel) || MODELS[0];

  return (
    <SlideLayout slide={slide} rightBadge="Forecasting Workbench & Case Apple Newton">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive Diffusion Model Switcher */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-teal-300">Bốn Mô Hình Phía Cầu (Demand-side Models)</span>
            <span className="text-[11px] italic">Bấm chọn mô hình để phân tích cơ chế</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {MODELS.map((m) => {
              const isSelected = activeModel === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModel(m.id)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-20 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-teal-400 shadow-md ring-1 ring-teal-400'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold text-white leading-tight">{m.name}</span>
                  <span className="text-[10px] text-teal-400 truncate">{m.question}</span>
                </button>
              );
            })}
          </div>

          {/* Model Mechanism Card */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-300">{current.name}</span>
              <span className="text-[10px] font-mono text-amber-300">Cơ chế toán học</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-relaxed">
              <strong>Bản chất:</strong> {current.coreMechanism}
            </p>
            <p className="text-[11px] text-slate-400">
              <strong>Ý nghĩa:</strong> {current.strengths}
            </p>
          </div>

          {/* Simulated Diffusion Curve Chart (Strictly labeled) */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-teal-400" /> Minh họa đường cong chấp nhận Bass (Mô phỏng minh họa)
              </span>
              <span className="text-[9px] font-mono text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded">
                Dữ liệu mô phỏng giả định
              </span>
            </div>
            <div className="w-full h-28">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={BASS_SIMULATION}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="year" tick={{ fontSize: 9, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 9, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ fontSize: 11, backgroundColor: '#0f172a', borderColor: '#334155' }} />
                  <Line type="monotone" dataKey="adopters" name="Số người mới/năm" stroke="#209EA6" strokeWidth={2} dot={{ r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Apple Newton Case & Funnel Math Example */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Apple Newton Case */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Bài học Apple Newton (1993)
              </span>
              <span className="text-[10px] font-mono text-slate-400">Sai lệch dự báo</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Các chuyên gia từng dự báo doanh số Newton đạt <strong>400.000 máy/năm</strong>. Tuy nhiên thực tế chỉ bán được vỏn vẹn <strong>70.000 máy</strong> vì tính năng nhận dạng chữ viết tay bị lỗi và người mua chưa hiểu rõ công dụng giữa sổ tay giấy và laptop.
            </p>
            <div className="text-[11px] text-amber-300/90 font-medium">
              → Dự báo thất bại khi công dụng sản phẩm chưa được người dùng xác thực.
            </div>
          </div>

          {/* Mathematical Pitfall of Conversion Funnels */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-teal-300 font-bold">
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>Cạm bẫy toán học: Mẫu số phễu chuyển đổi</span>
            </div>
            <div className="p-2 rounded bg-slate-800 text-[11px] text-slate-200 font-mono space-y-0.5">
              <div>1.000 tiếp cận → 400 đăng ký → 250 hoàn tất</div>
              <div>→ 150 dùng lần đầu → 90 người quay lại lặp lại.</div>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Tỷ lệ quay lại là <strong>60% trên người đã dùng (90/150)</strong> nhưng chỉ là <strong>9% trên tổng số tiếp cận (90/1.000)</strong>. Không được lấy tỷ lệ 60% để phóng đại rằng 60% thị trường đã chấp nhận!
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
