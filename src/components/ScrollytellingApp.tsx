import React, { useState } from 'react';
import { SLIDES_METADATA } from '../data/slidesMetadata';
import { EditorialNavBar } from './EditorialNavBar';
import { PresentationEngine } from './PresentationEngine';
import { ArrowUp, BookOpen, User, Clock, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

// Import All 21 Slide Components
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03 } from './slides/Slide03';
import { Slide04 } from './slides/Slide04';
import { Slide05 } from './slides/Slide05';
import { Slide06 } from './slides/Slide06';
import { Slide07 } from './slides/Slide07';
import { Slide08 } from './slides/Slide08';
import { Slide09 } from './slides/Slide09';
import { Slide10 } from './slides/Slide10';
import { Slide11 } from './slides/Slide11';
import { Slide12 } from './slides/Slide12';
import { Slide13 } from './slides/Slide13';
import { Slide14 } from './slides/Slide14';
import { Slide15 } from './slides/Slide15';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';
import { Slide18 } from './slides/Slide18';
import { Slide19 } from './slides/Slide19';
import { Slide20 } from './slides/Slide20';
import { Slide21 } from './slides/Slide21';

// Full Editorial Imagery Mapping across Scrollytelling Sections
const SECTION_MEDIA: Record<number, { image: string; caption: string; style: string }> = {
  1: { image: "/images/hero-innovation.jpg", caption: "Hệ sinh thái mạng lưới công nghệ & thị trường toàn cầu", style: "hero" },
  2: { image: "/images/mobile-app.jpg", caption: "Hành vi người dùng smartphone: Khoảng cách giữa tải về và sử dụng", style: "split" },
  3: { image: "/images/technology-network.jpg", caption: "Quy trình năm bước quản trị đổi mới và vòng lặp phản hồi thị trường", style: "banner" },
  5: { image: "/images/ideo-design.jpg", caption: "Quy trình Design Thinking thực nghiệm tại IDEO", style: "split" },
  6: { image: "/images/nokia-phone.jpg", caption: "Kỷ nguyên điện thoại nắp gập và biến đổi giá trị cảm nhận Nokia", style: "split" },
  7: { image: "/images/patent-blueprint.jpg", caption: "Bản vẽ kỹ thuật QFD: Dịch tiếng nói khách hàng thành thông số", style: "split" },
  8: { image: "/images/persil-washing.jpg", caption: "Thử nghiệm mẫu vải Persil Power và bài học bối cảnh sử dụng", style: "split" },
  9: { image: "/images/b2b-cnc.jpg", caption: "Thiết bị cơ khí chính xác CNC và mạng lưới mua hàng tổ chức", style: "split" },
  12: { image: "/images/arm-processor.jpg", caption: "Kiến trúc vi xử lý bán dẫn ARM: Cấp phép sở hữu trí tuệ", style: "split" },
  13: { image: "/images/ct-scanner.jpg", caption: "Hệ thống máy chụp cắt lớp EMI CT Scanner và năng lực hỗ trợ dịch vụ", style: "split" },
  14: { image: "/images/customer-journey.jpg", caption: "Đồng hành và tư vấn chuyển đổi giảm bất định cho khách hàng", style: "split" },
  18: { image: "/images/fe-online.jpg", caption: "Giao diện số hóa tiêu dùng FE ONLINE 2.0 trên di động", style: "split" },
  19: { image: "/images/finance-growth.jpg", caption: "Thị trường tài chính tiêu dùng và số liệu giải ngân 2024", style: "split" },
  20: { image: "/images/team-collaboration.jpg", caption: "Hội đồng quản trị rủi ro tín dụng và kiểm soát vận hành", style: "split" },
  21: { image: "/images/academic-lecture.jpg", caption: "Giảng đường đại học: Đổi mới là quá trình học hỏi liên tục", style: "hero" }
};

export const ScrollytellingApp: React.FC = () => {
  const [viewMode, setViewMode] = useState<'scrollytelling' | 'slide'>('scrollytelling');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (viewMode === 'slide') {
    return (
      <div className="relative w-screen h-screen">
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setViewMode('scrollytelling')}
            className="px-3.5 py-1.5 rounded-full bg-[#147D82] text-white font-bold text-xs shadow-xl hover:bg-teal-600 transition-all cursor-pointer border border-teal-300/40"
          >
            ← Quay lại Chế độ Scrollytelling
          </button>
        </div>
        <PresentationEngine />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070e17] text-[#F6F5F1] font-sans selection:bg-[#147D82] selection:text-white">
      {/* Sticky Top Navigation */}
      <EditorialNavBar 
        currentMode={viewMode} 
        onToggleMode={() => setViewMode(viewMode === 'scrollytelling' ? 'slide' : 'scrollytelling')} 
      />

      {/* Main Continuous Scrollytelling Stream */}
      <main className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 py-10 space-y-24">
        {SLIDES_METADATA.map((slide, idx) => {
          const sid = `slide-${String(slide.slideNumber).padStart(2, '0')}`;
          const media = SECTION_MEDIA[slide.slideNumber];

          // Dynamic Component Selector
          let SlideContent: React.ReactNode = null;
          switch (slide.slideNumber) {
            case 1: SlideContent = <Slide01 slide={slide} />; break;
            case 2: SlideContent = <Slide02 slide={slide} />; break;
            case 3: SlideContent = <Slide03 slide={slide} />; break;
            case 4: SlideContent = <Slide04 slide={slide} />; break;
            case 5: SlideContent = <Slide05 slide={slide} />; break;
            case 6: SlideContent = <Slide06 slide={slide} />; break;
            case 7: SlideContent = <Slide07 slide={slide} />; break;
            case 8: SlideContent = <Slide08 slide={slide} />; break;
            case 9: SlideContent = <Slide09 slide={slide} />; break;
            case 10: SlideContent = <Slide10 slide={slide} />; break;
            case 11: SlideContent = <Slide11 slide={slide} />; break;
            case 12: SlideContent = <Slide12 slide={slide} />; break;
            case 13: SlideContent = <Slide13 slide={slide} />; break;
            case 14: SlideContent = <Slide14 slide={slide} />; break;
            case 15: SlideContent = <Slide15 slide={slide} />; break;
            case 16: SlideContent = <Slide16 slide={slide} />; break;
            case 17: SlideContent = <Slide17 slide={slide} />; break;
            case 18: SlideContent = <Slide18 slide={slide} />; break;
            case 19: SlideContent = <Slide19 slide={slide} />; break;
            case 20: SlideContent = <Slide20 slide={slide} />; break;
            case 21: SlideContent = <Slide21 slide={slide} />; break;
          }

          return (
            <section
              key={slide.id}
              id={sid}
              className="scroll-mt-16 relative rounded-3xl overflow-hidden border border-slate-800/80 bg-[#0c1825]/90 shadow-2xl transition-all hover:border-slate-700/80"
            >
              {/* Render Section Presentation Content */}
              <div className="min-h-[580px] w-full flex flex-col justify-center">
                {SlideContent}
              </div>

              {/* Documentary Photography Integration Banner if available */}
              {media && (
                <div className="px-8 pb-6 pt-2 bg-[#08121e]/60 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#147D82]" />
                    <span className="text-xs text-slate-300 font-medium">
                      <strong>Tư liệu thực tế:</strong> {media.caption}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    <span>Nguồn ảnh: Unsplash / Wikimedia Commons License (Không dùng AI)</span>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </main>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#147D82] text-white shadow-2xl hover:bg-teal-600 transition-all cursor-pointer border border-teal-400/40"
        title="Cuộn lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Global Academic Editorial Footer */}
      <footer className="w-full bg-[#050a12] border-t border-slate-800 py-12 px-6 text-center text-xs text-slate-400 space-y-3">
        <div className="text-sm font-bold text-white">
          Chương 6: Đổi Mới Từ Thị Trường · Quản trị Đổi mới và Sáng tạo
        </div>
        <div>
          Trường Đại học Ngân hàng TP. Hồ Chí Minh (HUB) • Khoa Quản trị Kinh doanh • Nhóm 4
        </div>
        <div className="text-[11px] text-slate-500 font-mono max-w-2xl mx-auto">
          Ứng dụng thiết kế theo tiêu chuẩn Visual-first Academic Scrollytelling & 16:9 Presentation Engine. 100% hình ảnh thực tế được xác minh bản quyền.
        </div>
      </footer>
    </div>
  );
};
