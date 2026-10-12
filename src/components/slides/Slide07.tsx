import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface QFDItem {
  id: string;
  demand: string;
  category: string;
  categoryType: 'oneway' | 'mustbe' | 'delighter';
  techConstraint: string;
  benchmark: string;
}

const QFD_DATA: QFDItem[] = [
  {
    id: "loan_schedule",
    demand: "Dễ tra cứu lịch trả nợ",
    category: "Thuộc tính một chiều",
    categoryType: "oneway",
    techConstraint: "API truy vấn cơ sở dữ liệu &lt; 500ms; hiển thị số tiền và ngày đến hạn tại màn hình chính với kích thước font tối thiểu 16pt.",
    benchmark: "Khách hàng tìm thấy thông tin ngay trong 2 thao tác chạm trên màn hình điện thoại."
  },
  {
    id: "accuracy",
    demand: "Thông tin lãi phí chính xác 100%",
    category: "Thuộc tính phải có (Must-be)",
    categoryType: "mustbe",
    techConstraint: "Hệ thống Core Banking đối soát giao dịch thời gian thực; sai số tài chính 0.00%; có lưu nhật ký giao dịch phục vụ tra soát.",
    benchmark: "Tuyệt đối không được sai sót; nếu sai hệ thống mất niềm tin ngay lập tức."
  },
  {
    id: "smart_alert",
    demand: "Tự động nhắc lịch qua Zalo/App trước 3 ngày",
    category: "Thuộc tính thích thú (Delighter)",
    categoryType: "delighter",
    techConstraint: "Notification Engine tích hợp Webhook đa kênh; tự động cá nhân hóa tin nhắn kèm nút thanh toán tức thì 1 chạm.",
    benchmark: "Vượt ngoài mong đợi ban đầu của người vay, giảm tỷ lệ trễ hạn 25%."
  }
];

export const Slide07: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[6];
  const [selectedId, setSelectedId] = useState<string>("loan_schedule");

  const current = QFD_DATA.find(q => q.id === selectedId) || QFD_DATA[0];

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'mustbe': return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'oneway': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'delighter': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Interactive QFD Matrix Selection */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                  Ma trận QFD: Tiếng nói khách hàng (VOC) → Chỉ tiêu kỹ thuật
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Chọn nhu cầu
                </span>
              </div>

              {/* Interactive Demand Selectors */}
              <div className="space-y-3">
                {QFD_DATA.map((item) => {
                  const isSelected = selectedId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`w-full p-4 sm:p-4.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                          : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className={`text-[11px] sm:text-xs font-mono uppercase font-bold px-2 py-0.5 rounded border inline-block ${getBadgeStyle(item.categoryType)}`}>
                          {item.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                          Nhu cầu: “{item.demand}”
                        </h4>
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold shrink-0 ml-3 ${isSelected ? 'text-teal-700 font-bold' : 'text-slate-400'}`}>
                        {isSelected ? 'Đang phân tích •' : 'Xem ràng buộc →'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Technical Constraint Reveal Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-teal-50/60 border border-teal-200/80 space-y-3">
                <span className="font-bold text-xs sm:text-sm text-teal-950 uppercase font-mono tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                  Ràng buộc kỹ thuật &amp; tiêu chuẩn kiến trúc:
                </span>
                <div 
                  className="p-3.5 rounded-xl bg-white/95 border border-teal-100 text-slate-800 font-mono text-xs sm:text-[13px] leading-relaxed shadow-2xs"
                  dangerouslySetInnerHTML={{ __html: current.techConstraint }}
                />
                <div className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-medium">
                  <strong className="text-slate-900 font-semibold font-mono">Tiêu chí kiểm chứng nghiệm thu:</strong> {current.benchmark}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: QFD 5 Steps & Kano Distinct Framework */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
              <span className="font-bold text-xs sm:text-sm text-slate-900 uppercase font-mono tracking-wider block pb-2 border-b border-slate-100">
                Phân biệt phương pháp QFD &amp; 3 nhóm thuộc tính Kano
              </span>

              {/* QFD Concept */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <strong className="text-sm font-bold text-teal-900 block">
                  QFD (Triển khai chức năng chất lượng):
                </strong>
                <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                  Là phương pháp dịch tiếng nói khách hàng (VOC) thành các chỉ tiêu kỹ thuật đo lường được và đối chuẩn năng lực cạnh tranh qua 5 bước nghiêm ngặt.
                </p>
              </div>

              {/* Kano Classification */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <strong className="text-sm font-bold text-amber-900 block">
                  3 Nhóm thuộc tính Kano (Khung phân loại bổ trợ):
                </strong>
                <ul className="text-xs sm:text-[13px] text-slate-700 space-y-1.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span><strong>Phải có (Must-be):</strong> Điều kiện nền tảng bắt buộc; thiếu sẽ gây phẫn nộ nhưng đủ thì chỉ đạt mức bình thường.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                    <span><strong>Một chiều:</strong> Tỷ lệ thuận tuyến tính; đáp ứng càng cao thì sự hài lòng và giá trị cảm nhận càng tăng.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>Thích thú (Delighters):</strong> Bất ngờ vượt kỳ vọng; khách hàng chưa từng yêu cầu nhưng cực kỳ phấn khích khi có.</span>
                  </li>
                </ul>
              </div>

              {/* Empirical Toyota Citation */}
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-[13px] text-emerald-950 leading-relaxed">
                <strong className="text-emerald-900 font-semibold font-mono">Thực nghiệm Toyota:</strong> Giảm khoảng <strong>40% thời gian</strong> và <strong>chi phí phát triển</strong> sản phẩm mới khi áp dụng QFD liên kết hiệu quả giữa Marketing, Kỹ thuật và Vận hành sản xuất.
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
