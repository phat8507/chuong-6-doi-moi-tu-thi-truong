import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

export const Slide12: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeStage, setActiveStage] = useState<'A' | 'B' | 'C'>('C');

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={12} label="SỞ HỮU TRÍ TUỆ & ARM" accent="#2563eb" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#2563eb" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="display-lg text-slate-900 leading-tight">
            Khai Thác Tài Sản Trí Tuệ<br />
            <span className="text-blue-700">&amp; Trường Hợp ARM</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-serif italic">
            Năm điều kiện bảo hộ sáng chế, bốn cách định giá giấy phép và mô hình cấp phép vi xử lý ARM
          </p>
        </div>

        {/* 3 Stage Navigation Tabs */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setActiveStage('A')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStage === 'A'
                ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono uppercase font-bold text-blue-700">Tầng A</span>
            <div className="text-xs font-bold text-slate-900 mt-0.5">5 Điều kiện bảo hộ sáng chế</div>
          </button>

          <button
            onClick={() => setActiveStage('B')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStage === 'B'
                ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono uppercase font-bold text-blue-700">Tầng B</span>
            <div className="text-xs font-bold text-slate-900 mt-0.5">4 Phương pháp định giá cấp phép</div>
          </button>

          <button
            onClick={() => setActiveStage('C')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStage === 'C'
                ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono uppercase font-bold text-blue-700">Tầng C</span>
            <div className="text-xs font-bold text-slate-900 mt-0.5">Mô hình kinh doanh của ARM</div>
          </button>
        </div>

        {/* Content Display based on activeStage */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm min-h-[220px] flex flex-col justify-center">
          {activeStage === 'A' && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Năm điều kiện pháp lý để cấp văn bằng bảo hộ sáng chế:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">1. Tính mới</strong>
                  <span className="text-slate-600 text-[11px]">Chưa từng được công bố công khai ở bất kỳ đâu trên thế giới.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">2. Bước phát minh</strong>
                  <span className="text-slate-600 text-[11px]">Không hiển nhiên đối với chuyên gia trung bình trong ngành.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">3. Áp dụng công nghiệp</strong>
                  <span className="text-slate-600 text-[11px]">Có khả năng sản xuất hàng loạt trong thực tế.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">4. Đối tượng hợp lệ</strong>
                  <span className="text-slate-600 text-[11px]">Nằm trong danh mục pháp luật cho phép cấp bằng.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">5. Tiết lộ đầy đủ</strong>
                  <span className="text-slate-600 text-[11px]">Mô tả đủ chi tiết để người trong ngành có thể tái tạo được.</span>
                </div>
              </div>
            </div>
          )}

          {activeStage === 'B' && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Bốn cách tiếp cận định giá phí cấp phép công nghệ:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">1. Tham chiếu thị trường</strong>
                  <span className="text-slate-600 text-[11px]">Dựa vào tỷ lệ tiền bản quyền phổ biến trong các giao dịch tương tự.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">2. Quy tắc 25% (25% Rule)</strong>
                  <span className="text-slate-600 text-[11px]">Thu 25% lợi nhuận ròng do công nghệ mang lại cho bên nhận phép.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">3. Lợi tức đầu tư (ROI)</strong>
                  <span className="text-slate-600 text-[11px]">Căn cứ vào chi phí nghiên cứu và thời gian hoàn vốn của bên phát minh.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-blue-900 block">4. Chia sẻ lợi nhuận</strong>
                  <span className="text-slate-600 text-[11px]">Thỏa thuận chia sẻ theo mức độ đóng góp vốn và rủi ro vòng đời.</span>
                </div>
              </div>
            </div>
          )}

          {activeStage === 'C' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-fadeIn">
              <div className="md:col-span-7 space-y-3">
                <span className="text-xs font-bold text-blue-700 uppercase font-mono">
                  Mô hình kinh doanh của ARM Holdings
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ARM không tự sản xuất chip bán dẫn mà chỉ chuyên môn hóa thiết kế kiến trúc vi xử lý tiết kiệm năng lượng. Họ cấp phép cho Apple, Qualcomm, MediaTek, Samsung và thu tiền bản quyền.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <strong>Mức phí bản quyền lịch sử trong tài liệu:</strong> Dao động từ <strong>0,05 USD đến 2,50 USD</strong> trên mỗi con chip xuất xưởng.
                </div>
              </div>

              <div className="md:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 h-40">
                <img 
                  src="/images/arm-processor.jpg" 
                  alt="Microprocessor Silicon Chip" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
