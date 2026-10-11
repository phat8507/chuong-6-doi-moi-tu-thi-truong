import React from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { ArrowRight, RotateCcw, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

const FIVE_DECISIONS = [
  { step: '01', title: 'Nhận diện cơ hội', desc: 'Thấu hiểu nỗi đau thực tế của khách hàng; nhu cầu chưa được đáp ứng.' },
  { step: '02', title: 'Khác biệt hóa', desc: 'Tạo giá trị vượt trội chi phí; cân đối Kano và công cụ QFD.' },
  { step: '03', title: 'Phát triển giải pháp', desc: 'Chọn đúng khách hàng mục tiêu (B2B/B2C) và con đường mở rộng.' },
  { step: '04', title: 'Thương mại hóa', desc: 'Xây dựng hệ sinh thái bổ trợ, dịch vụ bảo trì và phương thức khai thác IP.' },
  { step: '05', title: 'Quản trị lan tỏa', desc: 'Hạ thấp rào cản chấp nhận (5 thuộc tính Rogers) và dự báo cẩn trọng.' },
];

export const Slide21: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[20];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-8">
        {/* Closed Loop 5-Decision Framework Recap */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase font-bold text-slate-500">
              Vòng Lặp Quản Trị Đổi Mới: Khép Lại Chuỗi 5 Quyết Định
            </span>
            <span className="text-[11px] font-mono text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200 flex items-center gap-1">
              <RotateCcw className="w-3 h-3 text-teal-700" />
              Phản hồi thị trường quay lại Bước 1
            </span>
          </div>

          {/* 5-Step Connected Chain */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {FIVE_DECISIONS.map((d, idx) => (
              <div
                key={d.step}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-36 relative group hover:border-teal-500 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-teal-800 text-white font-mono text-xs font-bold flex items-center justify-center">
                    {d.step}
                  </span>
                  {idx < 4 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
                  )}
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-900 mb-1">{d.title}</div>
                  <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Return Loop Indicator */}
          <div className="p-3 rounded-xl bg-teal-50/50 border border-dashed border-teal-300 text-center text-xs text-teal-900 font-medium flex items-center justify-center gap-2">
            <RotateCcw className="w-4 h-4 text-teal-700 shrink-0" />
            <span>
              Mỗi quyết định kiểm nghiệm bằng phản hồi thị trường — dữ liệu sử dụng thực tế quay trở lại tinh chỉnh bước nhận diện cơ hội ban đầu.
            </span>
          </div>
        </div>

        {/* Big Editorial Statement & Provocative Closing Question */}
        <div className="p-8 rounded-2xl bg-[#fbfbfa] border border-slate-300 shadow-xs space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            CÂU HỎI QUAY VỀ TRẢI NGHIỆM BAN ĐẦU (TIẾP NỐI SECTION 02)
          </div>

          <blockquote className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-relaxed">
            “Nếu một ứng dụng công nghệ đạt hàng triệu lượt tải xuống trong tuần đầu, nhưng chỉ một phần rất nhỏ người dùng tiếp tục quay lại sử dụng sau 30 ngày —<br />
            <span className="text-[#147D82] underline decoration-slate-300 underline-offset-8">
              Đổi mới đó đã thực sự thành công hay chưa?
            </span>”
          </blockquote>

          <div className="p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed max-w-2xl mx-auto space-y-2">
            <p className="font-semibold text-slate-900">
              Câu trả lời từ toàn bộ Chương 6:
            </p>
            <p className="text-slate-600">
              Đổi mới không kết thúc ở ngày ra mắt sản phẩm và không đo đếm bằng sự hào hứng nhất thời. Công nghệ chỉ trở thành đổi mới có ý nghĩa khi tạo ra <strong>giá trị được thị trường chấp nhận</strong> và <strong>duy trì được hành vi sử dụng lặp lại</strong> trong đời sống thực tế.
            </p>
          </div>

          {/* Academic Presentation Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <span>QUẢN TRỊ ĐỔI MỚI VÀ SÁNG TẠO · CHƯƠNG 6</span>
            <span>TRƯỜNG ĐẠI HỌC NGÂN HÀNG TP.HCM (HUB)</span>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
