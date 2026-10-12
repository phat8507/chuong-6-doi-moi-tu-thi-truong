import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

export const Slide12: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[11];
  const [activeLayer, setActiveLayer] = useState<'protection' | 'pricing' | 'armFlow'>('armFlow');

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Double-bezel wrapper for tab controls */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 p-2 bg-white/80 rounded-2xl border border-slate-200/60">
            <button
              onClick={() => setActiveLayer('armFlow')}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeLayer === 'armFlow'
                  ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                  : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
              }`}
            >
              <span className="text-[11px] sm:text-xs font-mono uppercase font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                Trọng tâm 1
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5">
                Mô hình ARM &amp; Dòng phí bản quyền
              </div>
            </button>

            <button
              onClick={() => setActiveLayer('protection')}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeLayer === 'protection'
                  ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                  : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
              }`}
            >
              <span className="text-[11px] sm:text-xs font-mono uppercase font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                Trọng tâm 2
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5">
                Bảo hộ: 5 Điều kiện sáng chế pháp lý
              </div>
            </button>

            <button
              onClick={() => setActiveLayer('pricing')}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeLayer === 'pricing'
                  ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                  : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
              }`}
            >
              <span className="text-[11px] sm:text-xs font-mono uppercase font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                Trọng tâm 3
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5">
                Định giá giấy phép: 4 Cách tiếp cận
              </div>
            </button>
          </div>
        </div>

        {/* Content Box with double-bezel styling */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm min-h-[300px] flex flex-col justify-center">
            {activeLayer === 'armFlow' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                    Hệ sinh thái nhượng quyền ARM (Kiến trúc RISC &amp; Dòng giá trị kinh tế):
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
                    Fabless IP Architecture
                  </span>
                </div>

                {/* Bespoke Native SVG Ecosystem Diagram with crisp clear typography */}
                <div className="w-full bg-slate-50/90 border border-slate-200 rounded-2xl p-5 flex items-center justify-center overflow-x-auto shadow-inner">
                  <svg viewBox="0 0 820 190" className="w-full min-w-[700px] max-h-[190px]">
                    {/* ARM Core Box */}
                    <rect x="20" y="35" width="200" height="110" rx="14" fill="#0f766e" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                    <text x="120" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">ARM HOLDINGS</text>
                    <text x="120" y="98" textAnchor="middle" fill="#ccfbf1" fontSize="12" fontFamily="system-ui">Thiết kế kiến trúc RISC</text>
                    <text x="120" y="118" textAnchor="middle" fill="#99f6e4" fontSize="11" fontFamily="system-ui">(Không tự đúc chip bán dẫn)</text>

                    {/* Flow Arrow 1: Licensing */}
                    <line x1="220" y1="85" x2="310" y2="85" stroke="#0f766e" strokeWidth="3" markerEnd="url(#arm-arrow)" />
                    <text x="265" y="75" textAnchor="middle" fill="#0f766e" fontSize="11" fontWeight="bold" fontFamily="system-ui">Cấp phép thiết kế</text>

                    {/* Partners Box */}
                    <rect x="310" y="35" width="230" height="110" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
                    <text x="425" y="70" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="system-ui">ĐỐI TÁC SẢN XUẤT CHIP</text>
                    <text x="425" y="93" textAnchor="middle" fill="#475569" fontSize="12" fontFamily="system-ui">Apple, Qualcomm, MediaTek</text>
                    <text x="425" y="113" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="system-ui">Đúc silicon &amp; đóng gói thiết bị</text>

                    {/* Flow Arrow 2: Royalties back to ARM */}
                    <path d="M 310,125 Q 265,165 220,125" fill="none" stroke="#d97706" strokeWidth="2.5" strokeDasharray="5 3" />
                    <text x="265" y="162" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="bold" fontFamily="system-ui">Bản quyền 0,05$ – 2,5$ / chip</text>

                    {/* End Devices Box */}
                    <rect x="600" y="35" width="200" height="110" rx="14" fill="#0f172a" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                    <text x="700" y="75" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="system-ui">THỊ TRƯỜNG ĐẦU CUỐI</text>
                    <text x="700" y="98" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontFamily="system-ui">Hàng tỷ Smartphone &amp; IoT</text>
                    <text x="700" y="118" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Doanh thu thương mại tiêu dùng</text>

                    <line x1="540" y1="85" x2="600" y2="85" stroke="#475569" strokeWidth="2.5" markerEnd="url(#arm-arrow-dark)" />

                    {/* Defs */}
                    <defs>
                      <marker id="arm-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f766e" />
                      </marker>
                      <marker id="arm-arrow-dark" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-[14px] text-amber-950 leading-relaxed">
                  <strong className="text-amber-900 font-semibold font-mono">Ý nghĩa chiến lược:</strong> ARM không cần bỏ ra hàng chục tỷ USD để xây dựng các nhà máy đúc vi mạch (fabs) rủi ro cao, nhưng vẫn bảo toàn vị thế siêu lợi nhuận trên thị trường toàn cầu nhờ nắm giữ kiến trúc tập lệnh độc quyền không thể thay thế.
                </div>
              </div>
            )}

            {activeLayer === 'protection' && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase font-mono tracking-wider block">
                  Năm điều kiện bảo hộ sáng chế pháp lý bắt buộc:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">1. Tính mới</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Chưa từng được công bố công khai dưới bất kỳ hình thức nào trên toàn thế giới.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">2. Bước phát minh</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Không hiển nhiên đối với một chuyên gia có trình độ kỹ thuật trung bình trong ngành.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">3. Áp dụng công nghiệp</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Có khả năng chế tạo hoặc sản xuất hàng loạt trong thực tiễn sản xuất công nghiệp.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">4. Đối tượng hợp lệ</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Thuộc nhóm danh mục giải pháp kỹ thuật được pháp luật sở hữu trí tuệ cho phép cấp bằng.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">5. Tiết lộ đầy đủ</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Bản mô tả chi tiết đầy đủ để một người có hiểu biết thông thường có thể tái tạo được.</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-600 font-mono italic">
                  * Lưu ý: Quy định thời hạn 20 năm phản ánh bối cảnh nghiên cứu quốc tế, khi áp dụng cụ thể cần tuân thủ Luật Sở hữu trí tuệ hiện hành tại Việt Nam.
                </div>
              </div>
            )}

            {activeLayer === 'pricing' && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase font-mono tracking-wider block">
                  Bốn phương pháp định giá phí cấp phép công nghệ (IP Licensing Valuation):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">1. Tham chiếu thị trường</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Dựa vào tỷ lệ tiền bản quyền phổ biến trong các thỏa thuận chuyển giao công nghệ tương đương cùng ngành.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">2. Quy tắc 25% (25% Rule)</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Bên cấp phép thu khoảng 25% lợi nhuận ròng hoạt động do công nghệ mang lại cho bên nhận quyền.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">3. Lợi tức đầu tư (ROI)</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Tính toán dựa trên tổng chi phí R&amp;D đã bỏ ra và tỷ suất lợi nhuận kỳ vọng trong khung thời gian hoàn vốn.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-sm font-bold text-teal-900 block font-mono">4. Chia sẻ lợi nhuận</strong>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">Thỏa thuận phân chia theo tỷ lệ đóng góp vốn, tài sản bổ trợ và chia sẻ rủi ro thương mại hóa chu kỳ sống.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
