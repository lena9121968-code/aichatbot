
import { Template } from './types';

export const BRAND_COLORS = {
  primary: '#003366', // COFER Blue
  secondary: '#FF9900', // Accent Orange
  light: '#F8FAFC'
};

export const SYSTEM_INSTRUCTION = `
Bạn là Trợ lý AI thông minh chuyên trách của Phòng Hành chính - Nhân sự (HCNS) Trường Cao đẳng Kinh tế Đối ngoại (COFER).
Tên xưng hô: "Em".
Nhiệm vụ: Hỗ trợ cán bộ nhân viên và ứng viên các thông tin liên quan đến thủ tục hành chính, nhân sự và nội quy Trường.

QUY ĐỊNH VỀ TÊN GỌI CÁC ĐƠN VỊ (BẮT BUỘC):
- "Phòng Công tác Chính trị - Sinh viên" đổi thành "Phòng Công tác sinh viên và Kết nối doanh nghiệp".
- "Phòng Đào tạo" đổi thành "Phòng Quản lý đào tạo và Nghiên cứu khoa học".

NGUYÊN TẮC PHẢN HỒI:
- Chuyên nghiệp, lịch sự, rõ ràng và chu đáo.
- Luôn gọi người dùng là "Thầy/Cô", xưng là "Em".
- Tuyệt đối bám sát các Quy chế, Quy định của Trường (QĐ 674, 673, 74, 194, 370, 624, 275, 369) và danh mục biểu mẫu được cung cấp.
- Không tiết lộ mức lương cụ thể hoặc thông tin nhạy cảm. Yêu cầu liên hệ trực tiếp Lãnh đạo phòng HCNS cho các vấn đề bảo mật.
- SAU MỖI CÂU TRẢ LỜI: Phải gợi ý ít nhất 2 câu hỏi liên quan về chủ đề đó.

KIẾN THỨC NGHIỆP VỤ BÁM SÁT CÁC QUYẾT ĐỊNH (TUYỆT ĐỐI TUÂN THỦ):

1. ĐỊNH MỨC GIỜ GIẢNG (QUY TRÌNH QUAN TRỌNG):
- Khi Thầy/Cô hỏi về định mức giờ giảng, hãy trả lời chính xác như sau:
  + Định mức giờ giảng của nhà giáo dạy các môn học chung trong một năm học là 450 giờ chuẩn.
  + Định mức giờ giảng của nhà giáo dạy các môn học khác (trừ môn học chung) là 400 giờ chuẩn.

2. NỘI QUY CƠ QUAN (QĐ 674/QĐ-CKĐ):
- Thời gian làm việc: Từ thứ Hai đến thứ Sáu hằng tuần. Sáng từ 7h30 đến 11h30; Chiều từ 13h00 đến 17h00. Nghỉ thứ Bảy, Chủ nhật.
- Tác phong: Mặc trang phục gọn gàng, lịch sự. Đeo thẻ viên chức trong suốt thời gian làm việc.

3. QUY TẮC ỨNG XỬ (QĐ 673/QĐ-CKĐ):
- Giao tiếp văn minh, tận tụy. Nghe điện thoại: Xưng tên, đơn vị, trả lời chu đáo.

4. QUẢN LÝ VIỆC RA NƯỚC NGOÀI VIỆC RIÊNG (QĐ 74/QĐ-CKĐ):
- Hồ sơ: Đơn (Mẫu 01), Lịch trình (Mẫu 02), Tờ trình (Mẫu 04). Thăm thân cần Mẫu 03.
- Thời hạn: Nộp về Phòng HCNS trước 15 ngày làm việc. Báo cáo sau khi về (Mẫu 06A/06B) trong vòng 05 ngày.

5. TIẾP CÔNG DÂN & CÔNG TÁC CÁN BỘ:
- Tiếp công dân: Phòng A.105, sáng thứ Sáu tuần thứ 2 hàng tháng.
- Bổ nhiệm & Lưu trữ: Theo đúng quy trình tại QĐ 370 và QĐ 624.

6. PHỤ CẤP ƯU ĐÃI HÀNG THÁNG:
- Trả lời đúng nội dung: "Phụ cấp ưu đãi tính trên lương hệ số và phụ cấp chức vụ, không tính trên thâm niên. Công thức: Tiền phụ cấp ưu đãi = (Lương hệ số x Mức lương cơ sở) x % Phụ cấp ưu đãi. Lưu ý: Phụ cấp này chỉ được trả trong thời gian giảng viên thực tế có tham gia đứng lớp. Nếu đi học nước ngoài hoặc nghỉ thai sản thì sẽ không được hưởng khoản này trong thời gian đó."

7. MỨC LƯƠNG HƯU HÀNG THÁNG:
- Trả lời đúng nội dung: "Mức lương hưu được tính dựa trên tỷ lệ % hưởng nhân với mức bình quân tiền lương đóng BHXH. 
  + Lao động nữ: Đóng 15 năm hưởng 45%. Sau đó mỗi năm cộng thêm 2%, tối đa 75%. 
  + Lao động nam: Đóng 15 năm hưởng 40%. Sau đó mỗi năm cộng thêm 1% (để đạt 45% cần 20 năm), rồi mỗi năm tiếp theo cộng 2%, tối đa 75%."

8. TỶ LỆ TRÍCH ĐÓNG BHXH:
- Trả lời đúng nội dung: "Tổng cộng 32%, trong đó người sử dụng lao động đóng 21,5% (BHXH 17.5%, BHYT 3%, BHTN 1%), người lao động đóng 10,5% (BHXH 8%, BHYT 1,5%, BHTN 1%)". (Lưu ý: Mức đóng BHXH của đơn vị bao gồm cả bảo hiểm tai nạn lao động).

9. THỦ TỤC KHI MẤT SỔ BHXH:
- Trả lời: "Thầy/Cô có thể làm thủ tục cấp lại sổ BHXH do bị mất trên ứng dụng VssID hoặc nộp hồ sơ trực tiếp tại cơ quan BHXH nơi gần nhất ạ."

10. PHỤ CẤP THÂM NIÊN NHÀ GIÁO:
- Điều kiện: Đóng BHXH đủ 5 năm (60 tháng) được hưởng 5%, mỗi năm sau +1%.
- Thời gian không tính hưởng: Tập sự, nghỉ việc riêng không lương >= 1 tháng, nghỉ ốm/thai sản quá hạn BHXH, tạm đình chỉ...

QUY TẮC CUNG CẤP BIỂU MẪU & THỦ TỤC (TUÂN THỦ CHI TIẾT):

1. KHI HỎI CHUNG VỀ BIỂU MẪU: Hướng dẫn Thầy/Cô nhấn vào nút "Kho biểu mẫu" ở góc trên bên phải màn hình.

2. KHI HỎI CỤ THỂ TỪNG MẪU (Cung cấp link trực tiếp):
- "biên bản": https://docs.google.com/document/d/12aHa0tzZpPrDK6mWa4qV51SgEi2fbVgl/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true
- "công văn": https://docs.google.com/document/d/1k4OD5iy0XYWXX83s8k-MSi2p7NBbM8QV/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true
- "giấy mời": https://docs.google.com/document/d/1LDcDM4JgZ8fb-xsXoipsh0YGUx0djOea/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true
- "quyết định": Đưa 2 link gồm [Quyết định trực tiếp](https://docs.google.com/document/d/1aKcB_0OIKF4QKzkIS3kUU4tNTmILD00M/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true) và [Quyết định gián tiếp](https://docs.google.com/document/d/1_Rm0rEY2K_GBhMnGu88uhYKBIJ_sEdFb/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true)
- "thông báo", "kế hoạch": https://docs.google.com/document/d/1FWXJmnz7ZN7aPjDPeyKVMgS9EDLNb-8o/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true
- "dưỡng sức sau sinh": https://docs.google.com/document/d/1sKF6D87KLZB6oAra3kQyY1L_W_7koXVn/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true
- "cung cấp thông tin hưu trí": https://docs.google.com/document/d/1quJ6gH4CDEYAJdDpHMqiU0n_0PXvkDap/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true

3. THỦ TỤC NGHỈ PHÉP:
- Nghỉ phép trong nước: Mẫu cho [VC/NLĐ không chức vụ](https://docs.google.com/document/d/1XZHvMTTNX7jBftUMkI0wEeEbNRYYGdWr/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true) hoặc [Lãnh đạo/Quản lý](https://docs.google.com/document/d/10HGHmLad6fm1WasQIILcO4zB07eamius/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true).
- Nghỉ phép ra nước ngoài: Phải tải đủ 4 loại hồ sơ:
  1. Đơn xin: [Cho Đảng viên](https://docs.google.com/document/d/1RoZoDPT5utIOVDhvaaSwtrsJj52mNP6j/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true) / [Cho Quần chúng](https://docs.google.com/document/d/1n_FDdbRWRmdfuyRyvsuqd21cPS2y5rGQ/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true).
  2. [Mẫu kê khai lịch trình](https://docs.google.com/document/d/1OBX533XD0r1hOaau2ny3VVXRocU_1DSe/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true).
  3. [Mẫu khai thái độ chính trị thân nhân](https://docs.google.com/document/d/1C6G6AvnmiAfQAtJFh63u5qd_rkxKpXcG/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true) (nếu thăm thân).
  4. Báo cáo khi về: [Đảng viên](https://docs.google.com/document/d/1RdS9a-UWh0w5ymRn1jyVzP-83wtrIZGO/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true) / [Quần chúng](https://docs.google.com/document/d/1ajvzfZk9g09iWw8nOCRnSiv6cBoyb5HZ/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true).

4. THI ĐUA & KHEN THƯỞNG:
- Đầu năm học (Đăng ký): [Cá nhân](https://docs.google.com/document/d/1YMe9dQXwEFw8WWejMaBWDBvMlHKmMCk0/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true), [Tập thể](https://docs.google.com/document/d/1JFQcJEWnwtLRIlkWs6wm8dMbmvzuiX5w/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true) và [Tổng hợp đơn vị](https://docs.google.com/document/d/1CYjPHcLwabGe7blYNBxTVUk85nxxotOv/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true).
- Cuối năm học (Báo cáo thành tích): [Nhận Bằng khen](https://docs.google.com/document/d/1OUzNXu9CFzV35g93MMuIrUq8eN2_I_2B/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true), [Chiến sĩ thi đua](https://docs.google.com/document/d/1W3hEB5LJH21d9OBNqzG6V8iCOo_km143/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true), [Nhận Cờ thi đua](https://docs.google.com/document/d/1Oj5jRNybbN_P2sGIrApn6lQoRkwbRF8m/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true), [Huân chương/BK Chính phủ](https://docs.google.com/document/d/1rU2Oc5W04bbK79JsoVXsULudEKUHxfm0/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true).

5. ĐÁNH GIÁ VIÊN CHỨC:
- [VC không giữ chức vụ](https://docs.google.com/document/d/12oHVSKVln39FVpxEughkE5UuV1QhTmtd/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true)
- [VC giữ chức vụ Lãnh đạo](https://docs.google.com/document/d/1NUWQbsVUpBk2E2J3uh9OLzuzZlubp5vm/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true)
- [Tổng hợp đơn vị](https://docs.google.com/document/d/1bd8U03a3yN6yB--x7BiuQpP__nvNfgF8/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true)

6. MẪU KHÁC:
- [Đơn đào tạo, bồi dưỡng](https://docs.google.com/document/d/11pzI8hs-FBs-mOashlu08r4YbLPpJHkH/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true)

Nếu không biết câu trả lời: "Hiện tại Em chưa có thông tin chính xác về vấn đề này. Thầy /Cô vui lòng liên hệ trực tiếp phòng Hành chính - Nhân sự tại tầng Trệt, 287 Phan Đình Phùng để được hỗ trợ tốt nhất."
`;

export const QUICK_PROMPTS = [
  "Mẫu đơn nghỉ dưỡng sức sau sinh?",
  "Mẫu đơn cung cấp thông tin hưu trí?",
  "Cách tính mức lương hưu?",
  "Tỷ lệ trích đóng BHXH?",
  "Công thức tính phụ cấp ưu đãi?",
  "Mất sổ BHXH thì phải làm sao?",
  "Tại sao tiền BHXH nhận thấp?",
  "Khi nào được hưởng thâm niên?",
  "Thời gian không tính thâm niên?",
  "Nâng lương trước thời hạn?",
  "Lương khởi điểm của Thạc sĩ?",
  "Lương khởi điểm của Tiến sĩ?",
  "Lương khởi điểm bằng Đại học?",
  "Định mức giờ giảng một năm?",
  "Hồ sơ đi nước ngoài việc riêng?",
  "Mẫu đơn nghỉ phép trong nước?",
  "Địa chỉ phòng HCNS ở đâu?",
  "Lương cơ sở hiện nay là bao nhiêu?",
  "Mẫu biên bản họp chuẩn COFER?"
];

export const DOCUMENT_TEMPLATES: Template[] = [
  // ĐÁNH GIÁ VIÊN CHỨC
  {
    id: 'eval-1',
    name: 'Phiếu đánh giá VC (Không giữ chức vụ)',
    category: 'Đánh giá viên chức',
    description: 'Mẫu đánh giá dành cho giảng viên, viên chức chuyên môn hằng năm.',
    url: 'https://docs.google.com/document/d/12oHVSKVln39FVpxEughkE5UuV1QhTmtd/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'eval-2',
    name: 'Phiếu đánh giá VC (Lãnh đạo, quản lý)',
    category: 'Đánh giá viên chức',
    description: 'Mẫu đánh giá dành cho Trưởng/Phó các đơn vị.',
    url: 'https://docs.google.com/document/d/1NUWQbsVUpBk2E2J3uh9OLzuzZlubp5vm/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'eval-3',
    name: 'Tổng hợp kết quả đánh giá đơn vị',
    category: 'Đánh giá viên chức',
    description: 'Mẫu dành cho đơn vị tổng hợp kết quả gửi về Phòng HCNS.',
    url: 'https://docs.google.com/document/d/1bd8U03a3yN6yB--x7BiuQpP__nvNfgF8/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },

  // THI ĐUA & KHEN THƯỞNG
  {
    id: 'award-1',
    name: 'Đăng ký thi đua Cá nhân',
    category: 'Thi đua & Khen thưởng',
    description: 'Bản đăng ký danh hiệu cá nhân đầu năm học.',
    url: 'https://docs.google.com/document/d/1YMe9dQXwEFw8WWejMaBWDBvMlHKmMCk0/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'award-2',
    name: 'Đăng ký thi đua Tập thể',
    category: 'Thi đua & Khen thưởng',
    description: 'Bản đăng ký danh hiệu thi đua dành cho đơn vị.',
    url: 'https://docs.google.com/document/d/1JFQcJEWnwtLRIlkWs6wm8dMbmvzuiX5w/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'award-3',
    name: 'Tổng hợp đăng ký thi đua Đơn vị',
    category: 'Thi đua & Khen thưởng',
    description: 'Bản tổng hợp danh sách đăng ký của viên chức đơn vị.',
    url: 'https://docs.google.com/document/d/1CYjPHcLwabGe7blYNBxTVUk85nxxotOv/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'report-1',
    name: 'Báo cáo thành tích (Nhận Bằng khen)',
    category: 'Thi đua & Khen thưởng',
    description: 'Mẫu báo cáo đề nghị tặng Bằng khen các cấp.',
    url: 'https://docs.google.com/document/d/1OUzNXu9CFzV35g93MMuIrUq8eN2_I_2B/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'report-2',
    name: 'Báo cáo thành tích (Chiến sĩ thi đua)',
    category: 'Thi đua & Khen thưởng',
    description: 'Mẫu báo cáo đề nghị danh hiệu Chiến sĩ thi đua.',
    url: 'https://docs.google.com/document/d/1W3hEB5LJH21d9OBNqzG6V8iCOo_km143/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'report-3',
    name: 'Báo cáo nhận Cờ thi đua',
    category: 'Thi đua & Khen thưởng',
    description: 'Mẫu báo cáo thành tích đề nghị tặng Cờ thi đua.',
    url: 'https://docs.google.com/document/d/1Oj5jRNybbN_P2sGIrApn6lQoRkwbRF8m/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'report-4',
    name: 'Báo cáo Huân chương / BK Chính phủ',
    category: 'Thi đua & Khen thưởng',
    description: 'Mẫu báo cáo đề nghị khen thưởng cấp Nhà nước.',
    url: 'https://docs.google.com/document/d/1rU2Oc5W04bbK79JsoVXsULudEKUHxfm0/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
{
    id: 'report-5',
    name: 'Tờ trình Chính phủ',
    category: 'Thi đua & Khen thưởng',
    description: 'Tờ trình Thủ tướng Chính phủ nhận Bằng khen.',
    url: 'https://docs.google.com/document/d/1_KB_ZuiIefKeWM7kR2Ic42QuPO1g6ZZE/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },


  // NGHỈ PHÉP & ĐI NƯỚC NGOÀI
  {
    id: 'leave-1',
    name: 'Đơn nghỉ phép trong nước (VC/NLĐ)',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Mẫu đơn dành cho viên chức không giữ chức vụ.',
    url: 'https://docs.google.com/document/d/1XZHvMTTNX7jBftUMkI0wEeEbNRYYGdWr/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'leave-2',
    name: 'Đơn nghỉ phép trong nước (Lãnh đạo)',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Mẫu đơn dành cho lãnh đạo, quản lý đơn vị.',
    url: 'https://docs.google.com/document/d/10HGHmLad6fm1WasQIILcO4zB07eamius/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'abroad-1a',
    name: 'Đơn xin ra nước ngoài (Đảng viên)',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Hồ sơ 1 - Dành cho viên chức là Đảng viên.',
    url: 'https://docs.google.com/document/d/1RoZoDPT5utIOVDhvaaSwtrsJj52mNP6j/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'abroad-1b',
    name: 'Đơn xin ra nước ngoài (Quần chúng)',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Hồ sơ 1 - Dành cho VC không là Đảng viên.',
    url: 'https://docs.google.com/document/d/1n_FDdbRWRmdfuyRyvsuqd21cPS2y5rGQ/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'abroad-2',
    name: 'Mẫu kê khai lịch trình lưu trú',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Hồ sơ 2 - Chi tiết địa điểm và thời gian tại nước ngoài.',
    url: 'https://docs.google.com/document/d/1OBX533XD0r1hOaau2ny3VVXRocU_1DSe/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'abroad-3',
    name: 'Khai thái độ chính trị thân nhân',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Hồ sơ 3 - Dùng khi ghé thăm thân nhân ở nước ngoài.',
    url: 'https://docs.google.com/document/d/1C6G6AvnmiAfQAtJFh63u5qd_rkxKpXcG/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'abroad-4a',
    name: 'Báo cáo sau khi về nước (Đảng viên)',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Hồ sơ 4 - Báo cáo kết quả chuyến đi dành cho Đảng viên.',
    url: 'https://docs.google.com/document/d/1RdS9a-UWh0w5ymRn1jyVzP-83wtrIZGO/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'abroad-4b',
    name: 'Báo cáo sau khi về nước (Quần chúng)',
    category: 'Nghỉ phép & Đi nước ngoài',
    description: 'Hồ sơ 4 - Báo cáo kết quả chuyến đi dành cho Quần chúng.',
    url: 'https://docs.google.com/document/d/1ajvzfZk9g09iWw8nOCRnSiv6cBoyb5HZ/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },

  // VĂN THƯ & HÀNH CHÍNH
  {
    id: 'admin-1',
    name: 'Mẫu: Biên bản',
    category: 'Văn thư & Hành chính',
    description: 'Mẫu biên bản họp chuẩn thể thức văn bản hành chính.',
    url: 'https://docs.google.com/document/d/12aHa0tzZpPrDK6mWa4qV51SgEi2fbVgl/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'admin-2',
    name: 'Mẫu: Công văn',
    category: 'Văn thư & Hành chính',
    description: 'Mẫu công văn chuẩn dùng trong giao dịch hành chính.',
    url: 'https://docs.google.com/document/d/1k4OD5iy0XYWXX83s8k-MSi2p7NBbM8QV/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'admin-3',
    name: 'Mẫu: Giấy mời',
    category: 'Văn thư & Hành chính',
    description: 'Mẫu giấy mời dự họp/hội nghị chuẩn.',
    url: 'https://docs.google.com/document/d/1LDcDM4JgZ8fb-xsXoipsh0YGUx0djOea/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'admin-4',
    name: 'Mẫu: Quyết định (Trực tiếp)',
    category: 'Văn thư & Hành chính',
    description: 'Quyết định về nhân sự, khen thưởng trực tiếp.',
    url: 'https://docs.google.com/document/d/1aKcB_0OIKF4QKzkIS3kUU4tNTmILD00M/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'admin-5',
    name: 'Mẫu: Quyết định (Gián tiếp)',
    category: 'Văn thư & Hành chính',
    description: 'Quyết định ban hành Quy chế, Kế hoạch, Quy định.',
    url: 'https://docs.google.com/document/d/1_Rm0rEY2K_GBhMnGu88uhYKBIJ_sEdFb/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
  {
    id: 'admin-6',
    name: 'Mẫu: Thông báo, Kế hoạch...',
    category: 'Văn thư & Hành chính',
    description: 'Các văn bản hành chính khác chuẩn thể thức.',
    url: 'https://docs.google.com/document/d/1FWXJmnz7ZN7aPjDPeyKVMgS9EDLNb-8o/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },

  // ĐÀO TẠO
  {
    id: 'training-1',
    name: 'Đơn đề nghị Đào tạo, Bồi dưỡng',
    category: 'Đào tạo & Bồi dưỡng',
    description: 'Mẫu đơn xin tham gia các lớp bồi dưỡng nghiệp vụ.',
    url: 'https://docs.google.com/document/d/11pzI8hs-FBs-mOashlu08r4YbLPpJHkH/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },

  // BẢO HIỂM VÀ HƯU TRÍ
{
    id: 'insur-1',
    name: 'Đơn nghỉ dưỡng sức sau sinh',
    category: 'Bảo hiểm xã hội',
    description: 'Mẫu đơn xin nghỉ dưỡng sức khoẻ sau khi đã nghỉ hết thời gian nghỉ thai sản theo quy định.',
    url: 'https://docs.google.com/document/d/1sKF6D87KLZB6oAra3kQyY1L_W_7koXVn/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },
{
    id: 'retire-1',
    name: 'Đơn đề nghị cung cấp thông tin hưu trí',
    category: 'Bảo hiểm xã hội',
    description: 'Mẫu đơn đề nghị cung cấp thông tin liên quan đến chế độ hưu trí.',
    url: 'https://docs.google.com/document/d/1quJ6gH4CDEYAJdDpHMqiU0n_0PXvkDap/edit?usp=sharing&ouid=117463324117532228148&rtpof=true&sd=true'
  },


  // QUY CHẾ VĂN BẢN (Dựa trên PDF)
  {
    id: 'reg-674',
    name: 'Nội quy cơ quan (QĐ 674/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định về thời gian làm việc, kỷ luật lao động và trật tự cơ quan.',
    url: 'https://drive.google.com/file/d/1TnUundnSiAspmIN5uhvYeASDbp2WXA-z/view?usp=sharing'
  },
  {
    id: 'reg-673',
    name: 'Quy tắc ứng xử (QĐ 673/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Chuẩn mực đạo đức và hành vi giao tiếp của viên chức, NLĐ.',
    url: 'https://drive.google.com/file/d/1GeOzpmSwEM9YYy1iycm16nTp35XWYxz3/view?usp=sharing'
  },
  {
    id: 'reg-74',
    name: 'Quy chế đi nước ngoài việc riêng (QĐ 74/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy trình và hồ sơ bắt buộc khi ra nước ngoài vì mục đích cá nhân.',
    url: 'https://drive.google.com/file/d/1afzXX6WIN0cKtuEM_zouzGs0nZDus-d0/view?usp=sharing'
  },
  {
    id: 'reg-194',
    name: 'Quy định Tiếp công dân (QĐ 194/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Tổ chức tiếp công dân và giải quyết khiếu nại tố cáo hằng tháng.',
    url: 'https://drive.google.com/file/d/15TTTQqF8mNWIn8v7LOuIGaQElL6_HekT/view?usp=sharing'
  },
  {
    id: 'reg-370',
    name: 'Quy chế Công tác cán bộ (QĐ 370/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định về bổ nhiệm, luân chuyển và quản lý lãnh đạo.',
    url: 'https://drive.google.com/file/d/1l1zr4NRo0wQf3vQEYpXUahM2zmOuqt8z/view?usp=sharing'
  },
 {
    id: 'reg-371',
    name: 'Quy chế Công tác Văn thư (QĐ 371/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định thể thức văn bản, font chứ, cỡ chữ...',
    url: 'https://drive.google.com/file/d/1HPzJ6Tqnl6syVhwHRr31UkCLr1vDJo4h/view?usp=sharing'
  },
 {
    id: 'reg-624',
    name: 'Quy chế Lưu trữ (QĐ 624/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quản lý tài liệu lưu trữ và cơ sở dữ liệu số của Trường.',
    url: 'https://drive.google.com/file/d/1IlMEGAfMKcwwfYjngvL1Mf4vZXVfUTuL/view?usp=sharing'
  },
  {
    id: 'reg-275',
    name: 'Quy chế Thanh tra, kiểm tra (QĐ 275/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Công tác thanh tra, kiểm tra nội bộ các hoạt động của Trường.',
    url: 'https://drive.google.com/file/d/1oqjOQOgdJ7lP8BDNR9FAiU3An0HxHgxv/view?usp=sharing'
  },
  {
    id: 'reg-369',
    name: 'Quy định Chức danh nghề nghiệp (QĐ 369/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Tiêu chuẩn chức danh nghề nghiệp và thay đổi hạng viên chức.',
    url: 'https://drive.google.com/file/d/1oftFZgtOqJEzr8oV8y-tZGjIqs3agtIk/view?usp=sharing'
  },
{
    id: 'reg-368',
    name: 'Quy chế tuyển dụng (QĐ 368/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định về tuyển dụng và sử dụng viên chức.',
    url: 'https://drive.google.com/file/d/1orGTUcLHNHnkzDxTtPYdknbw9Nnh7_vc/view?usp=sharing'
  },
{
    id: 'reg-372',
    name: 'Quy chế thi đua, khen thưởng (QĐ 372/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy trình đăng ký, xét thi đua, khen thưởng.',
    url: 'https://drive.google.com/file/d/1Kiw4sZ1ukVqbc5glMV3qkrdA1j3OEuNP/view?usp=sharing'
  },
{
    id: 'reg-374',
    name: 'Quy chế đánh giá viên chức (QĐ 374/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định trình tự, đánh giá, xếp loại viên chức.',
    url: 'https://drive.google.com/file/d/1-TyqaLwWcj3wNVh3WoCJvhU645jeOyCa/view?usp=sharing'
  },
{
    id: 'reg-375',
    name: 'Quy chế đào tạo, bồi dưỡng (QĐ 375/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định, quy trình thủ tục đề nghị học tập nâng cao trình độ.',
    url: 'https://drive.google.com/file/d/1_h_J7DOPYitDn_Cgzd-k44rPTd_4VwZW/view?usp=sharing'
  },
{
    id: 'reg-675',
    name: 'Quy chế nâng bậc lương (QĐ 675/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định nâng bậc lương thường xuyên, trước thời hạn, phụ cấp.',
    url: 'https://drive.google.com/file/d/1VHvAmcp17isd8jEU_NXbZW-VRINw8f8n/view?usp=sharing'
  },
{
    id: 'reg-830',
    name: 'Quy chế nhà giáo (QĐ 830/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định chế độ làm việc đối với nhà giáo.',
    url: 'https://drive.google.com/file/d/1doiD_SAAm2x9TI6FFYTDD_M1ZEtkyiTJ/view?usp=sharing'
  },
{
    id: 'reg-831',
    name: 'Quy chế VC, NLĐ làm hành chính (QĐ 831/QĐ-CKĐ)',
    category: 'Quy chế & Quy định',
    description: 'Quy định đối với viên chức, người lao động làm công tác hành chính.',
    url: 'https://drive.google.com/file/d/1f4I9mLD2-XplWD-rwx7-arCvp7RWntbi/view?usp=sharing'
  },
];
