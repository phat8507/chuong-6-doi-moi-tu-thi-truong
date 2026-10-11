import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SectionLabel } from '../ui/SectionLabel';
import { SpeakerTag } from '../ui/SpeakerTag';

export const Slide13: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'concept' | 'emi'>('emi');

  return (
    <div className="editorial-container">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <SectionLabel index={13} label="SẢN PHẨM PHỨC TẠP" accent="#be123c" />
        <SpeakerTag name={slide.presenter} time={slide.duration} color="#be123c" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Concept & EMI Failure Case */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h2 className="display-lg text-slate-900 leading-tight">
              Sản Phẩm Phức Tạp &amp;<br />
              <span className="text-rose-700">Bài Học Thất Bại Của EMI</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-serif italic">
              Marketing thám hiểm, người dùng dẫn đầu (von Hippel) và trường hợp máy chụp cắt lớp CT Scanner
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('concept')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'concept'
                  ? 'bg-rose-100 text-rose-800'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. Khái niệm & Người dùng dẫn đầu
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'emi'
                  ? 'bg-rose-100 text-rose-800'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. Tình huống EMI CT Scanner
            </button>
          </div>

          {activeTab === 'concept' ? (
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs animate-fadeIn">
              <span className="font-bold text-rose-900 uppercase font-mono">
                Phức tạp kỹ thuật ≠ Phức tạp thị trường:
              </span>
              <p className="text-slate-600 leading-relaxed">
                Máy bay thương mại rất phức tạp về kỹ thuật nhưng khách hàng mục tiêu dễ xác định. Ngược lại, sản phẩm mới nổi (y tế, viễn thông) đòi hỏi vừa phát triển công nghệ vừa khám phá công dụng thị trường (Marketing thám hiểm).
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 text-[11px] text-slate-700">
                <strong>Người dùng dẫn đầu (Lead users):</strong> Đi trước thị trường trung bình 7 năm, nhưng không thể mặc nhiên xem yêu cầu của họ là đại diện cho toàn bộ số đông đại chúng.
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs animate-fadeIn">
              <span className="font-bold text-rose-800 uppercase font-mono">
                Bi kịch của kẻ tiên phong phát minh:
              </span>
              <p className="text-slate-600 leading-relaxed">
                Năm 1972, EMI phát minh ra <strong>máy chụp cắt lớp vi tính (CT Scanner)</strong> đầu tiên trên thế giới và giữ bằng sáng chế. Nhưng bệnh viện quan tâm đến <strong>tốc độ chụp, độ ổn định và dịch vụ bảo trì 24/7</strong> hơn một thông số hình ảnh đơn lẻ.
              </p>
              <p className="text-slate-600 leading-relaxed">
                General Electric (GE) và Siemens có mạng lưới dịch vụ vượt trội đã chiếm lĩnh thị trường. Bộ phận y tế của EMI thua lỗ năm 1977 và công ty bị mua lại năm 1979.
              </p>
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-100 text-[11px] text-rose-900 font-medium">
                → Hiệu quả thương mại phụ thuộc vào toàn bộ hệ thống sử dụng, không chỉ dựa vào bằng sáng chế đi đầu.
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Real CT Scanner Photo */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-56">
            <img 
              src="/images/ct-scanner.jpg" 
              alt="Hospital CT Scanner Diagnostic Equipment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-end p-3">
              <span className="text-xs text-white">
                Hệ thống chẩn đoán CT Scanner: Khách hàng mua sự an tâm của toàn bộ dịch vụ hậu mãi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
