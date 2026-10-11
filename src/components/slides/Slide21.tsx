import React from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { RefreshCw, MessageSquare, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const SUMMARY_STEPS = [
  { step: 1, title: "1. Nhận diện nhu cầu", desc: "Bắt đầu từ vấn đề thực tế của khách hàng, không chỉ từ phát minh kỹ thuật." },
  { step: 2, title: "2. Khác biệt có giá trị", desc: "Tạo giá trị tương đối cảm nhận được so với chi phí và giải pháp cạnh tranh (QFD)." },
  { step: 3, title: "3. Chọn đúng phân khúc", desc: "Hiểu mạng lưới người mua B2B/B2C và chọn hướng phát triển sản phẩm chiến lược." },
  { step: 4, title: "4. Tổ chức thương mại hóa", desc: "Kiểm soát tài sản bổ trợ, khai thác sở hữu trí tuệ (ARM) và dịch vụ sau bán (EMI)." },
  { step: 5, title: "5. Quản trị sự lan tỏa", desc: "Đo lường các thuộc tính Rogers, dự báo cẩn trọng và liên tục học hỏi từ thị trường." },
];

export const Slide21: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <SlideLayout slide={slide} rightBadge="Tổng kết & Câu hỏi thảo luận">
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Core Management Synthesis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {SUMMARY_STEPS.map((s) => (
            <div key={s.step} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-32">
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold flex items-center justify-center font-mono">
                  {s.step}
                </span>
                <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">{s.title}</div>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug line-clamp-3">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Closing Statement & Discussion Question */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950/40 to-slate-900 border border-teal-500/40 shadow-2xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Thông điệp đọng lại của Chương 6
          </div>

          <h2 className="text-xl md:text-2xl font-black text-white max-w-3xl mx-auto leading-snug">
            “Đổi mới không phải cuộc thi xem ai có công nghệ mới nhất. Đó là năng lực liên tục xác định đúng vấn đề thị trường, tạo giải pháp hữu ích và không ngừng học hỏi.”
          </h2>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-amber-500/40 max-w-2xl mx-auto text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                Câu hỏi thảo luận dành cho cả lớp:
              </div>
              <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                “Nếu một ứng dụng có rất nhiều lượt tải nhưng phần lớn người dùng không quay lại, chúng ta cần thêm những chỉ số nào trước khi đánh giá đó là một đổi mới thành công?”
              </p>
            </div>
          </div>
        </div>

        {/* Presentation Closing Footer */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-2">
          <span>Nhóm 4 · Môn Quản trị Đổi mới và Sáng tạo · HUB</span>
          <span className="text-teal-400 font-medium">Trân trọng cảm ơn Giảng viên và các bạn đã lắng nghe!</span>
        </div>
      </div>
    </SlideLayout>
  );
};
