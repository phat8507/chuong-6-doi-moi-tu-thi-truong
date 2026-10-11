import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Headphones, Users, AlertCircle, Sparkles, Activity } from 'lucide-react';

export const Slide08: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedProfile, setSelectedProfile] = useState<'student' | 'runner'>('student');

  return (
    <SlideLayout slide={slide} rightBadge="Phân khúc người tiêu dùng & Bối cảnh">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Two Consumer Personas Comparison */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold text-[#102A43]">Nghịch lý nhân khẩu học: Cùng tuổi 20 & Cùng ngân sách 1.500.000đ</span>
            <span className="text-[11px] italic">Bấm chọn persona để so sánh</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Persona A: Online Student */}
            <button
              onClick={() => setSelectedProfile('student')}
              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-48 ${
                selectedProfile === 'student'
                  ? 'bg-white border-[#147D82] shadow-md ring-2 ring-[#147D82]/20'
                  : 'bg-white/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#147D82]">Sinh viên học trực tuyến</span>
                  <span className="text-[10px] font-mono bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-bold">Zoom / Meet</span>
                </div>
                <h4 className="text-sm font-bold text-[#102A43] mt-1">Nhu cầu: Giọng nói rõ & Đeo êm</h4>
                <ul className="text-[11px] text-slate-600 space-y-1 mt-2">
                  <li>• Micrô chống ồn lọc tạp âm xung quanh</li>
                  <li>• Đệm tai mềm mại, đeo liên tục 4–6 tiếng</li>
                  <li>• Kết nối ổn định với máy tính xách tay</li>
                  <li>• Không cần chống nước chuẩn cao</li>
                </ul>
              </div>
              <div className="text-[10px] font-semibold text-[#147D82] bg-teal-50 p-1 rounded">
                Tiêu chí quyết định: Độ rõ của mic & sự thoải mái
              </div>
            </button>

            {/* Persona B: Marathon Runner */}
            <button
              onClick={() => setSelectedProfile('runner')}
              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-48 ${
                selectedProfile === 'runner'
                  ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-white/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700">Người chạy bộ thể thao</span>
                  <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">Outdoor Run</span>
                </div>
                <h4 className="text-sm font-bold text-[#102A43] mt-1">Nhu cầu: Bám chắc & Chống mồ hôi</h4>
                <ul className="text-[11px] text-slate-600 space-y-1 mt-2">
                  <li>• Thiết kế móc vành tai, không rơi khi chạy</li>
                  <li>• Chuẩn kháng nước/mồ hôi IPX7</li>
                  <li>• Chế độ nghe âm thanh môi trường an toàn</li>
                  <li>• Micrô chỉ cần mức cơ bản</li>
                </ul>
              </div>
              <div className="text-[10px] font-semibold text-amber-700 bg-amber-50 p-1 rounded">
                Tiêu chí quyết định: Độ bám và kháng nước
              </div>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs space-y-1">
            <span className="font-bold text-[#102A43]">Luận điểm phân khúc học thuật:</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Nếu chỉ dựa vào các tiêu chí nhân khẩu học như độ tuổi và thu nhập, doanh nghiệp sẽ <strong>bỏ qua hoàn toàn bối cảnh sử dụng thực tế</strong>. Phân khúc đúng là tìm kiếm những người có chung vấn đề sử dụng, thay vì chỉ có hồ sơ cá nhân giống nhau.
            </p>
          </div>
        </div>

        {/* Right Column: Case Persil Power 1994 (Unilever) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase">
                <AlertCircle className="w-4 h-4 text-red-600" /> Tình huống Persil Power (1994)
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">
                Unilever Case
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Unilever đầu tư thử nghiệm trên <strong>60.000 hộ gia đình với hơn 3 triệu lần giặt</strong>. Tuy nhiên mẫu thử tập trung chủ yếu ở Bắc Âu. Khi ra mắt toàn châu Âu, chất xúc tác làm mục rách sợi vải ở nhiệt độ cao và thói quen giặt khác biệt tại Nam Âu.
            </p>

            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-[11px] text-red-900 leading-snug">
              <strong>Bài học đắt giá:</strong> Nghiên cứu thị trường không chỉ cần cỡ mẫu lớn, mà mẫu thử phải đại diện chính xác cho mọi hoàn cảnh và điều kiện sử dụng thực tế của từng phân khúc.
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-200 h-28 group">
            <img 
              src="/images/persil-washing.jpg" 
              alt="Laundry care and textiles" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[10px] text-white font-medium">
                Kiểm chứng phân khúc: Bối cảnh sử dụng đa dạng hơn thử nghiệm trong phòng lab
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
