import React from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

const SUMMARY_STEPS = [
  { step: 1, title: "1. Nhận diện nhu cầu", desc: "Bắt đầu từ vấn đề thực tế của khách hàng, không chỉ từ phát minh kỹ thuật." },
  { step: 2, title: "2. Khác biệt có giá trị", desc: "Tạo giá trị tương đối cảm nhận được so với chi phí và giải pháp cạnh tranh (QFD)." },
  { step: 3, title: "3. Chọn đúng phân khúc", desc: "Hiểu mạng lưới người mua B2B/B2C và chọn hướng phát triển sản phẩm chiến lược." },
  { step: 4, title: "4. Tổ chức thương mại hóa", desc: "Kiểm soát tài sản bổ trợ, khai thác sở hữu trí tuệ (ARM) và dịch vụ sau bán (EMI)." },
  { step: 5, title: "5. Quản trị sự lan tỏa", desc: "Đo lường các thuộc tính Rogers, dự báo cẩn trọng và liên tục học hỏi từ thị trường." },
];

export const Slide21: React.FC<{ slide: SlideData }> = ({ slide }) => {
  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={21} label="KẾT LUẬN & THẢO LUẬN" accent="#0d9488" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0d9488" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="display-lg text-slate-900 leading-tight">
            Đổi Mới Là Quá Trình<br />
            <span className="text-[#147D82]">Học Hỏi Liên Tục</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-serif italic">
            Tổng kết chuỗi năm quyết định quản trị cốt lõi và câu hỏi gợi mở thảo luận cuối buổi
          </p>
        </div>

        {/* 5 Summary Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {SUMMARY_STEPS.map((s) => (
            <div key={s.step} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between h-36">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center font-mono">
                {s.step}
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{s.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Closing Statement & Discussion Question */}
        <div className="p-6 rounded-2xl bg-white border border-teal-200 shadow-sm space-y-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold font-mono uppercase">
            Thông điệp trọng tâm của Chương 6
          </span>

          <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 max-w-3xl mx-auto leading-relaxed">
            “Đổi mới không phải cuộc thi xem ai có công nghệ mới nhất. Đó là năng lực liên tục xác định đúng vấn đề thị trường, tạo giải pháp hữu ích và không ngừng học hỏi.”
          </h3>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 max-w-2xl mx-auto text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase font-mono">
                Câu hỏi thảo luận dành cho cả lớp:
              </span>
              <p className="text-sm font-semibold text-slate-900 mt-1 leading-relaxed">
                “Nếu một ứng dụng có rất nhiều lượt tải nhưng phần lớn người dùng không quay lại, chúng ta cần thêm những chỉ số nào trước khi đánh giá đó là một đổi mới thành công?”
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200 font-mono">
          <span>Nhóm 4 · Môn Quản trị Đổi mới và Sáng tạo · HUB</span>
          <span className="text-teal-700 font-bold">Trân trọng cảm ơn Giảng viên và các bạn đã lắng nghe!</span>
        </div>
      </div>
    </div>
  );
};
