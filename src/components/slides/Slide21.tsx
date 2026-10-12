import React from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';

const FIVE_DECISIONS = [
  { step: '01', title: 'Nhận diện cơ hội', desc: 'Thấu hiểu nỗi đau thực tế của khách hàng; giải quyết nhu cầu chưa được đáp ứng.' },
  { step: '02', title: 'Khác biệt hóa', desc: 'Tạo giá trị tương đối vượt trội chi phí; cân đối Kano và triển khai QFD.' },
  { step: '03', title: 'Phát triển giải pháp', desc: 'Chọn đúng khách hàng mục tiêu (B2B / B2C) và con đường mở rộng sản phẩm.' },
  { step: '04', title: 'Thương mại hóa', desc: 'Xây dựng hệ sinh thái bổ trợ, dịch vụ bảo trì và phương thức khai thác quyền IP.' },
  { step: '05', title: 'Quản trị lan tỏa', desc: 'Hạ thấp rào cản chấp nhận (5 thuộc tính Rogers) và dự báo thị trường cẩn trọng.' },
];

export const Slide21: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[20];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-8">
        {/* Closed Loop 5-Decision Framework Recap with Double-Bezel Frame */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <span className="text-xs sm:text-sm font-mono uppercase font-bold text-slate-900 tracking-wider">
                Vòng Lặp Quản Trị Đổi Mới: Khép Lại Chuỗi 5 Quyết Định
              </span>
              <span className="text-xs font-mono text-teal-900 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200 flex items-center gap-1.5 font-semibold">
                <RotateCcw className="w-3.5 h-3.5 text-teal-700" />
                Phản hồi thị trường quay lại Bước 1
              </span>
            </div>

            {/* Innovation Closed Loop Watercolor Illustration */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-amber-50/20 p-3 sm:p-4 rounded-2xl border border-slate-200/80">
              <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img 
                  src="/images/innovation-closed-loop.png" 
                  alt="Watercolor closed loop innovation lifecycle diagram" 
                  className="w-full h-48 sm:h-56 object-contain p-2"
                />
              </div>
              <div className="md:col-span-7 space-y-2.5">
                <span className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider block">
                  Vòng phản hồi khép kín (Closed-Loop Innovation Lifecycle)
                </span>
                <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed">
                  Đổi mới sáng tạo không phải là một đường thẳng tuyến tính kết thúc ở khâu bán hàng. Đó là một <strong>chu trình học hỏi liên tục</strong>: dữ liệu sử dụng thực tế từ thị trường phản hồi ngược về Bước 1 để khai phóng các cơ hội đổi mới tiếp theo.
                </p>
                <div className="text-xs font-mono text-slate-500">
                  5 quyết định cốt lõi liên kết chặt chẽ qua các vòng lặp phản hồi thị trường.
                </div>
              </div>
            </div>

            {/* 5-Step Connected Chain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
              {FIVE_DECISIONS.map((d, idx) => (
                <div
                  key={d.step}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between min-h-[160px] relative group hover:border-teal-400 hover:bg-white transition-all duration-200 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-teal-800 text-white font-mono text-xs sm:text-sm font-bold flex items-center justify-center shadow-2xs">
                      {d.step}
                    </span>
                    {idx < 4 && (
                      <ArrowRight className="w-4 h-4 text-slate-400 hidden md:block" />
                    )}
                  </div>

                  <div className="mt-3">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{d.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Return Loop Indicator */}
            <div className="p-4 rounded-xl bg-teal-50/70 border border-dashed border-teal-300 text-center text-xs sm:text-sm text-teal-950 font-medium flex items-center justify-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                Mỗi quyết định được kiểm nghiệm bằng phản hồi thị trường — dữ liệu hành vi thực tế liên tục quay trở lại tinh chỉnh bước nhận diện cơ hội ban đầu.
              </span>
            </div>
          </div>
        </div>

        {/* Big Editorial Statement & Provocative Closing Question */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#fcfbf9] border border-slate-300 shadow-sm space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-mono font-bold">
              <HelpCircle className="w-4 h-4 text-teal-700" />
              CÂU HỎI TỔNG KẾT BÀI HỌC
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-relaxed sm:leading-snug">
              “Nếu một ứng dụng công nghệ đạt hàng triệu lượt tải xuống trong tuần đầu, nhưng chỉ một phần rất nhỏ người dùng tiếp tục quay lại sử dụng sau 30 ngày —<br />
              <span className="text-[#0f766e] underline decoration-teal-300 underline-offset-8">
                Đổi mới đó đã thực sự thành công hay chưa?
              </span>”
            </blockquote>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-xs sm:text-[15px] text-slate-800 leading-relaxed max-w-2xl mx-auto space-y-2 shadow-2xs">
              <p className="font-bold text-slate-900 text-sm sm:text-base">
                Câu trả lời từ toàn bộ Chương 6:
              </p>
              <p className="text-slate-700">
                Đổi mới không kết thúc ở ngày ra mắt sản phẩm và không đo đếm bằng sự hào hứng nhất thời. Công nghệ chỉ trở thành đổi mới có ý nghĩa khi tạo ra <strong>giá trị được thị trường chấp nhận</strong> và <strong>duy trì được hành vi sử dụng lặp lại bền vững</strong> trong đời sống thực tế.
              </p>
            </div>

            {/* Academic Presentation Footer */}
            <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 gap-2">
              <span>QUẢN TRỊ ĐỔI MỚI VÀ SÁNG TẠO · CHƯƠNG 6</span>
              <span>TRƯỜNG ĐẠI HỌC NGÂN HÀNG TP.HCM (HUB)</span>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
