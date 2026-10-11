import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, MessageSquare, DollarSign, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

// Operational financial and digital metrics verified strictly against source essay & reports
const FINANCIAL_METRICS = [
  { metric: "Giải ngân 2024", value: "> 43.000 tỷ VND", growth: "+40% so với 2023", note: "Báo cáo thường niên VPBank 2024 [5]" },
  { metric: "Tăng trưởng dư nợ", value: "+10,3%", growth: "Phục hồi quy mô", note: "Báo cáo thường niên VPBank 2024 [5]" },
  { metric: "Lợi nhuận trước thuế (VPBank)", value: "512 tỷ VND", growth: "Chuyển từ lỗ sang lãi", note: "BCTN VPBank công bố [5]" },
  { metric: "Lợi nhuận trước thuế (FE CREDIT)", value: "Gần 515 tỷ VND", growth: "Kết quả kiểm toán riêng", note: "Công bố kiểm toán riêng FE Credit [6]" },
];

const DIGITAL_METRICS = [
  { metric: "Người dùng Chatbot", value: "> 130.000", unit: "người dùng/năm", note: "Đo lường theo năm 2024 [7]" },
  { metric: "Phiên giao tiếp Chatbot", value: "> 200.000", unit: "phiên/tháng", note: "Đo lường bình quân theo tháng [7]" },
];

export const Slide19: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'financial' | 'digital'>('financial');

  return (
    <SlideLayout slide={slide} rightBadge="Dữ liệu học thuật xác thực 2024">
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Academic Rigor Header Banner */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
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
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              1. Hoạt động kinh doanh
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'digital'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              2. Kênh tương tác số
            </button>
          </div>
        </div>

        {/* Content Body Based on Tab */}
        {activeTab === 'financial' ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 animate-fadeIn">
            {FINANCIAL_METRICS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium">{item.metric}</span>
                  <div className="text-xl font-black text-white mt-1">{item.value}</div>
                  <span className="text-[11px] text-teal-400 font-semibold">{item.growth}</span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[9px] font-mono text-slate-400 truncate">
                  Nguồn: {item.note}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            {DIGITAL_METRICS.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/90 border border-amber-500/30 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <MessageSquare className="w-4 h-4" /> {item.metric}
                  </div>
                  <div className="text-3xl font-black text-white mt-2">{item.value}</div>
                  <span className="text-xs text-slate-300 font-mono">{item.unit}</span>
                </div>
                <div className="p-2 rounded bg-slate-800 text-[10px] text-slate-400">
                  Lưu ý: {item.note}. Không đánh đồng số người dùng theo năm với số phiên theo tháng.
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contextual Academic Analysis Box */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs space-y-2">
          <div className="flex items-center justify-between text-teal-300 font-bold">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Bối cảnh kinh tế & Đánh giá nhân quả
            </span>
            <span className="text-[10px] font-mono text-slate-400">Niên độ tài chính 2024</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Sự phục hồi lợi nhuận của FE CREDIT diễn ra đồng thời với quá trình <strong>tái cấu trúc kinh doanh toàn diện, nâng cao chuẩn thẩm định rủi ro, tối ưu chi phí và xử lý thu hồi nợ</strong>. 
            Để đánh giá toàn diện kênh chatbot cần bổ sung thêm các chỉ số chiều sâu: tỷ lệ giải quyết thành công (resolution rate), thời gian phản hồi thực tế và mức độ hài lòng khách hàng sau cuộc gọi (CSAT).
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};
