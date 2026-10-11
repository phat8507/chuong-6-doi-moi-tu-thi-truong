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
    example: "Sản xuất mẫu xe đạp cơ bản tối giản cho học sinh nông thôn với giá thành rẻ nhất có thể.",
    jtbdNote: "Xóa bỏ rào cản tài chính để phục vụ trạng thái 'không tiêu dùng' (người chưa đủ tiền mua xe đắt)."
  },
  {
    id: 4,
    name: "4. Bổ sung tính năng tùy chọn (Special Options)",
    type: "Cá nhân hóa theo ngách",
    example: "Bán tùy chọn thêm ghế em bé an toàn hoặc bộ líp leo đèo dốc cho nhóm phượt thủ đường dài.",
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: 5-Branch Strategy Tree */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Cây chiến lược 5 nhánh từ một sản phẩm cốt lõi (Nhấp từng nhánh để hiện minh họa):
            </span>

            <div className="space-y-2">
              {BRANCHES.map((b, idx) => {
                const isSelected = selectedBranch === idx;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBranch(idx)}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{b.name}</div>
                      <span className="text-[10px] text-teal-700 font-mono font-semibold">{b.type}</span>
                    </div>
                    <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-400'}`}>
                      Xem ví dụ &amp; JTBD →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Revealed Branch Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-teal-900 uppercase font-mono">{current.name}</span>
                <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-mono font-semibold">{current.type}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-[11px]">
                🚲 <strong>Minh họa thực tế:</strong> {current.example}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                🎯 <strong>Liên hệ Công việc cần hoàn thành (JTBD):</strong> {current.jtbdNote}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Sustaining vs Disruptive Annotation & Section Bridge */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono">
              Chú thích phân biệt: Duy trì vs Gián đoạn
            </span>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-teal-800 block">Đổi mới duy trì (Sustaining):</strong>
              <p className="text-slate-600 text-[11px]">Cải tiến tính năng cho phân khúc không đổi; phục vụ nhóm khách hàng hiện tại của doanh nghiệp dẫn đầu.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-amber-800 block">Đổi mới gián đoạn (Disruptive):</strong>
              <p className="text-slate-600 text-[11px]">Mở ra phân khúc mới hoặc xóa bỏ trạng thái không tiêu dùng bằng sản phẩm rẻ hơn, tiện lợi hơn (Southwest, QuickBooks).</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950 space-y-1">
            <strong>Vấn đề tiếp theo của chuỗi quản trị:</strong>
            <p className="text-[11px] leading-relaxed">
              Sản phẩm sau khi thiết kế xong theo đúng hướng chiến lược liệu đã bán được ngay chưa? Hay vẫn cần một hệ thống thương mại hóa đi kèm?
            </p>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
