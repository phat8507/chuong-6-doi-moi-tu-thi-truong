import React, { useState } from 'react';
import { CHAPTER6_SECTIONS } from '../../data/chapter6Outline';
import { EditorialSectionFrame } from '../EditorialSectionFrame';
import { Zap, Puzzle, BrainCircuit, Eye, PlayCircle, ArrowRight } from 'lucide-react';

interface RogerAttribute {
  id: string;
  name: string;
  shortTag: string;
  correlation: 'positive' | 'negative';
  icon: any;
  desc: string;
  academicDef: string;
  realExample: string;
  diffusionImpact: string;
}

const ROGERS_ATTRIBUTES: RogerAttribute[] = [
  {
    id: 'relative-advantage',
    name: '1. Lợi thế tương đối (Relative Advantage)',
    shortTag: 'Lợi thế',
    correlation: 'positive',
    icon: Zap,
    academicDef: 'Mức độ giải pháp mới được nhận thức là ưu việt hơn các giải pháp thay thế tiền nhiệm (về kinh tế, thời gian, sự tiện lợi).',
    desc: 'Khách hàng không mua công nghệ mới nếu nó không giải quyết được vấn đề cũ nhanh hơn, rẻ hơn hoặc thỏa mãn hơn đáng kể.',
    realExample: 'Xe đạp điện: Đi nhanh hơn xe đạp cơ truyền thống khi leo dốc, tiết kiệm 80% chi phí xăng so với xe máy số.',
    diffusionImpact: 'Tương quan thuận chiều mạnh nhất với tốc độ lan tỏa. Nếu không có lợi thế rõ rệt, người dùng sẽ không bao giờ đổi thói quen.'
  },
  {
    id: 'compatibility',
    name: '2. Tính tương thích (Compatibility)',
    shortTag: 'Tương thích',
    correlation: 'positive',
    icon: Puzzle,
    academicDef: 'Mức độ phù hợp với hệ giá trị văn hóa, kinh nghiệm quá khứ và thói quen sinh hoạt hiện tại của người dùng tiềm năng.',
    desc: 'Sản phẩm dù tốt đến đâu nhưng bắt người dùng đảo lộn toàn bộ lối sống hay hạ tầng thì tốc độ chấp nhận sẽ cực kỳ chậm.',
    realExample: 'Xe đạp điện: Vừa vặn làn xe đạp/xe máy hiện có tại đô thị, cắm sạc trực tiếp tại ổ cắm gia đình 220V mà không cần trạm sạc đặc thù.',
    diffusionImpact: 'Tương quan thuận. Đòi hỏi thay đổi văn hóa càng ít thì quá trình lan tỏa càng diễn ra nhanh chóng.'
  },
  {
    id: 'complexity',
    name: '3. Độ phức tạp (Complexity)',
    shortTag: 'Độ phức tạp',
    correlation: 'negative',
    icon: BrainCircuit,
    academicDef: 'Mức độ khó khăn cảm nhận trong việc hiểu cách vận hành và làm chủ công nghệ đổi mới.',
    desc: 'Thuộc tính DUY NHẤT có tác động nghịch chiều. Càng đòi hỏi đọc tài liệu hướng dẫn dài dòng, người dùng càng dễ nản lòng và từ bỏ.',
    realExample: 'Xe đạp điện: Bảng điều khiển tối giản chỉ hiển thị mức pin và nút bấm ga đơn giản như xe đạp thường, không đòi hỏi đào tạo phức tạp.',
    diffusionImpact: 'Tương quan NGHỊCH CHIỀU. Giảm độ phức tạp tương đương với việc tháo gỡ rào cản nhận thức lớn nhất của khách hàng.'
  },
  {
    id: 'trialability',
    name: '4. Khả năng dùng thử (Trialability)',
    shortTag: 'Dùng thử',
    correlation: 'positive',
    icon: PlayCircle,
    academicDef: 'Mức độ mà một đổi mới có thể được thử nghiệm ở quy mô giới hạn mà không phải trả giá bằng cam kết tài chính lớn.',
    desc: 'Khả năng cho phép người mua trải nghiệm trước giải tỏa cảm giác bấp bênh và rủi ro tâm lý khi tiếp cận cái mới.',
    realExample: 'Xe đạp điện: Đại lý cho khách hàng đạp thử một vòng quanh khuôn viên hoặc áp dụng chính sách đổi trả miễn phí trong 7 ngày đầu.',
    diffusionImpact: 'Tương quan thuận. Đặc biệt quan trọng đối với nhóm người chấp nhận sớm (Early Adopters) để ra quyết định nhanh hơn.'
  },
  {
    id: 'observability',
    name: '5. Khả năng quan sát (Observability)',
    shortTag: 'Quan sát',
    correlation: 'positive',
    icon: Eye,
    academicDef: 'Mức độ mà kết quả và lợi ích của việc sử dụng đổi mới có thể được những người xung quanh nhìn thấy trực quan.',
    desc: 'Tính hữu hình kích hoạt hiệu ứng truyền miệng tự nhiên và sự kích thích xã hội trong cộng đồng.',
    realExample: 'Xe đạp điện: Bạn bè cùng trường thấy bạn mình đi xe lướt nhẹ êm ái, màu sắc trẻ trung, không tiếng ồn động cơ và không khói bụi.',
    diffusionImpact: 'Tương quan thuận. Thúc đẩy hiệu ứng mạng lưới (network effects) và tâm lý bắt chước của đa số người dùng.'
  }
];

export const Slide15: React.FC = React.memo(() => {
  const meta = CHAPTER6_SECTIONS[14];
  const [selectedId, setSelectedId] = useState<string>('relative-advantage');

  const current = ROGERS_ATTRIBUTES.find(a => a.id === selectedId) || ROGERS_ATTRIBUTES[0];
  const CurrentIcon = current.icon;

  return (
    <EditorialSectionFrame meta={meta}>
      <div className="space-y-6">
        {/* Revolving Attributes Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Orbit Switcher: 5 attributes */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="editorial-card p-6 h-full flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase font-bold text-slate-900 tracking-wider block mb-3 pb-2 border-b border-slate-100">
                  Mô Hình Everett Rogers (1995) · Chọn thuộc tính:
                </span>
                  <div className="space-y-2.5">
                    {ROGERS_ATTRIBUTES.map((attr) => {
                      const Icon = attr.icon;
                      const isSelected = selectedId === attr.id;
                      return (
                        <button
                          key={attr.id}
                          onClick={() => setSelectedId(attr.id)}
                          className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-teal-50/90 border-teal-600 ring-2 ring-teal-500/25 shadow-sm translate-y-[-1px]'
                              : 'bg-slate-50/80 border-slate-200 hover:border-teal-300 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl shrink-0 ${
                              isSelected ? 'bg-teal-700 text-white' : 'bg-slate-200/80 text-slate-700'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-slate-900">{attr.name}</div>
                              <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{attr.desc}</div>
                            </div>
                          </div>
                          <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full shrink-0 ml-2 ${
                            attr.correlation === 'positive'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-rose-100 text-rose-800 border border-rose-200'
                          }`}>
                            {attr.correlation === 'positive' ? '+ Thuận' : '− Nghịch'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono text-center">
                  5 thuộc tính giải thích tới 49–87% tốc độ lan tỏa của đổi mới
                </div>
              </div>
            </div>

          {/* Right: Central Product Focus & Real-world Deep Dive */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="editorial-card p-6 flex flex-col justify-between h-full space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-teal-800 text-white shadow-xs">
                        <CurrentIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {current.name}
                        </h3>
                        <span className="text-xs font-mono text-teal-800 font-semibold">
                          Tác động tới tỷ lệ và tốc độ chấp nhận thị trường
                        </span>
                      </div>
                    </div>

                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                      current.correlation === 'positive'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}>
                      {current.correlation === 'positive' ? 'Thúc đẩy lan tỏa (+)' : 'Rào cản tâm lý (−)'}
                    </span>
                  </div>

                  {/* Academic definition */}
                  <div className="space-y-1.5">
                    <span className="font-bold text-slate-900 font-mono text-xs uppercase tracking-wide block">
                      ĐỊNH NGHĨA HỌC THUẬT:
                    </span>
                    <p className="text-xs sm:text-[14px] text-slate-800 leading-relaxed bg-slate-50/80 p-4 rounded-xl border border-slate-200">
                      {current.academicDef}
                    </p>
                  </div>

                  {/* Real World Product Illustration (E-bike & Lifestyle) */}
                  <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 space-y-1.5">
                    <div className="font-bold text-teal-950 font-mono text-xs uppercase flex items-center gap-1.5">
                      <ArrowRight className="w-4 h-4 text-teal-700" />
                      MINH HỌA THỰC TIỄN (XE ĐẠP ĐIỆN ĐÔ THỊ):
                    </div>
                    <p className="text-teal-950 leading-relaxed font-medium text-xs sm:text-[14px]">
                      {current.realExample}
                    </p>
                  </div>

                  {/* Diffusion Impact */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 font-mono text-xs uppercase">
                      Ý NGHĨA CHO ĐƯỜNG CONG LAN TỎA (S-CURVE):
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs sm:text-[14px]">
                      {current.diffusionImpact}
                    </p>
                  </div>
                </div>

                {/* Bottom Citation */}
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                  Nguồn: Everett M. Rogers, <em>Diffusion of Innovations</em> (Free Press, 5th Edition).
                </div>
            </div>
          </div>
        </div>
      </div>
    </EditorialSectionFrame>
  );
});
