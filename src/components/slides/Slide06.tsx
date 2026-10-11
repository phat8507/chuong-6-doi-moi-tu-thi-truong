import React, { useState } from 'react';
import { SlideData } from '../../data/slidesMetadata';
import { SlideLayout } from '../SlideLayout';
import { Scale, TrendingUp, AlertOctagon, CheckCircle2 } from 'lucide-react';

export const Slide06: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedProduct, setSelectedProduct] = useState<'smart' | 'simple'>('simple');

  return (
    <SlideLayout slide={slide} rightBadge="Chất lượng tương đối & Giá trị cảm nhận">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        {/* Left Column: Two Water Bottles Comparison */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold text-[#102A43]">Thực nghiệm so sánh: Bình giữ nhiệt cho học sinh</span>
            <span className="text-[11px] italic">Bấm để chuyển đổi góc nhìn người mua</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Product A: High Tech Bottle */}
            <button
              onClick={() => setSelectedProduct('smart')}
              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-52 ${
                selectedProduct === 'smart'
                  ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-white/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700">Mẫu A · Công Nghệ Cao</span>
                  <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">850.000đ</span>
                </div>
                <h4 className="text-sm font-bold text-[#102A43] mt-1">Bình LED Đo Nhiệt Độ AI</h4>
                <ul className="text-[11px] text-slate-600 space-y-1 mt-2">
                  <li>• Màn hình LED cảm ứng báo nhiệt</li>
                  <li>• Cảm biến Bluetooth kết nối app</li>
                  <li>• Cần cắm sạc định kỳ mỗi 5 ngày</li>
                  <li>• Trọng lượng nặng, nắp rửa cẩn thận tránh ngấm nước</li>
                </ul>
              </div>
              <div className="text-[10px] font-semibold text-amber-700 bg-amber-50 p-1.5 rounded">
                Chất lượng kỹ thuật tuyệt đối cao, nhưng giá cao và phức tạp
              </div>
            </button>

            {/* Product B: Simple Practical Bottle */}
            <button
              onClick={() => setSelectedProduct('simple')}
              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-52 ${
                selectedProduct === 'simple'
                  ? 'bg-white border-[#147D82] shadow-md ring-2 ring-[#147D82]/20'
                  : 'bg-white/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#147D82]">Mẫu B · Thực Dụng Bền Bỉ</span>
                  <span className="text-[10px] font-mono bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-bold">220.000đ</span>
                </div>
                <h4 className="text-sm font-bold text-[#102A43] mt-1">Bình Giữ Nhiệt Inox 316</h4>
                <ul className="text-[11px] text-slate-600 space-y-1 mt-2">
                  <li>• Giữ nóng/lạnh 18 tiếng liên tục</li>
                  <li>• Ron cao su chống tràn 100% khi để balo</li>
                  <li>• Dễ tháo rời cọ rửa sạch sẽ</li>
                  <li>• Chịu va đập tốt, không cần sạc điện</li>
                </ul>
              </div>
              <div className="text-[10px] font-semibold text-[#147D82] bg-teal-50 p-1.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 shrink-0" /> Giá trị tương đối vượt trội đối với học sinh
              </div>
            </button>
          </div>

          {/* Theoretical Takeaway */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs space-y-1">
            <div className="flex items-center gap-2 text-[#102A43] font-bold">
              <Scale className="w-4 h-4 text-[#147D82]" />
              <span>Chất lượng tương đối ≠ Chất lượng tuyệt đối</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Khảo sát trên 3.000 đơn vị kinh doanh (PIMS) cho thấy lợi nhuận đến từ <strong>giá trị tương đối mà khách hàng cảm nhận so với giá và so với giải pháp thay thế</strong>, chứ không đến từ việc nhồi nhét mọi thông số kỹ thuật đắt đỏ.
            </p>
          </div>
        </div>

        {/* Right Column: Historical Nokia Case Study */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase">
                <AlertOctagon className="w-4 h-4 text-amber-600" /> Bài học lịch sử: Nokia
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-600">
                1998 – 2004
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Nokia từng thống lĩnh thế giới nhờ tập trung vào chuẩn GSM, độ bền và tối ưu chi phí. Tuy nhiên, khi thị hiếu người dùng chuyển sang <strong>điện thoại nắp gập và tích hợp máy ảnh màu</strong>, Nokia chậm đổi mới khiến thị phần sụt giảm từ 35% (2003) xuống dưới 30%.
            </p>

            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
              <strong>Bài học cốt lõi:</strong> Khác biệt hóa có tính chất tương đối và biến đổi theo thời gian. Những thuộc tính từng là thế mạnh sẽ nhanh chóng lỗi thời khi kỳ vọng thị trường thay đổi.
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-200 h-28 group">
            <img 
              src="/images/nokia-phone.jpg" 
              alt="Classic Nokia Phone Era" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[10px] text-white font-medium">
                Kỷ nguyên di động Nokia: Lợi thế kỹ thuật không thay thế được kỳ vọng thị hiếu mới
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
