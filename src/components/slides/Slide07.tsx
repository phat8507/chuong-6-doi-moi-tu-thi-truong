import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface QFDItem {
  id: string;
  demand: string;
  category: string;
  techConstraint: string;
  benchmark: string;
}

const QFD_DATA: QFDItem[] = [
  {
    id: "loan_schedule",
    demand: "Dễ tra cứu lịch trả nợ",
    category: "Thuộc tính một chiều",
    techConstraint: "API truy vấn cơ sở dữ liệu &lt; 500ms; hiển thị số tiền và ngày đến hạn tại màn hình chính với kích thước font tối thiểu 16pt.",
    benchmark: "Khách hàng tìm thấy thông tin ngay trong 2 thao tác chạm."
  },
  {
    id: "accuracy",
    demand: "Thông tin lãi phí chính xác 100%",
    category: "Thuộc tính phải có (Must-be)",
    techConstraint: "Hệ thống Core Banking đối soát giao dịch thời gian thực; sai số tài chính 0.00%; có lưu nhật ký giao dịch phục vụ tra soát.",
    benchmark: "Tuyệt đối không được sai sót; nếu sai hệ thống mất niềm tin ngay."
  },
  {
    id: "smart_alert",
    demand: "Tự động nhắc lịch qua Zalo/App trước 3 ngày",
    category: "Thuộc tính thích thú (Delighter)",
    techConstraint: "Notification Engine tích hợp Webhook đa kênh; tự động cá nhân hóa tin nhắn kèm nút thanh toán tức thì.",
    benchmark: "Vượt ngoài mong đợi ban đầu của người vay."
  }
];

export const Slide07: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[6];
  const [selectedId, setSelectedId] = useState<string>("loan_schedule");

  const current = QFD_DATA.find(q => q.id === selectedId) || QFD_DATA[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive QFD Matrix Selection */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Ma trận QFD đơn giản: Bấm chọn nhu cầu để hiển thị ràng buộc kỹ thuật
            </span>

            <div className="space-y-2">
              {QFD_DATA.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 mt-1">
                        Nhu cầu: “{item.demand}”
                      </h4>
                    </div>
                    <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-400'}`}>
                      Xem ràng buộc →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Technical Constraint Reveal Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-teal-900 uppercase font-mono">
                Ràng buộc kỹ thuật liên quan:
              </span>
              <div 
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-[11px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: current.techConstraint }}
              />
              <p className="text-[11px] text-slate-600">
                <strong>Tiêu chí kiểm chứng:</strong> {current.benchmark}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: QFD 5 Steps & 3 Kano Attributes Distinction */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono">
              Phân biệt phương pháp QFD &amp; 3 nhóm thuộc tính Kano
            </span>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-teal-800 block">QFD (Triển khai chức năng chất lượng):</strong>
              <p className="text-slate-600 text-[11px]">Là phương pháp dịch tiếng nói khách hàng (VOC) thành các chỉ tiêu kỹ thuật đo lường được và đối chuẩn cạnh tranh qua 5 bước.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-amber-800 block">3 Nhóm thuộc tính Kano (Khung phân loại bổ trợ):</strong>
              <ul className="text-slate-600 text-[11px] space-y-0.5">
                <li>• <strong>Phải có (Must-be):</strong> Điều kiện nền tảng bắt buộc.</li>
                <li>• <strong>Một chiều:</strong> Càng đáp ứng cao thì giá trị cảm nhận càng tăng.</li>
                <li>• <strong>Thích thú (Delighters):</strong> Vượt ngoài kỳ vọng ban đầu.</li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
            <strong>Thực nghiệm Toyota:</strong> Giảm khoảng 40% thời gian và chi phí phát triển khi dùng QFD liên kết hiệu quả giữa Marketing, Thiết kế và Vận hành.
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
