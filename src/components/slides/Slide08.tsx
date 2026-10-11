import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';

interface Persona {
  id: string;
  name: string;
  context: string;
  needs: string[];
  buyingBehavior: string;
}

const PERSONAS: Persona[] = [
  {
    id: "student",
    name: "Persona 1: Sinh viên học trực tuyến",
    context: "Ngân sách 1.5 triệu, học tại phòng trọ hoặc thư viện 5–6 tiếng/ngày.",
    needs: ["Micrô khử tiếng ồn môi trường", "Đệm tai êm ái không gây đau tai", "Dây cắm ổn định với laptop"],
    buyingBehavior: "Tìm kiếm kỹ đánh giá về micrô trên diễn đàn học tập; không quan tâm chỉ số chống nước."
  },
  {
    id: "athlete",
    name: "Persona 2: Vận động viên chạy bộ ngoài trời",
    context: "Cùng độ tuổi 20 & cùng ngân sách 1.5 triệu, chạy bộ mỗi sáng trên phố.",
    needs: ["Móc vành tai chống rơi khi chạy nhanh", "Kháng mồ hôi và nước mưa chuẩn IPX7", "Nghe được âm thanh còi xe trên đường"],
    buyingBehavior: "Mua theo tính năng bám chắc và độ bền; micrô đàm thoại chỉ cần mức tối thiểu."
  }
];

export const Slide08: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[7];
  const [activePersona, setActivePersona] = useState<string>("student");

  const current = PERSONAS.find(p => p.id === activePersona) || PERSONAS[0];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Two Contexts Persona Switcher */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold text-slate-900 font-mono uppercase">
              Hai người tiêu dùng ở hai bối cảnh khác nhau (Bấm để chuyển đổi chân dung &amp; nhu cầu):
            </span>

            <div className="grid grid-cols-2 gap-3">
              {PERSONAS.map((p) => {
                const isSelected = activePersona === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(p.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900">{p.name}</span>
                    <span className={`text-[10px] block mt-1 font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-400'}`}>
                      Bấm xem nhu cầu →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Revealed Persona Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <strong className="text-teal-900 block font-mono uppercase">{current.name}</strong>
              <div className="text-[11px] text-slate-700"><strong>Bối cảnh sống:</strong> {current.context}</div>
              <div className="space-y-1">
                <span className="font-semibold text-slate-800">Nhu cầu trọng tâm:</span>
                <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-0.5">
                  {current.needs.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200 text-[11px] text-slate-800">
                <strong>Hành vi ra quyết định:</strong> {current.buyingBehavior}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real Context Photography & Persil Power Historical Case */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-44">
            <img 
              src="/images/consumer-two-contexts.jpg" 
              alt="Two real consumers with different context and lifestyle" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Ảnh tư liệu: Người mua cùng thu nhập vẫn khác nhau về bối cảnh sống và mục đích sử dụng
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-rose-800 uppercase font-mono">Ví dụ lịch sử: Persil Power</span>
              <span className="text-slate-500 font-mono">Unilever 1994</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Dù thử nghiệm trên <strong>60.000 hộ gia đình</strong>, mẫu thử tập trung ở Bắc Âu mà bỏ qua thói quen giặt ở Nam Âu khiến chất xúc tác làm mục rách sợi vải. Không có khách hàng trung bình; doanh nghiệp bắt buộc phải chọn đúng phân khúc trước khi phát triển sản phẩm.
            </p>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
