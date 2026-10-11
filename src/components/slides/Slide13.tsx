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
      title: 'Bác sĩ & Kỹ thuật viên',
      icon: Stethoscope,
      desc: 'Bệnh viện không chỉ mua tia X; họ mua năng lực đọc kết quả nhanh và thao tác an toàn cho bệnh nhân.',
      risk: 'Nếu thiếu chương trình đào tạo lâm sàng, tỷ lệ khai thác máy giảm 60%.'
    },
    {
      id: 'service',
      title: 'Bảo trì & Trực 24/7',
      icon: Wrench,
      desc: 'Thời gian máy ngừng hoạt động (downtime) ở phòng cấp cứu tính bằng sinh mạng và doanh thu viện phí.',
      risk: 'GE và Siemens thắng EMI nhờ mạng lưới kỹ sư túc trực thay thế linh kiện trong vài giờ.'
    },
    {
      id: 'software',
      title: 'Phần mềm & Tái tạo 3D',
      icon: Cpu,
      desc: 'Khả năng xử lý ảnh tái lập lát cắt lát mỏng và kết nối hệ thống lưu trữ PACS của toàn bệnh viện.',
      risk: 'Phần cứng tân tiến nhưng phần mềm đóng kín làm tê liệt quy trình phối hợp liên khoa.'
    },
    {
      id: 'integration',
      title: 'Hạ tầng phòng chiếu',
      icon: Activity,
      desc: 'Yêu cầu phòng chắn chì, ổn áp tải điện cao, và quy trình an toàn bức xạ chuẩn quốc tế.',
      risk: 'Khách hàng phải chịu chi phí chuyển đổi (switching cost) khổng lồ khi đổi nhà cung cấp.'
    }
  ];

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Top: Photo & Ecosystem Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Real CT Scanner Photo with explicit historical citation */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/ct-scanner.jpg"
                alt="EMI CT Scanner 1972 Diagnostic System"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white">
                NIÊN ĐẠI 1972 · PHÁT MINH CT SCANNER
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs space-y-1.5">
              <div className="font-bold text-slate-800">
                Tư liệu: Máy chụp cắt lớp vi tính (CT Scanner)
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Nguồn: Lịch sử Đổi mới Công nghệ Y tế. Godfrey Hounsfield (EMI) nhận giải Nobel Y học 1979 cho phát minh này, nhưng doanh nghiệp lại thất bại thương mại hoàn toàn.
              </p>
            </div>
          </div>

          {/* Surrounding Ecosystem Diagram */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase font-bold text-slate-600">
                  Hệ Sinh Thái Bắt Buộc Của Sản Phẩm Phức Tạp
                </span>
                <span className="text-[11px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  Nhấp vào từng vệ tinh để kiểm tra
                </span>
              </div>

              {/* 4 Satellite Nodes Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isSel = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSel
                          ? 'bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${isSel ? 'text-teal-700' : 'text-slate-600'}`} />
                        <span className="text-xs font-bold text-slate-900">{node.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-2 leading-snug">
                        {node.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node In-Depth Analysis */}
            {(() => {
              const current = nodes.find((n) => n.id === activeNode)!;
              return (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 text-rose-800 font-bold mb-1">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Rủi ro thương mại hóa nếu thiếu mắt xích này:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{current.risk}</p>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Bottom Editorial Comparative Study: EMI vs GE & Lead Users */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 text-xs space-y-2.5">
            <div className="flex items-center gap-2 text-rose-900 font-bold font-mono">
              <Award className="w-4 h-4" />
              <span>TRƯỜNG HỢP THỰC TẾ: BI KỊCH EMI (1972–1979)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              EMI nắm bằng sáng chế đột phá nhưng là một hãng ghi âm/điện tử tiêu dùng, không có hạ tầng dịch vụ y tế. Khi bệnh viện Mỹ đặt mua máy, EMI không thể cung cấp đội ngũ bảo trì tại chỗ trong 24 giờ.
            </p>
            <div className="p-3 rounded-xl bg-white border border-rose-200 italic text-rose-900 text-[11px]">
              “GE và Siemens đã đảo ngược thế cờ không phải vì máy quét chụp nét hơn, mà vì họ sở hữu năng lực bổ trợ (complementary assets) hoàn chỉnh trong ngành y tế.”
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200 text-xs space-y-2.5">
            <div className="flex items-center gap-2 text-teal-900 font-bold font-mono">
              <Activity className="w-4 h-4" />
              <span>MARKETING THÁM HIỂM &amp; NGƯỜI DÙNG DẪN ĐẦU (VON HIPPEL)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Với sản phẩm phức tạp chưa có tiền lệ, việc khảo sát nhóm khách hàng bình thường sẽ vô ích vì họ chưa từng thấy công nghệ đó bao giờ. Doanh nghiệp phải hợp tác với <strong>Lead Users (người dùng dẫn đầu)</strong>.
            </p>
            <div className="p-3 rounded-xl bg-white border border-teal-200 text-slate-700 text-[11px]">
              <strong className="text-teal-900">Quy tắc vàng:</strong> Lead users đi trước thị trường trung bình 7 năm. Tuy nhiên, doanh nghiệp không được mặc định yêu cầu chuyên gia của họ đại diện cho toàn bộ số đông đại chúng.
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
};
