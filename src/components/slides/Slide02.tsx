import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Download, Repeat, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const Slide02: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'download' | 'adoption'>('download');

  return (
    <SlideLayout slide={slide} rightBadge="Tương tác & Dẫn nhập">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Column: Interactive Smartphone Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-[300px] h-[480px] bg-slate-900 rounded-[36px] p-4 shadow-2xl border-4 border-slate-700 relative flex flex-col justify-between">
            {/* Phone Speaker Notch */}
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2" />

            {/* Simulated App Screen */}
            <div className="flex-1 bg-gradient-to-b from-slate-950 to-slate-900 rounded-[24px] p-4 flex flex-col justify-between border border-slate-800">
              <div className="text-center pt-2">
                <span className="text-[10px] font-semibold text-teal-400 uppercase tracking-wider">Ứng dụng Ghi chú Thông minh</span>
                <div className="text-sm font-bold text-white mt-1">NoteCraft AI v2.4</div>
              </div>

              {activeTab === 'download' ? (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Download className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-red-300">Tải về vì quảng cáo bắt mắt</div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Hơn 20 bộ lọc màu sắc, hiệu ứng 3D phức tạp nhưng nút tìm kiếm ghi chú bị giấu sâu.
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-red-400 bg-red-950/60 py-1 rounded">
                    Rời bỏ sau 2 lần dùng
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-teal-300">Giá trị sử dụng lặp lại</div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Mở ra là ghi được ngay, thanh tìm kiếm hiển thị ở trang chủ, đồng bộ mượt mà không lỗi.
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-teal-400 bg-teal-950/60 py-1 rounded">
                    Tỷ lệ gắn bó 78%
                  </div>
                </div>
              )}

              {/* Toggle Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => setActiveTab('download')}
                  className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                    activeTab === 'download' 
                      ? 'bg-red-500/30 text-red-300 border border-red-500/50' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Giai đoạn Tải
                </button>
                <button
                  onClick={() => setActiveTab('adoption')}
                  className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                    activeTab === 'adoption' 
                      ? 'bg-teal-500/30 text-teal-300 border border-teal-500/50' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Sử dụng Lặp lại
                </button>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
          </div>
        </div>

        {/* Right Column: Key Academic Insights */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs">
            <div className="text-sm font-bold text-amber-300 flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Câu hỏi dẫn nhập bài học
            </div>
            <p className="text-lg md:text-xl font-semibold text-white leading-snug">
              “Bạn đã từng tải một ứng dụng vì quảng cáo rất hấp dẫn, nhưng chỉ dùng 1–2 lần rồi gỡ bỏ chưa?”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <AlertCircle className="w-4 h-4" /> Tính Mới (Novelty)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Được định nghĩa bởi thông số kỹ thuật, thuật toán tiên tiến hoặc thiết kế bắt mắt. Thu hút sự tò mò ban đầu nhưng không giữ chân người dùng.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4" /> Giá Trị Sử Dụng (Value)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đo bằng công việc mà sản phẩm giúp người dùng hoàn thành (Jobs-to-be-Done) nhanh hơn, ít tốn sức hơn hoặc đáng tin cậy hơn giải pháp cũ.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/60 to-slate-900/60 border border-teal-500/30">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-300 mb-1">
              <span>Hàm ý quản trị cốt lõi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Một cải tiến nhỏ như <strong>giảm số bước xác nhận</strong> hay <strong>làm rõ thông tin thanh toán</strong> có thể tạo ra giá trị kinh tế lớn hơn mười tính năng trang trí hiện đại nhưng không ai cần.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
