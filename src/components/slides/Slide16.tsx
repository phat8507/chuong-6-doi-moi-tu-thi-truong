import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell
} from 'recharts';
import { HelpCircle, TrendingUp, Users } from 'lucide-react';

interface CategoryData {
  id: string;
  name: string;
  shortName: string;
  share: number;
  cumulativeEnd: number;
  color: string;
  characteristics: string;
  mindset: string;
}

const ROGERS_GROUPS: CategoryData[] = [
  {
    id: 'innovators',
    name: '1. Người đổi mới (Innovators)',
    shortName: 'Đổi mới',
    share: 2.5,
    cumulativeEnd: 2.5,
    color: '#0f766e',
    characteristics: 'Mạo hiểm, độc lập tài chính, am hiểu kỹ thuật cao, sẵn sàng chấp nhận các lỗi kỹ thuật ban đầu của sản phẩm sơ khai.',
    mindset: '“Tôi muốn thử nghiệm công nghệ này đầu tiên vì nó mới lạ và mang tính đột phá.”'
  },
  {
    id: 'early_adopters',
    name: '2. Người chấp nhận sớm (Early Adopters)',
    shortName: 'Sớm',
    share: 13.5,
    cumulativeEnd: 16.0,
    color: '#0d9488',
    characteristics: 'Người dẫn dắt dư luận (Opinion leaders), tìm kiếm lợi thế chiến lược vượt trội, đóng vai trò hình mẫu xã hội cho cộng đồng.',
    mindset: '“Tôi thấy tiềm năng tạo đột phá và muốn đi trước đối thủ cạnh tranh một bước dài.”'
  },
  {
    id: 'early_majority',
    name: '3. Đa số sớm (Early Majority)',
    shortName: 'Đa số sớm',
    share: 34.0,
    cumulativeEnd: 50.0,
    color: '#2563eb',
    characteristics: 'Thực tế, thận trọng, cần bằng chứng thực chứng thành công và giải pháp toàn vẹn trước khi quyết định đầu tư.',
    mindset: '“Hãy cho tôi xem các khách hàng tương tự đã sử dụng ổn định chưa trước khi tôi giải ngân.”'
  },
  {
    id: 'late_majority',
    name: '4. Đa số muộn (Late Majority)',
    shortName: 'Đa số muộn',
    share: 34.0,
    cumulativeEnd: 84.0,
    color: '#64748b',
    characteristics: 'Hoài nghi, nhạy cảm chi phí, chỉ mua khi chịu áp lực từ chuẩn mực xã hội hoặc phương án truyền thống đã biến mất.',
    mindset: '“Tôi chỉ dùng vì xung quanh ai cũng dùng và không còn lựa chọn truyền thống nào khác.”'
  },
  {
    id: 'laggards',
    name: '5. Người chậm trễ (Laggards)',
    shortName: 'Chậm trễ',
    share: 16.0,
    cumulativeEnd: 100.0,
    color: '#94a3b8',
    characteristics: 'Bảo thủ, gắn chặt với thói quen quá khứ, nghi ngờ mọi sự biến đổi công nghệ và chuyên viên tư vấn tiếp thị.',
    mindset: '“Giải pháp cũ của tôi vẫn dùng tốt, tại sao phải đổi sang cái mới làm phiền phức và tốn kém?”'
  }
];

const SCURVE_STEPS = [
  { phase: 'Khởi đầu', t: 'Giai đoạn 1', cumulative: 2.5, group: 'Innovators' },
  { phase: 'Cất cánh', t: 'Giai đoạn 2', cumulative: 16.0, group: 'Early Adopters' },
  { phase: 'Tăng tốc', t: 'Giai đoạn 3', cumulative: 50.0, group: 'Early Majority' },
  { phase: 'Trưởng thành', t: 'Giai đoạn 4', cumulative: 84.0, group: 'Late Majority' },
  { phase: 'Bão hòa', t: 'Giai đoạn 5', cumulative: 100.0, group: 'Laggards' }
];

export const Slide16: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[15];
  const [selectedGroup, setSelectedGroup] = useState<string>('early_adopters');

  const current = ROGERS_GROUPS.find(g => g.id === selectedGroup) || ROGERS_GROUPS[1];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Core Distinction Notice Box with double-bezel wrapper */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs sm:text-[14px] flex items-start gap-3.5">
            <HelpCircle className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-sky-950 font-mono text-xs sm:text-sm block uppercase tracking-wide">
                PHÂN BIỆT TOÁN HỌC &amp; QUẢN TRỊ: S-CURVE TÍCH LŨY ≠ TỶ LỆ PHÂN BỔ NHÓM
              </strong>
              <p className="text-sky-900 leading-relaxed">
                • <strong>Đường cong S-Curve (Bên trái):</strong> Mô tả mức độ chấp nhận <em>tích lũy dồn</em> F(t) từ 0% lên 100% trần dung lượng thị trường.<br />
                • <strong>Phân phối nhóm Rogers (Bên phải):</strong> Là mật độ xác suất <em>gia nhập mới</em> tại từng thời kỳ f(t) = dF(t)/dt, hình thành đường cong chuông chuẩn (Gauss).
              </p>
            </div>
          </div>
        </div>

        {/* Dual Synchronized Charts in Double-Bezel Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Chart 1: S-Curve Cumulative */}
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner flex flex-col justify-between">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-sky-700" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      Đồ thị 1: Mức Chấp Nhận Tích Lũy S-Curve (%)
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                    Trục Y: 0% → 100%
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-3 leading-relaxed">
                  Tăng trưởng khởi đầu chậm, dốc đứng ở giai đoạn khuếch tán, và tiệm cận trần bão hòa.
                </p>
              </div>

              <div className="w-full h-56 sm:h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SCURVE_STEPS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="scurveFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#0284c7" stopOpacity={0.02}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="phase" tick={{ fontSize: 12, fill: '#334155', fontWeight: 600 }} stroke="#94a3b8" />
                    <YAxis domain={[0, 100]} unit="%" tick={{ fontSize: 11, fill: '#64748b' }} stroke="#94a3b8" />
                    <Tooltip
                      formatter={(val: any) => [`${val}%`, 'Mức tích lũy']}
                      labelFormatter={(label) => `Giai đoạn: ${label}`}
                      contentStyle={{ borderRadius: '12px', fontSize: '13px', border: '1px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="cumulative"
                      stroke="#0284c7"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#scurveFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="pt-2 text-xs font-mono text-slate-500 text-center">
                Trục hoành: Chu kỳ phát triển sản phẩm theo thời gian (t)
              </div>
            </div>
          </div>

          {/* Chart 2: Bell Curve Rogers Categories Distribution */}
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner flex flex-col justify-between">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-700" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      Đồ thị 2: Phân Phối Tỷ Lệ 5 Nhóm Khách Hàng (%)
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    Rogers (1995)
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-3 leading-relaxed">
                  Tỷ lệ chuẩn tắc: 2.5% · 13.5% · 34% · 34% · 16%. Bấm chọn cột để xem đặc tính.
                </p>
              </div>

              <div className="w-full h-56 sm:h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ROGERS_GROUPS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="shortName" tick={{ fontSize: 12, fill: '#334155', fontWeight: 600 }} stroke="#94a3b8" />
                    <YAxis domain={[0, 40]} unit="%" tick={{ fontSize: 11, fill: '#64748b' }} stroke="#94a3b8" />
                    <Tooltip
                      formatter={(val: any) => [`${val}%`, 'Tỷ lệ nhóm']}
                      labelFormatter={(label) => `Nhóm: ${label}`}
                      contentStyle={{ borderRadius: '12px', fontSize: '13px', border: '1px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                    />
                    <Bar
                      dataKey="share"
                      radius={[6, 6, 0, 0]}
                      onClick={(entry: any) => {
                        if (entry && entry.id) setSelectedGroup(entry.id);
                      }}
                      cursor="pointer"
                    >
                      {ROGERS_GROUPS.map((entry) => (
                        <Cell
                          key={entry.id}
                          fill={entry.id === selectedGroup ? '#0d9488' : '#94a3b8'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="pt-2 text-xs font-mono text-slate-500 text-center">
                Nhấp vào các cột biểu đồ để xem chi tiết đặc tính bên dưới
              </div>
            </div>
          </div>
        </div>

        {/* Watercolor S-Curve & Rogers Categories Art Illustration */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm relative group bg-amber-50/20">
            <img 
              src="/images/scurve-adopters-watercolor.jpg" 
              alt="Watercolor artistic diagram of S-Curve and Rogers Adopter Categories" 
              className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs sm:text-sm text-white font-medium">
                <strong>Minh họa nghệ thuật màu nước:</strong> Quỹ đạo S-Curve tích lũy kết hợp 5 nhóm đối tượng tiếp nhận công nghệ theo tiến trình khuếch tán.
              </span>
            </div>
          </div>
        </div>

        {/* Selected Group Inspector in Double-Bezel Frame */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  {current.name}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-100 text-teal-800">
                  Tỷ trọng: {current.share}% thị trường
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                Mức tích lũy đạt mốc: {current.cumulativeEnd}%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm block">
                  ĐẶC ĐIỂM HÀNH VI &amp; TÂM LÝ:
                </span>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-[14px]">
                  {current.characteristics}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 space-y-1.5">
                <span className="font-mono font-bold text-teal-950 text-xs sm:text-sm block">
                  TIẾNG NÓI KHÁCH HÀNG (QUOTE ĐIỂN HÌNH):
                </span>
                <p className="text-teal-950 italic leading-relaxed text-xs sm:text-[14px] font-medium">
                  {current.mindset}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
