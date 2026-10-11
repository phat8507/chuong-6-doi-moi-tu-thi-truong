import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

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
        <p className="text-base text-slate-700 leading-relaxed font-serif max-w-4xl">
          Đổi mới không phải là một phát kiến ngẫu hứng hay một sự kiện đơn lẻ. Đó là một <strong>chuỗi năm quyết định quản trị liên kết hữu cơ</strong>: mỗi quyết định phía trước định hình nền tảng cho quyết định tiếp theo, và phản hồi từ thị trường luôn thúc đẩy doanh nghiệp quay lại điều chỉnh thiết kế ban đầu.
        </p>

        {/* 5-step Sticky Circuit Wire with Active Node Glow & Loopback Arrow */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Bản đồ tư duy: Đường dây 5 quyết định quản trị đổi mới
            </span>
            <div className="flex items-center gap-1.5 text-xs text-teal-800 font-mono font-bold">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Vòng phản hồi thị trường quay lại đầu</span>
            </div>
          </div>

          {/* 5 Nodes Line */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {DECISIONS.map((d, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-36 relative ${
                    isCurrent
                      ? 'bg-teal-50/80 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold font-mono text-xs ${
                      isCurrent ? 'bg-teal-700 text-white' : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {d.code}
                    </span>
                    {isCurrent && <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 mt-2 leading-snug">{d.name}</h4>
                    <span className="text-[10px] text-teal-700 font-semibold mt-1 block">Bấm xem chi tiết →</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Decision Detail Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded text-[10px]">
                  Quyết định 0{DECISIONS[activeStep].id}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{DECISIONS[activeStep].name}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {DECISIONS[activeStep].desc}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200 shrink-0 max-w-xs text-[11px] text-slate-700 space-y-1 shadow-2xs">
              <strong className="text-teal-800 block">Nhiệm vụ quản trị:</strong>
              <p>{DECISIONS[activeStep].action}</p>
            </div>
          </div>

          {/* Explicit Loopback Feedback Banner as demanded in outline */}
          <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 text-xs text-teal-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg">🔁</span>
              <span>
                <strong>Mũi tên phản hồi quay lại đầu:</strong> Khi sản phẩm bước vào thương mại hóa hoặc lan tỏa mà thị trường từ chối, doanh nghiệp phải lập tức quay trở lại giai đoạn 01 &amp; 02 để điều chỉnh thiết kế, chứ không thể mù quáng bơm thêm tiền quảng cáo!
              </span>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
