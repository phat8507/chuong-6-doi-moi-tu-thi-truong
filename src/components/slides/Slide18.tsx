import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { Users, Store } from 'lucide-react';

export const Slide18: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeSegment, setActiveSegment] = useState<'individual' | 'merchant'>('individual');

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={18} label="CASE STUDY FE CREDIT" accent="#0d9488" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#0d9488" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Market Needs & Customer Journey */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              FE CREDIT: Đổi Mới<br />
              <span className="text-[#147D82]">Từ Nhu Cầu Thị Trường</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Kỳ vọng dịch vụ tài chính tiêu dùng, ứng dụng FE ONLINE 2.0 và hệ sinh thái tiếp cận vốn
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSegment('individual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSegment === 'individual'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              1. Khách hàng cá nhân vay tiêu dùng
            </button>
            <button
              onClick={() => setActiveSegment('merchant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSegment === 'merchant'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              2. Đối tác điểm bán (Merchants & POS)
            </button>
          </div>

          {activeSegment === 'individual' ? (
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Ba kỳ vọng cốt lõi của người vay:
              </span>
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-teal-800 block">Minh bạch:</strong>
                  <span className="text-slate-600 text-[11px]">Rõ ràng số tiền phải trả mỗi tháng, không phát sinh phụ phí ngầm.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-teal-800 block">Thuận tiện:</strong>
                  <span className="text-slate-600 text-[11px]">Tra cứu dư nợ và lịch thanh toán trực tiếp ngay trên smartphone.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-teal-800 block">Hỗ trợ:</strong>
                  <span className="text-slate-600 text-[11px]">Giải đáp nhanh chóng khi giao dịch thanh toán gặp trục trặc.</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs animate-fadeIn">
              <span className="text-xs font-bold text-slate-900 uppercase font-mono">
                Kỳ vọng của mạng lưới đối tác bán lẻ:
              </span>
              <p className="text-slate-600 leading-relaxed">
                Quy trình tiếp nhận hồ sơ vay trả góp trực tuyến nhanh chóng, hệ thống đối soát hoa hồng rõ ràng và kết nối kỹ thuật ổn định không làm gián đoạn việc bán hàng tại quầy.
              </p>
            </div>
          )}

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Nguyên tắc đổi mới tài chính:</strong> Thuận tiện công nghệ phải luôn song hành với sự minh bạch thông tin và năng lực quản trị rủi ro nợ xấu.
          </div>
        </div>

        {/* Right Column: Real FE Online Mobile App Photo */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-56">
            <img 
              src="/images/fe-online.jpg" 
              alt="FE Credit Consumer Mobile App Interface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                FE ONLINE 2.0: Tối ưu trải nghiệm số hóa và tra cứu hợp đồng tín dụng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
