import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface Branch {
  id: number;
  name: string;
  type: string;
  example: string;
  jtbdNote: string;
}

const BRANCHES: Branch[] = [
  {
    id: 1,
    name: "1. Thêm tính năng cho phân khúc hiện tại",
    type: "Đổi mới duy trì (Sustaining)",
    example: "Lắp thêm đồng hồ đo tốc độ điện tử và giỏ chở đồ cho mẫu xe đạp phố quen thuộc.",
    jtbdNote: "Giải quyết việc di chuyển thường ngày tiện lợi hơn mà không thay đổi thói quen của khách hàng hiện tại."
  },
  {
    id: 2,
    name: "2. Mở rộng lên phân khúc cao hơn (Upmarket)",
    type: "Đổi mới duy trì cao cấp",
    example: "Sản xuất dòng xe đua chuyên nghiệp khung sườn carbon siêu nhẹ cho vận động viên.",
    jtbdNote: "Đáp ứng công việc 'tối ưu tốc độ và thành tích thi đấu đỉnh cao' của người dùng chuyên nghiệp."
  },
  {
    id: 3,
    name: "3. Chuyển xuống phân khúc thấp hơn (Downmarket)",
    type: "Đổi mới gián đoạn (Disruptive)",
    example: "Sản xuất mẫu xe đạp cơ bản tối giản cho học sinh nông thôn với mức giá dễ tiếp cận nhất.",
    jtbdNote: "Xóa bỏ rào cản tài chính để phục vụ trạng thái 'không tiêu dùng' (người chưa đủ tiền mua xe đắt tiền)."
  },
  {
    id: 4,
    name: "4. Bổ sung tính năng tùy chọn (Special Options)",
    type: "Cá nhân hóa theo ngách",
    example: "Cung cấp tùy chọn lắp thêm ghế em bé an toàn hoặc bộ líp leo đèo dốc cho nhóm phượt thủ đường dài.",
    jtbdNote: "Linh hoạt hóa sản phẩm để người dùng tự ghép giải pháp cho công việc đặc thù của riêng mình."
  },
  {
    id: 5,
    name: "5. Sản phẩm hỗn hợp từ lõi công nghệ (Hybrid)",
    type: "Tái kết hợp kiến trúc",
    example: "Kết hợp khung xe đạp cơ khí truyền thống với động cơ trợ lực điện và pin tháo rời (E-bike).",
    jtbdNote: "Tạo ra một công việc hoàn toàn mới: vừa rèn luyện thể thao vừa không bị kiệt sức khi đi làm xa."
  }
];

export const Slide10: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[9];
  const [selectedBranch, setSelectedBranch] = useState<number>(0);

  const current = BRANCHES[selectedBranch];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: 5-Branch Strategy Tree */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                  Cây chiến lược 5 hướng đi sản phẩm (Christensen Framework)
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Chọn nhánh sản phẩm
                </span>
              </div>

              {/* 5 Branches Interactive List */}
              <div className="space-y-2.5">
                {BRANCHES.map((b, idx) => {
                  const isSelected = selectedBranch === idx;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBranch(idx)}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/30 shadow-sm translate-y-[-1px]'
                          : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-slate-900">{b.name}</div>
                        <span className="text-[11px] sm:text-xs text-teal-800 font-mono font-semibold">
                          {b.type}
                        </span>
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold shrink-0 ml-3 ${isSelected ? 'text-teal-700 font-bold' : 'text-slate-400'}`}>
                        {isSelected ? 'Đang xem •' : 'Khảo sát →'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Revealed Branch Detail Card */}
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200/80 space-y-3.5">
                <div className="flex items-center justify-between border-b border-teal-200/60 pb-2">
                  <span className="font-bold text-xs sm:text-sm text-teal-950 uppercase font-mono tracking-wide">
                    {current.name}
                  </span>
                  <span className="text-xs font-mono font-semibold bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded">
                    {current.type}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/95 border border-teal-100 space-y-1 shadow-2xs">
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block font-mono">
                    🚲 Minh họa ứng dụng:
                  </strong>
                  <p className="text-xs sm:text-[14px] text-slate-800 leading-relaxed font-medium">
                    {current.example}
                  </p>
                </div>

                <div className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                  <strong className="text-teal-950 font-semibold font-mono">🎯 Liên hệ JTBD (Công việc cần hoàn thành):</strong> {current.jtbdNote}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sustaining vs Disruptive Annotation & Section Bridge */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-5">
              <span className="font-bold text-xs sm:text-sm text-slate-900 uppercase font-mono tracking-wider block pb-2 border-b border-slate-100">
                Phân biệt bản chất: Duy trì vs Gián đoạn
              </span>

              {/* Sustaining Concept */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <strong className="text-sm font-bold text-teal-900 block font-mono">
                  Đổi mới duy trì (Sustaining Innovation):
                </strong>
                <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                  Cải tiến gia tăng tính năng cho phân khúc khách hàng sẵn có; thường được các doanh nghiệp đầu ngành bảo vệ và khai thác nhằm tối đa hóa biên lợi nhuận.
                </p>
              </div>

              {/* Disruptive Concept */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <strong className="text-sm font-bold text-amber-900 block font-mono">
                  Đổi mới gián đoạn (Disruptive Innovation):
                </strong>
                <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                  Mở ra phân khúc khách hàng hoàn toàn mới hoặc giải quyết trạng thái <em>không tiêu dùng</em> bằng các giải pháp rẻ hơn, đơn giản hơn, dễ tiếp cận hơn (ví dụ: Southwest Airlines, Intuit QuickBooks).
                </p>
              </div>

              {/* Bridge to Next Topic */}
              <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-indigo-950 space-y-1.5">
                <strong className="text-xs sm:text-sm font-bold text-indigo-900 block font-mono">
                  Chuyển tiếp chuỗi quản trị:
                </strong>
                <p className="text-xs sm:text-[13px] leading-relaxed text-indigo-900/90">
                  Một sản phẩm hoàn thiện trên bản vẽ chiến lược vẫn chưa thể sinh lời nếu thiếu một hệ sinh thái thương mại hóa, phần mềm và dịch vụ hỗ trợ đồng bộ đi cùng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
