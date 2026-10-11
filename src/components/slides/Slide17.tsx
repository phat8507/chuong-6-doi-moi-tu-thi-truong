import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { AlertTriangle, Calculator } from 'lucide-react';

const MODELS = [
  { id: "epidemic", name: "1. Dịch bệnh (Epidemic)", desc: "Lan truyền thông tin trực tiếp giữa người đã dùng và người chưa dùng.", q: "“Bạn đã nghe ai giới thiệu chưa?”" },
  { id: "bass", name: "2. Mô hình Bass (1969)", desc: "Phân biệt nhóm tự đổi mới (p) và nhóm bắt chước chịu ảnh hưởng xã hội (q).", q: "“Bạn mua vì đam mê hay vì thấy số đông?”" },
  { id: "probit", name: "3. Mô hình Probit", desc: "Mỗi người có ngưỡng chi phí - lợi ích riêng; chỉ mua khi giá giảm hoặc giá trị vượt ngưỡng.", q: "“Giá đã đủ rẻ để bạn mua chưa?”" },
  { id: "bayesian", name: "4. Mô hình Bayesian", desc: "Người dùng liên tục cập nhật niềm tin xác suất khi có thêm dữ liệu trải nghiệm mới.", q: "“Sau khi thấy demo bạn đã tin chưa?”" },
];

const BASS_SIMULATION = [
  { year: "Năm 1", adopters: 120 },
  { year: "Năm 2", adopters: 350 },
  { year: "Năm 3", adopters: 780 },
  { year: "Năm 4", adopters: 1100 },
  { year: "Năm 5", adopters: 850 },
  { year: "Năm 6", adopters: 420 },
  { year: "Năm 7", adopters: 180 },
];

export const Slide17: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeModel, setActiveModel] = useState<string>("bass");

  const current = MODELS.find(m => m.id === activeModel) || MODELS[0];

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={17} label="DỰ BÁO NHU CẦU" accent="#4f46e5" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#4f46e5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: 4 Demand Models & Chart */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Dự Báo Sự Lan Tỏa<br />
              <span className="text-indigo-700">Của Đổi Mới</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Bốn mô hình phía cầu, cơ chế phía cung và bài học dự báo Apple Newton (1993)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {MODELS.map((m) => {
              const isSelected = activeModel === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModel(m.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-20 ${
                    isSelected
                      ? 'bg-indigo-50/70 border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-900">{m.name}</span>
                  <span className="text-[10px] text-indigo-600 font-medium truncate">{m.q}</span>
                </button>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-indigo-900">{current.name}:</span>
            <p className="text-[11px] text-slate-700 leading-relaxed">{current.desc}</p>
          </div>

          {/* Clean Line Chart Simulation */}
          <div className="chart-wrapper p-3.5">
            <div className="flex items-center justify-between mb-1 text-[11px]">
              <span className="font-bold text-slate-800">Minh họa đường cong Bass theo thời gian (Minh họa toán học)</span>
              <span className="text-[10px] text-slate-400 font-mono">Dữ liệu giả định minh họa</span>
            </div>
            <div className="w-full h-28">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={BASS_SIMULATION}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 9, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 9, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <Line type="monotone" dataKey="adopters" name="Số người áp dụng mới" stroke="#4f46e5" strokeWidth={2} dot={{ r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Apple Newton Case & Funnel Math */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-amber-700 uppercase font-mono flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Bài học Apple Newton (1993)
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Sai lệch dự báo</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Các chuyên gia dự báo doanh số Newton đạt <strong>400.000 máy/năm</strong>. Thực tế chỉ bán được <strong>70.000 máy</strong> vì tính năng nhận dạng chữ viết tay bị lỗi và định vị công dụng chưa rõ. Dự báo phải bắt đầu từ việc xác thực công dụng thật.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-teal-600" /> Cạm bẫy toán học: Mẫu số phễu chuyển đổi
            </span>
            <div className="p-2.5 rounded-lg bg-slate-50 font-mono text-[11px] text-slate-800 space-y-0.5">
              <div>1.000 tiếp cận → 400 đăng ký → 250 hoàn tất</div>
              <div>→ 150 dùng lần đầu → 90 người quay lại lặp lại.</div>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Tỷ lệ quay lại bằng <strong>60% trên người đã dùng (90/150)</strong> nhưng chỉ là <strong>9% trên tổng số tiếp cận (90/1.000)</strong>. Không được lấy 60% để tuyên bố 60% thị trường đã chấp nhận!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
