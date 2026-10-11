import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell
} from 'recharts';
import { HelpCircle, BarChart3, TrendingUp, Users } from 'lucide-react';

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
    characteristics: 'Mạo hiểm, độc lập tài chính, am hiểu kỹ thuật cao, sẵn sàng chịu lỗi kỹ thuật ban đầu.',
    mindset: '“Tôi muốn thử nghiệm công nghệ này đầu tiên vì nó mới lạ và đột phá.”'
  },
  {
    id: 'early_adopters',
    name: '2. Người chấp nhận sớm (Early Adopters)',
    shortName: 'Sớm',
    share: 13.5,
    cumulativeEnd: 16.0,
    color: '#0d9488',
    characteristics: 'Người dẫn dắt dư luận (Opinion leaders), tìm kiếm lợi thế chiến lược, đóng vai trò hình mẫu xã hội.',
    mindset: '“Tôi thấy tiềm năng tạo đột phá và muốn đi trước đối thủ một bước.”'
  },
  {
    id: 'early_majority',
    name: '3. Đa số sớm (Early Majority)',
    shortName: 'Đa số sớm',
    share: 34.0,
    cumulativeEnd: 50.0,
    color: '#2563eb',
    characteristics: 'Thực tế, thận trọng, cần bằng chứng thành công và giải pháp hoàn chỉnh trước khi mua.',
    mindset: '“Hãy cho tôi xem khách hàng tương tự đã dùng ổn định chưa trước khi tôi đầu tư.”'
  },
  {
    id: 'late_majority',
    name: '4. Đa số muộn (Late Majority)',
    shortName: 'Đa số muộn',
    share: 34.0,
    cumulativeEnd: 84.0,
    color: '#64748b',
    characteristics: 'Hoài nghi, nhạy cảm chi phí, chỉ mua khi bị áp lực chuẩn mực xã hội hoặc cách cũ biến mất.',
    mindset: '“Tôi chỉ dùng vì xung quanh ai cũng dùng và không còn lựa chọn truyền thống.”'
  },
  {
    id: 'laggards',
    name: '5. Người chậm trễ (Laggards)',
    shortName: 'Chậm trễ',
    share: 16.0,
    cumulativeEnd: 100.0,
    color: '#94a3b8',
    characteristics: 'Bảo thủ, gắn chặt với quá khứ, nghi ngờ mọi sự thay đổi và chuyên viên đổi mới.',
    mindset: '“Giải pháp cũ vẫn dùng tốt, tại sao phải đổi sang cái mới làm phiền phức?”'
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
        {/* Core Distinction Notice Box */}
        <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200 text-xs flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-sky-950 font-mono text-[11px] block">
              PHÂN BIỆT TOÁN HỌC &amp; QUẢN TRỊ: S-CURVE TÍCH LŨY ≠ TỶ LỆ PHÂN BỔ NHÓM
            </strong>
            <p className="text-sky-900 leading-relaxed text-[11px]">
              • <strong>Đường cong S-Curve (Bên trái):</strong> Mô tả mức độ chấp nhận <em>tích lũy dồn</em> $F(t)$ từ 0% lên 100% trần thị trường.<br />
              • <strong>Phân phối nhóm Rogers (Bên phải):</strong> Là mật độ xác suất <em>gia nhập mới</em> tại từng thời kỳ $f(t) = dF(t)/dt$, hình thành đường cong chuông chuẩn (Gauss).
            </p>
          </div>
        </div>

        {/* Dual Synchronized Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: S-Curve Cumulative */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-sky-700" />
                  <span className="text-xs font-bold text-slate-900">
                    Đồ thị 1: Mức Chấp Nhận Tích Lũy S-Curve (%)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Trục Y: 0% → 100%</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-4">
                Tăng trưởng khởi đầu chậm, dốc đứng ở giai đoạn khuếch tán, và tiệm cận trần bão hòa.
              </p>
            </div>

            <div className="w-full h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SCURVE_STEPS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="scurveFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#0284c7" stopOpacity={0.02}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="phase" tick={{ fontSize: 10, fill: '#475569' }} />
                  <YAxis domain={[0, 100]} unit="%" tick={{ fontSize: 10, fill: '#475569' }} />
                  <Tooltip
                    formatter={(val: any) => [`${val}%`, 'Mức tích lũy']}
                    labelFormatter={(label) => `Giai đoạn: ${label}`}
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: '1px solid #cbd5e1' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#0284c7"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#scurveFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="pt-2 text-[10px] font-mono text-slate-400 text-center">
              Trục hoành: Chu kỳ phát triển sản phẩm theo thời gian (t)
            </div>
          </div>

          {/* Chart 2: Bell Curve Rogers Categories Distribution */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-teal-700" />
                  <span className="text-xs font-bold text-slate-900">
                    Đồ thị 2: Phân Phối Tỷ Lệ 5 Nhóm Khách Hàng (%)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Rogers (1995)</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-4">
                Tỷ lệ chuẩn tắc: 2.5% · 13.5% · 34% · 34% · 16%. Nhấp thanh để xem chân dung.
              </p>
            </div>

            <div className="w-full h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ROGERS_GROUPS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="shortName" tick={{ fontSize: 10, fill: '#475569' }} />
                  <YAxis domain={[0, 40]} unit="%" tick={{ fontSize: 10, fill: '#475569' }} />
                  <Tooltip
                    formatter={(val: any) => [`${val}%`, 'Tỷ lệ nhóm']}
                    labelFormatter={(label) => `Nhóm: ${label}`}
                    contentStyle={{ borderRadius: 8, fontSize: 11, border: '1px solid #cbd5e1' }}
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
            <div className="pt-2 text-[10px] font-mono text-slate-400 text-center">
              Nhấp vào các cột biểu đồ để xem chi tiết đặc tính bên dưới
            </div>
          </div>
        </div>

        {/* Selected Group Inspector */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">
                {current.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-teal-100 text-teal-800">
                Tỷ trọng: {current.share}% thị trường
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              Mức tích lũy đạt mốc: {current.cumulativeEnd}%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="font-mono font-bold text-slate-700 text-[11px] block">
                ĐẶC ĐIỂM HÀNH VI &amp; TÂM LÝ:
              </span>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {current.characteristics}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-teal-50/50 border border-teal-200 space-y-1">
              <span className="font-mono font-bold text-teal-950 text-[11px] block">
                TIẾNG NÓI KHÁCH HÀNG (QUOTE ĐIỂN HÌNH):
              </span>
              <p className="text-teal-900 italic leading-relaxed text-[11px]">
                {current.mindset}
              </p>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
