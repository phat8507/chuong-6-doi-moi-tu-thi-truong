import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

export const Slide11: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[10];
  const [activeLayer, setActiveLayer] = useState<number>(3); // 1: Core tech, 2: Software, 3: Whole product

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Layered Assembly Diagram */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Sơ đồ sản phẩm “lắp ghép” từng lớp (Từ công nghệ lõi đến giải pháp hoàn chỉnh):
            </span>

            {/* Interactive Layer Switches */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveLayer(1)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  activeLayer === 1 
                    ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-2xs' 
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="text-[11px] block font-mono">Lớp 1</span>
                <span className="text-xs">Công nghệ lõi</span>
              </button>
              <button
                onClick={() => setActiveLayer(2)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  activeLayer === 2 
                    ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-2xs' 
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="text-[11px] block font-mono">Lớp 2</span>
                <span className="text-xs">+ Phần mềm &amp; Tương thích</span>
              </button>
              <button
                onClick={() => setActiveLayer(3)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  activeLayer === 3 
                    ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold shadow-2xs' 
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="text-[11px] block font-mono">Lớp 3</span>
                <span className="text-xs">+ Hỗ trợ &amp; Bảo hành</span>
              </button>
            </div>

            {/* Visual Assembly Canvas */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 min-h-[160px] flex flex-col justify-center text-xs">
              {activeLayer >= 1 && (
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs animate-fadeIn">
                  <span className="font-bold text-slate-900 block font-mono text-[11px]">LỚP 1: CÔNG NGHỆ LÕI (CORE HARDWARE)</span>
                  <p className="text-slate-600 text-[11px] mt-0.5">Vi xử lý nhanh hơn, cell pin dung lượng lớn hơn. Nhưng khách hàng không thể cắm trực tiếp cell pin trần vào sinh hoạt hàng ngày!</p>
                </div>
              )}
              {activeLayer >= 2 && (
                <div className="p-2.5 rounded-lg bg-teal-50/70 border border-teal-200 shadow-2xs animate-fadeIn">
                  <span className="font-bold text-teal-900 block font-mono text-[11px]">LỚP 2: HỆ ĐIỀU HÀNH, PHẦN MỀM &amp; CHUẨN TƯƠNG THÍCH</span>
                  <p className="text-teal-800 text-[11px] mt-0.5">Hệ điều hành tương thích, driver điều khiển, phần mềm ứng dụng, cổng kết nối tiêu chuẩn.</p>
                </div>
              )}
              {activeLayer >= 3 && (
                <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 shadow-2xs animate-fadeIn">
                  <span className="font-bold text-emerald-900 block font-mono text-[11px]">LỚP 3: DỊCH VỤ HỖ TRỢ, BẢO HÀNH &amp; KÊNH PHÂN PHỐI</span>
                  <p className="text-emerald-800 text-[11px] mt-0.5">Mạng lưới trung tâm bảo hành, tài liệu đào tạo, tổng đài hỗ trợ 24/7 và chính sách đổi trả khi phát sinh sự cố.</p>
                </div>
              )}
            </div>

            <div className="text-[11px] text-slate-500 font-mono text-center">
              Công nghệ lõi + Phần mềm + Tương thích + Hỗ trợ = Giải pháp thương mại
            </div>
          </div>
        </div>

        {/* Right Column: 3 High-Tech Buying Factors */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono">
              Ba yếu tố tâm lý khi mua công nghệ cao
            </span>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <strong className="text-teal-800 block font-mono">1. Khác biệt công nghệ:</strong>
                <span className="text-slate-600 text-[11px]">Người mua có nhận thấy ưu thế vượt trội rõ rệt hay xem các giải pháp đều na ná nhau?</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <strong className="text-amber-800 block font-mono">2. Tốc độ đổi mới nhanh:</strong>
                <span className="text-slate-600 text-[11px]">Nỗi sợ mua xong sẽ sớm bị lỗi thời khiến khách hàng có xu hướng trì hoãn quyết định mua.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <strong className="text-rose-800 block font-mono">3. Chi phí chuyển đổi (Switching costs):</strong>
                <span className="text-slate-600 text-[11px]">Chi phí đào tạo nhân viên, mua lại phụ kiện và rủi ro gián đoạn hệ thống hiện tại.</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
            <strong>Mạch nói chuyển tiếp:</strong> Doanh nghiệp nên tự đầu tư sản xuất toàn bộ giải pháp hay nhượng quyền sở hữu trí tuệ cho các đối tác?
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
