import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { AlertCircle, TrendingUp, Bot, FileText, CheckCircle2 } from 'lucide-react';

const DISBURSEMENT_DATA = [
  { year: 'Năm 2023', value: 30.7, label: '~30.700 tỷ VND' },
  { year: 'Năm 2024', value: 43.0, label: '>43.000 tỷ VND (+~40%)' }
];

const DIGITAL_USAGE_DATA = [
  { metric: 'Người dùng Chatbot', count: 130, unit: 'Nghìn người / năm', label: '> 130.000 người/năm' },
  { metric: 'Phiên tương tác Chatbot', count: 200, unit: 'Nghìn phiên / tháng', label: '> 200.000 phiên/tháng' }
];

export const Slide19: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[18];
  const [activeTab, setActiveTab] = useState<'both' | 'financial' | 'digital'>('both');

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Methodological Caution Banner */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-950 font-mono text-[11px] block">
              THẬN TRỌNG HỌC THUẬT: SỐ LIỆU KẾT QUẢ KHÔNG TỰ CHỨNG MINH NGUYÊN NHÂN DUY NHẤT
            </strong>
            <p className="text-amber-900 leading-relaxed text-[11px]">
              Tình huống này dựa trên <strong>tài liệu công khai thứ cấp</strong> (BCTN VPBank 2024 &amp; Báo cáo kiểm toán FE CREDIT). Kết quả tài chính và số người dùng kênh số là <em>hai nhóm chỉ số độc lập</em>. Không ngộ nhận rằng việc ra mắt chatbot trực tiếp tạo nên toàn bộ sự phục hồi kinh doanh, vốn còn phụ thuộc vào tái cơ cấu danh mục, quản trị rủi ro và điều kiện thị trường.
            </p>
          </div>
        </div>

        {/* Big Numbers Editorial Callout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              Quy mô giải ngân 2024
            </span>
            <div className="text-2xl font-serif font-bold text-teal-800">
              &gt; 43.000 <span className="text-sm font-sans font-normal text-slate-600">tỷ VND</span>
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">
              Tăng trưởng khoảng +40% so với 2023 (~30.700 tỷ)
            </div>
            <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-100">
              Nguồn: Báo cáo tài chính thường niên VPBank
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              Lợi nhuận trước thuế (LNTT 2024)
            </span>
            <div className="text-2xl font-serif font-bold text-slate-900">
              512 / ~515 <span className="text-sm font-sans font-normal text-slate-600">tỷ VND</span>
            </div>
            <div className="text-[11px] text-slate-600">
              Phục hồi mạnh mẽ sau giai đoạn tái cơ cấu 2022–2023
            </div>
            <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-100">
              512 tỷ (BCTN VPBank) · gần 515 tỷ (Kiểm toán FE CREDIT)
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              Khối lượng tương tác kênh số
            </span>
            <div className="text-2xl font-serif font-bold text-indigo-700">
              &gt; 200.000 <span className="text-sm font-sans font-normal text-slate-600">phiên/tháng</span>
            </div>
            <div className="text-[11px] text-slate-600">
              &gt; 130.000 người dùng Chatbot giải đáp tự động/năm
            </div>
            <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-100">
              Nguồn: Báo cáo chuyển đổi số kênh giao tiếp khách hàng
            </div>
          </div>
        </div>

        {/* Dual Visual Charts Grid: 1. Business Metrics / 2. Digital Adoption Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: Business Disbursement Comparison */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-teal-700" />
                  <span className="text-xs font-bold text-slate-900">
                    Nhóm 1: Kết Quả Kinh Doanh — Giải Ngân (Nghìn Tỷ VND)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">2023 vs 2024</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                Không dùng đường xu hướng liên tục (trendline) khi chỉ có 2 mốc số liệu năm kiểm toán.
              </p>
            </div>

            <div className="w-full h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DISBURSEMENT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#475569' }} />
                  <YAxis domain={[0, 50]} unit="k tỷ" tick={{ fontSize: 10, fill: '#475569' }} />
                  <Tooltip
                    formatter={(val: any) => [`${val} nghìn tỷ VND`, 'Giải ngân']}
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: '1px solid #cbd5e1' }}
                  />
                  <Bar dataKey="value" fill="#0d9488" radius={[6, 6, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 text-[10px] font-mono text-slate-400 text-center">
              Đơn vị: Nghìn tỷ Đồng (VND) · Nguồn: Báo cáo thường niên hợp nhất VPBank
            </div>
          </div>

          {/* Chart 2: Digital Channel Adoption */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-indigo-700" />
                  <span className="text-xs font-bold text-slate-900">
                    Nhóm 2: Mức Độ Tương Tác Kênh Số Chatbot
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Kênh hỗ trợ tự động</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                Đo lường năng lực phục vụ tự động hóa và hành vi tự phục vụ của người vay.
              </p>
            </div>

            <div className="w-full h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DIGITAL_USAGE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="metric" tick={{ fontSize: 10, fill: '#475569' }} />
                  <YAxis domain={[0, 250]} unit="k" tick={{ fontSize: 10, fill: '#475569' }} />
                  <Tooltip
                    formatter={(val: any, _name: any, item: any) => [`${val}.000`, item.payload.unit]}
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: '1px solid #cbd5e1' }}
                  />
                  <Bar dataKey="count" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 text-[10px] font-mono text-slate-400 text-center">
              Đơn vị: Nghìn lượt/phiên · Nguồn: Dữ liệu công bố giải pháp số FE ONLINE
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
