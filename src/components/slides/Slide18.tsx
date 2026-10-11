import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Smartphone, CheckCircle, Search, ShieldCheck, Users, Store, ArrowRight } from 'lucide-react';

export const Slide18: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeSegment, setActiveSegment] = useState<'individual' | 'merchant'>('individual');

  return (
    <SlideLayout slide={slide} rightBadge="Case study FE CREDIT & Cơ hội thị trường">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Customer Journey & Needs */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSegment('individual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSegment === 'individual'
                  ? 'bg-[#147D82] text-white shadow-md ring-2 ring-teal-400/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              1. Khách hàng cá nhân vay tiêu dùng
            </button>
            <button
              onClick={() => setActiveSegment('merchant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSegment === 'merchant'
                  ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-400/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              2. Đối tác phân phối & Điểm bán (POS)
            </button>
          </div>

          {activeSegment === 'individual' ? (
            <div className="space-y-2.5 animate-fadeIn">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-teal-500/30 space-y-2">
                <span className="text-xs font-bold text-teal-300 uppercase">
                  Ba mong đợi cốt lõi của người vay lần đầu:
                </span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <span className="font-bold text-amber-300">Minh bạch:</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Biết rõ mỗi tháng phải trả bao nhiêu tiền gốc và lãi.</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <span className="font-bold text-teal-300">Tiện lợi:</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Thao tác trên điện thoại, không cần giấy tờ rườm rà.</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <span className="font-bold text-sky-300">Hỗ trợ kịp thời:</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Được giải đáp nhanh khi thanh toán có trục trặc.</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                <strong className="text-white">FE ONLINE 2.0:</strong> Được phát triển như giải pháp đổi mới nhằm giảm các bước xác nhận, tra cứu hợp đồng tự động và thanh toán tức thì qua kênh số.
              </div>
            </div>
          ) : (
            <div className="space-y-2.5 animate-fadeIn">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2">
                <span className="text-xs font-bold text-amber-300 uppercase">
                  Nhu cầu của Đối tác điểm bán (Merchants & POS):
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Đối tác tại các cửa hàng xe máy, điện máy quan tâm đến <strong>tốc độ phê duyệt hồ sơ tín dụng, quy trình đối soát hoa hồng minh bạch và khả năng phối hợp xử lý hồ sơ không bị gián đoạn</strong>.
                </p>
                <div className="p-2 rounded-lg bg-slate-800 text-[11px] text-slate-300">
                  Hệ thống số hóa kết nối trực tuyến giúp nhân viên điểm bán nhập liệu nhanh hơn và giảm thiểu hồ sơ bị thất lạc.
                </div>
              </div>
            </div>
          )}

          <div className="p-3 rounded-xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/20 text-xs text-slate-300">
            <strong className="text-teal-300">Nguyên tắc đổi mới tài chính:</strong> Thuận tiện công nghệ phải luôn song hành với sự minh bạch thông tin và kiểm soát an toàn rủi ro.
          </div>
        </div>

        {/* Right Column: Authentic Digital Interface Context Visual */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 h-52 group shadow-xl">
            <img 
              src="/images/fe-online.jpg" 
              alt="Consumer Finance Digital App Interface" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex items-end p-3">
              <span className="text-[11px] text-slate-200 font-medium">
                Kênh số FE ONLINE 2.0: Tối ưu hành trình người dùng trên thiết bị di động
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
            <em>Phân tích học thuật:</em> Đây là khung phân tích học thuật dựa trên báo cáo thường niên và tài liệu môn học, không phải tuyên bố tiếp thị chính thức từ doanh nghiệp.
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
