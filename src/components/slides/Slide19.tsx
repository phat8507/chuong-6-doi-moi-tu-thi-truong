import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { TrendingUp, MessageSquare, DollarSign, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

// Verified quantitative data from VPBank & FE Credit reports
const DISBURSEMENT_DATA = [
  { year: "2023", value: 30700, label: "~30.700 tỷ" },
  { year: "2024", value: 43000, label: "> 43.000 tỷ (+40%)" },
];

const PROFIT_DATA = [
  { source: "BCTN VPBank", profit: 512, note: "512 tỷ VND" },
  { source: "Kiểm toán FE Credit", profit: 515, note: "Gần 515 tỷ VND" },
];

const CHATBOT_METRICS = [
  { channel: "Người dùng Chatbot/Năm", count: 130000, display: "> 130.000 người/năm" },
  { channel: "Phiên giao tiếp/Tháng", count: 200000, display: "> 200.000 phiên/tháng" },
];

export const Slide19: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'financial' | 'digital'>('financial');

  return (
    <SlideLayout slide={slide}>
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Academic Principle Banner & Mode Switcher */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-slate-300">
              <strong>Nguyên tắc khoa học:</strong> Phân tách rõ ràng giữa <em>Chỉ số tài chính phục hồi</em> và <em>Chỉ số tương tác kênh số</em>; không ngộ nhận chatbot trực tiếp tạo ra toàn bộ lợi nhuận.
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setActiveTab('financial')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'financial'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              1. Biểu đồ Tài chính
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'digital'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              2. Biểu đồ Kênh số
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Charts Grid (Replaced raw numbers with actual charts) */}
        {activeTab === 'financial' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-center animate-fadeIn">
            {/* Chart 1: Disbursement Growth */}
            <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-teal-400" /> Doanh số Giải ngân (Tỷ đồng)
                </span>
                <span className="text-[10px] font-mono text-teal-400 font-bold">+40% tăng trưởng</span>
              </div>
              <div className="w-full h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DISBURSEMENT_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} unit=" tỷ" />
                    <Tooltip 
                      formatter={(val: any) => [`${val.toLocaleString()} tỷ VND`, 'Giải ngân']}
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: 8, fontSize: 11 }}
                    />
                    <Bar dataKey="value" fill="#0d9488" radius={[4, 4, 0, 0]}>
                      <Cell fill="#334155" />
                      <Cell fill="#0d9488" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate-400 font-mono text-center">
                Báo cáo thường niên VPBank 2024: Giải ngân vượt 43.000 tỷ, dư nợ +10,3%
              </div>
            </div>

            {/* Chart 2: Profit Before Tax Dual Sources */}
            <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-amber-400" /> Lợi nhuận trước thuế 2024 (Tỷ đồng)
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">Chuyển lỗ sang lãi</span>
              </div>
              <div className="w-full h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PROFIT_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="source" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 600]} unit=" tỷ" />
                    <Tooltip 
                      formatter={(val: any) => [`${val} tỷ VND`, 'LNTT']}
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: 8, fontSize: 11 }}
                    />
                    <Bar dataKey="profit" fill="#d97706" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate-400 font-mono text-center">
                Giữ riêng 2 số liệu: 512 tỷ (VPBank BCTN) và gần 515 tỷ (Kiểm toán riêng FE Credit)
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-center animate-fadeIn">
            {/* Chart 3: Chatbot Usage Scale */}
            <div className="lg:col-span-7 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-teal-400" /> Quy mô tương tác số Chatbot AI
                </span>
                <span className="text-[10px] font-mono text-slate-400">Hai đơn vị đo tách biệt</span>
              </div>
              <div className="w-full h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CHATBOT_METRICS} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                    <YAxis dataKey="channel" type="category" tick={{ fontSize: 9, fill: '#94a3b8' }} width={140} />
                    <Tooltip 
                      formatter={(val: any) => [`${val.toLocaleString()}`, 'Số lượng']}
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: 8, fontSize: 11 }}
                    />
                    <Bar dataKey="count" fill="#0d9488" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate-400 font-mono text-center">
                Không đánh đồng số người dùng theo năm (&gt;130.000) với số phiên theo tháng (&gt;200.000)
              </div>
            </div>

            {/* Side Image of Finance Tech Platform */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-800 h-full max-h-48 group">
              <img 
                src="/images/finance-growth.jpg" 
                alt="Consumer Finance Capital Portfolio" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
                <span className="text-[10px] text-slate-200">
                  Phục hồi biên lợi nhuận gắn liền với chất lượng tài sản và quản trị danh mục tín dụng
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Academic Contextual Evaluation Box */}
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
          <div className="flex items-center justify-between text-teal-400 font-bold">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Bối cảnh kinh tế & Đánh giá nhân quả
            </span>
            <span className="text-[10px] font-mono text-slate-500">Niên độ tài chính 2024</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Sự phục hồi của FE CREDIT đến từ quá trình <strong>tái cấu trúc kinh doanh toàn diện, nâng chuẩn tín dụng, kiểm soát nợ và tối ưu chi phí</strong>. Cần bổ sung các chỉ số chiều sâu (tỷ lệ giải quyết thành công, thời gian xử lý) thay vì chỉ nhìn vào số lượng phiên tương tác chatbot.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};
