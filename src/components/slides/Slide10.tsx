import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { GitBranch, ArrowUpRight, ArrowDownRight, Sliders, Blend, CheckCircle2, AlertTriangle } from 'lucide-react';

interface StrategyDirection {
  id: number;
  title: string;
  subtitle: string;
  mechanism: string;
  risk: string;
  bicycleAnalogy: string;
  techCase: string;
}

const STRATEGIES: StrategyDirection[] = [
  {
    id: 1,
    title: "1. Thêm tính năng cho phân khúc hiện tại",
    subtitle: "Cải tiến liên tục trên nền tảng quen thuộc",
    mechanism: "Tăng giá trị sử dụng cho nhóm khách hàng trung thành hiện có.",
    risk: "Tính năng dư thừa (feature bloat), giá thành tăng khiến khách hàng ngần ngại nâng cấp.",
    bicycleAnalogy: "Lắp thêm đồng hồ đo tốc độ, đèn pha tự động và giỏ chở đồ cho mẫu xe phố hiện có.",
    techCase: "Phần mềm kế toán cập nhật biểu mẫu kê khai thuế mới tự động."
  },
  {
    id: 2,
    title: "2. Mở rộng lên phân khúc cao hơn (Upmarket)",
    subtitle: "Tiếp cận khách hàng cao cấp & biên lợi nhuận cao",
    mechanism: "Nâng chuẩn chất lượng vật liệu, dịch vụ đặc quyền và thương hiệu uy tín.",
    risk: "Doanh nghiệp thiếu năng lực dịch vụ cao cấp, uy tín thương hiệu chưa tương xứng.",
    bicycleAnalogy: "Sản xuất dòng xe đua chuyên nghiệp khung sườn carbon siêu nhẹ cho vận động viên.",
    techCase: "Hãng điện thoại phổ thông ra mắt dòng Flagship cạnh tranh trực tiếp phân khúc trên 20 triệu."
  },
  {
    id: 3,
    title: "3. Chuyển xuống phân khúc thấp hơn (Downmarket)",
    subtitle: "Mở rộng thị phần & tiếp cận nhóm chưa được phục vụ",
    mechanism: "Đơn giản hóa cấu hình để giảm giá bán, hướng tới người dùng nhạy cảm về giá.",
    risk: "Nguy cơ 'ăn thịt thị phần' (cannibalization) của dòng sản phẩm cao cấp, pha loãng định vị.",
    bicycleAnalogy: "Sản xuất mẫu xe đạp cơ bản tối giản cho học sinh vùng nông thôn với giá thành cực thấp.",
    techCase: "Hãng hàng không giá rẻ (Southwest, Vietjet) lược bỏ suất ăn miễn phí để hạ giá vé."
  },
  {
    id: 4,
    title: "4. Bổ sung tính năng tùy chọn (Special Options)",
    subtitle: "Cá nhân hóa theo kênh bán hoặc khách hàng đặc biệt",
    mechanism: "Linh hoạt hóa sản phẩm theo từng nhóm người dùng ngách hoặc hợp đồng B2B riêng.",
    risk: "Làm phức tạp khâu quản trị tồn kho linh kiện và gia tăng gánh nặng bảo hành sau bán.",
    bicycleAnalogy: "Bán tùy chọn thêm ghế em bé an toàn hoặc bộ líp leo đèo dốc cho nhóm phượt thủ.",
    techCase: "Phiên bản laptop chuyên biệt cho doanh nghiệp với cảm biến vân tay và bảo mật phần cứng TPM."
  },
  {
    id: 5,
    title: "5. Sản phẩm hỗn hợp từ lõi công nghệ (Hybrid / Recombination)",
    subtitle: "Tận dụng các cấu phần và kiến trúc sẵn có",
    mechanism: "Tái kết hợp module công nghệ giữa các dòng sản phẩm để tạo giải pháp lai mới lạ.",
    risk: "Xung đột tương thích giữa các linh kiện, sản phẩm thiếu định vị trọng tâm rõ ràng.",
    bicycleAnalogy: "Kết hợp khung xe đạp truyền thống với động cơ trợ lực điện và pin tháo rời (E-bike).",
    techCase: "Máy tính bảng lai bàn phím rời chuyển đổi linh hoạt giữa tablet và laptop."
  }
];

export const Slide10: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedDirection, setSelectedDirection] = useState<number>(0);

  const current = STRATEGIES[selectedDirection];

  return (
    <SlideLayout slide={slide} rightBadge="Năm hướng chiến lược & JTBD">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: 5 Interactive Strategy Branches */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-teal-300">5 Nhánh phát triển từ một nền tảng thiết kế cốt lõi</span>
            <span className="text-[11px] italic">Bấm từng nhánh để xem ví dụ xe đạp & rủi ro</span>
          </div>

          <div className="space-y-2">
            {STRATEGIES.map((item, idx) => {
              const isSelected = selectedDirection === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedDirection(idx)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-teal-400 shadow-md ring-1 ring-teal-400 scale-[1.01]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-teal-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.id}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[10px] text-teal-300/80">{item.subtitle}</div>
                    </div>
                  </div>
                  <GitBranch className={`w-4 h-4 shrink-0 ${isSelected ? 'text-teal-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Branch Mechanism Panel */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-300">{current.title}</span>
              <span className="text-[10px] text-amber-300 font-mono">Cơ chế tạo giá trị</span>
            </div>
            <p className="text-[11px] text-slate-200">
              <strong>Cơ chế:</strong> {current.mechanism}
            </p>
            <div className="p-2 rounded bg-slate-800/80 text-[11px] text-slate-300 flex items-start gap-2">
              <span className="text-amber-400 shrink-0">🚲 <strong>Ẩn dụ xe đạp:</strong></span>
              <span>{current.bicycleAnalogy}</span>
            </div>
            <div className="text-[10px] text-rose-300 flex items-center gap-1.5 pt-0.5">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span><strong>Rủi ro cần đánh giá:</strong> {current.risk}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sustaining vs Disruptive Innovation & Jobs-to-be-Done (JTBD) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Đổi mới Duy trì vs Đổi mới Gián đoạn (Christensen)
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-bold text-teal-300">Đổi mới duy trì (Sustaining):</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Cải tiến chức năng cho phân khúc khách hàng không đổi; đáp ứng kỳ vọng nâng cấp của người mua hiện tại.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-bold text-amber-300">Đổi mới gián đoạn (Disruptive):</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Tập trung vào phân khúc bị bỏ ngỏ hoặc giải quyết trạng thái 'không tiêu dùng' bằng giải pháp rẻ hơn, thuận tiện hơn.
                </p>
              </div>
            </div>
          </div>

          {/* Jobs-to-be-Done (JTBD) Framework Insight */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-500/30 text-xs space-y-1.5">
            <div className="text-xs font-bold text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Công việc khách hàng cần hoàn thành (JTBD)</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Khách hàng không mua mũi khoan 5mm vì muốn sở hữu cái mũi khoan; họ mua vì cần một cái lỗ 5mm trên tường để treo tranh. Nhận diện đúng <strong>việc cần làm</strong> giúp định hình sản phẩm chiến lược vượt ra ngoài các thông số kỹ thuật thuần túy.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
