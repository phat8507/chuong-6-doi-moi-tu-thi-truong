import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';
import { AlertCircle } from 'lucide-react';

export const Slide08: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedProfile, setSelectedProfile] = useState<'student' | 'runner'>('student');

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={8} label="PHÂN KHÚC TIÊU DÙNG (B2C)" accent="#d97706" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#d97706" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Personas Comparison */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Phân Khúc Tiêu Dùng:<br />
              <span className="text-amber-700">Bối Cảnh Quyết Định Mua</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Nghịch lý nhân khẩu học: Cùng tuổi 20 & Cùng ngân sách 1.500.000đ
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedProfile('student')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedProfile === 'student'
                  ? 'bg-amber-50/70 border-amber-600 ring-2 ring-amber-500/20 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Học Trực Tuyến
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-2">Nhu cầu: Micrô rõ & Đeo êm</h4>
                <ul className="text-[11px] text-slate-600 space-y-1 mt-1">
                  <li>• Lọc tạp âm môi trường</li>
                  <li>• Đệm tai êm đeo liên tục 5h</li>
                </ul>
              </div>
              <span className="text-[10px] font-semibold text-amber-800">Tiêu chí: Sự thoải mái</span>
            </button>

            <button
              onClick={() => setSelectedProfile('runner')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedProfile === 'runner'
                  ? 'bg-amber-50/70 border-amber-600 ring-2 ring-amber-500/20 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Chạy Bộ Thể Thao
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-2">Nhu cầu: Bám chắc & Kháng nước</h4>
                <ul className="text-[11px] text-slate-600 space-y-1 mt-1">
                  <li>• Móc vành tai chống rơi</li>
                  <li>• Chuẩn kháng mồ hôi IPX7</li>
                </ul>
              </div>
              <span className="text-[10px] font-semibold text-amber-800">Tiêu chí: Độ bám an toàn</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Luận điểm học thuật:</strong> Nhân khẩu học đơn lẻ không giải thích được hành vi mua. Phân khúc đúng là tìm những người có chung vấn đề sử dụng trong từng hoàn cảnh cụ thể.
          </div>
        </div>

        {/* Right Column: Case Persil Power */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-44">
            <img 
              src="/images/persil-washing.jpg" 
              alt="Laundry care and textiles" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-rose-700 uppercase font-mono flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-600" /> Bài học Persil Power (1994)
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Unilever Case</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unilever thử nghiệm trên <strong>60.000 hộ và 3 triệu lần giặt</strong> nhưng mẫu tập trung tại Bắc Âu. Khi ra mắt, chất xúc tác làm rách sợi vải ở nhiệt độ cao tại Nam Âu. Nghiên cứu thị trường cần phản ánh đúng mọi bối cảnh sử dụng quan trọng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
