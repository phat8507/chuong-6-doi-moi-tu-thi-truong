import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { HeartHandshake, Gauge, ShieldAlert, Layers } from 'lucide-react';

interface FrameworkPillar {
  id: string;
  number: string;
  title: string;
  theme: string;
  icon: any;
  summary: string;
  auditQuestions: string[];
  warningNote: string;
}

const PILLARS: FrameworkPillar[] = [
  {
    id: 'customer_value',
    number: 'Trụ cột 01',
    title: 'Giá trị Khách hàng',
    theme: 'Trải nghiệm & Minh bạch thông tin',
    icon: HeartHandshake,
    summary: 'Đổi mới công nghệ chỉ có giá trị khi giải quyết đúng nhu cầu thực tế và duy trì được sự gắn kết bền vững của người dùng.',
    auditQuestions: [
      'Giao diện mới có thực sự giúp người dùng hiểu rõ nghĩa vụ trả nợ hay chỉ làm đẹp mắt bề ngoài?',
      'Khách hàng có tự giác thanh toán đúng hạn hơn nhờ tính năng tra cứu minh bạch và thông báo đẩy không?',
      'Tỷ lệ khiếu nại về hiểu lầm lãi suất, phí phát sinh có suy giảm rõ rệt sau khi chuyển sang kênh số?'
    ],
    warningNote: 'Một ứng dụng tải về nhiều nhưng tỷ lệ xóa app cao chứng tỏ sản phẩm chưa tạo ra giá trị giữ chân thực chất.'
  },
  {
    id: 'operations',
    number: 'Trụ cột 02',
    title: 'Hiệu quả Vận hành',
    theme: 'Tối ưu chi phí & Tự động hóa',
    icon: Gauge,
    summary: 'Số hóa phải trực tiếp giải phóng sức lao động, giảm thiểu sai sót thủ công và tối ưu chi phí phục vụ (Cost-to-Serve).',
    auditQuestions: [
      'Hệ thống tự động hóa eKYC và Chatbot có thực sự cắt giảm chi phí vận hành trên mỗi hợp đồng giải ngân?',
      'Năng suất xử lý hồ sơ của nhân sự tuyến đầu có tăng lên khi các tác vụ lặp lại được chuyển giao cho AI?',
      'Mức độ đồng bộ dữ liệu giữa kênh ứng dụng di động và mạng lưới điểm bán trực tiếp (POS) có liền mạch không?'
    ],
    warningNote: 'Đổi mới thiếu tích hợp với quy trình nội bộ sẽ chỉ làm tăng chi phí bảo trì CNTT mà không cải thiện biên lợi nhuận.'
  },
  {
    id: 'risk_control',
    number: 'Trụ cột 03',
    title: 'Kiểm soát Rủi ro',
    theme: 'Rủi ro tín dụng & An toàn dữ liệu',
    icon: ShieldAlert,
    summary: 'Tăng trưởng quy mô giải ngân không được đánh đổi bằng việc hạ thấp chuẩn thẩm định và suy giảm chất lượng tài sản nợ.',
    auditQuestions: [
      'Tốc độ phê duyệt siêu nhanh có vô tình làm tăng tỷ lệ nợ xấu (NPL) ở các chu kỳ sau không?',
      'Hệ thống định danh eKYC và dữ liệu thay thế có đủ sức phòng ngừa các hình thức gian lận tinh vi mới?',
      'Dữ liệu định danh và thông tin tài chính của người vay có được bảo vệ nghiêm ngặt theo quy chuẩn an toàn số?'
    ],
    warningNote: 'Đối với tài chính tiêu dùng, rủi ro tín dụng là biến số quyết định sự sống còn của doanh nghiệp, vượt trên mọi chỉ số số hóa bề nổi.'
  }
];

export const Slide20: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[19];
  const [selectedPillarId, setSelectedPillarId] = useState<string>('customer_value');

  const current = PILLARS.find(p => p.id === selectedPillarId) || PILLARS[0];
  const CurrentIcon = current.icon;

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Methodological Guidance Note with Double-Bezel Architecture */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-[14px] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-teal-700 shrink-0" />
              <span className="text-slate-800 font-medium">
                <strong>Khung đánh giá quản trị 3 trụ cột:</strong> Nhấp vào từng trụ cột để xem <em>Bộ câu hỏi thẩm định</em> (Không hiển thị KPI giả định như kết quả thực tế).
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:block">
              Mô hình đánh giá toàn diện
            </span>
          </div>
        </div>

        {/* 3 Pillars Overview Cards */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 p-2">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedPillarId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillarId(p.id)}
                  className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                      : 'bg-white border-slate-200 hover:border-teal-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                        {p.number}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-700' : 'text-slate-400'}`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {p.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-teal-800 font-medium mb-2">
                      {p.theme}
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-4 text-xs sm:text-[13px] font-semibold text-teal-700 flex items-center justify-between">
                    <span>{isSelected ? 'Đang thẩm định •' : 'Mở câu hỏi thẩm định'}</span>
                    <span>→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pillar Inspection Box: Audit Questions */}
        <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
          <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-teal-800 text-white shadow-xs">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Bộ Câu Hỏi Đánh Giá Thẩm Định: {current.title}
                </h3>
                <span className="text-xs sm:text-sm text-teal-800 font-mono font-medium">
                  {current.theme} · Tiêu chí kiểm chứng thực tế
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {current.auditQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 text-slate-800"
                >
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-[14px] leading-relaxed font-normal">{q}</p>
                </div>
              ))}
            </div>

            {/* Strategic Warning */}
            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 flex items-start gap-3 text-rose-950 text-xs sm:text-[13px] leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-900 font-semibold font-mono">Lưu ý cảnh báo quản trị:</strong> {current.warningNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
