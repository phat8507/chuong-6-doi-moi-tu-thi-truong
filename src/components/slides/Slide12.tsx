import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { ShieldCheck, DollarSign, Cpu, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

export const Slide12: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeStage, setActiveStage] = useState<'A' | 'B' | 'C'>('C');

  return (
    <SlideLayout slide={slide} rightBadge="Khai thác IP & Case study ARM">
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Stage Progression Tabs: A -> B -> C */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setActiveStage('A')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeStage === 'A'
                ? 'bg-slate-800 border-teal-400 shadow-md ring-1 ring-teal-400'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-teal-400 uppercase">Tầng A</span>
              <div className="text-xs font-bold text-white">5 Điều kiện bảo hộ sáng chế</div>
            </div>
            <FileText className={`w-4 h-4 ${activeStage === 'A' ? 'text-teal-400' : 'text-slate-500'}`} />
          </button>

          <button
            onClick={() => setActiveStage('B')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeStage === 'B'
                ? 'bg-slate-800 border-amber-400 shadow-md ring-1 ring-amber-400'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Tầng B</span>
              <div className="text-xs font-bold text-white">4 Cách định giá cấp phép</div>
            </div>
            <DollarSign className={`w-4 h-4 ${activeStage === 'B' ? 'text-amber-400' : 'text-slate-500'}`} />
          </button>

          <button
            onClick={() => setActiveStage('C')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeStage === 'C'
                ? 'bg-slate-800 border-sky-400 shadow-md ring-1 ring-sky-400'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">Tầng C</span>
              <div className="text-xs font-bold text-white">Hệ sinh thái nhượng quyền ARM</div>
            </div>
            <Cpu className={`w-4 h-4 ${activeStage === 'C' ? 'text-sky-400' : 'text-slate-500'}`} />
          </button>
        </div>

        {/* Dynamic Stage Content Body */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex-1 flex flex-col justify-between">
          {activeStage === 'A' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-teal-300">Năm điều kiện pháp lý để bảo hộ sáng chế</h3>
                <span className="text-[11px] text-slate-400">Giáo trình tr. 103–105</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-teal-400">1. Tính mới (Novelty)</span>
                  <p className="text-[11px] text-slate-300">Chưa từng được công bố công khai ở bất kỳ đâu trên thế giới.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-teal-400">2. Bước phát minh</span>
                  <p className="text-[11px] text-slate-300">Không hiển nhiên đối với chuyên gia có hiểu biết trung bình trong ngành.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-teal-400">3. Áp dụng công nghiệp</span>
                  <p className="text-[11px] text-slate-300">Có khả năng chế tạo hoặc thực hiện hàng loạt trong sản xuất thực tế.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-teal-400">4. Đối tượng hợp lệ</span>
                  <p className="text-[11px] text-slate-300">Nằm trong danh mục được pháp luật cho phép cấp bằng sáng chế.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-teal-400">5. Tiết lộ đầy đủ</span>
                  <p className="text-[11px] text-slate-300">Bản mô tả đủ chi tiết để người trong ngành có thể tái tạo được.</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 text-[11px] text-slate-400">
                <em>Lưu ý pháp lý học thuật:</em> Thời hạn bảo hộ thông thường là 20 năm; các mốc thời gian lịch sử phản ánh bối cảnh nghiên cứu, không thay thế cho quy định pháp luật sở hữu trí tuệ hiện hành tại Việt Nam.
              </div>
            </div>
          )}

          {activeStage === 'B' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-amber-300">Bốn cách tiếp cận định giá cấp phép công nghệ</h3>
                <span className="text-[11px] text-slate-400">Giáo trình tr. 105–106</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-amber-400">1. Tham chiếu thị trường</span>
                  <p className="text-[11px] text-slate-300">So sánh với tỷ lệ tiền bản quyền trong các giao dịch tương tự của ngành.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-amber-400">2. Quy tắc 25% (25% Rule)</span>
                  <p className="text-[11px] text-slate-300">Thu 25% lợi nhuận ròng mà bên nhận quyền tạo ra nhờ công nghệ được chuyển giao.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-amber-400">3. Lợi tức đầu tư (ROI)</span>
                  <p className="text-[11px] text-slate-300">Tính toán dựa trên tổng chi phí nghiên cứu phát triển và thời gian hoàn vốn.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-bold text-amber-400">4. Thỏa thuận chia sẻ lợi nhuận</span>
                  <p className="text-[11px] text-slate-300">Phân chia theo tỷ lệ đóng góp vốn, rủi ro vòng đời và các phương án thay thế.</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200">
                Không có một mức phí tối ưu duy nhất; quy tắc 25% chỉ là điểm khởi đầu tham khảo khi thương lượng tùy thuộc vị thế và rủi ro đôi bên.
              </div>
            </div>
          )}

          {activeStage === 'C' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-fadeIn">
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase">
                  <Cpu className="w-4 h-4" /> Mô hình kinh doanh của ARM Holdings
                </div>
                <h4 className="text-base font-bold text-white">
                  Chuyên môn hóa thiết kế kiến trúc vi xử lý (IP-Only Licensing)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ARM không đầu tư hàng tỷ USD xây nhà máy gia công bán dẫn (Fabless). Họ chỉ tập trung thiết kế kiến trúc tập lệnh tiết kiệm năng lượng và cấp quyền sở hữu trí tuệ cho các gã khổng lồ như Apple, Qualcomm, MediaTek, Samsung.
                </p>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1">
                  <div className="text-amber-300 font-bold">Mức phí bản quyền lịch sử trong nghiên cứu:</div>
                  <p className="text-slate-300 text-[11px]">
                    Dao động từ <strong>0,05 USD đến 2,50 USD</strong> trên mỗi chip được xuất xưởng, tạo nguồn doanh thu thụ động khổng lồ khi hàng tỷ smartphone vận hành trên kiến trúc ARM.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 relative rounded-xl overflow-hidden border border-slate-700 h-44 group">
                <img 
                  src="/images/arm-processor.jpg" 
                  alt="Microprocessor Silicon Chip" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex items-end p-3">
                  <span className="text-[10px] text-slate-300">
                    Kiến trúc bán dẫn ARM: Thu lợi từ sở hữu trí tuệ thay vì chi phí sản xuất phần cứng
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};
