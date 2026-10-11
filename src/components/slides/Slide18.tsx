import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { Smartphone, Eye, Clock, ShieldCheck, MessageSquare, CreditCard, ChevronRight } from 'lucide-react';

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
    painPoint: 'Người lao động phổ thông khó tiếp cận vốn ngân hàng vì thủ tục chứng minh tài chính rườm rà, phải đi lại nhiều lần.',
    solution: 'Số hóa 100% quy trình qua eKYC và chấm điểm tín dụng dữ liệu thay thế, rút ngắn thời gian phê duyệt xuống 15–30 phút.',
    appFeature: 'Giao diện đăng ký một chạm trên FE ONLINE 2.0, tải ảnh CCCD gắn chip tự động nhận diện.'
  },
  {
    id: 'track',
    step: '02',
    title: 'Theo dõi nghĩa vụ',
    icon: Clock,
    painPoint: 'Khách hàng sợ bị phạt phí trễ hạn và mơ hồ về số tiền nợ gốc, lãi suất và lịch đóng tiền hàng tháng.',
    solution: 'Minh bạch hóa dòng tiền: Bảng tính lịch trả nợ từng kỳ, số dư gốc giảm dần hiển thị rõ ràng, thông báo đẩy nhắc hẹn trước 3 ngày.',
    appFeature: 'Màn hình “Lịch trả nợ thông minh” với mã thanh toán tích hợp trực tiếp qua Momo, ZaloPay và VNPay.'
  },
  {
    id: 'support',
    step: '03',
    title: 'Hỗ trợ tức thời',
    icon: MessageSquare,
    painPoint: 'Tâm lý lo lắng khi gặp sự cố trừ tiền nhầm, thắc mắc tất toán khoản vay nhưng gọi tổng đài nghẽn mạng.',
    solution: 'Triển khai Trợ lý ảo AI & Chatbot giải đáp 24/7, tự động xử lý hơn 80% câu hỏi thường gặp mà không cần chờ tổng đài viên.',
    appFeature: 'Trợ lý số tự động phản hồi thắc mắc sao kê, xác nhận thanh toán thành công và hướng dẫn tất toán trong 10 giây.'
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
        {/* Core Narrative Heading */}
        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 text-xs">
          <p className="text-teal-950 leading-relaxed">
            <strong className="font-mono text-teal-900 block mb-1">
              TIẾP CẬN ĐỔI MỚI TỪ THỊ TRƯỜNG TÀI CHÍNH TIÊU DÙNG:
            </strong>
            Khách hàng vay tiêu dùng không đơn thuần tìm kiếm một “khoản tiền mặt”. Họ tìm kiếm <strong>sự thuận tiện khi tiếp cận</strong>, <strong>sự an tâm minh bạch khi theo dõi nghĩa vụ trả nợ</strong>, và <strong>kênh hỗ trợ không phán xét</strong>. Đổi mới của FE CREDIT thông qua nền tảng số bắt đầu chính từ việc giải quyết 3 điểm nghẽn trải nghiệm này.
          </p>
        </div>

        {/* Middle: 3-Pillar Journey and App Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Interactive 3 Journey Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase font-bold text-slate-500">
                Tuyến Trải Nghiệm Khách Hàng Trên Ứng Dụng Số:
              </span>
              <span className="text-[11px] font-mono text-teal-700">Chọn chặng để khám phá</span>
            </div>

            <div className="space-y-2.5">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                const isSelected = activePillar === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(p.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {p.step}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{p.title}</div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">{p.solution}</div>
                        </div>
                      </div>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-700' : 'text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* In-depth panel for active pillar */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs space-y-3 mt-3">
              <div className="flex items-center gap-2 text-teal-900 font-bold font-serif text-sm">
                <CurrentIcon className="w-4 h-4 text-teal-700" />
                <span>{current.step}. Chi tiết: {current.title}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1">
                  <span className="font-mono font-bold text-rose-900 block">Nỗi đau khách hàng (Pain Point):</span>
                  <p className="text-slate-700 leading-relaxed">{current.painPoint}</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                  <span className="font-mono font-bold text-emerald-900 block">Lời giải đổi mới (Solution):</span>
                  <p className="text-slate-700 leading-relaxed">{current.solution}</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-mono">
                <strong>Triển khai FE ONLINE 2.0:</strong> {current.appFeature}
              </div>
            </div>
          </div>

          {/* Right: App Photo & Editorial Verification (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/fe-online.jpg"
                alt="FE CREDIT Mobile Application Digital Banking Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white">
                ỨNG DỤNG SỐ · FE ONLINE 2.0
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs space-y-2">
              <div className="font-bold text-slate-800">
                Tư liệu: Giao diện trải nghiệm ứng dụng tiêu dùng
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Nguồn: Báo cáo thường niên VPBank &amp; Tư liệu công bố ứng dụng FE ONLINE 2.0. Số hóa giúp tối ưu hóa điểm chạm khách hàng từ đăng ký, ký hợp đồng điện tử đến thanh toán định kỳ.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[10px] font-mono text-teal-800">
                Lưu ý: Nghiên cứu tình huống dựa trên nguồn tài liệu công khai thứ cấp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
