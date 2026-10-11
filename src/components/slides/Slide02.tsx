import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { Download, Repeat, CheckCircle2, AlertCircle } from 'lucide-react';

export const Slide02: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'download' | 'adoption'>('download');

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={2} label="DẪN NHẬP BÀI HỌC" accent="#e11d48" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#e11d48" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative & Critical Insight */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Mới Có Đồng Nghĩa<br />
              <span className="text-rose-600">Với Có Giá Trị?</span>
            </h2>
            <p className="text-lg text-slate-600 mt-2 font-serif italic">
              Nghịch lý lượt tải ứng dụng và bài toán kiểm chứng giá trị sử dụng
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Câu hỏi gợi mở cho hội trường
            </span>
            <p className="text-base font-semibold leading-relaxed text-slate-900">
              “Mọi người ở đây đã từng tải một ứng dụng vì quảng cáo rất hấp dẫn, nhưng chỉ dùng 1–2 lần rồi xóa đi chưa?”
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-rose-600 uppercase font-mono">Tính Mới (Novelty)</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Được định nghĩa bởi tính năng hiện đại, giao diện bắt mắt. Thu hút sự tò mò ban đầu nhưng không giữ chân người dùng nếu không giải quyết được việc gì.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-teal-600 uppercase font-mono">Giá Trị Dùng (Value)</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đo bằng công việc mà sản phẩm giúp người dùng hoàn thành (Jobs-to-be-Done) nhanh hơn, tiện hơn hoặc giảm bớt phiền toái thường nhật.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Interactive Smartphone Scenario & Photography */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-800">Ví dụ minh họa: Ứng dụng Ghi chú</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('download')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'download' 
                      ? 'bg-rose-100 text-rose-700 font-bold' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Khi Tải về
                </button>
                <button
                  onClick={() => setActiveTab('adoption')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'adoption' 
                      ? 'bg-teal-100 text-teal-700 font-bold' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Dùng Lặp lại
                </button>
              </div>
            </div>

            {activeTab === 'download' ? (
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                  <Download className="w-4 h-4" /> Bẫy tính năng dư thừa (Feature Bloat)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ứng dụng có hơn 20 bộ lọc màu sắc, hiệu ứng hoạt họa 3D phức tạp nhưng thanh tìm kiếm ghi chú bị giấu sâu qua 3 tầng menu. Người dùng mở ra 1 lần rồi bỏ vì mất thời gian.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-xs">
                  <Repeat className="w-4 h-4" /> Đổi mới giải quyết đúng việc cần làm
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Nút tìm kiếm ngay trang chủ, đồng bộ tức thì, ghi chú chỉ mất 1 chạm. Người dùng gắn bó lâu dài vì giải quyết nhanh công việc họ cần.
                </p>
              </div>
            )}

            <div className="relative rounded-xl overflow-hidden h-44 border border-slate-100">
              <img 
                src="/images/mobile-app.jpg" 
                alt="Smartphone app interface usage" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
