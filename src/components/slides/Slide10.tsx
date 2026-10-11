import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

interface StrategyDirection {
  id: number;
  title: string;
  subtitle: string;
  mechanism: string;
  bicycleAnalogy: string;
}

const STRATEGIES: StrategyDirection[] = [
  {
    id: 1,
    title: "1. Thêm tính năng cho phân khúc hiện tại",
    subtitle: "Cải tiến liên tục trên nền tảng quen thuộc",
    mechanism: "Tăng giá trị sử dụng cho nhóm khách hàng trung thành hiện có.",
    bicycleAnalogy: "Lắp thêm đồng hồ đo tốc độ và giỏ chở đồ cho mẫu xe đạp phố hiện có."
  },
  {
    id: 2,
    title: "2. Mở rộng lên phân khúc cao hơn (Upmarket)",
    subtitle: "Tiếp cận khách hàng cao cấp & biên lợi nhuận cao",
    mechanism: "Nâng chuẩn chất lượng vật liệu, dịch vụ đặc quyền và thương hiệu uy tín.",
    bicycleAnalogy: "Sản xuất dòng xe đua chuyên nghiệp khung sườn carbon siêu nhẹ cho vận động viên."
  },
  {
    id: 3,
    title: "3. Chuyển xuống phân khúc thấp hơn (Downmarket)",
    subtitle: "Mở rộng thị phần & tiếp cận nhóm chưa được phục vụ",
    mechanism: "Đơn giản hóa cấu hình để giảm giá bán, hướng tới người dùng nhạy cảm về giá.",
    bicycleAnalogy: "Sản xuất mẫu xe đạp cơ bản tối giản cho học sinh với giá thành cực thấp."
  },
  {
    id: 4,
    title: "4. Bổ sung tính năng tùy chọn (Special Options)",
    subtitle: "Cá nhân hóa theo kênh bán hoặc khách hàng đặc biệt",
    mechanism: "Linh hoạt hóa sản phẩm theo từng nhóm người dùng ngách hoặc hợp đồng riêng.",
    bicycleAnalogy: "Bán tùy chọn thêm ghế trẻ em an toàn hoặc bộ líp leo đèo dốc cho nhóm phượt thủ."
  },
  {
    id: 5,
    title: "5. Sản phẩm hỗn hợp từ lõi công nghệ (Hybrid)",
    subtitle: "Tận dụng các cấu phần và kiến trúc sẵn có",
    mechanism: "Tái kết hợp module công nghệ giữa các dòng sản phẩm để tạo giải pháp lai mới lạ.",
    bicycleAnalogy: "Kết hợp khung xe đạp truyền thống với động cơ trợ lực điện và pin tháo rời (E-bike)."
  }
];

export const Slide10: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedDirection, setSelectedDirection] = useState<number>(0);

  const current = STRATEGIES[selectedDirection];

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={10} label="CHIẾN LƯỢC SẢN PHẨM" accent="#7c3aed" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#7c3aed" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: 5 Directions */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Năm Hướng Phát Triển<br />
              <span className="text-violet-700">Sản Phẩm Chiến Lược</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Từ một thiết kế cốt lõi đến mở rộng phân khúc và công việc cần hoàn thành (JTBD)
            </p>
          </div>

          <div className="space-y-2">
            {STRATEGIES.map((item, idx) => {
              const isSelected = selectedDirection === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedDirection(idx)}
                  className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-violet-50/70 border-violet-600 ring-2 ring-violet-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-500">{item.subtitle}</div>
                  </div>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-violet-700' : 'text-slate-400'}`}>
                    Xem ví dụ →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs space-y-2">
            <span className="font-bold text-violet-900 uppercase font-mono">{current.title}:</span>
            <p className="text-slate-700 leading-relaxed text-[11px]">{current.mechanism}</p>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-800">
              🚲 <strong>Ẩn dụ xe đạp:</strong> {current.bicycleAnalogy}
            </div>
          </div>
        </div>

        {/* Right Column: Sustaining vs Disruptive Innovation & JTBD */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase font-mono">
              Đổi mới Duy trì vs Đổi mới Gián đoạn (Christensen)
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-teal-800">Đổi mới duy trì (Sustaining):</span>
                <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">
                  Cải tiến chức năng cho phân khúc không đổi; phục vụ người mua quen thuộc.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-amber-800">Đổi mới gián đoạn (Disruptive):</span>
                <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">
                  Mở ra thị trường mới bằng giải pháp đơn giản, thuận tiện, vừa túi tiền hơn (Southwest, QuickBooks).
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-violet-50/60 border border-violet-200 text-xs text-slate-800 space-y-1">
            <span className="font-bold text-violet-900">Công việc khách hàng cần hoàn thành (JTBD):</span>
            <p className="text-[11px] leading-relaxed text-slate-700">
              Khách hàng không mua mũi khoan vì muốn cái mũi khoan; họ mua vì cần một cái lỗ trên tường để treo bức tranh gia đình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
