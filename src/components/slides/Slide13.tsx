import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Activity, Users, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Slide13: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'concept' | 'emi'>('emi');

  return (
    <SlideLayout slide={slide} rightBadge="Sản phẩm phức tạp & Case study EMI">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Interactive Technical vs Market Complexity & Lead Users */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('concept')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'concept'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              1. Khái niệm & Người dùng dẫn đầu
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'emi'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              2. Bài học thất bại thương mại của EMI
            </button>
          </div>

          {activeTab === 'concept' ? (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-teal-300 uppercase">
                  Phức tạp kỹ thuật ≠ Phức tạp thị trường
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Một chiếc máy bay phản lực có hàng triệu chi tiết kỹ thuật cực kỳ phức tạp, nhưng khách hàng mục tiêu rất dễ xác định (các hãng hàng không thương mại). Ngược lại, sản phẩm mới nổi (y tế, viễn thông) đòi hỏi <strong>vừa phát triển công nghệ vừa khám phá công dụng thị trường (Marketing thám hiểm)</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-300 uppercase">
                  Bốn đặc trưng của Người dùng dẫn đầu (Lead Users - Von Hippel)
                </span>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Nhận diện nhu cầu sớm hơn thị trường đại chúng trung bình 7 năm.</li>
                  <li>• Kỳ vọng thu được lợi ích kinh tế hoặc chuyên môn rất cao từ giải pháp.</li>
                  <li>• Có năng lực kỹ thuật tự cải tiến hoặc đồng phát triển với nhà sản xuất.</li>
                  <li>• <em>Lưu ý:</em> Yêu cầu của nhóm tiên phong không mặc nhiên đại diện cho số đông!</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300 uppercase flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-400" /> Bi kịch của kẻ tiên phong phát minh
                  </span>
                  <span className="text-[10px] font-mono text-rose-300 bg-rose-900/60 px-2 py-0.5 rounded">
                    1972 – 1979
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Năm 1972, EMI phát minh và sở hữu bằng sáng chế chiếc <strong>máy chụp cắt lớp vi tính (CT Scanner)</strong> đầu tiên trên thế giới do Godfrey Hounsfield chế tạo. Sản phẩm vượt trội về chất lượng hình ảnh đơn lẻ.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tuy nhiên các bệnh viện quan tâm đến <strong>tốc độ quét bệnh nhân, độ ổn định vận hành liên tục và mạng lưới bảo trì sau bán</strong>. Các đối thủ như <strong>General Electric (GE) và Siemens</strong> sở hữu năng lực dịch vụ y tế toàn diện đã nhanh chóng chiếm lĩnh thị trường.
                </p>
                <div className="text-[11px] text-rose-300 font-medium pt-1">
                  Hậu quả: Bộ phận y tế EMI thua lỗ nặng năm 1977 và bị tập đoàn Thorn thâu tóm vào năm 1979.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <strong className="text-white">Bài học cốt lõi:</strong> Doanh nghiệp đi đầu về bằng sáng chế không mặc nhiên là doanh nghiệp chiếm giữ được giá trị thương mại lớn nhất. Thương mại hóa đòi hỏi năng lực hệ thống và dịch vụ sau bán.
              </div>
            </div>
          )}
        </div>

        {/* Right Column: CT Scanner Verified Image & Ecosystem Diagram */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-48 group shadow-xl">
            <img 
              src="/images/ct-scanner.jpg" 
              alt="Modern Computed Tomography CT Scanner System" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-3">
              <span className="text-[11px] text-slate-200 font-medium">
                Hệ thống CT Scanner: Đòi hỏi đào tạo bác sĩ, bảo trì 24/7 và mạng lưới phụ tùng
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
            <div className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> Hệ sinh thái giải pháp tích hợp
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Trong sản phẩm phức tạp, khách hàng mua sự tin cậy của toàn bộ hệ thống gồm thiết bị, phần mềm phân tích, hướng dẫn chuyên môn và bảo dưỡng định kỳ — chứ không mua một thông số độc lập.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
