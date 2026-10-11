import React from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const BENEFIT_COST_DATA = [
  { name: "Mẫu A: Nhiều tính năng", benefit: 85, cost: 95, netValue: -10, desc: "Giá 850k, LED cảm ứng, sạc pin phức tạp" },
  { name: "Mẫu B: Thực dụng bền", benefit: 90, cost: 35, netValue: 55, desc: "Giá 220k, giữ nhiệt 18h, chống tràn 100%" },
];

export const Slide06: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[5];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Benefit-Cost Chart Comparison */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Đồ thị so sánh: Lợi ích cảm nhận vs Chi phí bỏ ra (Net Value)
            </span>

            <div className="w-full h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={BENEFIT_COST_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#334155' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748b' }} domain={[0, 100]} />
                  <Tooltip 
                    formatter={(val: any, name: any) => [`${val} điểm`, name === 'benefit' ? 'Lợi ích cảm nhận' : 'Chi phí & Bất tiện']}
                    contentStyle={{ borderRadius: 8, fontSize: 11 }}
                  />
                  <Bar dataKey="benefit" name="benefit" fill="#0d9488" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cost" name="cost" fill="#e11d48" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
                <strong>Mẫu A (LED thông minh):</strong> Chi phí &amp; giá tiền (95đ) cao hơn lợi ích thực (85đ) → Giá trị tương đối âm đối với học sinh.
              </div>
              <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-900">
                <strong>Mẫu B (Inox chân không):</strong> Lợi ích thực dụng (90đ) vượt xa chi phí bỏ ra (35đ) → Khách hàng quyết định lựa chọn!
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Bằng chứng lịch sử (PIMS):</strong> Khảo sát hơn 3.000 đơn vị kinh doanh cho thấy lợi nhuận đến từ chất lượng tương đối và giá trị tương đối cảm nhận được, chứ không đến từ việc nhồi nhét mọi thông số kỹ thuật đắt đỏ.
          </div>
        </div>

        {/* Right Column: Historical Nokia Photo with Correct Dating */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-48">
            <img 
              src="/images/nokia-phone.jpg" 
              alt="Historical Nokia Phone Era 2003" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Nokia (1998 – 2004): Lợi thế kỹ thuật GSM không tự bảo đảm vị thế cạnh tranh vĩnh viễn
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 uppercase font-mono">Bài học lịch sử: Nokia</span>
              <span className="text-amber-800 font-mono font-bold">Thị phần: 35% → &lt;30% (2003)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Nokia từng dẫn đầu nhờ GSM và độ bền. Nhưng khi kỳ vọng thị trường chuyển sang <strong>điện thoại nắp gập và tích hợp máy ảnh</strong>, Nokia chậm cải tiến khiến thị phần sụt giảm. Khác biệt hóa luôn có tính tương đối và biến đổi theo thời gian.
            </p>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
