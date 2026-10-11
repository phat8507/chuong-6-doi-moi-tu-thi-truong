import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

const STAGES = [
  { step: 1, title: "1. Nhận diện thị trường", desc: "Khám phá vấn đề chưa được giải quyết của người dùng, phân tích nhu cầu chưa bộc lộ và bối cảnh cạnh tranh." },
  { step: 2, title: "2. Khác biệt hóa", desc: "Chuyển tiếng nói khách hàng (QFD) thành chỉ tiêu kỹ thuật; tối ưu hóa lợi ích cảm nhận so với chi phí." },
  { step: 3, title: "3. Phát triển chiến lược", desc: "Lựa chọn phân khúc B2C/B2B và 5 hướng phát triển từ nền tảng thiết kế cốt lõi." },
  { step: 4, title: "4. Thương mại hóa", desc: "Tích hợp công nghệ với sản phẩm hỗ trợ, cấp phép sở hữu trí tuệ (ARM), xử lý sản phẩm phức tạp." },
  { step: 5, title: "5. Lan tỏa & Dự báo", desc: "Theo dõi 5 thuộc tính Rogers, đường cong chữ S, dự báo phía cầu/cung và cập nhật bằng chứng thực tế." },
];

export const Slide03: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={3} label="LỘ TRÌNH CHƯƠNG 6" accent="#2563eb" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#2563eb" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="display-lg text-slate-900 leading-tight">
            Hành Trình Quản Trị<br />
            <span className="text-blue-600">Đổi Mới Từ Thị Trường</span>
          </h2>
          <p className="text-lg text-slate-600 mt-2 font-serif italic">
            Năm giai đoạn liên kết chặt chẽ với cơ chế học hỏi và vòng phản hồi thích ứng
          </p>
        </div>

        {/* Analogy Box */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏪</span>
            <span>
              <strong className="text-slate-900">Ẩn dụ quản trị:</strong> Giống như quy trình mở một quán ăn — tìm hiểu khách khu vực thích gì, chọn điểm khác biệt của quán, xác định nhóm khách mục tiêu, tổ chức bán hàng và quan sát xem ai quay lại. Nếu khách chê món quá mặn, quán phải lập tức điều chỉnh!
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-teal-600 font-semibold font-mono shrink-0">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Vòng phản hồi</span>
          </div>
        </div>

        {/* 5 Clean Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {STAGES.map((s, idx) => {
            const isSelected = selected === idx;
            return (
              <button
                key={s.step}
                onClick={() => setSelected(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs font-mono ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    0{s.step}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 mt-2 leading-snug">{s.title}</h4>
                  <span className="text-[10px] text-blue-600 font-semibold mt-1 block">Xem chi tiết →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[11px] font-mono text-blue-600 font-bold uppercase">
              Chi tiết Giai đoạn 0{STAGES[selected].step}
            </span>
            <h3 className="text-base font-bold text-slate-900">{STAGES[selected].title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {STAGES[selected].desc}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 shrink-0 max-w-xs space-y-1">
            <span className="font-bold">Bài học mấu chốt:</span>
            <p className="text-[11px] leading-snug">
              Sản phẩm ra mắt không phải điểm kết thúc, mà là lúc doanh nghiệp tiếp tục học từ thị trường để tinh chỉnh thiết kế ban đầu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
