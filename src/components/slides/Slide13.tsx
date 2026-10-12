import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { Activity, Cpu, Stethoscope, Wrench, ShieldAlert, Award } from 'lucide-react';

export const Slide13: React.FC = () => {
  const meta = CHAPTER6_SECTIONS[12];
  const [activeNode, setActiveNode] = useState<'users' | 'service' | 'software' | 'integration'>('service');

  const nodes = [
    {
      id: 'users',
      title: '1. Bác sĩ & Kỹ thuật viên',
      icon: Stethoscope,
      desc: 'Bệnh viện không chỉ mua ống phát tia X; họ mua năng lực đọc kết quả chẩn đoán nhanh và an toàn tuyệt đối cho người bệnh.',
      risk: 'Nếu thiếu chương trình đào tạo lâm sàng tại chỗ bài bản, tỷ lệ khai thác công suất máy có thể sụt giảm tới hơn 60%.'
    },
    {
      id: 'service',
      title: '2. Bảo trì & Trực cấp cứu 24/7',
      icon: Wrench,
      desc: 'Thời gian máy ngừng hoạt động (downtime) ở phòng hồi sức cấp cứu trực tiếp đe dọa sinh mạng bệnh nhân và gây thất thoát viện phí.',
      risk: 'GE và Siemens nhanh chóng đánh bật EMI ra khỏi thị trường Mỹ nhờ sở hữu mạng lưới kỹ sư túc trực thay linh kiện trong vòng vài giờ.'
    },
    {
      id: 'software',
      title: '3. Phần mềm & Tái tạo 3D',
      icon: Cpu,
      desc: 'Thuật toán xử lý ảnh lát cắt siêu mỏng, tự động phân đoạn mô mềm và kết nối thông suốt với hệ thống lưu trữ PACS toàn viện.',
      risk: 'Phần cứng tân tiến nhưng phần mềm đóng kín thiếu tương thích sẽ khiến quy trình phối hợp liên chuyên khoa bị tắc nghẽn.'
    },
    {
      id: 'integration',
      title: '4. Hạ tầng phòng chiếu xạ',
      icon: Activity,
      desc: 'Yêu cầu phòng chắn chì tiêu chuẩn cao, máy biến áp chịu tải lớn riêng biệt và quy chuẩn an toàn bức xạ y tế quốc tế.',
      risk: 'Bệnh viện phải đầu tư chi phí chuyển đổi (switching cost) khổng lồ khi quyết định thay thế nhà cung cấp thiết bị chẩn đoán.'
    }
  ];

  const current = nodes.find((n) => n.id === activeNode)!;

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Top: Photo & Ecosystem Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Real CT Scanner Photo with explicit historical citation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full flex flex-col justify-between">
              <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-4">
                <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/ct-scanner.jpg"
                    alt="EMI CT Scanner 1972 Diagnostic System"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-white border border-slate-700">
                    MÁY CHỤP CT SCANNER (1972)
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h4 className="font-bold text-sm text-slate-900">
                    Hệ thống máy chụp cắt lớp vi tính (EMI Scanner)
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-[13px]">
                    <strong>Nguồn:</strong> Lịch sử Đổi mới Công nghệ Y tế. Godfrey Hounsfield (EMI) nhận giải Nobel Y học 1979 cho phát minh này, nhưng tập đoàn EMI lại thất bại thương mại hoàn toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding Ecosystem Diagram */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner h-full">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-5">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <span className="text-xs sm:text-sm font-mono uppercase font-bold text-slate-900 tracking-wider">
                      Hệ Sinh Thái Bắt Buộc Của Sản Phẩm Phức Tạp
                    </span>
                    <span className="text-xs font-mono text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full font-semibold">
                      Bấm vào từng vệ tinh
                    </span>
                  </div>

                  {/* 4 Satellite Nodes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {nodes.map((node) => {
                      const Icon = node.icon;
                      const isSel = activeNode === node.id;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setActiveNode(node.id as any)}
                          className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                            isSel
                              ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                              : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <Icon className={`w-4 h-4 ${isSel ? 'text-teal-700' : 'text-slate-600'}`} />
                            <span className="text-xs sm:text-sm font-bold text-slate-900">{node.title}</span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
                            {node.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Node In-Depth Analysis */}
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-900 font-bold font-mono text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Rủi ro thương mại hóa nếu thiếu mắt xích {current.title}:</span>
                  </div>
                  <p className="text-xs sm:text-[14px] text-rose-950 leading-relaxed font-medium">
                    {current.risk}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Comparative Study: EMI vs GE & Lead Users */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-bold font-mono text-xs sm:text-sm">
                <Award className="w-4 h-4 text-rose-700" />
                <span>BÀI HỌC THỰC TẾ: BI KỊCH EMI (1972–1979)</span>
              </div>
              <p className="text-xs sm:text-[14px] text-slate-800 leading-relaxed">
                EMI sở hữu bằng sáng chế độc quyền mang tính cách mạng nhưng vốn dĩ là một hãng ghi âm/điện tử giải trí, hoàn toàn không có mạng lưới dịch vụ thiết bị y tế. Khi các bệnh viện tại Mỹ đặt mua máy, EMI không thể cung ứng đội ngũ kỹ thuật viên sửa chữa khẩn cấp tại chỗ.
              </p>
              <div className="p-3.5 rounded-xl bg-white/95 border border-rose-200 italic text-rose-950 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
                “GE và Siemens đã đảo ngược thế cờ không phải vì máy quét nét hơn, mà vì họ làm chủ các <strong>tài sản bổ trợ (complementary assets)</strong> hoàn hảo trong ngành y tế.”
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-inner">
            <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
              <div className="flex items-center gap-2 text-teal-950 font-bold font-mono text-xs sm:text-sm">
                <Activity className="w-4 h-4 text-teal-700" />
                <span>MARKETING THÁM HIỂM &amp; LEAD USERS (VON HIPPEL)</span>
              </div>
              <p className="text-xs sm:text-[14px] text-slate-800 leading-relaxed">
                Với những sản phẩm phức tạp chưa có tiền lệ, việc khảo sát khách hàng bình thường qua bảng hỏi là vô nghĩa vì họ chưa bao giờ nhìn thấy công nghệ đó. Doanh nghiệp bắt buộc phải đồng hành cùng <strong>Lead Users (người dùng dẫn đầu)</strong>.
              </p>
              <div className="p-3.5 rounded-xl bg-white/95 border border-teal-200 text-slate-800 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
                <strong className="text-teal-950 font-semibold font-mono">Quy tắc vàng Von Hippel:</strong> Lead users thường đi trước thị trường bình quân 7 năm. Tuy nhiên, doanh nghiệp không được mặc định yêu cầu đặc thù của họ có thể đại diện hoàn toàn cho số đông đại chúng sau này.
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
