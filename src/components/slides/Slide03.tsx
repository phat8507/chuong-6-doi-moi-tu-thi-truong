import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { RefreshCw } from 'lucide-react';

const DECISIONS = [
  { 
    id: 1, 
    code: "01",
    name: "Nhận diện thị trường", 
    desc: "Khám phá vấn đề chưa được giải quyết của người dùng, phân tích nhu cầu chưa bộc lộ và bối cảnh cạnh tranh.",
    action: "Tìm hiểu xem thị trường đang gặp rắc rối gì và ai sẵn sàng trả tiền cho giải pháp."
  },
  { 
    id: 2, 
    code: "02",
    name: "Khác biệt hóa", 
    desc: "Xác lập thuộc tính có giá trị tương đối với khách hàng; chuyển tiếng nói khách hàng (QFD) thành chỉ tiêu kỹ thuật.",
    action: "Tối ưu hóa lợi ích cảm nhận so với chi phí và so với sản phẩm thay thế của đối thủ."
  },
  { 
    id: 3, 
    code: "03",
    name: "Phát triển chiến lược", 
    desc: "Phân khúc khách hàng B2C/B2B và lựa chọn 5 hướng phát triển từ nền tảng thiết kế cốt lõi.",
    action: "Cân nhắc năng lực doanh nghiệp, rủi ro tự cạnh tranh và công việc cần hoàn thành (JTBD)."
  },
  { 
    id: 4, 
    code: "04",
    name: "Thương mại hóa", 
    desc: "Tích hợp công nghệ thành sản phẩm hoàn chỉnh, khai thác sở hữu trí tuệ (ARM), xử lý sản phẩm phức tạp.",
    action: "Hỗ trợ khách hàng giảm rủi ro chuyển đổi và thiết lập mạng lưới dịch vụ sau bán."
  },
  { 
    id: 5, 
    code: "05",
    name: "Lan tỏa đổi mới", 
    desc: "Quản trị quá trình chấp nhận qua 5 đặc tính Rogers, đường cong chữ S, dự báo cẩn trọng và liên tục học hỏi.",
    action: "Thu thập phản hồi từ người dùng thực tế để quay lại hoàn thiện chu trình ban đầu."
  },
];

export const Slide03: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[2];
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl font-normal">
          Đổi mới không phải là một phát kiến ngẫu hứng hay một sự kiện đơn lẻ. Đó là một <strong className="text-slate-900 font-semibold">chuỗi năm quyết định quản trị liên kết hữu cơ</strong>: mỗi quyết định phía trước định hình nền tảng cho quyết định tiếp theo, và phản hồi từ thị trường luôn thúc đẩy doanh nghiệp quay lại điều chỉnh thiết kế ban đầu.
        </p>

        {/* 5-step Sticky Circuit Wire with Active Node Glow & Loopback Arrow */}
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200/70 pb-4">
            <span className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wide">
              Bản đồ tư duy: Đường dây 5 quyết định quản trị đổi mới
            </span>
            <div className="flex items-center gap-2 text-xs md:text-sm text-teal-800 font-mono font-bold bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              <RefreshCw className="w-4 h-4 text-teal-700" />
              <span>Vòng phản hồi quay lại đầu</span>
            </div>
          </div>

          {/* 5 Nodes Line */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
            {DECISIONS.map((d, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 md:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-40 relative ${
                    isCurrent
                      ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/20 shadow-sm'
                      : 'bg-stone-50/80 border-stone-200 hover:border-stone-300 hover:bg-stone-100/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold font-mono text-sm ${
                      isCurrent ? 'bg-teal-700 text-white shadow-xs' : 'bg-white text-slate-600 border border-stone-200'
                    }`}>
                      {d.code}
                    </span>
                    {isCurrent && <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />}
                  </div>

                  <div>
                    <h4 className="text-sm md:text-base font-bold text-slate-900 mt-2 leading-snug">{d.name}</h4>
                    <span className="text-xs text-teal-700 font-semibold mt-1.5 block">Bấm xem chi tiết →</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Decision Detail Box — Chữ to rõ ràng hơn */}
          <div className="p-5 md:p-6 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-teal-900 bg-teal-100/80 px-3 py-1 rounded-md text-xs tracking-wide">
                  Quyết định 0{DECISIONS[activeStep].id}
                </span>
                <h4 className="text-base md:text-lg font-bold text-slate-900">{DECISIONS[activeStep].name}</h4>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-[15px]">
                {DECISIONS[activeStep].desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shrink-0 max-w-sm text-sm text-slate-700 space-y-1.5 shadow-2xs">
              <strong className="text-teal-900 block font-semibold text-xs font-mono uppercase tracking-wider">
                Nhiệm vụ quản trị:
              </strong>
              <p className="text-slate-700 leading-relaxed text-xs md:text-sm">{DECISIONS[activeStep].action}</p>
            </div>
          </div>

          {/* Loopback Feedback Banner */}
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-sm text-teal-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔁</span>
              <span className="leading-relaxed">
                <strong className="text-teal-900 font-semibold">Mũi tên phản hồi quay lại đầu:</strong> Khi sản phẩm bước vào thương mại hóa hoặc lan tỏa mà thị trường từ chối, doanh nghiệp phải lập tức quay trở lại giai đoạn 01 &amp; 02 để điều chỉnh thiết kế, chứ không thể mù quáng bơm thêm tiền quảng cáo!
              </span>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
