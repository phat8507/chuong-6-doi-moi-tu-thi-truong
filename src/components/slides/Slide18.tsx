import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { Clock, MessageSquare, CreditCard } from 'lucide-react';

interface JourneyPillar {
  id: string;
  step: string;
  title: string;
  painPoint: string;
  solution: string;
  appFeature: string;
  icon: any;
}

const PILLARS: JourneyPillar[] = [
  {
    id: 'access',
    step: '01',
    title: 'Tiếp cận khoản vay',
    icon: CreditCard,
    painPoint: 'Người lao động phổ thông khó tiếp cận vốn ngân hàng truyền thống vì thủ tục chứng minh tài chính rườm rà, phải đi lại nhiều lần và chờ đợi nhiều ngày.',
    solution: 'Số hóa 100% quy trình qua eKYC và thuật toán chấm điểm tín dụng dữ liệu thay thế, rút ngắn thời gian phê duyệt xuống chỉ còn 15–30 phút.',
    appFeature: 'Giao diện đăng ký một chạm trên FE ONLINE 2.0, tự động trích xuất thông tin qua hình chụp CCCD gắn chip.'
  },
  {
    id: 'track',
    step: '02',
    title: 'Theo dõi nghĩa vụ nợ',
    icon: Clock,
    painPoint: 'Khách hàng sợ bị phạt phí trễ hạn và mơ hồ về số tiền nợ gốc, mức lãi suất thực tế cùng lịch đóng tiền định kỳ hàng tháng.',
    solution: 'Minh bạch hóa dòng tiền: Bảng tính lịch trả nợ từng kỳ, số dư gốc giảm dần hiển thị trực quan, kèm thông báo đẩy tự động nhắc hẹn trước 3 ngày.',
    appFeature: 'Màn hình “Lịch trả nợ thông minh” tích hợp thanh toán tức thì 1 chạm qua ví MoMo, ZaloPay và cổng VNPay.'
  },
  {
    id: 'support',
    step: '03',
    title: 'Hỗ trợ giải đáp tức thời',
    icon: MessageSquare,
    painPoint: 'Tâm lý lo lắng bất an khi gặp sự cố trừ tiền nhầm, thắc mắc thủ tục tất toán khoản vay nhưng gọi tổng đài thường xuyên nghẽn mạng.',
    solution: 'Triển khai Trợ lý ảo AI & Chatbot giải đáp tự động 24/7, xử lý ngay hơn 80% câu hỏi thường gặp mà không cần chờ đợi tổng đài viên trực tiếp.',
    appFeature: 'Trợ lý số phản hồi tức thì thắc mắc sao kê, xác nhận gạch nợ thành công và cấp mã tất toán khoản vay trong 10 giây.'
  }
];

export const Slide18: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[17];
  const [activePillar, setActivePillar] = useState<string>('access');

  const current = PILLARS.find(p => p.id === activePillar) || PILLARS[0];
  const CurrentIcon = current.icon;

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Core Narrative Heading with double-bezel styling */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs sm:text-[14px]">
            <strong className="font-mono text-teal-950 font-bold block mb-1.5 uppercase text-xs sm:text-sm tracking-wide">
              TIẾP CẬN ĐỔI MỚI TỪ THỊ TRƯỜNG TÀI CHÍNH TIÊU DÙNG:
            </strong>
            <p className="text-teal-950 leading-relaxed font-normal">
              Khách hàng vay tiêu dùng không đơn thuần tìm kiếm một “khoản tiền mặt”. Họ tìm kiếm <strong>sự thuận tiện khi tiếp cận</strong>, <strong>sự an tâm minh bạch khi theo dõi nghĩa vụ trả nợ</strong>, và <strong>kênh hỗ trợ tức thời không phán xét</strong>. Đổi mới của FE CREDIT thông qua nền tảng số bắt đầu chính từ việc giải quyết trọn vẹn 3 điểm nghẽn trải nghiệm này.
            </p>
          </div>
        </div>

        {/* Middle: 3-Pillar Journey and App Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Interactive 3 Journey Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                    <span className="text-xs sm:text-sm font-mono uppercase font-bold text-slate-900 tracking-wider">
                      Tuyến Trải Nghiệm Khách Hàng Trên Ứng Dụng Số:
                    </span>
                    <span className="text-xs font-mono text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full font-semibold">
                      Bấm chọn chặng
                    </span>
                  </div>

                  <div className="space-y-3">
                    {PILLARS.map((p) => {
                      const Icon = p.icon;
                      const isSelected = activePillar === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setActivePillar(p.id)}
                          className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                              : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                                isSelected ? 'bg-teal-700 text-white shadow-2xs' : 'bg-slate-200 text-slate-700'
                              }`}>
                                {p.step}
                              </span>
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-slate-900">{p.title}</div>
                                <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{p.solution}</div>
                              </div>
                            </div>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-700' : 'text-slate-400'}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* In-depth panel for active pillar */}
                <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 border border-teal-200/80 space-y-3 mt-2">
                  <div className="flex items-center gap-2 text-teal-950 font-bold text-xs sm:text-sm font-mono uppercase tracking-wide">
                    <CurrentIcon className="w-4 h-4 text-teal-700" />
                    <span>{current.step}. Chi tiết: {current.title}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13px]">
                    <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1">
                      <span className="font-mono font-bold text-rose-900 block text-xs">Nỗi đau khách hàng (Pain Point):</span>
                      <p className="text-rose-950 leading-relaxed">{current.painPoint}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1">
                      <span className="font-mono font-bold text-emerald-900 block text-xs">Lời giải đổi mới (Solution):</span>
                      <p className="text-emerald-950 leading-relaxed">{current.solution}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/95 border border-teal-100 text-xs sm:text-[13px] text-slate-800 font-mono shadow-2xs">
                    <strong className="text-teal-950 font-semibold">Tính năng FE ONLINE 2.0:</strong> {current.appFeature}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: App Photo & Editorial Verification */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
                <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/fe-online.jpg"
                    alt="FE CREDIT Mobile Application Digital Banking Interface"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-white border border-slate-700">
                    ỨNG DỤNG SỐ · FE ONLINE 2.0
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900">
                    Giao diện trải nghiệm ứng dụng số FE ONLINE 2.0
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-[13px]">
                    <strong>Nguồn:</strong> Báo cáo thường niên VPBank &amp; Tư liệu công bố ứng dụng FE ONLINE 2.0. Số hóa giúp tối ưu hóa điểm chạm khách hàng từ đăng ký, ký hợp đồng điện tử đến thanh toán định kỳ.
                  </p>
                  <div className="pt-2 border-t border-slate-200 text-xs font-mono text-teal-800">
                    Lưu ý: Nghiên cứu tình huống dựa trên nguồn tài liệu công khai thứ cấp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
