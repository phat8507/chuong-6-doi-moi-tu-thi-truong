import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

export const Slide12: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[11];
  const [activeLayer, setActiveLayer] = useState<'protection' | 'pricing' | 'armFlow'>('armFlow');

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* 3 Sticky Layer Switchers as requested in visualSpec */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setActiveLayer('protection')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeLayer === 'protection'
                ? 'bg-teal-50 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono uppercase font-bold text-teal-800">Lớp Sticky 1</span>
            <div className="text-xs font-bold text-slate-900 mt-0.5">Bảo hộ: 5 Điều kiện sáng chế</div>
          </button>

          <button
            onClick={() => setActiveLayer('pricing')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeLayer === 'pricing'
                ? 'bg-teal-50 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono uppercase font-bold text-teal-800">Lớp Sticky 2</span>
            <div className="text-xs font-bold text-slate-900 mt-0.5">Định giá giấy phép: 4 Cách tiếp cận</div>
          </button>

          <button
            onClick={() => setActiveLayer('armFlow')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeLayer === 'armFlow'
                ? 'bg-teal-50 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono uppercase font-bold text-teal-800">Lớp Sticky 3</span>
            <div className="text-xs font-bold text-slate-900 mt-0.5">Dòng giá trị &amp; Phí bản quyền ARM</div>
          </button>
        </div>

        {/* Content Box with SVG Ecosystem */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm min-h-[250px] flex flex-col justify-center">
          {activeLayer === 'protection' && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Năm điều kiện bảo hộ sáng chế pháp lý:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">1. Tính mới</strong>
                  <span className="text-slate-600 text-[11px]">Chưa từng được công bố công khai ở bất kỳ đâu trên thế giới.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">2. Bước phát minh</strong>
                  <span className="text-slate-600 text-[11px]">Không hiển nhiên đối với chuyên gia có trình độ trung bình trong ngành.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">3. Áp dụng công nghiệp</strong>
                  <span className="text-slate-600 text-[11px]">Có khả năng sản xuất hàng loạt trong thực tế.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">4. Đối tượng hợp lệ</strong>
                  <span className="text-slate-600 text-[11px]">Nằm trong danh mục được pháp luật cho phép cấp bằng.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">5. Tiết lộ đầy đủ</strong>
                  <span className="text-slate-600 text-[11px]">Mô tả đủ chi tiết để người trong ngành có thể tái tạo được.</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-mono italic">
                * Lưu ý: Quy định thời hạn 20 năm phản ánh bối cảnh lịch sử trong nghiên cứu, không thay thế cho luật SHTT hiện hành tại Việt Nam.
              </p>
            </div>
          )}

          {activeLayer === 'pricing' && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Bốn cách tiếp cận định giá phí cấp phép công nghệ:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">1. Tham chiếu thị trường</strong>
                  <span className="text-slate-600 text-[11px]">Dựa vào tỷ lệ tiền bản quyền phổ biến trong các thỏa thuận cùng ngành.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">2. Quy tắc 25% (25% Rule)</strong>
                  <span className="text-slate-600 text-[11px]">Thu 25% lợi nhuận ròng do công nghệ tạo ra cho bên nhận quyền.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">3. Lợi tức đầu tư (ROI)</strong>
                  <span className="text-slate-600 text-[11px]">Tính toán dựa trên chi phí nghiên cứu và thời gian hoàn vốn của bên phát minh.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-teal-900 block font-mono">4. Chia sẻ lợi nhuận</strong>
                  <span className="text-slate-600 text-[11px]">Thỏa thuận chia sẻ theo mức độ đóng góp vốn, công nghệ và rủi ro vòng đời.</span>
                </div>
              </div>
            </div>
          )}

          {activeLayer === 'armFlow' && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Hệ sinh thái nhượng quyền ARM (Mô hình SVG &amp; Dòng phí cấp phép):
              </span>

              {/* Bespoke Native SVG Ecosystem Diagram */}
              <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center">
                <svg viewBox="0 0 800 180" className="w-full max-h-[170px]">
                  {/* ARM Core Box */}
                  <rect x="30" y="40" width="180" height="100" rx="10" fill="#0d9488" />
                  <text x="120" y="80" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ARM HOLDINGS</text>
                  <text x="120" y="102" textAnchor="middle" fill="#ccfbf1" fontSize="10">Thiết kế kiến trúc RISC</text>
                  <text x="120" y="118" textAnchor="middle" fill="#ccfbf1" fontSize="9">(Không đúc chip)</text>

                  {/* Flow Arrow 1: Licensing */}
                  <line x1="210" y1="90" x2="310" y2="90" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#arrow)" />
                  <text x="260" y="80" textAnchor="middle" fill="#0d9488" fontSize="10" fontWeight="bold">Cấp phép thiết kế</text>

                  {/* Partners Box */}
                  <rect x="310" y="40" width="220" height="100" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="420" y="70" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">ĐỐI TÁC SẢN XUẤT CHIP</text>
                  <text x="420" y="92" textAnchor="middle" fill="#64748b" fontSize="10">Apple, Qualcomm, MediaTek</text>
                  <text x="420" y="110" textAnchor="middle" fill="#64748b" fontSize="9">Đúc silicon &amp; đóng gói phần cứng</text>

                  {/* Flow Arrow 2: Royalties back to ARM */}
                  <path d="M 310,120 Q 260,155 210,120" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4 3" />
                  <text x="260" y="152" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="bold">Bản quyền 0,05$ – 2,5$ / chip</text>

                  {/* End Devices Box */}
                  <rect x="590" y="40" width="180" height="100" rx="10" fill="#0f172a" />
                  <text x="680" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">THỊ TRƯỜNG ĐẦU CUỐI</text>
                  <text x="680" y="102" textAnchor="middle" fill="#94a3b8" fontSize="10">Hàng tỷ Smartphone &amp; IoT</text>
                  <text x="680" y="118" textAnchor="middle" fill="#94a3b8" fontSize="9">Doanh thu thương mại</text>

                  <line x1="530" y1="90" x2="590" y2="90" stroke="#334155" strokeWidth="2" />

                  {/* Defs */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0d9488" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950">
                <strong>Thang giá trị chiến lược:</strong> ARM không cần bỏ ra hàng chục tỷ USD xây nhà máy luyện bán dẫn nhưng vẫn thu giữ lợi ích kinh tế nhờ nắm giữ kiến trúc tập lệnh độc quyền.
              </div>
            </div>
          )}
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
