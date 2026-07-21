/* ==========================================================================
   YHCT ÔN THI - DỮ LIỆU TRẠM GIẢI TRÍ (GAMES & FLASHCARDS DATA)
   Tách riêng dữ liệu Flashcards 3D, Mini-game Nối Tơ Hồng, Bắt Lỗi Bệnh Án
   và Kê Đơn Tốc Độ 10s giúp mở rộng nội dung phong phú, tra cứu dễ dàng.
   ========================================================================== */

// 1. DATA BÀI TẬP MA TRẬN FLASHCARD 3D (45+ CÂU PHẢN XẠ Y LÝ & BỆNH HỌC)
window.matrixFlashcards = [
  { q: "Mạch Phù khẩn, Rêu lưỡi trắng mỏng, Sợ lạnh hắt xì. Thuộc thể bệnh & Bài thuốc gì?", a: "Cảm mạo phong hàn — Bài Kinh phòng bại độc tán / Cửu vị khương hoạt thang" },
  { q: "Sốt cao, đau họng, đờm vàng, Rêu lưỡi vàng mỏng, Mạch Phù sác. Thuộc thể bệnh & Bài thuốc gì?", a: "Cảm mạo phong nhiệt — Bài Ngân kiều tán" },
  { q: "Méo miệng sang trái, mắt phải nhắm không kín, Rêu trắng mỏng, Mạch Phù. Là bệnh danh & thể gì?", a: "Khẩu nhãn oa tà (Liệt VII ngoại biên) — Thể Phong hàn tập lạc" },
  { q: "Bài thuốc chủ trị Liệt VII ngoại biên thể Phong hàn tập lạc?", a: "Khương hoạt thắng thấp thang / Đại tần giao thang gia giảm" },
  { q: "Cơ mặt liệt kéo dài, nhẽo, sắc mặt nhợt, Mạch Tế nhược. Pháp trị & Bài thuốc?", a: "Bổ khí dưỡng huyết, thông kinh hoạt lạc — Bài Bát trân thang gia giảm" },
  { q: "Đau thắt lưng lan mông đùi (P) sau bê nặng, đau cố định như kim châm, đau tăng về đêm, lưỡi tím điểm ứ. Là thể gì?", a: "Tọa cốt thống — Thể Khí trệ huyết ứ (bê nặng)" },
  { q: "Bài thuốc chủ trị Đau thần kinh tọa thể Khí trệ huyết ứ?", a: "Thân thống trục ứ thang" },
  { q: "Đau thắt lưng lan chân mạn tính, đau tăng khi mưa lạnh, mỏi gối ù tai, rêu trắng. Thể bệnh & Bài thuốc?", a: "Tọa cốt thống mạn — Thể Phong hàn thấp tý kiêm Can Thận hư — Bài Độc hoạt ký sinh thang" },
  { q: "Khớp gối sưng to lạo xạo nhưng sờ LẠNH NGẮT, da tái nhợt, thích chườm ngải nóng, mệt mỏi. Thể bệnh là gì?", a: "Hạc tất phong — Thể Phong hàn thấp tý kiêm Khí huyết hư (Độc hoạt ký sinh / Bát trân)" },
  { q: "Di chứng đột quỵ yếu nửa người, da khô gầy, nóng lòng bàn tay chân (ngũ tâm phiền nhiệt), rêu ít, Mạch Tế sác. Thể bệnh & Bài thuốc?", a: "Trúng phong di chứng — Thể Can Thận âm hư (Hư Nhiệt) — Bài Lục vị địa hoàng thang gia giảm" },
  { q: "Di chứng đột quỵ liệt nửa người, mệt mỏi thều thào, tự hãn, sắc mặt nhợt, lưỡi nhợt điểm ứ. Thể bệnh & Bài thuốc?", a: "Trúng phong di chứng — Thể Khí hư huyết ứ — Bài Bổ dương hoàn ngũ thang" },
  { q: "Đau thắt lưng cấp sau cúi khiêng nặng, ấn đau chói thắt lưng, Mạch Trầm sáp. Pháp trị?", a: "Hành khí hoạt huyết, hóa ứ thông lạc chỉ thống" },
  { q: "Ngủ dậy vẹo cổ (P), gáy bả vai co cứng đau, sợ gió lạnh, Rêu trắng mỏng, Mạch Phù khẩn. Thể bệnh & Bài thuốc?", a: "Lạc chẩm — Thể Phong hàn (Cát cánh thang gia Khương hoạt, Bạc hà)" },
  { q: "Mất ngủ mạn tính trằn trọc, cáu gắt ngực sườn trướng nhưng lại thèm ngọt, chướng bụng phân lỏng. Thể bệnh & Bài thuốc?", a: "Thất miên — Thể Can uất Tỳ hư — Bài Tiêu dao tán gia giảm" },
  { q: "Mất ngủ trằn trọc cả đêm, tâm bứt rứt, hỏa bốc, nóng lòng bàn tay chân, ù tai. Thể bệnh & Cặp vị thuốc đặc trị?", a: "Thất miên — Thể Tâm Thận bất giao — Cặp vị Hoàng liên (tả Tâm hỏa) & Nhục quế (dẫn hỏa quy nguyên)" },
  { q: "Đau thượng vị âm ỉ nôn nước trong mạn tính thích ấm, sau ăn no tiệc nôn thức ăn chua hôi ứ đọng. Thể bệnh?", a: "Vị quản thống — Thể Tỳ Vị hư hàn kiêm Thực tích (Lý trung thang + Bảo hòa hoàn)" },
  { q: "Đau cổ gáy lan bả vai cánh tay (P) tê ngón tay, vùng vai NÓNG RÁT thích mát, Rêu vàng, Mạch Phù sác. Thể bệnh & Chống chỉ định?", a: "Kiên tý thống — Thể Phong thấp nhiệt. CHỐNG CHỈ ĐỊNH Cứu ngải / Chườm nóng." },
  { q: "Chóng mặt trần nhà quay mòng mòng, đầu NẶNG TRỆ NHƯ ĐEO ĐÁ, lợm giọng nôn đờm dãi nhớt, HA 125/80. Thể bệnh & Bài thuốc?", a: "Huyễn vựng — Thể Đờm thấp (Bán hạ bạch truật thiên ma thang)" },
  { q: "Chóng mặt TỐI SẦM MẶT MŨI KHI ĐỨNG DẬY, mệt mỏi thều thào, da niêm nhợt, HA hạ 95/60. Thể bệnh & Bài thuốc?", a: "Huyễn vựng — Thể Khí huyết hư (Bát trân thang / Bổ trung ích khí thang)" },
  { q: "Châm cứu thể Huyết ứ dùng thủ thuật & huyệt hội nào?", a: "Châm tả, Trích huyết nặn máu ứ tím + Huyệt Huyết hội (Cách du)" },

  // CÁC CÂU BỔ SUNG NÂNG CAO
  { q: "Sốt cao đại khát, sợ nhiệt không sợ lạnh, mồ hôi ra như tắm, Mạch Hồng đại. Thương hàn thuộc Kinh chứng nào?", a: "Dương minh Kinh chứng — Bài Bạch hổ thang (Quân: Thạch cao, Tri mẫu)" },
  { q: "Lúc sốt lúc lạnh (Hàn nhiệt qua lại), đắng miệng, khô họng, hoa mắt, ngực sườn đầy tức. Thuộc Kinh chứng nào?", a: "Thiếu dương Kinh chứng — Bài Tiểu sài hồ thang (Sài hồ, Hoàng cầm)" },
  { q: "Ho khò khè thở dốc, ngực tức, đờm trắng loãng dễ khạc, sợ lạnh, Mạch Phù khẩn. Thể bệnh & Bài thuốc?", a: "Khai suyễn / Khái thấu — Thể Phong hàn phạm Phế — Bài Nhị trần gia Ma hoàng, Hạnh nhân / Định suyễn thang" },
  { q: "Ho ra mủ hôi thối như vữa bánh đậu, sốt cao ngực đau chói, rêu vàng nhớt, Mạch Hoạt sác. Bệnh danh YHCT?", a: "Phế ung (Áp xe phổi) — Bài Đình lịch đại táo tỳ phế thang / Vĩ thược tán" },
  { q: "Táo bón lâu ngày ở người già, phân khô cứng, sắc mặt nhợt, mệt mỏi thều thào, Mạch Tế nhược. Thể bệnh & Bài thuốc?", a: "Táo kết — Thể Khí huyết hư — Bài Bổ trung ích khí thang gia Ma nhân, Đương quy / Hoàng kỳ thang" },
  { q: "Táo bón cấp tính sốt cao, bụng cứng ấn đau chói, nứt hậu môn, rêu vàng khô gai, Mạch Trầm thực. Bài thuốc?", a: "Táo kết — Thể Nhiệt kết Dương minh — Bài Đại thừa khí thang (Đại hoàng, Mang tiêu, Chỉ thực, Hậu phác)" },
  { q: "Tiêu chảy phân sống nát lúc tảng sáng (Ngũ canh tả), lưng gối lạnh đau, Mạch Trầm nhược. Thể bệnh & Bài thuốc?", a: "Tiết tả — Thể Thận dương hư (Mệnh môn hỏa suy) — Bài Tứ thần丸 (Tứ thần hoàn)" },
  { q: "Tiểu buốt, tiểu rắt, nước tiểu đục đỏ gắt, đau tức vùng bụng dưới, Rêu vàng dầy. Bệnh danh & Bài thuốc?", a: "Lâm chứng (Nhiệt lâm / Huyết lâm) — Thể Bàng quang thấp nhiệt — Bài Bát bảo tán / Thang xích linh tán" },
  { q: "Bổ Thận âm dùng bài thuốc gốc nào? Bổ Thận dương gia thêm 2 vị thuốc nào?", a: "Bổ Thận âm: Lục vị địa hoàng. Bổ Thận dương gia thêm Nhục quế & Phụ tử (thành Bát vị quế phụ / Hữu quy)" },
  { q: "Bài thuốc 'Tam bổ tam tả' nổi tiếng trong YHCT là bài nào? Kể tên 3 vị Bổ và 3 vị Tả?", a: "Lục vị địa hoàng thang. 3 Bổ (Thục địa, Sơn thù, Hoài sơn). 3 Tả (Trạch tả, Đan bì, Phục linh)" },
  { q: "Nguyên tắc châm cứu: 'Bệnh nhiệt thì châm..., bệnh hàn thì..., bệnh hư thì..., bệnh thực thì...'?", a: "Nhiệt thì châm nông/tả, Hàn thì cứu/ôn châm, Hư thì bổ, Thực thì tả" },
  { q: "Vị trí huyệt Ủy trung và ứng dụng nổi tiếng trong Lục tổng huyệt?", a: "Chính giữa nếp lằn khoeo chân — 'Yêu bối Ủy trung cầu' (Chủ trị đau lưng, thắt lưng, đùi mông)" },
  { q: "Vị trí huyệt Hợp cốc và ứng dụng trong Lục tổng huyệt?", a: "Giữa kẽ xương bàn ngón tay 1 và 2 — 'Diện khẩu Hợp cốc thu' (Chủ trị bệnh vùng mặt, miệng, răng, mắt)" },
  { q: "Huyệt Hội của Huyết (Huyết hội) là huyệt nào? Vị trí ở đâu?", a: "Cách du — Dưới mỏm gai đốt sống lưng T7 đo ra 1.5 thốn" },
  { q: "Huyệt Hội của Cân (Cân hội) là huyệt nào? Vị trí ở đâu?", a: "Dương lăng tuyền — Lõm trước dưới đầu xương chày" },
  { q: "Huyệt Hội của Cốt (Cốt hội) là huyệt nào? Vị trí ở đâu?", a: "Đại trữ — Dưới mỏm gai đốt sống T1 đo ra 1.5 thốn" },
  { q: "Huyệt Hội của Khí (Khí hội) là huyệt nào? Vị trí ở đâu?", a: "Đản trung (Đản trung) — Chính giữa đường nối 2 đầu núm vú trên xương ức" },
  { q: "Huyệt Hội của Tạng (Tạng hội) là huyệt nào? Vị trí ở đâu?", a: "Chương môn — Đầu tự do của xương sườn số 11" },
  { q: "Khi gặp sự cố Say châm (Vượng châm), 3 huyệt cấp cứu hàng đầu cần bấm ngay là gì?", a: "Nhân trung, Thái dương, Hợp cốc (kèm rút kim, cho nằm đầu thấp, uống nước ấm)" },
  { q: "Bệnh nhân đau khớp gối sưng nóng đỏ rát (Nhiệt tý), chống chỉ định tuyệt đối phương pháp nào?", a: "Chống chỉ định Cứu ngải, Ôn châm, Chườm nóng (Càng chườm nóng càng làm tổn thương bùng phát sưng huyết)" },
  { q: "Đau thắt lưng cấp sau bê nặng (Khí trệ huyết ứ), tư thế nằm ngửa chuẩn giúp giảm căng dây thần kinh tọa?", a: "Kê gối nhỏ dưới khoeo chân (gập nhẹ háng và gối) để giảm kéo căng rễ thần kinh thắt lưng" },
  { q: "Trong châm cứu, 'Liệt khuyết' thuộc đường kinh nào và chủ trị vùng nào trong Lục tổng huyệt?", a: "Kinh Thủ thái âm Phế — 'Cổ gáy Liệt khuyết tầm' (Chủ trị ho, đau cổ gáy, cảm mạo)" },
  { q: "Công thức bài thuốc 'Giao thái hoàn' đặc trị Tâm Thận bất giao gồm 2 vị nào?", a: "Hoàng liên (1 đồng) tả Tâm hỏa + Nhục quế (1 quẻ) dẫn hỏa quy nguyên (ôn Thận thủy)" },
  { q: "Pháp trị chuẩn cho bệnh nhân Liệt VII ngoại biên thể Phong hàn tập lạc?", a: "Khu phong tán hàn, thông kinh hoạt lạc (Dùng bài Khương hoạt thắng thấp thang gia giảm)" },
  { q: "Đau vai gáy lan xuống tay tê ngón tay, gặp lạnh đau tăng, vận động cổ gáy hạn chế. Thể bệnh YHCT?", a: "Kiên tý thống — Thể Phong hàn thấp tý (Dùng bài Quyên tý thang gia giảm)" }
];

// 2. DATA GAME NỐI TƠ HỒNG (MATCHING GAME - 20 CẶP NỐI Y LÝ)
window.matchData = [
  { id: 1, left: "Sợ lạnh, Hắt xì nước mũi trong, Mạch Phù khẩn", right: "Cảm mạo phong hàn (Kinh phòng bại độc)", target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Cảm mạo)' } },
  { id: 2, left: "Đau thắt lưng lan chân, đau nhói kim châm đêm", right: "Tọa cốt thống — Thể Khí trệ huyết ứ", target: { type: 'cheat', tab: 'm4', label: 'Bài Thân thống trục ứ thang' } },
  { id: 3, left: "Yếu nửa người, nóng lòng bàn tay chân, rêu ít", right: "Trúng phong — Thể Can Thận âm hư", target: { type: 'cheat', tab: 'm4', label: 'Bài Lục vị địa hoàng thang' } },
  { id: 4, left: "Gối sưng to lạo xạo, sờ LẠNH NGẮT, da nhợt", right: "Hạc tất phong — Thể Phong hàn thấp tý", target: { type: 'cheat', tab: 'm4', label: 'Bài Độc hoạt ký sinh thang' } },
  { id: 5, left: "Méo miệng, nhắm mắt không kín sau đi đêm lạnh", right: "Khẩu nhãn oa tà — Phong hàn tập lạc", target: { type: 'cheat', tab: 'm4', label: 'Bài Khương hoạt thắng thấp' } },
  { id: 6, left: "Mất ngủ trằn trọc, cáu gắt nhưng thèm ngọt, phân nát", right: "Thất miên — Thể Can uất Tỳ hư", target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Mất ngủ)' } },
  { id: 7, left: "Chóng mặt trần nhà quay, ĐẦU NẶNG NHƯ ĐEO ĐÁ", right: "Huyễn vựng — Thể Đờm thấp (Bán hạ BTTM)", target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Huyễn vựng)' } },
  { id: 8, left: "Đau gáy lan tay (P), gáy NÓNG RÁT thích mát", right: "Kiên tý thống — Thể Phong thấp nhiệt", target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' } },
  { id: 9, left: "Ngũ canh tả (ỉa chảy lúc 5h sáng), chân tay lạnh ngắt", right: "Tiết tả — Thể Thận dương hư (Tứ thần hoàn)", target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' } },
  { id: 10, left: "Sốt cao đại khát, mồ hôi như tắm, Mạch Hồng đại", right: "Thương hàn Dương minh Kinh chứng (Bạch hổ tán)", target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' } },
  { id: 11, left: "Tiểu buốt rắt, nước tiểu đỏ đục, rêu vàng dầy", right: "Lâm chứng — Bàng quang thấp nhiệt (Bát bảo tán)", target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' } },
  { id: 12, left: "Ho mủ hôi thối vữa bánh đậu, sốt ngực đau chói", right: "Phế ung — Thể Thấp nhiệt uất Phế", target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' } },
  { id: 13, left: "Liệt nửa người sau đột quỵ, mệt thều thào, tự hãn", right: "Trúng phong di chứng — Thể Khí hư huyết ứ", target: { type: 'cheat', tab: 'm4', label: 'Bài Bổ dương hoàn ngũ thang' } },
  { id: 14, left: "Táo bón người già phân khô, mệt mỏi, mạch Tế nhược", right: "Táo kết — Thể Khí huyết hư (Bổ trung IH)", target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' } },
  { id: 15, left: "Đau thắt lưng âm ỉ kéo dài, mỏi gối, tiểu đêm 4 lần", right: "Yêu thống mạn — Thể Thận dương hư (Hữu quy)", target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Đau thắt lưng)' } },
  { id: 16, left: "Đau vùng thượng vị âm ỉ thích ấm, nôn nước trong", right: "Vị quản thống — Thể Tỳ Vị hư hàn (Lý trung)", target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' } },
  { id: 17, left: "Ngủ dậy vẹo cổ, đau cứng gáy, sợ gió lạnh", right: "Lạc chẩm — Thể Phong hàn (Cát cánh thang)", target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Vẹo cổ)' } },
  { id: 18, left: "Hàn nhiệt qua lại (lúc sốt lúc lạnh), đắng miệng", right: "Thương hàn Thiếu dương chứng (Tiểu sài hồ)", target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' } },
  { id: 19, left: "Đau đầu hoa mắt vã mồ hôi lạnh khi châm cứu", right: "Tai biến Say châm (Bấm Nhân trung, Thái dương)", target: { type: 'cheat', tab: 'm5', label: 'Xử trí Say châm' } },
  { id: 20, left: "Huyệt Hội của Huyết trích máu chữa đau Huyết ứ", right: "Huyệt Cách du (Dưới gai T7 ra 1.5 thốn)", target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' } }
];

// 3. DATA GAME BẮT LỖI BỆNH ÁN (FIND ERROR GAME - 12 CA BỆNH BẪY LÂM SÀNG)
window.errorData = [
  {
    title: "Bệnh án 1: Liệt VII Ngoại Biên Cấp do Phong Nhiệt",
    text: "Bệnh nhân nam 40t, méo miệng (P) sau đi nhậu về. Khám thấy: Sốt 38.2°C, đau chói tai (P), họng khô, {Rêu lưỡi trắng dầy nhớt}, Mạch Phù sác.",
    wrong: "Rêu lưỡi trắng dầy nhớt",
    fix: "Thể Phong nhiệt (sốt, đau tai, họng khô, mạch Phù sác) rêu lưỡi phải VÀNG MỎNG, không được trắng dầy nhớt!",
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Liệt VII)' }
  },
  {
    title: "Bệnh án 2: Đau Khớp Gối Mạn (Hạc Tất Phong)",
    text: "Bệnh nhân nữ 65t, gối sưng to phình đau lạo xạo. Khám thấy: Sờ vùng gối {Sực nóng đỏ rát}, da tái nhợt, thích chườm ngải nóng, Mạch Tế nhược.",
    wrong: "Sực nóng đỏ rát",
    fix: "Bệnh nhân thích chườm ngải nóng, da tái nhợt, mạch Tế nhược thuộc Hàn thấp tý kiêm Khí hư. Gối sờ phải LẠNH NGẮT, không được sực nóng đỏ rát (Nhiệt tý)!",
    target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Khớp gối' }
  },
  {
    title: "Bệnh án 3: Rối Loạn Tiền Đình do Đờm Thấp",
    text: "Bệnh nhân nam 55t béo bệu chóng mặt trần nhà quay. Khám thấy: Đầu nặng trệ như đeo đá, buồn nôn đờm dãi, {Huyết áp tăng vọt 180/100 mmHg}, rêu trắng dầy nhớt.",
    wrong: "Huyết áp tăng vọt 180/100 mmHg",
    fix: "Huyễn vựng thể Đờm thấp (đầu nặng như đeo đá, nôn đờm dãi) chỉ số Huyết áp thường BÌNH THƯỜNG (120/80 mmHg). Tăng cao 180 mmHg là thể Can dương thượng ngoạn!",
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Huyễn vựng)' }
  },
  {
    title: "Bệnh án 4: Đau Thần Kinh Tọa do Khí Trệ Huyết Ứ",
    text: "Bệnh nhân nam 40t bê vác tạ đau thắt lưng lan chân (T). Khám thấy: Đau cố định như kim châm, đau tăng về đêm, {Lưỡi bệu nhợt rêu trắng ướt}, Mạch Trầm sáp.",
    wrong: "Lưỡi bệu nhợt rêu trắng ướt",
    fix: "Thể Huyết ứ đau nhói kim châm đêm lưỡi phải có NỐT ĐIỂM Ứ HUYẾT TÍM, không thể là lưỡi bệu nhợt rêu trắng ướt của Tỳ hư hàn!",
    target: { type: 'cheat', tab: 'm4', label: 'Bài Thân thống trục ứ thang' }
  },
  {
    title: "Bệnh án 5: Cảm Mạo Phong Hàn Cấp",
    text: "Bệnh nhân nam 28t đi mưa lạnh về sốt nhẹ 37.8°C. Khám thấy: Sợ lạnh hắt xì nước mũi trong, đau mỏi toàn thân, {Mạch Trầm tế sác}, Rêu trắng mỏng.",
    wrong: "Mạch Trầm tế sác",
    fix: "Bệnh cảm mạo ngoại tà ở Biểu mạch bắt buộc phải PHÙ (Phù khẩn). Mạch Trầm tế sác là mạch của Lý hư nhiệt, hoàn toàn sai với ngoại cảm phong hàn ở biểu!",
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Cảm mạo)' }
  },
  {
    title: "Bệnh án 6: Viêm Khớp Vai Thể Phong Thấp Nhiệt",
    text: "Bệnh nhân nữ 50t đau rát bả vai cánh tay (P). Khám thấy: Vùng vai sưng nóng rát thích chườm mát, {Chỉ định cấp tốc Cứu ngải ấm 20 phút}, rêu vàng mỏng, mạch Phù sác.",
    wrong: "Chỉ định cấp tốc Cứu ngải ấm 20 phút",
    fix: "Thể Nhiệt tý (sưng nóng rát thích mát) CHỐNG CHỈ ĐỊNH tuyệt đối cứu ngải chườm nóng! Cứu ngải nóng sẽ làm tăng xung huyết uất nhiệt thiêu đốt tổn thương nặng thêm!",
    target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' }
  },
  {
    title: "Bệnh án 7: Di Chứng Đột Quỵ Thể Khí Hư Huyết Ứ",
    text: "Bệnh nhân nam 62t tai biến 3 tháng yếu nửa người (T). Khám thấy: Mệt mỏi thều thào, tự hãn vã mồ hôi, {Nóng lòng bàn tay chân bứt rứt}, lưỡi nhợt điểm ứ, mạch Tế sáp.",
    wrong: "Nóng lòng bàn tay chân bứt rứt",
    fix: "Nóng lòng bàn tay chân (ngũ tâm phiền nhiệt) là triệu chứng của Âm hư nhiệt. Thể Khí hư huyết ứ bệnh nhân sắc mặt nhợt, chân tay lạnh, không có ngũ tâm phiền nhiệt!",
    target: { type: 'cheat', tab: 'm4', label: 'Bài Bổ dương hoàn ngũ thang' }
  },
  {
    title: "Bệnh án 8: Thất Miên (Mất Ngủ) Thể Can Uất Tỳ Hư",
    text: "Bệnh nhân nữ 42t trằn trọc mất ngủ cáu gắt. Khám thấy: Ngực sườn chướng đầy, thèm ngọt, {Phân táo kết cứng như phân dê}, rêu trắng mỏng, mạch Huyền.",
    wrong: "Phân táo kết cứng như phân dê",
    fix: "Thể Can uất Tỳ hư triệu chứng Tỳ hư điển hình là phân nát lỏng, chướng bụng sau ăn. Phân táo cứng như phân dê là thể Can hỏa / Nhiệt kết!",
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Mất ngủ)' }
  },
  {
    title: "Bệnh án 9: Vị Quản Thống Thể Tỳ Vị Hư Hàn",
    text: "Bệnh nhân nam 50t đau thượng vị âm ỉ nhiều năm. Khám thấy: Đau thích chườm ấm bấm nắn, nôn nước trong, {Mạch Phù sác có lực}, rêu trắng nhầy.",
    wrong: "Mạch Phù sác có lực",
    fix: "Tỳ Vị hư hàn là bệnh ở Lý thuộc Hư Hàn, mạch bắt buộc phải Trầm trì hoặc Trầm tế nhược vô lực. Mạch Phù sác có lực là mạch biểu nhiệt / thực nhiệt!",
    target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' }
  },
  {
    title: "Bệnh án 10: Huyễn Vựng Thể Khí Huyết Hư",
    text: "Bệnh nhân nữ 35t chóng mặt tối sầm mặt mũi khi đứng dậy. Khám thấy: Da niêm mạc nhợt, mệt mỏi, {Mạch Trầm thực huyền sáp}, lưỡi nhợt rêu mỏng.",
    wrong: "Mạch Trầm thực huyền sáp",
    fix: "Thể Khí huyết hư mạch bắt buộc phải Tế nhược vô lực (mạch nhỏ yếu). Mạch Trầm thực huyền sáp là mạch của thực chứng/khí trệ huyết ứ!",
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Huyễn vựng)' }
  },
  {
    title: "Bệnh án 11: Lạc Chẩm (Vẹo Cổ Cấp) Thể Phong Hàn",
    text: "Bệnh nhân nam 30t ngủ bật quạt đêm dậy vẹo cổ (T). Khám thấy: Cơ gáy co cứng đau chói, ngoái đầu hạn chế, {Sợ nóng thích chườm đá lạnh}, mạch Phù khẩn.",
    wrong: "Sợ nóng thích chườm đá lạnh",
    fix: "Thể Phong hàn nhiễm lạnh bệnh nhân sợ lạnh thích chườm ấm giảm đau. Sợ nóng thích chườm đá lạnh là biểu hiện của Phong nhiệt!",
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Vẹo cổ)' }
  },
  {
    title: "Bệnh án 12: Lâm Chứng (Viêm Đường Tiết Niệu) Thể Bàng Quang Thấp Nhiệt",
    text: "Bệnh nhân nữ 28t tiểu buốt rắt gắt. Khám thấy: Nước tiểu đục đỏ, sốt nhẹ, {Lưỡi bệu nhợt rêu trắng ướt}, mạch Hoạt sác.",
    wrong: "Lưỡi bệu nhợt rêu trắng ướt",
    fix: "Thấp nhiệt bàng quang (viêm cấp) lưỡi bắt buộc phải ĐỎ, RÊU VÀNG DẦY NHỚT. Lưỡi bệu nhợt rêu trắng ướt là của Thận Tỳ hư hàn!",
    target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' }
  }
];

// 4. DATA GAME KÊ ĐƠN TỐC ĐỘ 10 GIÂY (SPEED QUIZ GAME - 25 CÂU HỎI PHẢN XẠ NĂNG ĐỘNG)
window.speedQuizData = [
  {
    q: "Bệnh nhân đau thắt lưng âm ỉ kéo dài, mỏi gối, sợ lạnh, tay chân lạnh ngắt, tiểu đêm 4 lần. Pháp trị chuẩn?",
    options: ["Khu phong tán hàn giải biểu", "Ôn bổ Thận dương, trợ hỏa cường gân cốt", "Tư bổ Can Thận âm", "Hành khí hoạt huyết hóa ứ"],
    ans: 1,
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Đau thắt lưng)' }
  },
  {
    q: "Bài thuốc kinh điển chủ trị Cảm mạo phong nhiệt (Sốt cao, đau họng, đờm vàng, rêu vàng)?",
    options: ["Kinh phòng bại độc tán", "Ngân kiều tán", "Bổ trung ích khí thang", "Độc hoạt ký sinh thang"],
    ans: 1,
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Cảm mạo)' }
  },
  {
    q: "Hội chứng cổ vai cánh tay thể Phong thấp nhiệt (gáy NÓNG RÁT thích mát), phương pháp nào CHỐNG CHỈ ĐỊNH tuyệt đối?",
    options: ["Châm tả Khúc trì, Hợp cốc", "Chườm mát vùng vai gáy", "Cứu ngải ấm / Ôn châm nóng", "Uống bài Quyên tý gia Bạch hổ"],
    ans: 2,
    target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' }
  },
  {
    q: "Bệnh nhân đau thắt lưng lan mông đùi (P) sau bê nặng, đau cố định như kim châm đêm. Huyệt HỘI NÀO bắt buộc chọn?",
    options: ["Huyết hải / Cách du (Huyết hội)", "Thái khê", "Độc tị", "Túc tam lý"],
    ans: 0,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Mất ngủ mạn tính thể Tâm Thận bất giao (Tâm hỏa bốc, Thận thủy hư). Cặp vị thuốc Giao thái hoàn là gì?",
    options: ["Hoàng kỳ & Đương quy", "Hoàng liên & Nhục quế", "Bán hạ & Trần bì", "Sài hồ & Bạch thược"],
    ans: 1,
    target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' }
  },
  {
    q: "Bệnh nhân nhói đau thắt lưng cấp sau cúi gập bê nặng. Lục tổng huyệt khuyên chọn huyệt nào đầu tiên?",
    options: ["Hợp cốc (Diện khẩu)", "Ủy trung (Yêu bối)", "Phong trì (Đầu hạng)", "Tam âm giao (Bụng dưới)"],
    ans: 1,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Liệt VII ngoại biên cấp do lạnh (Khẩu nhãn oa tà). Huyệt vùng mặt nào nằm ở bờ trước góc hàm 1 thốn?",
    options: ["Địa thương", "Giáp xa", "Dương bạch", "Toản trúc"],
    ans: 1,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Di chứng đột quỵ liệt nửa người mệt mỏi thều thào, sắc mặt nhợt. Bài thuốc Bổ dương hoàn ngũ thang vị nào đóng vai trò QUÂN (liều rất cao)?",
    options: ["Đương quy vĩ", "Hoàng kỳ", "Đào nhân", "Địa long"],
    ans: 1,
    target: { type: 'cheat', tab: 'm4', label: 'Bài Bổ dương hoàn ngũ thang' }
  },
  {
    q: "Hạc tất phong (Thoái hóa khớp gối mạn) thể Hàn thấp tý. Cặp huyệt đặc hiệu tại gối là gì?",
    options: ["Độc tị & Tất nhãn", "Hợp cốc & Thái dương", "Thận du & Đại trường du", "Kiên ngụ & Khúc trì"],
    ans: 0,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Bệnh nhân đang châm cứu đột nhiên hoa mắt, vã mồ hôi lạnh, sầm mặt mũi (Say châm). Huyệt cấp cứu số 1 là gì?",
    options: ["Dương lăng tuyền", "Nhân trung", "Ủy trung", "Huyết hải"],
    ans: 1,
    target: { type: 'cheat', tab: 'm5', label: 'Xử trí Say châm' }
  },
  {
    q: "Huyệt Hội của Cân (Cân hội) chuyên chữa co cứng gân cơ khớp gối là huyệt nào?",
    options: ["Cách du", "Dương lăng tuyền", "Đại trữ", "Đản trung"],
    ans: 1,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Bài thuốc 'Tam bổ tam tả' Lục vị địa hoàng thang, 3 vị TẢ gồm những vị nào?",
    options: ["Thục địa, Sơn thù, Hoài sơn", "Trạch tả, Đan bì, Phục linh", "Hoàng kỳ, Đương quy, Bạch thuật", "Khương hoạt, Độc hoạt, Phòng phong"],
    ans: 1,
    target: { type: 'cheat', tab: 'm4', label: 'Bài Lục vị địa hoàng thang' }
  },
  {
    q: "Chóng mặt (Huyễn vựng) trần nhà quay mòng mòng, đầu NẶNG NHƯ ĐEO ĐÁ, lợm giọng nôn đờm dãi. Bài thuốc chuẩn?",
    options: ["Ngân kiều tán", "Bán hạ bạch truật thiên ma thang", "Độc hoạt ký sinh thang", "Quy tỳ thang"],
    ans: 1,
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Huyễn vựng)' }
  },
  {
    q: "Đau thắt lưng lan chân mạn tính ở người già thể Can Thận hư kiêm Phong hàn thấp. Bài thuốc số 1 là gì?",
    options: ["Độc hoạt ký sinh thang", "Kinh phòng bại độc tán", "Tiêu dao tán", "Bạch hổ thang"],
    ans: 0,
    target: { type: 'cheat', tab: 'm4', label: 'Bài Độc hoạt ký sinh thang' }
  },
  {
    q: "Vẹo cổ cấp sau ngủ đêm quạt lạnh (Lạc chẩm). Vị thuốc Quân giải biểu thông kinh gáy là gì?",
    options: ["Cát cánh / Cát căn", "Hoàng liên", "Thục địa", "Mang tiêu"],
    ans: 0,
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Vẹo cổ)' }
  },
  {
    q: "Bệnh nhân sốt cao 39°C, đại khát thích uống nước lạnh, mồ hôi ra nhiều, mạch Hồng đại. Thuộc Kinh chứng nào?",
    options: ["Thái dương kinh chứng", "Dương minh kinh chứng", "Thiếu âm kinh chứng", "Quyết âm kinh chứng"],
    ans: 1,
    target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' }
  },
  {
    q: "Cặp vị thuốc 'Quân - Thần' trong bài Ngân kiều tán chủ trị Cảm mạo phong nhiệt?",
    options: ["Kim ngân hoa & Liên kiều", "Độc hoạt & Tang ký sinh", "Hoàng kỳ & Đương quy", "Nhục quế & Phụ tử"],
    ans: 0,
    target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' }
  },
  {
    q: "Táo bón cấp tính sốt cao, bụng cứng ấn đau chói. Bài thuốc Đại thừa khí thang có 2 vị tẩy hạ mạnh là gì?",
    options: ["Đại hoàng & Mang tiêu", "Hoàng kỳ & Đương quy", "Thục địa & Hoài sơn", "Bạch truật & Phục linh"],
    ans: 0,
    target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' }
  },
  {
    q: "Tiêu chảy lúc 5 giờ sáng (Ngũ canh tả) do Thận dương hư. Bài thuốc đặc trị là gì?",
    options: ["Tứ thần hoàn (Tứ thần丸)", "Bát trân thang", "Bổ trung ích khí thang", "Ngân kiều tán"],
    ans: 0,
    target: { type: 'cheat', tab: 'm4', label: 'Cổ phương kinh điển' }
  },
  {
    q: "Huyệt Hội của Cốt (Cốt hội) chuyên trị đau nhức xương khớp là huyệt nào?",
    options: ["Đại trữ", "Cách du", "Chương môn", "Thái uyên"],
    ans: 0,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Đau ngực ho nôn ra mủ hôi thối như vữa bánh đậu (Phế ung). Pháp trị chính?",
    options: ["Thanh nhiệt giải độc, hóa đờm bài nung (trừ mủ)", "Tư bổ Can Thận âm", "Ôn bổ Thận dương", "Hành khí hoạt huyết chỉ thống"],
    ans: 0,
    target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' }
  },
  {
    q: "Huyệt nằm ở đỉnh mắt cá trong đo lên 3 thốn, sát bờ sau xương chày là huyệt nào?",
    options: ["Tam âm giao", "Túc tam lý", "Dương lăng tuyền", "Ủy trung"],
    ans: 0,
    target: { type: 'cheat', tab: 'm3', label: '30 Huyệt & Bát Hội' }
  },
  {
    q: "Bệnh nhân đau thắt lưng cấp do sai tư thế, nằm ngửa nên kê gối ở đâu để bớt đau?",
    options: ["Kê dưới khoeo chân (gập nhẹ gối & háng)", "Kê dưới gáy", "Kê dưới thắt lưng cao", "Không kê gì"],
    ans: 0,
    target: { type: 'cheat', tab: 'm5', label: 'Bộ Xử trí Tình huống Mở' }
  },
  {
    q: "Mất ngủ trằn trọc, hay cáu gắt nhưng ăn xong chướng bụng phân nát. Bài thuốc Tiêu dao tán gia giảm chữa thể gì?",
    options: ["Can uất Tỳ hư", "Tâm Thận bất giao", "Khí huyết hư", "Đờm nhiệt thượng nhiễu"],
    ans: 0,
    target: { type: 'cheat', tab: 'm2', label: '12 Thể bệnh (Mất ngủ)' }
  },
  {
    q: "Thủ thuật châm cứu nào dùng cho bệnh thể Hư Hàn?",
    options: ["Châm nông tả nhanh", "Cứu ngải ấm / Ôn châm (bổ)", "Trích huyết nặn máu", "Châm tả điện mạnh"],
    ans: 1,
    target: { type: 'cheat', tab: 'm1', label: 'Dàn ý Vạn năng' }
  }
];

// Tạo alias quizData để tương thích ngược
window.quizDataGames = window.speedQuizData;
