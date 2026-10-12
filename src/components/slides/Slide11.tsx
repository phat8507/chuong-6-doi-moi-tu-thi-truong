import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

export const Slide11: React.FC = React.memo(() => {
  const meta = CHAPTER6_SECTIONS[10];
  const [activeLayer, setActiveLayer] = useState<number>(3); // 1: Core tech, 2: Software, 3: Whole product

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Layered Assembly Diagram */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                  Sản phẩm “lắp ghép” từng lớp (Từ công nghệ lõi đến giải pháp hoàn chỉnh)
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Chọn cấp độ
                </span>
              </div>

              {/* Interactive Layer Switches */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => setActiveLayer(1)}
                  className={`p-3 sm:p-3.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                    activeLayer === 1 
                      ? 'bg-teal-50/90 border-teal-600 text-teal-900 font-bold ring-2 ring-teal-500/25 shadow-sm' 
                      : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <span className="text-xs block font-mono font-bold text-teal-700 uppercase">Lớp 1</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5 block">Công nghệ lõi</span>
                </button>
                <button
                  onClick={() => setActiveLayer(2)}
                  className={`p-3 sm:p-3.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                    activeLayer === 2 
                      ? 'bg-teal-50/90 border-teal-600 text-teal-900 font-bold ring-2 ring-teal-500/25 shadow-sm' 
                      : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <span className="text-xs block font-mono font-bold text-teal-700 uppercase">Lớp 2</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5 block">+ Phần mềm chuẩn</span>
                </button>
                <button
                  onClick={() => setActiveLayer(3)}
                  className={`p-3 sm:p-3.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                    activeLayer === 3 
                      ? 'bg-teal-50/90 border-teal-600 text-teal-900 font-bold ring-2 ring-teal-500/25 shadow-sm' 
                      : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <span className="text-xs block font-mono font-bold text-teal-700 uppercase">Lớp 3</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5 block">+ Hỗ trợ toàn diện</span>
                </button>
              </div>

              {/* Visual Assembly Layers Container */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5 min-h-[200px] flex flex-col justify-center">
                {activeLayer >= 1 && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs animate-fadeInUp">
                    <span className="font-bold text-slate-900 block font-mono text-xs sm:text-sm uppercase tracking-wide">
                      LỚP 1: CÔNG NGHỆ LÕI (CORE HARDWARE / ALGORITHM)
                    </span>
                    <p className="text-xs sm:text-[14px] text-slate-600 mt-1 leading-relaxed">
                      Vi xử lý silicon nhanh hơn, cell pin dung lượng cao hơn hoặc thuật toán phân tích. Khách hàng thông thường không thể dùng trực tiếp linh kiện bán dẫn trần này!
                    </p>
                  </div>
                )}
                {activeLayer >= 2 && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-teal-50/80 border border-teal-200 shadow-2xs animate-fadeInUp">
                    <span className="font-bold text-teal-950 block font-mono text-xs sm:text-sm uppercase tracking-wide">
                      LỚP 2: HỆ ĐIỀU HÀNH, PHẦN MỀM &amp; CHUẨN TƯƠNG THÍCH
                    </span>
                    <p className="text-xs sm:text-[14px] text-teal-900 mt-1 leading-relaxed">
                      Hệ điều hành tương thích, driver điều khiển, phần mềm ứng dụng giao diện thân thiện, chuẩn kết nối phần cứng và API mở.
                    </p>
                  </div>
                )}
                {activeLayer >= 3 && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-2xs animate-fadeInUp">
                    <span className="font-bold text-emerald-950 block font-mono text-xs sm:text-sm uppercase tracking-wide">
                      LỚP 3: DỊCH VỤ HỖ TRỢ, BẢO HÀNH &amp; KÊNH PHÂN PHỐI
                    </span>
                    <p className="text-xs sm:text-[14px] text-emerald-900 mt-1 leading-relaxed">
                      Mạng lưới trạm bảo hành, tài liệu đào tạo người dùng, tổng đài hỗ trợ 24/7 và chính sách cam kết đổi trả khi phát sinh sự cố kỹ thuật.
                    </p>
                  </div>
                )}
              </div>

              {/* Whole Product Formula Pill */}
              <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-900 font-mono font-medium text-center">
                Công nghệ lõi + Phần mềm + Chuẩn tương thích + Dịch vụ hỗ trợ = <strong>Giải pháp toàn vẹn (Whole Product)</strong>
              </div>
            </div>
          </div>

        {/* Right Column: 3 High-Tech Buying Factors */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="editorial-card p-6 space-y-5">
            <span className="font-bold text-xs sm:text-sm text-slate-900 uppercase font-mono tracking-wider block pb-2 border-b border-slate-100">
                Ba yếu tố tâm lý khi mua công nghệ cao
              </span>

              {/* 3 High Tech Buying Factors */}
              <div className="space-y-3">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-xs sm:text-sm font-bold text-teal-900 block font-mono">
                    1. Mức độ khác biệt công nghệ:
                  </strong>
                  <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                    Khách hàng có nhận thấy ưu thế hiệu năng vượt trội rõ rệt, hay họ cảm thấy mọi thương hiệu đều na ná nhau?
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-xs sm:text-sm font-bold text-amber-900 block font-mono">
                    2. Tốc độ đổi mới quá nhanh:
                  </strong>
                  <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                    Tâm lý lo sợ sản phẩm vừa mua xong sẽ lập tức bị lỗi thời khiến khách hàng có xu hướng chần chừ và trì hoãn giải ngân.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-xs sm:text-sm font-bold text-rose-900 block font-mono">
                    3. Chi phí chuyển đổi (Switching Costs):
                  </strong>
                  <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                    Bao gồm chi phí đào tạo lại nhân sự, mua phụ kiện mới và nguy cơ gián đoạn vận hành hệ sinh thái hiện hữu.
                  </p>
                </div>
              </div>


              {/* Strategic Reflection Note */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-[13px] text-slate-800 leading-relaxed">
                <strong className="font-semibold text-slate-900">Câu hỏi định hướng:</strong> Doanh nghiệp nên tự dấn thân xây dựng toàn bộ chuỗi sản phẩm hay chọn cấp phép sở hữu trí tuệ (IP Licensing) cho các hãng lớn?
              </div>
            </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
});
