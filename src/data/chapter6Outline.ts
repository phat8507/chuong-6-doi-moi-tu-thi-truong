export interface SectionMetadata {
  id: number;
  partNumber: string; // "I", "II", "III", "IV", "V", "VI"
  partTitle: string;  // "ĐẶT VẤN ĐỀ", "THỊ TRƯỜNG & GIÁ TRỊ", etc.
  partTheme: string;  // "Từ một trải nghiệm quen thuộc đến khung tư duy đổi mới"
  slideNumber: number;
  sectionCode: string; // "01", "02", ...
  title: string;       // Exact outline title
  presenter: string;   // "NGƯỜI 1", "NGƯỜI 2", "NGƯỜI 3"
  time: string;        // "1:15", "1:40", etc.
  transcriptRef: string; // "TRANSCRIPT #01"
  coreMessage: string; // Exact "Thông điệp" from user
  webKeywords: string; // Exact "Trên web"
  visualSpec: string;  // Exact "Visual"
  speechFlow: string;  // Exact "Mạch nói"
}

export const CHAPTER6_SECTIONS: SectionMetadata[] = [
  // SECTION I: ĐẶT VẤN ĐỀ
  {
    id: 1,
    partNumber: "I",
    partTitle: "ĐẶT VẤN ĐỀ",
    partTheme: "Từ một trải nghiệm quen thuộc đến khung tư duy đổi mới",
    slideNumber: 1,
    sectionCode: "01",
    title: "ĐỔI MỚI TỪ THỊ TRƯỜNG",
    presenter: "NGƯỜI 1",
    time: "1:15",
    transcriptRef: "TRANSCRIPT #01",
    coreMessage: "Công nghệ chỉ trở thành đổi mới có ý nghĩa khi được thị trường chấp nhận.",
    webKeywords: "Đổi mới ≠ chỉ phát minh · Nhu cầu → Giá trị → Chấp nhận",
    visualSpec: "Ảnh thật người sử dụng sản phẩm công nghệ; chữ lớn trên nền ảnh, không dùng ảnh công nghệ chung chung.",
    speechFlow: "Mở bài và tuyên bố câu hỏi xuyên suốt: ai thực sự quyết định sự thành công của đổi mới?"
  },
  {
    id: 2,
    partNumber: "I",
    partTitle: "ĐẶT VẤN ĐỀ",
    partTheme: "Từ một trải nghiệm quen thuộc đến khung tư duy đổi mới",
    slideNumber: 2,
    sectionCode: "02",
    title: "MỘT LƯỢT TẢI CHƯA PHẢI MỘT NGƯỜI DÙNG",
    presenter: "NGƯỜI 1",
    time: "1:15",
    transcriptRef: "TRANSCRIPT #02",
    coreMessage: "Điều gì xảy ra khi người ta hào hứng tải ứng dụng rồi bỏ không sử dụng?",
    webKeywords: "Tải xuống ≠ Dùng thử ≠ Tiếp tục sử dụng",
    visualSpec: "Ba trạng thái ứng dụng được minh họa bằng sơ đồ giao diện tự dựng, không giả ảnh chụp sản phẩm có thật.",
    speechFlow: "Tạo đồng cảm; dẫn tới nhu cầu tìm hiểu hành vi thay vì chỉ hỏi người dùng thích tính năng gì."
  },
  {
    id: 3,
    partNumber: "I",
    partTitle: "ĐẶT VẤN ĐỀ",
    partTheme: "Từ một trải nghiệm quen thuộc đến khung tư duy đổi mới",
    slideNumber: 3,
    sectionCode: "03",
    title: "ĐỔI MỚI LÀ MỘT CHUỖI NĂM QUYẾT ĐỊNH",
    presenter: "NGƯỜI 2",
    time: "1:20",
    transcriptRef: "TRANSCRIPT #03",
    coreMessage: "Mỗi quyết định ảnh hưởng đến quyết định tiếp theo và cần phản hồi từ thị trường.",
    webKeywords: "Nhận diện → Khác biệt hóa → Phát triển → Thương mại hóa → Lan tỏa",
    visualSpec: "Đường dây 5 bước dạng sticky, từng nút sáng khi cuộn và mũi tên phản hồi quay lại đầu.",
    speechFlow: "Đưa bản đồ tư duy cho người nghe trước phần lý thuyết; năm phần được nhắc lại ở cuối."
  },

  // SECTION II: THỊ TRƯỜNG & GIÁ TRỊ
  {
    id: 4,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 4,
    sectionCode: "04",
    title: "THỊ TRƯỜNG ĐỊNH HƯỚNG CẢ BỐN P",
    presenter: "NGƯỜI 2",
    time: "1:40",
    transcriptRef: "TRANSCRIPT #04",
    coreMessage: "Đổi mới không dừng ở sản phẩm mà còn ở giá, phân phối và xúc tiến.",
    webKeywords: "4P · Chiến lược / Chiến thuật · Nghiên cứu 110 dự án",
    visualSpec: "Một sản phẩm thật ở trung tâm, bốn nhánh 4P xuất hiện; ghi nguồn của nghiên cứu tại vị trí số liệu.",
    speechFlow: "Từ ví dụ quen thuộc dẫn sang giới hạn nghiên cứu marketing với các thị trường chưa hình thành."
  },
  {
    id: 5,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 5,
    sectionCode: "05",
    title: "KHI THỊ TRƯỜNG CHƯA RÕ, PHẢI HỌC TỪ NGƯỜI DÙNG",
    presenter: "NGƯỜI 2",
    time: "2:00",
    transcriptRef: "TRANSCRIPT #05",
    coreMessage: "Mức trưởng thành của thị trường và công nghệ quyết định cách tìm ra cơ hội đổi mới.",
    webKeywords: "Ma trận thị trường × công nghệ · 4 tình huống · IDEO: 5 bước",
    visualSpec: "Ma trận 2×2 thay đổi theo cuộn; cạnh bên là chuỗi quan sát – nguyên mẫu – kiểm thử; dùng ảnh tư liệu IDEO được cấp phép.",
    speechFlow: "Chứng minh vì sao phỏng vấn sở thích đơn thuần không đủ; chuyển sang câu hỏi sản phẩm cần khác biệt điều gì."
  },
  {
    id: 6,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 6,
    sectionCode: "06",
    title: "KHÁC BIỆT KHÔNG PHẢI LÀ NHIỀU TÍNH NĂNG HƠN",
    presenter: "NGƯỜI 1",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #06",
    coreMessage: "Giá trị nằm ở lợi ích người dùng nhận được so với chi phí và lựa chọn thay thế.",
    webKeywords: "Chất lượng tương đối · Giá trị tương đối · Nokia",
    visualSpec: "Ảnh Nokia có niên đại đúng; so sánh hai cách đánh giá sản phẩm bằng đồ thị lợi ích–chi phí.",
    speechFlow: "Lấy một sản phẩm quen thuộc để đưa lý thuyết khác biệt hóa đến gần người nghe."
  },
  {
    id: 7,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 7,
    sectionCode: "07",
    title: "QFD: BIẾN LỜI KHÁCH HÀNG THÀNH THIẾT KẾ",
    presenter: "NGƯỜI 3",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #07",
    coreMessage: "Không thể thiết kế tốt nếu nhu cầu không được chuyển thành tiêu chí kỹ thuật cụ thể.",
    webKeywords: "Nhu cầu → Chỉ tiêu → Ưu tiên thiết kế · QFD 5 bước · 3 nhóm thuộc tính",
    visualSpec: "Ma trận QFD đơn giản; nhấn một nhu cầu như “dễ tra cứu lịch trả nợ” để hiện ràng buộc kỹ thuật liên quan.",
    speechFlow: "Cần phân biệt QFD là phương pháp chuyển yêu cầu; ba nhóm thuộc tính là khung phân loại nhu cầu bổ trợ."
  },
  {
    id: 8,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 8,
    sectionCode: "08",
    title: "KHÔNG CÓ MỘT KHÁCH HÀNG TRUNG BÌNH CHO MỌI SẢN PHẨM",
    presenter: "NGƯỜI 3",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #08",
    coreMessage: "Người mua cùng thu nhập vẫn có thể khác nhau về mục đích và cách ra quyết định.",
    webKeywords: "B2C: tầng lớp xã hội · vòng đời · lối sống · Persil Power",
    visualSpec: "Ảnh người tiêu dùng ở hai bối cảnh khác nhau; tương tác đổi chân dung và nhu cầu; Persil là ví dụ lịch sử.",
    speechFlow: "Khẳng định phải chọn đúng phân khúc trước khi phát triển thêm tính năng."
  },
  {
    id: 9,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 9,
    sectionCode: "09",
    title: "TRONG B2B, NGƯỜI MUA CHƯA CHẮC LÀ NGƯỜI DÙNG",
    presenter: "NGƯỜI 3",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #09",
    coreMessage: "Một quyết định mua của tổ chức chịu tác động của nhiều vai trò và lợi ích khác nhau.",
    webKeywords: "Bên mua · Người dùng · Người giữ cổng · Người ảnh hưởng",
    visualSpec: "Sơ đồ mạng lưới 4 bên; chọn vai trò để hiện mối quan tâm khi doanh nghiệp mua máy CNC.",
    speechFlow: "So sánh với B2C và dẫn sang chiến lược phát triển sản phẩm cho từng phân khúc."
  },
  {
    id: 10,
    partNumber: "II",
    partTitle: "THỊ TRƯỜNG & GIÁ TRỊ",
    partTheme: "Từ hiểu nhu cầu đến chọn đúng khách hàng và hướng phát triển",
    slideNumber: 10,
    sectionCode: "10",
    title: "TỪ MỘT SẢN PHẨM LÕI CÓ NĂM CON ĐƯỜNG PHÁT TRIỂN",
    presenter: "NGƯỜI 3",
    time: "1:50",
    transcriptRef: "TRANSCRIPT #10",
    coreMessage: "Doanh nghiệp phải chọn cách mở rộng phù hợp với phân khúc mục tiêu.",
    webKeywords: "Thêm tính năng · Lên cao · Xuống thấp · Tùy chọn · Kết hợp",
    visualSpec: "Cây chiến lược 5 nhánh, nhấp từng nhánh hiện minh họa; chú thích duy trì/gián đoạn và “công việc cần hoàn thành”.",
    speechFlow: "Kết thúc phần lựa chọn giá trị; nêu vấn đề mới: sản phẩm thiết kế xong đã bán được chưa?"
  },

  // SECTION III: THƯƠNG MẠI HÓA
  {
    id: 11,
    partNumber: "III",
    partTitle: "THƯƠNG MẠI HÓA",
    partTheme: "Tại sao công nghệ tốt vẫn có thể không thành công",
    slideNumber: 11,
    sectionCode: "11",
    title: "MỘT CÔNG NGHỆ TỐT CHƯA PHẢI SẢN PHẨM HOÀN CHỈNH",
    presenter: "NGƯỜI 2",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #11",
    coreMessage: "Khách hàng mua giải pháp sử dụng được chứ không chỉ mua một cấu phần kỹ thuật.",
    webKeywords: "Công nghệ lõi + Phần mềm + Tương thích + Hỗ trợ",
    visualSpec: "Sơ đồ sản phẩm “lắp ghép” từng lớp; làm nổi bật khác biệt công nghệ, đổi mới nhanh và chi phí chuyển đổi.",
    speechFlow: "Dẫn sang lựa chọn khai thác công nghệ: tự làm mọi thứ hay cấp phép cho đối tác?"
  },
  {
    id: 12,
    partNumber: "III",
    partTitle: "THƯƠNG MẠI HÓA",
    partTheme: "Tại sao công nghệ tốt vẫn có thể không thành công",
    slideNumber: 12,
    sectionCode: "12",
    title: "ARM: KHÔNG SẢN XUẤT VẪN CÓ THỂ KINH DOANH CÔNG NGHỆ",
    presenter: "NGƯỜI 2",
    time: "2:10",
    transcriptRef: "TRANSCRIPT #12",
    coreMessage: "Sở hữu và cấp phép tri thức là một phương án thương mại hóa.",
    webKeywords: "Bảo hộ: 5 điều kiện · Định giá giấy phép: 4 cách · Thiết kế → Cấp phép → Bản quyền",
    visualSpec: "Hệ sinh thái ARM bằng SVG; 3 lớp sticky: bảo hộ, định giá, dòng giá trị và dòng phí cấp phép.",
    speechFlow: "Giải thích thang giá trị; quy định sáng chế mang tính lịch sử được phân biệt với pháp luật hiện hành."
  },
  {
    id: 13,
    partNumber: "III",
    partTitle: "THƯƠNG MẠI HÓA",
    partTheme: "Tại sao công nghệ tốt vẫn có thể không thành công",
    slideNumber: 13,
    sectionCode: "13",
    title: "SẢN PHẨM PHỨC TẠP PHẢI ĐI CÙNG HỆ SINH THÁI",
    presenter: "NGƯỜI 3",
    time: "1:55",
    transcriptRef: "TRANSCRIPT #13",
    coreMessage: "Thiếu đào tạo, bảo trì, tích hợp hoặc hiểu biết người dùng có thể cản trở thương mại hóa.",
    webKeywords: "Marketing thám hiểm · Người dùng dẫn đầu · Tích hợp · EMI CT",
    visualSpec: "Ảnh thiết bị CT có nguồn và niên đại ghi rõ; xung quanh là sơ đồ người dùng, dịch vụ, phần mềm, bảo trì.",
    speechFlow: "Dùng trường hợp EMI để giải thích vì sao thành công kỹ thuật không tự bảo đảm thành công thị trường."
  },
  {
    id: 14,
    partNumber: "III",
    partTitle: "THƯƠNG MẠI HÓA",
    partTheme: "Tại sao công nghệ tốt vẫn có thể không thành công",
    slideNumber: 14,
    sectionCode: "14",
    title: "MARKETING ĐỔI MỚI LÀ GIẢM SỰ BẤT ĐỊNH",
    presenter: "NGƯỜI 3",
    time: "1:25",
    transcriptRef: "TRANSCRIPT #14",
    coreMessage: "Khách hàng cần hiểu, thử, tin tưởng rồi mới chấp nhận sử dụng lâu dài.",
    webKeywords: "Hiểu lợi ích → Dùng thử → Tin tưởng → Chấp nhận → Phản hồi",
    visualSpec: "Hành trình khách hàng một đường, từng giai đoạn chuyển động khi cuộn; ảnh người sử dụng thật.",
    speechFlow: "Tạo cầu nối tự nhiên từ thương mại hóa sang câu hỏi: đổi mới lan rộng bằng cách nào?"
  },

  // SECTION IV: LAN TỎA & DỰ BÁO
  {
    id: 15,
    partNumber: "IV",
    partTitle: "LAN TỎA & DỰ BÁO",
    partTheme: "Tại sao sản phẩm được chấp nhận nhanh hay chậm",
    slideNumber: 15,
    sectionCode: "15",
    title: "NĂM THUỘC TÍNH QUYẾT ĐỊNH MỨC DỄ CHẤP NHẬN",
    presenter: "NGƯỜI 2",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #15",
    coreMessage: "Đổi mới cần có lợi ích rõ ràng, phù hợp, dễ hiểu, dễ thử và dễ quan sát.",
    webKeywords: "Lợi thế · Tương thích · Độ phức tạp · Dùng thử · Quan sát",
    visualSpec: "Năm thuộc tính xoay quanh một sản phẩm; chọn thuộc tính để hiện ví dụ gần gũi.",
    speechFlow: "Đặt nền lý thuyết cho đường cong lan tỏa."
  },
  {
    id: 16,
    partNumber: "IV",
    partTitle: "LAN TỎA & DỰ BÁO",
    partTheme: "Tại sao sản phẩm được chấp nhận nhanh hay chậm",
    slideNumber: 16,
    sectionCode: "16",
    title: "LAN TỎA THƯỜNG CHẬM, NHANH RỒI BÃO HÒA",
    presenter: "NGƯỜI 2",
    time: "1:30",
    transcriptRef: "TRANSCRIPT #16",
    coreMessage: "Đường chữ S mô tả mức chấp nhận tích lũy; các nhóm chấp nhận là một phân phối khác.",
    webKeywords: "S-curve tích lũy ≠ Tỷ lệ nhóm · 2,5 / 13,5 / 34 / 34 / 16%",
    visualSpec: "Hai đồ thị đồng bộ tương tác: đường cong chữ S và phân phối nhóm Rogers; phân biệt tên và trục rõ.",
    speechFlow: "Giúp người nghe đọc đồ thị; đặt câu hỏi quản trị: làm sao dự báo đoạn tăng trưởng?"
  },
  {
    id: 17,
    partNumber: "IV",
    partTitle: "LAN TỎA & DỰ BÁO",
    partTheme: "Tại sao sản phẩm được chấp nhận nhanh hay chậm",
    slideNumber: 17,
    sectionCode: "17",
    title: "DỰ BÁO KHÔNG PHẢI TIÊN TRI",
    presenter: "NGƯỜI 2",
    time: "2:25",
    transcriptRef: "TRANSCRIPT #17",
    coreMessage: "Ước lượng nhu cầu phải tính hành vi chấp nhận, điều kiện cung ứng và độ bất định.",
    webKeywords: "Phía cầu: Dịch bệnh / Bass / Probit / Bayesian; phía cung: 4 cơ chế; dự báo: hồi quy / chỉ báo / Delphi / kịch bản",
    visualSpec: "Mô phỏng đường dự báo có nhãn “minh họa”; tương tác thay giả định; đặt cạnh câu chuyện Apple Newton 400.000 dự báo / khoảng 70.000 thực tế.",
    speechFlow: "Khép lại lý thuyết bằng một cảnh báo: số liệu dự báo không phải kết quả; chuyển sang bằng chứng ở Việt Nam."
  },

  // SECTION V: FE CREDIT — VẬN DỤNG
  {
    id: 18,
    partNumber: "V",
    partTitle: "FE CREDIT — VẬN DỤNG",
    partTheme: "Từ nguyên tắc đổi mới đến quan sát một doanh nghiệp",
    slideNumber: 18,
    sectionCode: "18",
    title: "FE CREDIT: ĐỔI MỚI TỪ NHU CẦU THUẬN TIỆN VÀ MINH BẠCH",
    presenter: "NGƯỜI 1",
    time: "1:40",
    transcriptRef: "TRANSCRIPT #18",
    coreMessage: "Giá trị người vay tìm kiếm không chỉ là khoản vốn mà còn là khả năng tiếp cận, tra cứu và được hỗ trợ.",
    webKeywords: "Tiếp cận · Theo dõi nghĩa vụ · Hỗ trợ · FE ONLINE 2.0",
    visualSpec: "Ảnh chụp/giao diện FE CREDIT được phép dùng, có nguồn; tuyến trải nghiệm khách hàng trên điện thoại.",
    speechFlow: "Mở case bằng nhu cầu thực tế, không đi thẳng vào kết quả tài chính."
  },
  {
    id: 19,
    partNumber: "V",
    partTitle: "FE CREDIT — VẬN DỤNG",
    partTheme: "Từ nguyên tắc đổi mới đến quan sát một doanh nghiệp",
    slideNumber: 19,
    sectionCode: "19",
    title: "SỐ LIỆU KẾT QUẢ KHÔNG TỰ CHỨNG MINH NGUYÊN NHÂN",
    presenter: "NGƯỜI 3",
    time: "1:40",
    transcriptRef: "TRANSCRIPT #19",
    coreMessage: "Kết quả kinh doanh và số người dùng kênh số phải được đọc như hai nhóm chỉ số khác nhau.",
    webKeywords: "Giải ngân >43.000 tỷ (+~40%) · LNTT 512 / gần 515 tỷ (2 nguồn) · Chatbot >130.000 người/năm; >200.000 phiên/tháng",
    visualSpec: "Số lớn và hai nhóm biểu đồ: kinh doanh / sử dụng kênh số; ghi thời kỳ, nguồn, đơn vị; không dùng đồ thị xu hướng khi chỉ có một mốc.",
    speechFlow: "Nêu thận trọng khi diễn giải dữ liệu; phần này là nghiên cứu tình huống dựa trên nguồn thứ cấp."
  },
  {
    id: 20,
    partNumber: "V",
    partTitle: "FE CREDIT — VẬN DỤNG",
    partTheme: "Từ nguyên tắc đổi mới đến quan sát một doanh nghiệp",
    slideNumber: 20,
    sectionCode: "20",
    title: "ĐỔI MỚI BỀN VỮNG CẦN CẢ HỆ THỐNG VẬN HÀNH",
    presenter: "NGƯỜI 3",
    time: "1:35",
    transcriptRef: "TRANSCRIPT #20",
    coreMessage: "Trải nghiệm, hiệu quả kinh doanh và kiểm soát rủi ro phải được cân nhắc đồng thời.",
    webKeywords: "Giá trị khách hàng · Hiệu quả vận hành · Rủi ro tín dụng & dữ liệu",
    visualSpec: "Sơ đồ ba trụ cột; click cho thấy câu hỏi đánh giá, không hiển thị KPI giả định như kết quả thực tế.",
    speechFlow: "Tổng hợp FE CREDIT vào mô hình quản trị chung, mở đường cho câu chốt toàn bài."
  },

  // SECTION VI: KẾT LUẬN
  {
    id: 21,
    partNumber: "VI",
    partTitle: "KẾT LUẬN",
    partTheme: "Quay về câu hỏi đầu và kết thúc bằng tiêu chí đánh giá",
    slideNumber: 21,
    sectionCode: "21",
    title: "ĐỔI MỚI KHÔNG KẾT THÚC Ở NGÀY RA MẮT",
    presenter: "NGƯỜI 1",
    time: "1:20",
    transcriptRef: "TRANSCRIPT #21",
    coreMessage: "Đổi mới thành công thể hiện ở giá trị được chấp nhận và sử dụng lặp lại.",
    webKeywords: "Năm quyết định → Phản hồi thị trường · Nhiều lượt tải, ít người quay lại: đã thành công chưa?",
    visualSpec: "Vòng lặp 5 quyết định ghép lại từ section 03; typography lớn và câu hỏi cuối, không mở thêm kiến thức mới.",
    speechFlow: "Quay lại ví dụ ứng dụng ở section 02 để tạo kết thúc trọn vòng."
  }
];
