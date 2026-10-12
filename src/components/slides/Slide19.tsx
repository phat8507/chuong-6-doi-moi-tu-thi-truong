import React from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { AlertCircle, TrendingUp, Bot } from 'lucide-react';

const DISBURSEMENT_DATA = [
  { year: 'Năm 2023', value: 30.7, label: '~30.700 tỷ VND' },
  { year: 'Năm 2024', value: 43.0, label: '>43.000 tỷ VND (+~40%)' }
];

const DIGITAL_USAGE_DATA = [
  { metric: 'Người dùng Chatbot', count: 130, unit: 'Nghìn người / năm', label: '> 130.000 người/năm' },
  { metric: 'Phiên tương tác', count: 200, unit: 'Nghìn phiên / tháng', label: '> 200.000 phiên/tháng' }
];

export const Slide19: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[18];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Methodological Caution Banner with double-bezel styling */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-[14px] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-amber-950 font-mono text-xs sm:text-sm block uppercase tracking-wide">
                THẬN TRỌNG HỌC THUẬT: SỐ LIỆU KẾT QUẢ KHÔNG TỰ CHỨNG MINH NGUYÊN NHÂN DUY NHẤT
              </strong>
              <p className="text-amber-950/90 leading-relaxed">
                Tình huống này dựa trên <strong>tài liệu công khai thứ cấp</strong> (BCTN VPBank 2024 &amp; Báo cáo kiểm toán FE CREDIT). Kết quả tài chính và số người dùng kênh số là <em>hai nhóm chỉ số độc lập</em>. Không ngộ nhận rằng việc ra mắt chatbot trực tiếp tạo nên toàn bộ sự phục hồi kinh doanh, vốn còn phụ thuộc vào tái cơ cấu danh mục, quản trị rủi ro và điều kiện kinh tế vĩ mô.
              </p>
            </div>
          </div>
        </div>

        {/* Big Numbers Editorial Callout Grid in Double-Bezel Frame */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 p-2">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block tracking-wider">
                Quy mô giải ngân 2024
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-teal-800">
                &gt; 43.000 <span className="text-base sm:text-lg font-sans font-medium text-slate-600">tỷ VND</span>
              </div>
              <div className="text-xs sm:text-sm text-emerald-800 font-semibold">
                Tăng trưởng khoảng +40% so với 2023 (~30.700 tỷ)
              </div>
              <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                Nguồn: Báo cáo thường niên hợp nhất VPBank
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block tracking-wider">
                Lợi nhuận trước thuế (LNTT 2024)
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                512 / ~515 <span className="text-base sm:text-lg font-sans font-medium text-slate-600">tỷ VND</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-700 font-medium">
                Phục hồi mạnh mẽ sau giai đoạn tái cơ cấu 2022–2023
              </div>
              <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                512 tỷ (BCTN VPBank) · gần 515 tỷ (Kiểm toán FE CREDIT)
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block tracking-wider">
                Khối lượng tương tác kênh số
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-teal-900">
                &gt; 200.000 <span className="text-base sm:text-lg font-sans font-medium text-slate-600">phiên/tháng</span>
              </div>
              <div className="text-xs sm:text-sm text-teal-800 font-semibold">
                &gt; 130.000 người dùng Chatbot giải đáp tự động/năm
              </div>
              <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                Nguồn: Báo cáo chuyển đổi số kênh giao tiếp khách hàng
              </div>
            </div>
          </div>
        </div>

        {/* Dual Visual Charts Grid in Double-Bezel Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Chart 1: Business Disbursement Comparison */}
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner flex flex-col justify-between">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-700" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      Nhóm 1: Kết Quả Kinh Doanh — Giải Ngân (Nghìn Tỷ VND)
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    2023 vs 2024
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-3 leading-relaxed">
                  Không sử dụng đường xu hướng liên tục (trendline) khi chỉ có 2 mốc số liệu năm kiểm toán.
                </p>
              </div>

              <div className="w-full h-56 sm:h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DISBURSEMENT_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#334155', fontWeight: 600 }} stroke="#94a3b8" />
                    <YAxis domain={[0, 50]} unit="k tỷ" tick={{ fontSize: 11, fill: '#64748b' }} stroke="#94a3b8" />
                    <Tooltip
                      formatter={(val: any) => [`${val} nghìn tỷ VND`, 'Giải ngân']}
                      contentStyle={{ borderRadius: '12px', fontSize: '13px', border: '1px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                    />
                    <Bar dataKey="value" fill="#0d9488" radius={[8, 8, 0, 0]} barSize={56} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 text-center">
                Đơn vị: Nghìn tỷ Đồng (VND) · Nguồn: Báo cáo thường niên hợp nhất VPBank
              </div>
            </div>
          </div>

          {/* Chart 2: Digital Channel Adoption */}
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner flex flex-col justify-between">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-indigo-700" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      Nhóm 2: Mức Độ Tương Tác Kênh Số Chatbot
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                    Tự động hóa 24/7
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-3 leading-relaxed">
                  Đo lường năng lực phục vụ tự động hóa và hành vi tự phục vụ của tệp người vay tiêu dùng.
                </p>
              </div>

              <div className="w-full h-56 sm:h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DIGITAL_USAGE_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="metric" tick={{ fontSize: 12, fill: '#334155', fontWeight: 600 }} stroke="#94a3b8" />
                    <YAxis domain={[0, 250]} unit="k" tick={{ fontSize: 11, fill: '#64748b' }} stroke="#94a3b8" />
                    <Tooltip
                      formatter={(val: any, _name: any, item: any) => [`${val}.000`, item.payload.unit]}
                      contentStyle={{ borderRadius: '12px', fontSize: '13px', border: '1px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                    />
                    <Bar dataKey="count" fill="#0f766e" radius={[8, 8, 0, 0]} barSize={56} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 text-center">
                Đơn vị: Nghìn lượt / phiên · Nguồn: Dữ liệu công bố giải pháp số FE ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
