window.caseData = [
  /* =========================================================
     NHÓM 1: CASE SÁT ĐỀ (MÔ PHỎNG TRẠM THI LÂM SÀNG THỰC TẾ)
     ========================================================= */
  {
    id: 'exam_l7',
    category: 'exam',
    levelLabel: 'Trạm 1 · Sát đề thi',
    title: 'Liệt VII ngoại biên cấp do Phong hàn (Khẩu nhãn oa tà)',
    summary: 'Nam 37t, sau đi xe máy đêm mưa lạnh bị méo miệng (T), mắt (P) nhắm không kín, Charles Bell (+)',
    caseText: 'Bệnh nhân nam, 37 tuổi. Sau khi đi xe máy ban đêm, trời mưa lạnh, sáng hôm sau xuất hiện méo miệng sang bên trái, mắt phải nhắm không kín, chảy nước mắt, ăn uống rơi vãi, không sốt, không yếu tay chân. Rêu lưỡi trắng mỏng, mạch phù.\nKhám: Nhân trung lệch trái, rãnh mũi má phải mờ, không nhăn được trán phải, dấu Charles Bell (+), không có rối loạn cảm giác, không có liệt chi.',
    keywords: [
      { word: 'trời mưa lạnh', hint: 'Phong hàn tà xâm nhập' },
      { word: 'méo miệng sang bên trái', hint: 'Khẩu nhãn oa tà (Liệt dây VII bên P)' },
      { word: 'mắt phải nhắm không kín', hint: 'Liệt nhánh trên dây VII (P)' },
      { word: 'Rêu lưỡi trắng mỏng', hint: 'Biểu chứng / Hàn chứng' },
      { word: 'mạch phù', hint: 'Bệnh thuộc Biểu' }
    ],
    q1: {
      chung: 'Méo miệng sang trái, mắt phải nhắm không kín, chảy nước mắt, ăn uống rơi vãi bên phải, không nhăn trán phải, rãnh mũi má phải mờ, Charles Bell (+).',
      nguyenNhan: 'Đi xe máy ban đêm trời mưa lạnh làm Phong hàn tà thừa lúc chính khí sơ hở xâm nhập vào các kinh mạch vùng mặt (Kinh Dương minh, Thiếu dương), khí huyết ngưng trệ, cơ mặt mất nuôi dưỡng và giảm trương lực.',
      viTri: 'Kinh lạc vùng mặt (Kinh Thủ/Túc Dương minh, Túc Thiếu dương). Bệnh thuộc Biểu.',
      batCuong: 'Biểu – Hàn – Thực.',
      benhDanh: 'Khẩu nhãn oa tà (Liệt dây thần kinh VII ngoại biên).',
      phapTri: 'Khu phong tán hàn, thông kinh hoạt lạc.',
      dungThuoc: 'Phương tham khảo: Khương hoạt thắng thấp thang gia giảm hoặc Đại tần giao thang gia giảm.\n• Khương hoạt, Độc hoạt: Khu phong tán hàn trừ thấp.\n• Phòng phong, Tần giao: Sơ phong thông lạc.\n• Bạch chỉ: Định vị dẫn thuốc vào kinh Dương minh vùng mặt.\n• Ngưu tất, Đương quy: Hoạt huyết thông kinh.',
      khongDungThuoc: 'Châm cứu (ôn châm/điện châm), xoa bóp bấm huyệt vùng mặt, chiếu đèn hồng ngoại giữ ấm vùng mặt.',
      anUongSinhHoat: 'Ăn thức ăn mềm, ấm, dễ nuốt. Tránh đồ sống lạnh, chua cay. Giữ ấm đầu mặt cổ, tránh đi gió lạnh, đeo kính râm bảo vệ mắt.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (bệnh mới mắc, thể phong hàn thực chứng, người trẻ).\n• Phòng bệnh: Tránh nằm quạt thẳng mặt, tránh đi mưa lạnh ban đêm, giữ ấm vùng mặt cổ.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Địa thương (P)', detail: 'Giáp góc miệng ra 0,4 thốn – chữa méo miệng, chảy nước dãi' },
        { name: 'Giáp xa (P)', detail: 'Góc hàm trước trên 1 thốn – chữa lệch miệng, cắn rãnh má' },
        { name: 'Dương bạch (P)', detail: 'Trên lông mày 1 thốn đường giữa mắt – chữa không nhăn trán' },
        { name: 'Toản trúc (P)', detail: 'Đầu trong lông mày – chữa nhắm mắt không kín' },
        { name: 'Tỵ không / Nghinh hương (P)', detail: 'Bên rãnh mũi má – thông khí kinh Dương minh' },
        { name: 'Phong trì (2 bên)', detail: 'Lõm sau tai bờ ngoài cơ thang – khu phong tán hàn toàn thân' },
        { name: 'Hợp cốc (bên đối diện hoặc 2 bên)', detail: 'Huyệt nguyên kinh Dương minh – chữa bệnh vùng đầu mặt' }
      ],
      chamCuu: [
        'Kỹ thuật châm: Châm nông (châm dưới da / châm luồn kim từ Toản trúc xuyên Ngư yêu, Địa thương xuyên Giáp xa).',
        'Kỹ thuật ôn châm hoặc cứu ấm các huyệt vùng mặt để tán hàn.',
        'Điện châm: Dùng dòng điện xung tần số thấp (tần số thưa – gián đoạn), cường độ nhẹ tránh kích thích gây co thắt cơ mặt.',
        'Thời gian lưu kim: 20 – 30 phút/lần.'
      ],
      xoaBop: [
        '1. Xát / Xoa vùng mặt: Dùng lòng bàn tay xát nhẹ nhàng từ cằm lên trán và từ giữa mặt ra 2 bên.',
        '2. Miết trán & rãnh mũi má: Miết từ giữa trán ra thái dương, miết dọc rãnh mũi má bị mờ.',
        '3. Day huyệt: Day nhẹ các huyệt Dương bạch, Toản trúc, Ty trúc không, Nghinh hương, Địa thương, Giáp xa.',
        '4. Bóp / Nhéo cơ mặt: Nhéo nhẹ nhàng các cơ vùng mặt bên liệt để tăng trương lực cơ.'
      ]
    },
    openQuestion: {
      question: 'Nếu sau 10 ngày điều trị bệnh nhân vẫn không nhắm kín mắt thì cần lưu ý chăm sóc gì?',
      answer: 'Cần đặc biệt lưu ý bảo vệ và chăm sóc mắt bên liệt (mắt phải):\n1. Đeo kính râm khi ra ngoài để tránh bụi, gió và ánh sáng mạnh gây tổn thương võng mạc/giác mạc.\n2. Nhỏ nước muối sinh lý 0.9% hoặc nước mắt nhân tạo 3–4 lần/ngày để giữ ẩm giác mạc, tránh khô mắt và viêm kết mạc.\n3. Tra dầu/mỡ tra mắt kháng sinh và dùng băng che mắt nhẹ khi đi ngủ để tránh dị vật rơi vào mắt đêm.\n4. Hướng dẫn bệnh nhân chủ động dùng tay vuốt nhẹ mi mắt xuống và tập nhắm mắt nhẹ nhàng.'
    },
    trap: {
      question: 'Nếu bệnh nhân này sau 2 ngày xuất hiện sốt nhẹ (38°C), đau nhức dữ dội vùng sau tai và xuất hiện vài mụn nước nhỏ ở vùng ống tai ngoài (hoặc có đau họng, khát nước, rêu lưỡi chuyển màu vàng mỏng) thì chẩn đoán Bát cương và Pháp trị thay đổi như thế nào?',
      answer: '1. Chẩn đoán Bát cương đổi thành: Biểu Nhiệt Thực (hoặc Biểu Nhiệt Thực kiêm Độc tà phong nhiệt).\n2. Pháp trị chuyển thành: Sơ phong thanh nhiệt, giải độc, thông kinh hoạt lạc (Dùng bài Ngân kiều tán gia giảm hoặc Long đởm tả can thang nếu có mụn nước đau rát).\n3. Xử trí khẩn: Chuyển khám chuyên khoa Tai Mũi Họng / Thần kinh để loại trừ Hội chứng Ramsay Hunt (nhiễm Herpes Zoster dây VII) và chỉ định dùng thuốc chống vi rút (Acyclovir) sớm trong 72 giờ đầu.'
    },
    reasoning: [
      { evidence: 'Méo miệng (T), mắt (P) nhắm không kín, mất nhăn trán (P), Charles Bell (+)', conclusion: 'Tổn thương dây VII ngoại biên bên phải (dạng ngoại biên rõ vì liệt toàn bộ nửa mặt phải bao gồm cả nhánh trán).' },
      { evidence: 'Khởi phát sau đi xe máy ban đêm trời mưa lạnh + rêu trắng mỏng + mạch phù', conclusion: 'Nguyên nhân do Phong hàn tà xâm nhập biểu kinh.' },
      { evidence: 'Không sốt, không yếu tay chân, phản xạ cảm giác bình thường', conclusion: 'Bệnh thuần túy ở biểu kinh lạc, chưa vào lý, không có di chứng trung ương.' }
    ]
  },

  {
    id: 'exam_cm',
    category: 'exam',
    levelLabel: 'Trạm 2 · Sát đề thi',
    title: 'Cảm mạo phong hàn kiêm Tâm Tỳ khí huyết hư',
    summary: 'Nữ 22t, dầm mưa về bị sợ lạnh, hắt xì, nước mũi trong; kèm tiền sử ăn kém, chóng mặt, rụng tóc, ngủ chập chờn',
    caseText: 'BN nữ, 22t, sinh viên, sau khi dầm mưa về, cảm thấy gai người, sợ lạnh, tránh gió quạt, uống nước ấm dễ chịu, hắt xì, sổ mũi, nước mũi trong.\nKhoảng 3 tháng nay, BN ăn uống kém, lịch học dày, hay chóng mặt, đánh trống ngực khi thay đổi tư thế; da niêm nhợt, tóc rụng nhiều, hay quên, khó tập trung, ngủ chập chờn, không sâu giấc.\nLưỡi mỏng, sắc nhợt, bệu, rêu lưỡi trắng mỏng. Mạch phù khẩn, bộ thốn tay trái yếu.',
    keywords: [
      { word: 'sợ lạnh', hint: 'Biểu Hàn tà' },
      { word: 'nước mũi trong', hint: 'Hàn chứng (Phế hàn)' },
      { word: 'ăn uống kém', hint: 'Tỳ khí hư' },
      { word: 'chóng mặt', hint: 'Huyết hư không nuôi dưỡng đầu mặt' },
      { word: 'đánh trống ngực', hint: 'Tâm huyết hư' },
      { word: 'Mạch phù khẩn', hint: 'Biểu Hàn thực chứng' }
    ],
    q1: {
      chung: 'Gai người, sợ lạnh, hắt xì, sổ mũi nước trong; kèm chóng mặt, đánh trống ngực, da niêm nhợt, rụng tóc, ngủ chập chờn, lưỡi nhợt bệu rêu trắng mỏng, mạch phù khẩn, thốn trái yếu.',
      nguyenNhan: 'Ngoại nhân: Phong hàn tà thừa lúc vệ khí suy ngoại phạm Phế vệ. Nội nhân/Bất nội ngoại nhân: Học tập căng thẳng, ăn uống kém làm Tỳ vị hư yếu không sinh ra huyết, dẫn đến Tâm Tỳ khí huyết hư (Tâm mất nuôi dưỡng gây giật mình/hồi hộp, Tỳ hư không sinh huyết gây da niêm nhợt, rụng tóc).',
      viTri: 'Biểu (Phế vệ) kiêm Lý (Tâm, Tỳ).',
      batCuong: 'Biểu Hàn (ngoại cảm) kiêm Lý Hư (khí huyết hư).',
      benhDanh: 'Cảm mạo phong hàn kiêm Tâm Tỳ khí huyết hư.',
      phapTri: 'Tán phong hàn, giải biểu (trị tiêu); kết hợp Ích khí dưỡng huyết, kiện Tỳ an thần (trị bản).',
      dungThuoc: '• Giải biểu tán hàn: Kinh phòng bại độc tán hoặc Hương suốt tán gia giảm (Kinh giới, Phòng phong, Tô diệp, Cát cánh).\n• Bổ Tâm Tỳ khí huyết: Quy tỳ thang hoặc Bát trân thang gia giảm (Đảng sâm, Hoàng kỳ, Bạch thuật, Đương quy, Thục địa, Long nhãn, Táo nhân).',
      khongDungThuoc: 'Châm cứu/ôn cứu các huyệt giải biểu và bổ Tâm Tỳ; xoa bóp vùng đầu cổ mặt; tập khí công dưỡng sinh nhẹ nhàng.',
      anUongSinhHoat: 'Uống cháo hành gừng ấm để giải cảm. Ăn đồ bổ khí huyết (hạt lotus, táo đỏ, thịt gà, rau xanh). Tránh thức khuya, phân bổ lịch học hợp lý.',
      tienLuongPhongBenh: '• Tiên lượng: Khỏi ngoại cảm nhanh nhưng cần điều trị kiên trì bản chứng khí huyết hư để tránh cảm tái phát.\n• Phòng bệnh: Tránh dầm mưa gió, giữ ấm cơ thể, ăn uống đủ chất, không bỏ bữa.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Phong trì (2 bên)', detail: 'Khu phong tán hàn giải biểu' },
        { name: 'Hợp cốc (2 bên)', detail: 'Sơ phong giải biểu, thông tuyên Phế khí' },
        { name: 'Liệt khuyết (2 bên)', detail: 'Lạc huyệt kinh Phế – trị ho, sổ mũi, đau đầu' },
        { name: 'Túc tam lý (2 bên)', detail: 'Hợp huyệt kinh Vị – kiện Tỳ ích khí, bổ sinh khí huyết' },
        { name: 'Tỳ du / Tâm du', detail: 'Du huyệt sau lưng – bổ Tỳ sinh huyết, dưỡng Tâm an thần' },
        { name: 'Tam âm giao (2 bên)', detail: 'Giao hội 3 kinh âm chân – bổ âm dưỡng huyết' }
      ],
      chamCuu: [
        'Châm tả các huyệt biểu (Phong trì, Hợp cốc, Liệt khuyết) để giải cảm.',
        'Châm bổ hoặc cứu ấm các huyệt lý (Túc tam lý, Tỳ du, Tam âm giao) để kiện Tỳ dưỡng huyết.',
        'Không châm kích thích quá mạnh vì bệnh nhân đang có thể trạng khí huyết hư.'
      ],
      xoaBop: [
        '1. Xát vùng lưng/cổ gáy: Xát dọc hai bên sống lưng vùng kinh Bàng quang để làm ấm cơ thể.',
        '2. Ấn day huyệt Phong trì, Thái dương: Giảm đau đầu, gai rét.',
        '3. Day ấn Túc tam lý, Tam âm giao: Kích thích vận hóa Tỳ Vị.',
        '4. Vuốt miết trán – đầu: Giảm căng thẳng thần kinh, hỗ trợ giấc ngủ.'
      ]
    },
    openQuestion: {
      question: 'Sau khi giải hết triệu chứng cảm mạo (hết sổ mũi, hết sợ lạnh), cần tư vấn điều trị tiếp theo như thế nào cho bệnh nhân?',
      answer: 'Cần chuyển trọng tâm sang điều trị "Nội thương" (Bổ Tâm Tỳ khí huyết):\n1. Duy trì bài thuốc bổ khí huyết (Quy tỳ thang / Bát trân thang) trong 2–4 tuần.\n2. Tăng cường dinh dưỡng: Ăn đúng giờ, bổ sung thực phẩm giàu sắt và protein, không ăn kiêng quá mức.\n3. Điều chỉnh lối sống: Tránh thức khuya sau 11h đêm, cân đối giờ học và nghỉ ngơi, tập thể dục nhẹ nhàng (yogi, dưỡng sinh) để tăng cường vệ khí.'
    },
    trap: {
      question: 'Nếu bệnh nhân này sau 1 ngày xuất hiện thêm triệu chứng đau họng dữ dội, nuốt đau, khát nước thích uống nước lạnh, rêu lưỡi chuyển sang vàng mỏng, mạch Phù sác thì Bát cương và Pháp trị thay đổi như thế nào?',
      answer: '1. Bát cương chuyển thành: Biểu Nhiệt Thực (kiêm Lý Hư) - do Phong nhiệt tà xâm nhập Phế vệ.\n2. Pháp trị chuyển thành: Tân lương giải biểu, thanh nhiệt lợi yết (Trị tiêu) kết hợp Bổ Tâm Tỳ (Trị bản).\n3. Bài thuốc thay đổi: Chuyển từ Kinh phòng bại độc tán sang dùng Ngân kiều tán hoặc Tang cúc ẩm gia giảm (Ngân hoa, Liên kiều, Cát cánh, Bạc hà, Lô căn).'
    },
    reasoning: [
      { evidence: 'Dầm mưa về, sợ lạnh, hắt xì, nước mũi trong, rêu trắng mỏng, mạch phù khẩn', conclusion: 'Cảm mạo phong hàn (Ngoại cảm thực tà ở biểu).' },
      { evidence: 'Ăn kém, chóng mặt, da nhợt, rụng tóc, ngủ chập chờn, thốn trái yếu', conclusion: 'Tâm Tỳ khí huyết hư (Bản hư ở lý).' },
      { evidence: 'Bộ thốn trái yếu', conclusion: 'Tâm huyết không đủ (Thốn trái quy về Tâm).' }
    ]
  },

  {
    id: 'exam_dq',
    category: 'exam',
    levelLabel: 'Trạm 3 · Sát đề thi',
    title: 'Di chứng đột quỵ yếu nửa người (T) – Can Thận âm hư',
    summary: 'Nữ 67t, di chứng NMN yếu nửa người (T) 3 tháng, kèm da khô, nóng lòng bàn chân, đau lưng tiểu đêm, lưỡi đỏ ít rêu, mạch tế sác',
    caseText: 'Người bệnh nữ, 67 tuổi, nghề nông. Nhập viện vì lý do: Yếu nửa người (T).\nBệnh sử: Bệnh khởi phát cách nhập viện 3 tháng với biểu hiện yếu đột ngột nửa người (T), được chẩn đoán NMN vùng động mạch não giữa (P). Đã điều trị ổn định, vào HV 1A để phục hồi chức năng.\nTiền căn: THA 10 năm, THCSTL 7 năm.\nSức cơ: Tay (T) 3/5, chân (T) 4/5. Người bệnh đi lại dùng gậy. Khám 12 đôi dây thần kinh sọ, cảm giác phản xạ và các cơ quan khác chưa ghi nhận bất thường.\nDa khô, thể trạng gầy. Ngủ khó vào giấc, hay giật mình tỉnh giấc. Dễ cáu gắt, lòng bàn tay bàn chân nóng, cảm giác bứt rứt về chiều. Đau lưng âm ỉ nhiều năm, tiểu đêm 2-3 lần. Mạch tế sác, lưỡi đỏ ít rêu.',
    keywords: [
      { word: 'Yếu nửa người (T)', hint: 'Di chứng Trúng phong / Bán thân bất toại' },
      { word: 'lòng bàn tay bàn chân nóng', hint: 'Âm hư sinh nội nhiệt (Ngũ tâm phiền nhiệt)' },
      { word: 'bứt rứt về chiều', hint: 'Triều nhiệt / Âm hư' },
      { word: 'Đau lưng âm ỉ', hint: 'Thận hư' },
      { word: 'tiểu đêm 2-3 lần', hint: 'Thận khí / Thận dương suy' },
      { word: 'Mạch tế sác', hint: 'Can Thận âm hư' }
    ],
    q1: {
      chung: 'Yếu nửa người (T) sức cơ tay 3/5 chân 4/5, da khô gầy, mất ngủ, nóng lòng bàn tay chân, bứt rứt về chiều, đau lưng tiểu đêm, lưỡi đỏ ít rêu, mạch tế sác.',
      nguyenNhan: 'Nội nhân: Tuổi cao (67t) làm Can Thận âm hư, âm không khống chế được dương dẫn đến Can dương thượng ngoạn (gây đột quỵ NMN). Di chứng kéo dài làm kinh lạc nửa người trái bị bế tắc, cơ bắp mất nuôi dưỡng. Âm hư sinh nội nhiệt gây nóng chiều, lưỡi đỏ rêu ít.',
      viTri: 'Lý (Tạng Can, Thận và Kinh lạc nửa người bên trái).',
      batCuong: 'Lý – Hư Nhiệt.',
      benhDanh: 'Trúng phong di chứng (Bán thân bất toại) / Thể Can Thận âm hư.',
      phapTri: 'Tư bổ Can Thận, dưỡng âm thanh nhiệt, thông kinh hoạt lạc.',
      dungThuoc: 'Phương tham khảo: Lục vị địa hoàng thang gia giảm hoặc Lục vị gia Ngưu tất, Đương quy, Xích thược, Tang ký sinh.\n• Thục địa, Sơn thù, Hoài sơn: Tư bổ Can Thận Tỳ âm.\n• Trạch tả, Đan bì, Phục linh: Thanh hư nhiệt, lợi thấp.\n• Ngưu tất, Đương quy, Xích thược: Hoạt huyết thông kinh lạc chi liệt.',
      khongDungThuoc: 'Châm cứu thông kinh lạc bên liệt + bổ âm; Tập vật lý trị liệu / Phục hồi chức năng vận động tay chân trái; Xoa bóp bấm huyệt.',
      anUongSinhHoat: 'Ăn thanh nhạt, nhiều rau xanh, hạn chế muối và mỡ động vật. Tránh xúc động mạnh. Theo dõi huyết áp hàng ngày.',
      tienLuongPhongBenh: '• Tiên lượng: Dài hạn (sức cơ 3/5-4/5 có khả năng phục hồi đi lại tốt nếu kiên trì tập luyện).\n• Phòng bệnh: Kiểm soát tốt huyết áp, tránh tái phát trúng phong.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Kiên ngụ (T), Khúc trì (T), Hợp cốc (T)', detail: 'Kinh Dương minh tay – định vị và thông kinh lạc tay liệt' },
        { name: 'Hoàn khiêu (T), Dương lăng tuyền (T), Túc tam lý (T)', detail: 'Kinh Dương minh/Đởm chân – thông kinh lạc chân liệt' },
        { name: 'Thận du, Can du (2 bên)', detail: 'Bổ Can Thận âm' },
        { name: 'Tam âm giao, Thái khê (2 bên)', detail: 'Tư âm thanh hư nhiệt, dưỡng Thận thủy' }
      ],
      chamCuu: [
        'Kỹ thuật châm: Châm bổ các huyệt Thận du, Thái khê, Tam âm giao. Châm bình bổ bình tả/kích thích vừa phải các huyệt bên liệt.',
        'Điện châm bên liệt: Tần số dồn dập - thưa (ngắt quãng) để kích thích trương lực cơ tay chân trái.',
        'Không cứu nóng quá nhiều vì bệnh nhân đang có âm hư hỏa vượng (nguy cơ tăng huyết áp).'
      ],
      xoaBop: [
        '1. Lăn / Day chi liệt: Dùng khớp ngón tay/lòng bàn tay lăn day các nhóm cơ tay chân trái.',
        '2. Bóp / Vắt cơ: Bóp nhẹ nhàng từ gốc chi đến ngọn chi bên trái để tăng lưu thông khí huyết.',
        '3. Day huyệt: Day ấn Kiên ngụ, Khúc trì, Hợp cốc, Hoàn khiêu, Dương lăng tuyền.',
        '4. Vận động khớp thụ động/chủ động: Tập gấp xoay khớp vai, khuỷu, cổ tay, khớp háng, gối bên trái.'
      ]
    },
    openQuestion: {
      question: 'Bệnh nhân này có nguy cơ gặp những biến chứng gì trong quá trình phục hồi chức năng và cần phòng ngừa thế nào?',
      answer: 'Các biến chứng nguy hiểm cần lưu ý:\n1. Té ngã gây gãy xương (đặc biệt cổ xương đùi) do sức cơ chân 4/5 còn yếu và đi dùng gậy → Cần hướng dẫn dùng khung tập đi, nhà vệ sinh có tay vịn, sàn nhà khô ráo.\n2. Co cứng khớp / Va đập khớp vai bên liệt (Bán tróc khớp vai) → Cần đeo đai đỡ khớp vai khi đứng đi, tập vận động tầm khớp đúng kỹ thuật.\n3. Tái phát đột quỵ do huyết áp tăng vọt khi cáu gắt → Đo huyết áp hàng ngày, dùng thuốc THA đúng liều, giữ tâm lý ổn định.'
    },
    trap: {
      question: 'Nếu bệnh nhân đột ngột cảm thấy mệt mỏi nhiều, nói ngọng tăng nhẹ, sắc mặt nhợt nhạt, tự hãn (vừa vận động nhẹ đã vã mồ hôi), lưỡi nhợt bệu có điểm ứ huyết, mạch Trầm tế sáp vô lực thì Bát cương, Thể bệnh và Pháp trị thay đổi như thế nào?',
      answer: '1. Thể bệnh chuyển thành: Trúng phong di chứng - Thể Khí hư huyết ứ.\n2. Bát cương đổi thành: Lý – Hư thực thác tạp (Khí hư là bản, Huyết ứ là tiêu).\n3. Pháp trị đổi thành: Ích khí hoạt huyết, thông kinh hoạt lạc.\n4. Bài thuốc chủ trị: Chuyển sang dùng bài Bổ dương hoàn ngũ thang (dùng liều cao Hoàng kỳ để đại bổ khí, phối hợp Đương quy vĩ, Xích thược, Đào nhân, Hồng hoa, Địa long để hoạt huyết thông lạc).'
    },
    reasoning: [
      { evidence: 'Yếu nửa người (T) sau NMN 3 tháng', conclusion: 'Di chứng trúng phong (Bán thân bất toại).' },
      { evidence: 'Lòng bàn tay chân nóng, bứt rứt về chiều, da khô gầy, lưỡi đỏ ít rêu, mạch tế sác', conclusion: 'Âm hư sinh nội nhiệt (Can Thận âm hư).' },
      { evidence: 'Đau lưng âm ỉ nhiều năm, tiểu đêm 2-3 lần', conclusion: 'Thận hư (Thận chủ cốt tủy, chủ thủy).' }
    ]
  },

  {
    id: 'exam_tk',
    category: 'exam',
    levelLabel: 'Trạm 4 · Sát đề thi',
    title: 'Đau thần kinh tọa (P) – Khí trệ huyết ứ trên nền Can Thận hư',
    summary: 'Nam 65t, tài xế, đau thắt lưng âm ỉ nhiều năm (Can Thận hư), bê bình nước bị đau dữ dội lan mông đùi cẳng chân (P), lưỡi có điểm ứ huyết',
    caseText: 'BN nam, 65t, nghề nghiệp tài xế. BN đau âm ỉ vùng thắt lưng nhiều năm nay, không lan. BN tự xoa bóp dầu nóng thì dễ chịu và giảm đau. BN tiểu đêm (3 l/đêm). Khoảng 3 ngày trước nhập viện BN khi đang bê bình nước đột ngột đau thắt lưng dữ dội, kèm tê và lan xuống mặt sau mông, đùi và cẳng chân (P). BN không thể đi lại được, hạn chế vận động, nghỉ ngơi thì giảm đau BN tự mua thuốc Paracetamol uống giảm đau ít => đến khám tại bệnh viện.\nKhám YHHĐ: cơ cạnh sống căng cứng. Ấn đau các điểm cạnh sống L4-L5, L5-S1, ấn đau điểm giữa mông, điểm giữa nếp lằn mông, điểm giữa mặt sau đùi, điểm dưới cơ bắp chân. Nghiệm pháp: Lasegue 60 độ bên (P), Bonnet (-), Patrick (-).\nKhám YHCT: da khô ấm, thể trạng gầy, tóc bạc nhiều răng thưa, tai nghe kém. Lưỡi đỏ bệu, rêu vàng mỏng, có nhiều đường nứt và điểm ứ huyết.',
    keywords: [
      { word: 'đau âm ỉ vùng thắt lưng nhiều năm', hint: 'Bản hư (Can Thận hư mạn tính)' },
      { word: 'đột ngột đau thắt lưng dữ dội', hint: 'Khí trệ huyết ứ cấp tính' },
      { word: 'lan xuống mặt sau mông, đùi và cẳng chân (P)', hint: 'Tọa cốt thống (Kinh Bàng quang)' },
      { word: 'Lasegue 60 độ', hint: 'Tổn thương chèn ép dây thần kinh tọa' },
      { word: 'điểm ứ huyết', hint: 'Huyết ứ' }
    ],
    q1: {
      chung: 'Đau thắt lưng lan mông đùi cẳng chân (P) sau sai tư thế, Lasegue (P) 60 độ, các điểm Valex (P) dương tính; kèm da khô gầy, tóc bạc răng thưa, tiểu đêm, lưỡi đỏ bệu có điểm ứ huyết.',
      nguyenNhan: 'Bản hư: Tuổi cao (65t), nghề tài xế ngồi lâu làm Can Thận suy hư (Can chủ cân, Thận chủ cốt). Tiêu thực: Đột ngột bê nặng sai tư thế làm khí huyết ngưng trệ, huyết ứ gây tắc nghẽn kinh Bàng quang (mặt sau đùi), "thông bất tắc tắc bất thông" gây đau dữ dội.',
      viTri: 'Kinh Bàng quang và kinh Thiếu dương bên phải. Thuộc Lý (Tạng Can Thận và Kinh lạc).',
      batCuong: 'Lý – Hư thực thác tạp (Khí huyết ứ trệ trên nền Can Thận hư).',
      benhDanh: 'Tọa cốt thống (Đau thần kinh tọa).',
      phapTri: 'Hành khí hoạt huyết, hóa ứ chỉ thống (trị tiêu cấp); kết hợp Bổ Can Thận, cường gân cốt (trị bản).',
      dungThuoc: 'Phương tham khảo: Thân thống trục ứ thang phối hợp Độc hoạt ký sinh thang gia giảm.\n• Đào nhân, Hồng hoa, Đang sâm, Xuyên khung, Nhũ hương, Một dược: Hoạt huyết hóa ứ chỉ thống.\n• Độc hoạt, Tần giao, Phòng phong: Trừ phong thấp thông lạc.\n• Đỗ trọng, Tang ký sinh, Ngưu tất: Bổ Can Thận, cường gân cốt, dẫn thuốc xuống chân.',
      khongDungThuoc: 'Nằm nghỉ trên giường cứng giai đoạn đau cấp; châm cứu, chiếu đèn hồng ngoại, xoa bóp bấm huyệt nhẹ nhàng.',
      anUongSinhHoat: 'Tránh bê vác vật nặng, không xoay vặn thắt lưng đột ngột. Khi đỡ đau cần đeo đai lưng hỗ trợ khi lái xe.',
      tienLuongPhongBenh: '• Tiên lượng: Đau cấp tính trên nền mạn, giải quyết huyết ứ sẽ giảm đau rõ nhưng dễ tái phát nếu tiếp tục lao động nặng.\n• Phòng bệnh: Hướng dẫn tư thế bê đồ đúng (tránh cúi thắt lưng), nghỉ ngơi giữa các chặng lái xe.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Thận du, Đại trường du (2 bên)', detail: 'Giảm đau thắt lưng, bổ Thận khí' },
        { name: 'Trật biên / Hoàn khiêu (P)', detail: 'Huyệt vùng mông – thông kinh lạc dây tọa' },
        { name: 'Thừa phủ, Ân môn (P)', detail: 'Điểm giữa nếp lằn mông và mặt sau đùi' },
        { name: 'Ủy trung (P)', detail: 'Hợp huyệt kinh Bàng quang ở nếp lằn khoeo chân – "Yêu bối Ủy trung cầu"' },
        { name: 'Thừa sơn, Côn Lôn (P)', detail: 'Điểm bắp chân và sau mắt cá ngoài' }
      ],
      chamCuu: [
        'Kỹ thuật châm: Châm tả / châm sâu các huyệt vùng lưng mông chân bị đau (Hoàn khiêu, Ủy trung, Trật biên) để giải ứ trệ.',
        'Điện châm: Dùng xung điện tần số vừa phải để giảm đau và giãn cơ cạnh sống.',
        'Có thể kết hợp cứu ấm vùng thắt lưng nếu có kèm cảm giác lạnh.'
      ],
      xoaBop: [
        '1. Xát / Miết thắt lưng & chân: Dùng gốc bàn tay xát dọc thắt lưng xuống mông đùi phải.',
        '2. Day ấn cơ cạnh sống: Day dọc hai bên cơ cạnh sống thắt lưng L1-S1 để làm giãn cơ co cứng.',
        '3. Bóp cơ mông – đùi – cẳng chân (P): Bóp nắn nhẹ nhàng các nhóm cơ bị tê đau.',
        '4. Ấn bấm các điểm Valex: Ấn nhẹ vừa phải các huyệt Hoàn khiêu, Ân môn, Ủy trung, Thừa sơn.'
      ]
    },
    openQuestion: {
      question: 'Khi bệnh nhân đang trong đợt đau cấp dữ dội do bê bình nước, bạn cần hướng dẫn bệnh nhân chế độ vận động và nằm nghỉ như thế nào?',
      answer: 'Hướng dẫn chế độ cấp tính:\n1. Nằm nghỉ tuyệt đối trên giường đệm cứng trong 3–5 ngày đầu, tránh đệm quá mềm bị võng lưng.\n2. Tư thế nằm: Nằm ngửa kê gối nhỏ dưới khoeo chân (để gập nhẹ khớp gối và háng, giảm căng dây thần kinh tọa) hoặc nằm nghiêng co nhẹ 2 chân.\n3. Tránh tuyệt đối: Cúi gập lưng, xoay vặn người đột ngột, ngồi lâu quá 20 phút.\n4. Đeo đai lưng hỗ trợ thắt lưng khi bắt buộc phải di chuyển đi vệ sinh.'
    },
    trap: {
      question: 'Nếu bệnh nhân đau lan thắt lưng xuống chân nhưng cảm giác nóng rát như lửa đốt, vùng mông đùi không thích chườm ấm mà thích chườm mát, rêu lưỡi vàng nhớt, mạch Nhu sác thì chẩn đoán Thể bệnh, Bát cương và Pháp trị đổi thành gì? Có được dùng phương pháp Cứu ấm hay Ôn châm không?',
      answer: '1. Thể bệnh chuyển thành: Tọa cốt thống – Thể Phong thấp nhiệt tý.\n2. Bát cương đổi thành: Biểu/Lý – Nhiệt – Thực (Thấp nhiệt uất chệ kinh lạc).\n3. Pháp trị đổi thành: Thanh nhiệt, trừ thấp, thư cân thông lạc (Chủ trị bài Tứ diệu hoàn gia giảm).\n4. Chống chỉ định: KHÔNG ĐƯỢC dùng Cứu ấm, Ôn châm hay chườm ngải cứu nóng vì sẽ làm nhiệt tà bốc lên, gây sưng đau rát nặng hơn.'
    },
    reasoning: [
      { evidence: 'Đau thắt lưng lan xuống mặt sau mông, đùi, cẳng chân (P), Lasegue 60 độ, ấn đau điểm Valex', conclusion: 'Đau thần kinh tọa bên phải (Kinh Bàng quang).' },
      { evidence: 'Đột ngột bê bình nước đau dữ dội, lưỡi có điểm ứ huyết', conclusion: 'Khí trệ huyết ứ (Thực tà cấp tính).' },
      { evidence: 'Tóc bạc, răng thưa, tai nghe kém, tiểu đêm 3 lần, tiền sử đau lưng âm ỉ nhiều năm', conclusion: 'Can Thận hư (Nền bệnh mạn tính).' }
    ]
  },

  {
    id: 'exam_kg',
    category: 'exam',
    levelLabel: 'Trạm 5 · Sát đề thi',
    title: 'Đau khớp gối mạn (Hạc tất phong) – Phong hàn thấp trên nền Can Thận hư',
    summary: 'Nữ 59t, đau gối 2 bên nhiều năm, trời lạnh mưa đau tăng, đau nặng nề, khớp lạo xạo, lưỡi đỏ bệu rêu trắng nhầy đường nứt',
    caseText: 'BN nữ, 59t, nghề nghiệp nội trợ. BN đau âm ỉ vùng thắt lưng và khớp gối 2 bên nhiều năm nay, không lan, BN tự xoa bóp dầu nóng thì dễ chịu và giảm đau. BN tiểu đêm (3l/đêm). Khoảng 1 tuần nay, trời lạnh và mưa nhiều thì BN đau khớp gối tăng, đau kiểu nặng nề, hạn chế đi lại, nghỉ ngơi và xoa dầu nóng thì giảm đau, về đêm thì đau tăng, BN tự mua thuốc Paracetamol uống giảm đau ít => đến khám tại bệnh viện.\n• Khám YHHĐ: cơ cạnh sống căng cứng. Nghiệm pháp: Lasegue 90 độ hai bên, Bonnet (-), Patrick (-). Khớp gối có tiếng lạo xạo 2 bên, PXGC gối (++), gót (++).\n• Khám YHCT: da khô ấm, thể trạng gầy, tóc bạc nhiều răng thưa, tai nghe kém. Lưỡi đỏ bệu, rêu trắng nhầy, có nhiều đường nứt.',
    keywords: [
      { word: 'trời lạnh và mưa nhiều thì BN đau khớp gối tăng', hint: 'Phong hàn thấp tà ngoại phạm' },
      { word: 'đau kiểu nặng nề', hint: 'Thấp tà trệ trệ nặng nề' },
      { word: 'tiếng lạo xạo 2 bên', hint: 'Can Thận hư không nuôi dưỡng sụn khớp' },
      { word: 'tiểu đêm', hint: 'Thận hư' },
      { word: 'rêu trắng nhầy', hint: 'Hàn thấp ứ trệ' }
    ],
    q1: {
      chung: 'Đau khớp gối 2 bên mạn tính, trời lạnh mưa đau tăng, đau nặng nề, lạo xạo khớp gối; kèm thắt lưng đau, tiểu đêm, lưỡi đỏ bệu rêu trắng nhầy nứt nẻ.',
      nguyenNhan: 'Bản hư: Can Thận suy hư không nuôi dưỡng được gân cốt (Can chủ cân, Thận chủ cốt). Tiêu thực: Thời tiết lạnh mưa làm Phong Hàn Thấp tà đọng lại ở khớp gối (Thấp gây nặng nề, Hàn gây đau tăng về đêm/gặp lạnh), làm tắc nghẽn khí huyết kinh lạc tại khớp gối.',
      viTri: 'Khớp gối (Kinh Túc Dương minh Vị, Túc Thái âm Tỳ, Túc Quyết âm Can). Thuộc Lý kiêm Biểu.',
      batCuong: 'Lý kiêm Biểu – Hư thực thác tạp (Phong hàn thấp tý trên nền Can Thận hư).',
      benhDanh: 'Hạc tất phong / Thấp khớp (Thoái hóa khớp gối / Viêm khớp gối mạn).',
      phapTri: 'Khu phong, tán hàn, trừ thấp, thông lạc chỉ thống (trị tiêu); Bổ Can Thận, cường gân cốt (trị bản).',
      dungThuoc: 'Phương tham khảo: Độc hoạt ký sinh thang gia giảm hoặc Quyên tý thang.\n• Độc hoạt, Tần giao, Phòng phong, Tế tân: Khu phong tán hàn trừ thấp tà ở khớp gối.\n• Tang ký sinh, Đỗ trọng, Ngưu tất: Bổ Can Thận, mạnh gân cốt, dẫn thuốc xuống gối.\n• Đương quy, Xuyên khung, Thược dược: Dưỡng huyết hoạt huyết.\n• Thương thuật, Ý dĩ: Trừ thấp trệ nặng nề ở khớp.',
      khongDungThuoc: 'Ôn châm, cứu ấm khớp gối; Tập bài tập dưỡng khớp gối (co duỗi gối không tải); Xoa bóp bấm huyệt khớp gối.',
      anUongSinhHoat: 'Giữ ấm khớp gối khi trời lạnh (đeo băng gối). Hạn chế leo cầu thang, quỳ gối, ngồi xổm. Tránh ăn đồ sống lạnh, thức ăn nhiều purin.',
      tienLuongPhongBenh: '• Tiên lượng: Tiến triển mạn tính, cần điều trị kiên trì để duy trì tầm vận động khớp và ngăn ngừa teo cơ đùi.\n• Phòng bệnh: Tập thể dục nhẹ như đạp xe, bơi lội; kiểm soát cân nặng tránh quá tải khớp gối.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Độc tị (2 bên)', detail: 'Lõm dưới bánh chè bờ ngoài – huyệt đặc hiệu khớp gối' },
        { name: 'Tất nhãn / Nội độc tị (2 bên)', detail: 'Lõm dưới bánh chè bờ trong – thông khí huyết khớp gối' },
        { name: 'Dương lăng tuyền (2 bên)', detail: 'Hội của Cân – chữa đau co cứng gân cơ khớp gối' },
        { name: 'Âm lăng tuyền (2 bên)', detail: 'Hợp huyệt kinh Tỳ – trừ thấp trệ, giảm nặng nề' },
        { name: 'Huyết hải, Lương khâu (2 bên)', detail: 'Bờ trên bánh chè – hoạt huyết thông kinh lạc' },
        { name: 'Thận du, Tang ký sinh / Đỗ trọng', detail: 'Bổ Can Thận ở vùng thắt lưng' }
      ],
      chamCuu: [
        'Kỹ thuật châm: Châm hướng kim vào trong ổ khớp hoặc dưới gân bánh chè.',
        'Ôn châm / Cứu ấm: Đặt mồi ngải cứu hoặc chiếu đèn hồng ngoại lên đốc kim các huyệt Độc tị, Tất nhãn để tán hàn trừ thấp.',
        'Thời gian lưu kim: 20 – 30 phút.'
      ],
      xoaBop: [
        '1. Xát / Miết khớp gối: Dùng hai lòng bàn tay xát đối xứng hai bên khớp gối cho ấm lên.',
        '2. Day xung quanh bánh chè: Dùng ngón tay day tròn theo viền xương bánh chè.',
        '3. Bóp cơ đùi & cẳng chân: Bóp nắn nhẹ nhàng nhóm cơ tứ đầu đùi để tránh teo cơ.',
        '4. Vận động khớp gối: Gấp duỗi khớp gối nhẹ nhàng trong giới hạn không đau.'
      ]
    },
    openQuestion: {
      question: 'Để ngăn ngừa biến chứng teo cơ tứ đầu đùi và cứng khớp gối ở bệnh nhân này, bạn cần hướng dẫn bài tập phục hồi chức năng như thế nào?',
      answer: 'Hướng dẫn bài tập phục hồi chức năng tại nhà:\n1. Bài tập gồng cơ tứ đầu đùi (Isometric Exercise): Nằm thẳng, kê khăn mỏng dưới khoeo gối, duỗi thẳng chân và ép chặt khoeo gối xuống mặt giường, giữ 5–10 giây rồi thả lỏng. Thực hiện 20–30 lần/ngày.\n2. Bài tập gấp duỗi gối không tải: Ngồi trên ghế cao chân không chạm đất, đung đuôi cẳng chân nhẹ nhàng hoặc duỗi thẳng cẳng chân song song mặt đất.\n3. Tránh tuyệt đối: Ngồi xổm, quỳ gối, xếp bằng, leo thang nhiều tầng hoặc xoa bóp nắn bóp quá mạnh trực tiếp khi khớp đang sưng đau nóng.'
    },
    trap: {
      question: 'Nếu khớp gối bên phải của bệnh nhân đột ngột sưng to, nóng đỏ, đau dữ dội chạm vào không chịu nổi, rêu lưỡi vàng nhớt, mạch Hoạt sác thì chẩn đoán Bát cương, Thể bệnh và Pháp trị đổi thành gì?',
      answer: '1. Thể bệnh chuyển thành: Thấp nhiệt tý / Nhiệt tý (Viêm khớp gối cấp tính / Đợt cấp Gút hoặc viêm khớp nhiễm khuẩn).\n2. Bát cương đổi thành: Biểu/Lý – Nhiệt – Thực.\n3. Pháp trị đổi thành: Thanh nhiệt, trừ thấp, thông lạc chỉ thống (Dùng Bạch hổ quế chi thang gia giảm hoặc Tứ diệu hoàn).\n4. Chăm sóc: Ngừng ngay chườm ấm/xoa dầu nóng, chườm lạnh nhẹ vùng khớp gối và chuyển làm xét nghiệm máu (Acid uric, CRP, CTM) cấp.'
    },
    reasoning: [
      { evidence: 'Đau gối 2 bên mạn tính, trời lạnh mưa đau tăng, đau nặng nề, lạo xạo khớp gối', conclusion: 'Phong hàn thấp tý tại khớp gối (Hạc tất phong / Thấp khớp).' },
      { evidence: 'Đau âm ỉ thắt lưng, tiểu đêm 3 lần, da khô, tóc bạc răng thưa, lưỡi bệu đường nứt', conclusion: 'Can Thận hư (Bản hư).' },
      { evidence: 'Rêu lưỡi trắng nhầy, cảm giác đau nặng nề', conclusion: 'Thấp tà trệ nặng.' }
    ]
  },

  /* =========================================================
     NHÓM 2: NGÂN HÀNG ĐỀ THI MỚI (BANK_1 ĐẾN BANK_20) - HỆ THỐNG 20 CASE OSCE CẤP CAO
     ========================================================= */
  {
    id: 'bank_1',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Cảm mạo phong hàn kiêm Đờm thấp - Thể Phong hàn kiêm Đờm thấp',
    summary: 'Nữ 35t, hắt xì sổ mũi nước trong nhưng ho đờm dầy nhớt, sốt nhẹ về chiều, rêu lưỡi trắng dầy nhớt, mạch Phù hoạt',
    caseText: 'Bệnh nhân nữ, 35 tuổi, kế toán viên. Nhập viện vì lý do: Hắt hơi, sợ lạnh và ho nhiều đờm.\nBệnh sử: 2 ngày trước, sau khi đi mưa chiều về, bệnh nhân bắt đầu gai người, sợ gió lạnh, hắt hơi liên tục, chảy nước mũi trong loãng. Tuy nhiên, bệnh nhân vốn có thể trạng Tỳ hư hay bị đầy bụng, đến chiều tối lại xuất hiện cảm giác hâm hấp sốt nhẹ, ho sặc sụa ra nhiều đờm màu trắng dầy dính nhớt, cổ họng hơi vướng rát nhẹ do đờm uất. Bệnh nhân không khát nước, thích uống nước gừng ấm. Đại tiện phân hơi nát.\nKhám YHHĐ: Nhiệt độ 37.6°C, họng hơi xung huyết nhẹ, phế quản rì rào rõ có rên ẩm rải rác hai đáy phổi.\nKhám YHCT: Sắc mặt hơi nhợt. Lưỡi bệu, rêu lưỡi trắng dầy nhớt. Mạch Phù hoạt.',
    q1: {
      chung: 'Gai người sợ lạnh, hắt hơi, nước mũi trong loãng, ho đờm trắng dầy nhớt, hâm hấp sốt chiều, không khát, lưỡi bệu rêu trắng dầy nhớt, mạch Phù hoạt.',
      nguyenNhan: 'Ngoại nhân: Phong hàn tà xâm nhập Phế vệ. Nội nhân: Tỳ hư không vận hóa tân dịch ngưng trệ thành Đờm thấp; Phong hàn bó bên ngoài làm Đờm thấp bế tắc bên trong Phế lạc gây ho nhiều đờm và sốt uất.',
      viTri: 'Biểu (Phế vệ) kiêm Lý (Tỳ Vị).',
      batCuong: 'Biểu Hàn kiêm Lý Đờm Thấp (Biểu Hàn Lý Thực).',
      benhDanh: 'Cảm mạo phong hàn kiêm Đờm thấp.',
      phapTri: 'Tán phong hàn giải biểu, táo thấp hóa đờm, tuyên Phế chỉ khái.',
      dungThuoc: 'Bài thuốc chủ trị: Cửu vị khương hoạt thang phối hợp Nhị trần thang gia giảm.\n• Khương hoạt, Phòng phong, Tô diệp: Tán phong hàn giải biểu.\n• Bán hạ chế, Trần bì, Phục linh: Táo thấp hóa đờm, kiện Tỳ hòa Vị.\n• Cát cánh, Hạnh nhân: Tuyên Phế giáng khí, chỉ khái.',
      khongDungThuoc: 'Ôn châm hoặc châm tả Phong trì, Hợp cốc, Liệt khuyết; Châm bổ hoặc cứu Túc tam lý, Phong long để hóa đờm.',
      anUongSinhHoat: 'Uống cháo hành gừng tía tơi ấm. Tránh đồ ngọt, sữa, thức ăn béo ngậy dễ sinh thêm đờm.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giải cảm sau 2-3 ngày, cần triệt đàm thêm 1 tuần).\n• Phòng bệnh: Tránh dầm mưa, giữ ấm cổ ngực, ăn uống đồ ấm nóng.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Phong trì (2 bên)', detail: 'Khu phong tán hàn giải biểu' },
        { name: 'Liệt khuyết (2 bên)', detail: 'Lạc huyệt kinh Phế - tuyên Phế chỉ khái' },
        { name: 'Phong long (2 bên)', detail: 'Lạc huyệt kinh Vị - huyệt đặc hiệu hóa đờm toàn thân' },
        { name: 'Túc tam lý (2 bên)', detail: 'Kiện Tỳ vận hóa trừ đờm thấp' }
      ],
      chamCuu: [
        'Châm tả các huyệt Phong trì, Liệt khuyết để giải biểu.',
        'Châm bổ hoặc cứu ấm huyệt Phong long, Túc tam lý để hóa đờm.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Xát ấm vùng lưng trên dọc kinh Bàng quang.',
        '2. Day bấm huyệt Phong trì, Phong long, Túc tam lý.',
        '3. Vỗ rung vùng lưng ngực để long đờm.'
      ]
    },
    openQuestion: {
      question: 'Tại sao bệnh nhân có hâm hấp sốt về chiều và rát nhẹ họng nhưng Bát cương vẫn chẩn đoán là Hàn chứng chứ không phải Nhiệt chứng?',
      answer: 'Vì các triệu chứng cốt lõi của Hàn chứng vẫn chiếm ưu thế tuyệt đối: Sợ lạnh, hắt xì nước mũi trong loãng, không khát nước thích uống gừng ấm, rêu lưỡi trắng dầy nhớt và mạch Phù hoạt. Cảm giác hâm hấp sốt chiều và vướng rát họng là do Đờm thấp uất trệ lâu trong Phế lạc gây "Nhiệt uất nhẹ" cục bộ, không phải do Phong nhiệt tà.'
    },
    reasoning: [
      { evidence: 'Đi mưa về, sợ lạnh, hắt xì nước mũi trong, mạch Phù', conclusion: 'Phong hàn phạm biểu.' },
      { evidence: 'Ho đờm dầy dính, rêu trắng dầy nhớt, mạch Hoạt', conclusion: 'Nội đờm thấp uất Phế.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là cảm giác hâm hấp sốt về chiều và cổ họng hơi vướng rát nhẹ. Chi tiết này dễ làm sinh viên nhầm lẫn sang Cảm mạo phong nhiệt hoặc Âm hư triều nhiệt. Tuy nhiên, rêu lưỡi trắng dầy nhớt, nước mũi trong và mạch Phù hoạt khẳng định bản chất là Phong hàn kiêm Đờm thấp uất trệ.'
    }
  },

  {
    id: 'bank_2',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Liệt VII ngoại biên cấp do Phong nhiệt - Thể Phong nhiệt tập lạc',
    summary: 'Nam 40t, sau đi nhậu về méo miệng (P), sốt 38.2°C, đau nhức vùng sau tai dữ dội, rêu lưỡi vàng mỏng, mạch Phù sác',
    caseText: 'Bệnh nhân nam, 40 tuổi, kỹ sư xây dựng. Nhập viện vì lý do: Méo miệng sang bên trái và đau nhức dữ dội vùng sau tai phải.\nBệnh sử: Sáng nay ngủ dậy sau một đêm đi nhậu bia rượu về, bệnh nhân phát hiện miệng méo lệch sang trái, mắt phải nhắm không kín, nhân trung lệch trái. Đồng thời bệnh nhân sốt 38.2°C, đau nhức dữ dội vùng sau tai phải, sợ gió, đau đầu, họng khô khát nước nhẹ. Bệnh nhân không yếu tay chân, không nôn mửa.\nKhám YHHĐ: Nhân trung lệch trái, rãnh mũi má (P) mờ, Charles Bell (P) (+). Vùng xương chũm (P) ấn đau chói nhẹ, không mụn nước. Nhiệt độ 38.0°C.\nKhám YHCT: Lưỡi đỏ, rêu lưỡi vàng mỏng. Mạch Phù sác.',
    q1: {
      chung: 'Méo miệng sang trái, mắt phải nhắm không kín, Charles Bell (+), sốt 38.2°C, đau nhức sau tai phải, họng khô khát, lưỡi đỏ rêu vàng mỏng, mạch Phù sác.',
      nguyenNhan: 'Ngoại nhân: Phong nhiệt tà (hoặc thừa lúc uống rượu bia uất nhiệt) xâm nhập kinh Dương minh và Thiếu dương vùng mặt gây bế tắc kinh lạc, huyết ngưng cơ trệ.',
      viTri: 'Biểu (Kinh Dương minh, Thiếu dương vùng mặt).',
      batCuong: 'Biểu – Nhiệt – Thực.',
      benhDanh: 'Khẩu nhãn oa tà – Thể Phong nhiệt.',
      phapTri: 'Sơ phong thanh nhiệt, thông kinh hoạt lạc.',
      dungThuoc: 'Bài thuốc chủ trị: Đại tần giao thang gia giảm hoặc Ngân kiều tán gia Khương hoạt, Bạch chỉ.\n• Tần giao, Phòng phong: Khu phong thông lạc.\n• Kim ngân hoa, Liên kiều, Hoàng cầm: Thanh nhiệt giải độc.\n• Bạch chỉ: Dẫn thuốc kinh Dương minh vùng mặt.',
      khongDungThuoc: 'Châm tả các huyệt vùng mặt và Hợp cốc, Phong trì; Cấm tuyệt đối cứu ngải/chườm nóng vùng mặt.',
      anUongSinhHoat: 'Ăn đồ thanh mát, uống nhiều nước ấm. Kiêng tuyệt đối rượu bia, đồ cay nóng. Tránh gió quạt lùa.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (cần hạ sốt thanh nhiệt triệt để để tránh co cứng cơ di chứng).\n• Phòng bệnh: Tránh uống rượu bia rồi đi gió đêm.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Địa thương (P)', detail: 'Giáp góc miệng ra 0,4 thốn - chữa méo miệng' },
        { name: 'Giáp xa (P)', detail: 'Góc hàm trước trên 1 thốn - chữa lệch cằm má' },
        { name: 'Hợp cốc (2 bên)', detail: 'Huyệt Nguyên Dương minh - thanh nhiệt giải biểu toàn thân' },
        { name: 'Phong trì (2 bên)', detail: 'Khu phong giải nhiệt vùng gáy đầu' }
      ],
      chamCuu: [
        'Châm tả các huyệt Hợp cốc, Phong trì, Khúc trì để thanh nhiệt.',
        'Châm nông vừa phải các huyệt vùng mặt bên liệt.',
        'TUYỆT ĐỐI KHÔNG CỨU NÓNG hay chườm ngải nóng.'
      ],
      xoaBop: [
        '1. Miết nhẹ nhàng vùng mặt từ trán xuống cằm.',
        '2. Day bấm nhẹ huyệt Địa thương, Giáp xa, Hợp cốc.',
        '3. Không dùng dầu nóng xoa bóp mặt.'
      ]
    },
    openQuestion: {
      question: 'Tại sao ca liệt VII ngoại biên này chống chỉ định phương pháp Ôn châm / Cứu ngải?',
      answer: 'Vì bệnh nhân đang thuộc thể Phong nhiệt (Bát cương: Biểu Nhiệt Thực) với các triệu chứng nhiệt rõ rệt như sốt 38.2°C, họng khô khát, lưỡi đỏ rêu vàng, mạch Phù sác. Cứu ngải hoặc Ôn châm truyền thêm nhiệt vào cơ thể sẽ làm hỏa tà thiêu đốt gân cơ, làm sưng đau vú sau tai nặng hơn và tăng nguy cơ biến chứng co cứng cơ mặt.'
    },
    reasoning: [
      { evidence: 'Méo miệng (T), mắt (P) không kín, Charles Bell (+)', conclusion: 'Liệt VII ngoại biên bên phải.' },
      { evidence: 'Sốt 38.2°C, rêu vàng mỏng, mạch Phù sác', conclusion: 'Biểu Nhiệt Thực (Phong nhiệt tà).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là hoàn cảnh khởi phát đột ngột méo miệng sau khi đi nhậu đêm về. Nhiều sinh viên phản xạ tự nhiên sẽ chẩn đoán ngay là "Phong hàn trúng lạc" do đi đêm. Tuy nhiên, dữ kiện sốt 38.2°C, đau nhức tai, họng khô, lưỡi đỏ rêu vàng, mạch Phù sác khẳng định đây là thể Phong nhiệt tập lạc.'
    }
  },

  {
    id: 'bank_3',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau thần kinh tọa mạn - Thể Phong thấp nhiệt tý',
    summary: 'Nữ 48t, đau thắt lưng lan đùi mông (P), vùng đau rát nóng thích chườm mát, rêu lưỡi vàng nhớt, mạch Nhu sác',
    caseText: 'Bệnh nhân nữ, 48 tuổi, buôn bán tạp hóa. Nhập viện vì lý do: Đau thắt lưng lan mông đùi phải kèm cảm giác nóng rát.\nBệnh sử: 5 ngày nay, thời tiết mùa hè nóng ẩm mưa nhiều, bệnh nhân xuất hiện đau dữ dội từ thắt lưng lan xuống nếp lằn mông, mặt sau đùi và bắp chân bên phải. Khác với những lần đau trước, lần này bệnh nhân cảm thấy vùng mông đùi đau nhói kèm cảm giác rát nóng như lửa đốt, vùng thắt lưng trướng nặng nề. Bệnh nhân không thích chườm ấm, dùng dầu nóng xoa thì đau rát tăng dữ dội, thích chườm khăn mát. Bệnh nhân đắng miệng, nước tiểu vàng sẫm, đại tiện hơi táo.\nKhám YHHĐ: Co cứng cơ cạnh sống thắt lưng (P). Lasegue (P) 50°. Ấn đau các điểm Valex (P).\nKhám YHCT: Lưỡi đỏ, rêu lưỡi vàng dầy nhớt. Mạch Nhu sác.',
    q1: {
      chung: 'Đau thắt lưng lan mông đùi cẳng chân (P), nóng rát vùng đau, thích chườm mát, trướng nặng thắt lưng, Lasegue (P) 50°, đắng miệng, lưỡi đỏ rêu vàng nhớt, mạch Nhu sác.',
      nguyenNhan: 'Ngoại nhân: Phong thấp nhiệt tà xâm nhập hoặc thấp nhiệt tà nung nấu ở kinh Bàng quang và Đởm làm khí huyết trệ tắc, "thông bất tắc tắc bất thông" gây đau rát.',
      viTri: 'Kinh Bàng quang và Đởm bên phải. Thuộc Lý kiêm Biểu.',
      batCuong: 'Biểu/Lý – Nhiệt – Thực (Thấp nhiệt uất trệ).',
      benhDanh: 'Tọa cốt thống – Thể Phong thấp nhiệt.',
      phapTri: 'Thanh nhiệt, trừ thấp, thư cân hoạt lạc chỉ thống.',
      dungThuoc: 'Bài thuốc chủ trị: Tứ diệu hoàn gia vị (Thương thuật, Hoàng bá, Ngưu tất, Ý dĩ gia Mộc qua, Ngũ gia bì, Đan sâm).\n• Hoàng bá: Thanh nhiệt táo thấp hạ tiêu.\n• Thương thuật, Ý dĩ: Trừ thấp trệ nặng nề.\n• Ngưu tất: Bổ Can Thận, dẫn thuốc xuống hạ chi.',
      khongDungThuoc: 'Châm tả các huyệt kinh Bàng quang (Ủy trung, Hoàn khiêu); KHÔNG ĐƯỢC CỨU NGẢI hay chườm nóng.',
      anUongSinhHoat: 'Ăn đồ mát thanh nhiệt (rau má, bột sắn dây, đậu đen). Tránh đồ cay nóng, rượu bia, đồ nướng.',
      tienLuongPhongBenh: '• Tiên lượng: Khá (cần thanh triệt thấp nhiệt để tránh tái phát).\n• Phòng bệnh: Tránh làm việc môi trường nóng ẩm.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Hoàn khiêu (P)', detail: 'Huyệt chốt mông - thông kinh lạc dây tọa' },
        { name: 'Ủy trung (P)', detail: 'Hợp huyệt Bàng quang - châm tả thanh nhiệt giải đau lưng' },
        { name: 'Âm lăng tuyền (2 bên)', detail: 'Hợp huyệt kinh Tỳ - thanh trừ thấp nhiệt' },
        { name: 'Dương lăng tuyền (P)', detail: 'Cân hội - thư cân giải co thắt' }
      ],
      chamCuu: [
        'Châm tả các huyệt Hoàn khiêu, Ân môn, Ủy trung, Dương lăng tuyền.',
        'Kỹ thuật châm tả thanh nhiệt khu phong.',
        'CHỐNG CHỈ ĐỊNH cứu ấm/ôn châm.'
      ],
      xoaBop: [
        '1. Miết nhẹ nhàng dọc kinh Bàng quang vùng thắt lưng xuống chân.',
        '2. Ấn day nhẹ các huyệt Hoàn khiêu, Ủy trung, Âm lăng tuyền.',
        '3. Không xoa dầu nóng làm tăng uất nhiệt.'
      ]
    },
    openQuestion: {
      question: 'Tại sao xoa bóp dầu nóng lại làm bệnh nhân đau rát tăng dữ dội?',
      answer: 'Vì bệnh nhân đang ở thể Phong thấp nhiệt tý (Thấp nhiệt tà uất tích trong kinh lạc). Dầu nóng có tính tân nhiệt độc, khi xoa vào sẽ nạp thêm nhiệt tà vào vùng kinh lạc đang uất nhiệt, khiến huyết quản trướng căng, nhiệt cực sinh đau rát dữ dội hơn.'
    },
    reasoning: [
      { evidence: 'Đau lan thắt lưng mông đùi (P), Lasegue 50°', conclusion: 'Tọa cốt thống (Đau thần kinh tọa P).' },
      { evidence: 'Cảm giác nóng rát, thích chườm mát, rêu vàng nhớt, mạch Nhu sác', conclusion: 'Thấp nhiệt trệ kinh lạc (Nhiệt thực chứng).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là tiền sử bệnh nhân đã từng bị đau thần kinh tọa trước đây (thường do Phong hàn thấp), làm sinh viên dễ chủ quan kê bài Độc hoạt ký sinh thang và chườm ngải cứu. Tuy nhiên, cảm giác nóng rát thích chườm mát, lưỡi đỏ rêu vàng dầy nhớt và mạch Nhu sác đòi hỏi phải đổi sang bài Tứ diệu hoàn thanh nhiệt trừ thấp.'
    }
  },

  {
    id: 'bank_4',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Di chứng đột quỵ yếu nửa người - Thể Khí hư đờm ứ',
    summary: 'Nam 68t, di chứng liệt nửa người (T) 2 tháng, mệt mỏi hụt hơi, đờm dãi khò khè cổ hầu, rêu lưỡi trắng dầy nhớt, mạch Trầm hoạt sáp',
    caseText: 'Bệnh nhân nam, 68 tuổi, hưu trí. Nhập viện vì lý do: Yếu nửa người trái kéo dài và ho hắng nhiều đờm dãi.\nBệnh sử: 2 tháng sau đột quỵ nhồi máu não, bệnh nhân còn di chứng yếu nửa người (T), sức cơ tay (T) 2/5, chân (T) 3/5. Bệnh nhân người mệt mỏi thều thào, vừa đi vài bước đã vã mồ hôi. Đặc biệt cổ hầu lúc nào cũng khò khè tiếng đờm dãi dính vắt, tiếng nói đục hãm, thỉnh thoảng sặc nước uống. Sắc mặt béo nhão trệ nhợt. Chân tay bên liệt hơi nặng nề phù nhẹ. Đại tiện nát trệ.\nKhám YHHĐ: Liệt cứng nửa người trái. Phản xạ gân xương tăng bên trái.\nKhám YHCT: Lưỡi bệu to, rêu lưỡi trắng dầy nhớt, rìa lưỡi có điểm ứ tím. Mạch Trầm hoạt sáp vô lực.',
    q1: {
      chung: 'Yếu nửa người (T), mệt mỏi tự hãn, cổ hầu khò khè đờm dãi, tiếng nói đục, chân tay liệt phù nhẹ, lưỡi bệu to rêu trắng dầy nhớt có điểm ứ, mạch Trầm hoạt sáp.',
      nguyenNhan: 'Nội nhân: Tỳ hư không vận hóa tân dịch sinh ra Đờm; Khí hư không thúc đẩy được huyết gây Huyết ứ; Đờm và Ứ quyện kết bế tắc kinh lạc nửa người trái.',
      viTri: 'Tạng Tỳ, Phế, Can và Kinh lạc nửa người trái. Thuộc Lý.',
      batCuong: 'Lý – Hư thực thác tạp (Khí hư kiêm Đờm ứ).',
      benhDanh: 'Trúng phong di chứng – Thể Khí hư đờm ứ.',
      phapTri: 'Ích khí kiện Tỳ, hóa đờm thông lạc, hoạt huyết hóa ứ.',
      dungThuoc: 'Bài thuốc chủ trị: Bổ dương hoàn ngũ thang phối hợp Địch đờm thang gia giảm.\n• Hoàng kỳ (60g): Đại bổ tỳ khí.\n• Bán hạ chế, Nam tinh, Phục linh: Táo thấp hóa đờm.\n• Đương quy vĩ, Đào nhân, Hồng hoa, Địa long: Hoạt huyết thông lạc.',
      khongDungThuoc: 'Điện châm thông kinh lạc bên liệt + Châm bổ Túc tam lý, Phong long; Tập phục hồi chức năng vận động.',
      anUongSinhHoat: 'Ăn cháo thanh nhẹ, kiêng đồ béo mọng ngọt sữa sinh đờm. Tập nuốt và tập giạng chi liệt.',
      tienLuongPhongBenh: '• Tiên lượng: Trung bình (cần kiên trì trừ đàm hóa ứ 3-6 tháng).\n• Phòng bệnh: Hút đờm dãi tránh sặc phế quản.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Kiên ngụ (T), Khúc trì (T)', detail: 'Thông kinh lạc tay liệt' },
        { name: 'Hoàn khiêu (T), Dương lăng tuyền (T)', detail: 'Thông kinh lạc chân liệt' },
        { name: 'Phong long (2 bên)', detail: 'Huyệt đặc trị hóa đờm trệ cổ hầu' },
        { name: 'Túc tam lý (2 bên)', detail: 'Kiện Tỳ ích khí trừ đờm' }
      ],
      chamCuu: [
        'Châm bổ các huyệt Túc tam lý, Khí hải, Phong long.',
        'Điện châm dồn dập-thưa các huyệt bên liệt để tăng trương lực cơ.',
        'Lưu kim 25 phút.'
      ],
      xoaBop: [
        '1. Day lăn cơ chi liệt trái.',
        '2. Vỗ bóp vùng lưng vai giúp long đờm dãi.',
        '3. Bấm day huyệt Phong long, Túc tam lý.'
      ]
    },
    openQuestion: {
      question: 'Sự khác biệt mấu chốt giữa bài Bổ dương hoàn ngũ thang thuần túy và khi phối hợp thêm Địch đờm thang ở case này là gì?',
      answer: 'Bổ dương hoàn ngũ thang thuần túy tập trung Đại bổ khí (Hoàng kỳ liều cao) để đẩy Huyết ứ thông kinh lạc. Tuy nhiên ở case này bệnh nhân có triệu chứng Đờm trệ rất nặng (khò khè cổ hầu, rêu dầy nhớt, mạch Hoạt). Nếu không phối hợp các vị hóa đờm mạnh của Địch đờm thang (Bán hạ, Đòn nam tinh, Phục linh) thì đờm trệ sẽ cản trở thuốc bổ khí huyết, khiến bệnh nhân thêm đầy trướng trệ bụng.'
    },
    reasoning: [
      { evidence: 'Yếu nửa người (T) sau đột quỵ 2 tháng', conclusion: 'Di chứng trúng phong.' },
      { evidence: 'Cổ hầu khò khè đờm dãi, rêu trắng dầy nhớt, mạch Hoạt', conclusion: 'Đờm trệ bế tắc (Đờm thực).' },
      { evidence: 'Mệt mỏi tự hãn, lưỡi bệu nhợt điểm ứ', conclusion: 'Khí hư huyết ứ.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là tình trạng khò khè đờm dãi cổ hầu dính vắt kèm rêu lưỡi dầy nhớt. Sinh viên dễ nhầm thành đợt cấp viêm phế quản hoặc chỉ chẩn đoán Khí hư huyết ứ thuần túy mà bỏ sót yếu tố "Đờm trệ kinh lạc".'
    }
  },

  {
    id: 'bank_5',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau thắt lưng mạn do Thận dương hư - Thể Can Thận dương hư',
    summary: 'Nam 62t, đau lưng mỏi gối âm ỉ kéo dài, sợ lạnh tay chân lạnh ngắt, tiểu đêm 4 lần, thỉnh thoảng bốc hỏa giả nhiệt, lưỡi nhợt bệu, mạch Trầm nhược',
    caseText: 'Bệnh nhân nam, 62 tuổi, làm vườn. Nhập viện vì lý do: Đau thắt lưng mỏi gối kéo dài và sợ lạnh.\nBệnh sử: Bệnh nhân đau âm ỉ vùng thắt lưng 2 năm nay, đau tăng khi lao động mệt hoặc khi trời lạnh, chườm ấm hay cứu ngải thì giảm đau rõ. Chân tay lúc nào cũng lạnh ngắt, sợ gió sợ lạnh, đêm đi tiểu 4-5 lần nước tiểu trong dài. Tuy nhiên, thỉnh thoảng về chiều bệnh nhân lại có cảm giác bốc hỏa nhẹ lên mặt làm hai gò má hơi hồng bừng 10-15 phút rồi hết, miệng hơi khô nhưng không muốn uống nước.\nKhám YHHĐ: Thoái hóa cột sống thắt lưng L3-L5. Không co cứng cơ cấp.\nKhám YHCT: Thể trạng gầy nhợt. Lưỡi bệu nhợt, rêu lưỡi trắng ướt. Mạch Trầm nhược vô lực (bộ Xích hai bên mờ nhạt).' ,
    q1: {
      chung: 'Đau thắt lưng mỏi gối âm ỉ, sợ lạnh tay chân lạnh ngắt, tiểu đêm 4-5 lần, thỉnh thoảng gò má hồng bốc hỏa giả, lưỡi bệu nhợt rêu trắng ướt, mạch Trầm nhược.',
      nguyenNhan: 'Nội nhân: Tuổi cao lao động vất vả làm Thận dương hư suy; Mệnh môn hỏa suy không sưởi ấm được gân cốt thắt lưng; Dương hư sinh nội hàn gây lạnh chân tay tiểu đêm; Hỏa suy ở dưới làm hư hỏa bốc nhẹ lên trên ("Âm sheng Cách Dương / Chân Hàn Giả Nhiệt").',
      viTri: 'Tạng Thận và thắt lưng. Thuộc Lý.',
      batCuong: 'Lý – Hàn – Hư (Chân Hàn Giả Nhiệt).',
      benhDanh: 'Yêu thống – Thể Thận dương hư.',
      phapTri: 'Ôn bổ Thận dương, trợ hỏa cường gân cốt.',
      dungThuoc: 'Bài thuốc chủ trị: Hữu vị hoàn hoặc Bát vị địa hoàng hoàn gia giảm.\n• Phụ tử chế, Nhục quế: Ôn bổ Mệnh môn hỏa, tán hàn.\n• Thục địa, Sơn thù, Hoài sơn: Bổ âm để củng cố dương (Âm trung cầu Dương).\n• Đỗ trọng, Thỏ ty tử, Ngưu tất: Bổ Thận cường gân cốt thắt lưng.',
      khongDungThuoc: 'Ôn châm, cứu ngải ấm huyệt Thận du, Mệnh môn, Quan nguyên; Cứu tỏi/ngải vùng thắt lưng.',
      anUongSinhHoat: 'Ăn đồ ấm nóng (thịt dê, đuôi bò, gừng, quế). Tránh ăn đồ sống lạnh, dưa hấu, nước đá.',
      tienLuongPhongBenh: '• Tiên lượng: Tiến triển mạn tính (kiên trì ôn bổ 1-2 tháng).\n• Phòng bệnh: Tránh bị nhiễm lạnh thắt lưng, hạn chế lao động nặng quá sức.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Thận du (2 bên)', detail: 'Bổ Thận khí, ôn ấm thắt lưng' },
        { name: 'Mệnh môn', detail: 'Huyệt đặc trị ôn bổ Mệnh môn hỏa' },
        { name: 'Quan nguyên, Khí hải', detail: 'Đại bổ nguyên dương hạ tiêu' },
        { name: 'Thái khê (2 bên)', detail: 'Huyệt Nguyên kinh Thận - bổ Thận' }
      ],
      chamCuu: [
        'Ôn châm hoặc Cứu ngải ấm các huyệt Mệnh môn, Thận du, Quan nguyên 20 phút.',
        'Châm bổ Thái khê, Túc tam lý.',
        'Không dùng châm tả mạnh.'
      ],
      xoaBop: [
        '1. Xát nóng vùng thắt lưng và vùng mệnh môn bằng dầu gừng.',
        '2. Miết day ấm hai khối cơ cạnh sống thắt lưng.',
        '3. Day bấm huyệt Thận du, Mệnh môn, Thái khê.'
      ]
    },
    openQuestion: {
      question: 'Giải thích hiện tượng "Thỉnh thoảng gò má hơi hồng bốc hỏa nhẹ" ở bệnh nhân Thận dương hư nặng này?',
      answer: 'Đây là hiện tượng "Chân Hàn Giả Nhiệt" (hay "Âm sheng Cách Dương"). Do Thận dương hư suy đến cực điểm ở hạ tiêu, chân dương không còn nơi bám giữ bị chèn ép nẩy bốc nhẹ lên thượng tiêu, biểu hiện ra ngoài bằng cơn bốc hỏa thoáng qua và hai gò má hồng nhẹ. Bản chất gốc bệnh vẫn là Chân Hàn (Thận dương hư tuyệt đối), tuyệt đối không được dùng thuốc mát thanh nhiệt.'
    },
    reasoning: [
      { evidence: 'Đau thắt lưng âm ỉ, tay chân lạnh ngắt, tiểu đêm 4-5 lần, mạch Trầm nhược', conclusion: 'Thận dương hư (Chân Hàn).' },
      { evidence: 'Gò má hồng thoáng qua nhưng không khát, lưỡi bệu rêu trắng ướt', conclusion: 'Giả nhiệt (Âm sheng cách dương).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là cơn bốc hỏa nhẹ về chiều làm gò má hơi hồng và miệng cảm giác hơi khô. Chi tiết này rất dễ làm sinh viên nhầm sang Thể Can Thận âm hư (Hư Nhiệt) và kê nhầm bài Lục vị địa hoàng thang. Dữ kiện tay chân lạnh ngắt, tiểu đêm 4 lần, rêu lưỡi trắng ướt và mạch Trầm nhược khẳng định bệnh nhân bị Thận dương hư với triệu chứng giả nhiệt.'
    }
  },

  {
    id: 'bank_6',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Mất ngủ mạn tính - Thể Can uất Tỳ hư',
    summary: 'Nữ 42t, mất ngủ trằn trọc, dễ cáu gắt ngực sườn trướng nhưng lại thèm đồ ngọt, phân lỏng nát, rêu lưỡi bệu dầy, mạch Huyền缓',
    caseText: 'Bệnh nhân nữ, 42 tuổi, chủ cửa hàng thời trang. Nhập viện vì lý do: Mất ngủ trằn trọc và chướng bụng đầy hơi 3 tháng.\nBệnh sử: 3 tháng nay do buôn bán ế ẩm, bệnh nhân hay uất ức lo lắng. Đêm nằm trằn trọc 2-3 tiếng mới ngủ được, chợp mắt là mộng mị. Bệnh nhân hay thở dài, ngực sườn trướng tức, rất dễ nổi giận cáu gắt với nhân viên. Tuy nhiên, bệnh nhân lại thường xuyên thèm ăn đồ ngọt, sau ăn bụng chướng đầy ắp, đại tiện phân lỏng nát 2 lần/ngày. Da mặt sạm nhợt, mệt mỏi.\nKhám YHHĐ: Rối loạn thần kinh thực vật / Viêm đại tiện mạn.\nKhám YHCT: Lưỡi bệu to, rìa lưỡi đỏ có vết ấn răng, rêu lưỡi trắng dầy dính. Mạch Huyền緩 (vừa căng vừa hoãn).' ,
    q1: {
      chung: 'Mất ngủ trằn trọc, cáu gắt, thở dài, ngực sườn trướng, thèm đồ ngọt, chướng bụng phân lỏng, lưỡi bệu rìa đỏ có ấn răng, mạch Huyền hoãn.',
      nguyenNhan: 'Nội nhân: Căng thẳng uất ức làm Can khí uất trệ; Can uất hoành nghịch mộc khắc Thổ làm Tỳ vị hư yếu; Tỳ hư không vận hóa sinh đờm trệ quấy nhiễu Tâm thần gây mất ngủ.',
      viTri: 'Tạng Can, Tỳ, Tâm. Thuộc Lý.',
      batCuong: 'Lý – Hư thực thác tạp (Can uất thực, Tỳ hư bản).',
      benhDanh: 'Thất miên – Thể Can uất Tỳ hư.',
      phapTri: 'Sơ Can giải uất, kiện Tỳ hòa Vị, an thần định chí.',
      dungThuoc: 'Bài thuốc chủ trị: Tiêu dao tán gia giảm (Sài hồ, Đương quy, Bạch thược, Bạch thuật, Phục linh, Cam thảo, Bạc hà, Sinh khương gia Táo nhân, Viễn chí).\n• Sài hồ, Bạc hà: Sơ Can giải uất.\n• Bạch thuật, Phục linh: Kiện Tỳ vận hóa.\n• Táo nhân, Viễn chí: Dưỡng tâm an thần.',
      khongDungThuoc: 'Châm tả Thái冲, Kỳ môn; Châm bổ Túc tam lý, Tam âm giao, Thần môn; Tập dưỡng sinh.',
      anUongSinhHoat: 'Ăn đồ thanh nhẹ dễ tiêu, bớt đồ ngọt cay mỡ. Tránh uất giận tối trước khi ngủ.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (cải thiện sau 2-3 tuần dùng Tiêu dao tán).\n• Phòng bệnh: Thư giãn tâm lý, phân bổ công việc hợp lý.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Thái冲 (2 bên)', detail: 'Sơ Can giải uất, bình Can khí' },
        { name: 'Túc tam lý (2 bên)', detail: 'Kiện Tỳ Vị, hỗ trợ tiêu hóa' },
        { name: 'Tam âm giao (2 bên)', detail: 'Giao hội 3 kinh âm - bổ Tỳ dưỡng Can an thần' },
        { name: 'Thần môn (2 bên)', detail: 'Huyệt Nguyên kinh Tâm - an thần định chí' }
      ],
      chamCuu: [
        'Châm tả huyệt Thái冲 để sơ Can.',
        'Châm bổ các huyệt Túc tam lý, Tam âm giao, Thần môn.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Vuốt miết hai bên bẹ sườn để giải uất.',
        '2. Xoa tròn vùng bụng quanh rốn theo chiều kim đồng hồ.',
        '3. Day ấn huyệt Thái冲, Túc tam lý, Thần môn.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt thể Can uất Tỳ hư (ở Case 6) với thể Can hỏa vượng thuần túy?',
      answer: '• Thể Can uất Tỳ hư (Case 6): Có triệu chứng uất gắt ở Can (cáu gắt, thở dài, đau sườn) nhưng NỔI BẬT kèm triệu chứng Tỳ hư (thèm ngọt, chướng bụng, phân lỏng nát, lưỡi bệu có ấn răng, mạch Huyền hoãn). Dùng bài Tiêu dao tán vừa sơ Can vừa bổ Tỳ.\n• Thể Can hỏa vượng thuần túy: Nhiệt thực chứng mạnh (mắt đỏ đắng miệng, táo bón, rêu vàng dầy, mạch Huyền sác). Dùng bài Long đởm tả can thang.'
    },
    reasoning: [
      { evidence: 'Cáu gắt, thở dài, ngực sườn trướng, mạch Huyền', conclusion: 'Can khí uất trệ.' },
      { evidence: 'Thèm ngọt, chướng bụng phân lỏng, lưỡi bệu có ấn răng', conclusion: 'Tỳ khí hư suy.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là triệu chứng tính tình cáu gắt trằn trọc làm dễ nhầm sang Thể Can uất hóa hỏa (Thực Nhiệt). Tuy nhiên, triệu chứng thèm đồ ngọt, phân lỏng nát 2 lần/ngày, lưỡi bệu to có dấu ấn răng khẳng định bản chất Tỳ hư bị Can Mộc hoành nghịch.'
    }
  },

  {
    id: 'bank_7',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Vẹo cổ cấp do Huyết ứ - Thể Lạc chẩm huyết ứ',
    summary: 'Nam 26t, vẹo cổ cấp (T) sau va chạm võ thuật nhẹ hôm trước, đau cố định như kim châm, lưỡi tím điểm ứ, mạch Sáp',
    caseText: 'Bệnh nhân nam, 26 tuổi, vận động viên Taekwondo. Nhập viện vì lý do: Đau cứng gáy và không xoay được cổ bên trái.\nBệnh sử: Sáng nay ngủ dậy, bệnh nhân thấy vùng cổ gáy bên trái đau nhói dữ dội, đầu nghiêng lệch sang trái. Bệnh nhân không thể quay cổ sang phải hay cúi ngửa. Bệnh nhân nhớ chiều hôm qua khi tập võ có va chạm nhẹ vùng cổ gáy vào thảm. Đau có tính chất cố định một điểm ở cơ gáy, đau tăng khi đụng vào, đau như kim châm nhói. Bệnh nhân không sợ lạnh, không sốt, không ho.\nKhám YHHĐ: Cơ cạnh sống cổ và cơ thang (T) co cứng căng như sợi dây cáp. Ấn đau chói điểm cạnh sống C4-C5 (T).\nKhám YHCT: Lưỡi có nốt điểm ứ huyết tím ở rìa trái, rêu lưỡi mỏng. Mạch Trầm sáp hoặc Huyền sáp.',
    q1: {
      chung: 'Đau cứng đơ gáy (T) sau va chạm võ thuật, đầu lệch trái không xoay được sang phải, đau cố định nhói kim châm, lưỡi tím điểm ứ, mạch Trầm sáp.',
      nguyenNhan: 'Bất nội ngoại nhân: Va chạm chấn thương nhẹ làm vi mạch bắp cơ vùng gáy bị tổn thương, huyết xuất ra ngoài ngưng trệ gây "Khí trệ huyết ứ", kinh bế bộc phát đau dữ dội.',
      viTri: 'Biểu / Kinh Cân vùng cổ gáy (Kinh Bàng quang, Đởm bên trái).',
      batCuong: 'Biểu/Lý – Thực (Khí trệ huyết ứ).',
      benhDanh: 'Lạc chẩm – Thể Huyết ứ.',
      phapTri: 'Hành khí hoạt huyết, hóa ứ thông lạc, thư cân chỉ thống.',
      dungThuoc: 'Bài thuốc chủ trị: Thân thống trục ứ thang gia giảm hoặc Huyết phủ trục ứ thang gia Khương hoạt, Cát cánh.\n• Đào nhân, Hồng hoa, Xuyên khung: Hoạt huyết hóa ứ chỉ thống.\n• Cát cánh, Khương hoạt: Dẫn thuốc sơ thông kinh lạc vùng cổ gáy.',
      khongDungThuoc: 'Châm tả huyệt Lạc chẩm, Hậu khê, Cách du; Trích huyết điểm ứ nặn máu; Xoa bóp hoạt huyết.',
      anUongSinhHoat: 'Nghỉ ngơi nhẹ nhàng, đeo đai cổ mềm 1-2 ngày. Tránh xoay vặn mạnh cổ.',
      tienLuongPhongBenh: '• Tiên lượng: Rất tốt (khỏi nhanh sau 1-2 ngày khi giải ứ).\n• Phòng bệnh: Đeo bảo hộ cổ khi khởi động tập võ.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Lạc chẩm (bên đau T)', detail: 'Huyệt đặc trị vẹo cổ - châm tả vận động' },
        { name: 'Cách du (2 bên)', detail: 'Huyết hội - hoạt huyết hóa ứ toàn thân' },
        { name: 'Hậu khê (T)', detail: 'Du huyệt kinh Tiểu trường - thông kinh gáy' },
        { name: 'Phong trì (2 bên)', detail: 'Thông kinh lạc vùng gáy chẩm' }
      ],
      chamCuu: [
        'Châm tả huyệt Lạc chẩm, Hậu khê vừa châm vừa hướng dẫn BN từ từ xoay cổ.',
        'Trích huyết nhẹ huyệt Cách du hoặc điểm ấn đau chói nặn vài giọt máu ứ tím.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Xát nhẹ nhàng dầu hoạt huyết vùng cổ gáy bên đau.',
        '2. Day miết giãn cơ thang bị co cứng.',
        '3. Bấm day huyệt Lạc chẩm, Hậu khê, Phong trì.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt Lạc chẩm thể Huyết ứ (Case 7) và Lạc chẩm thể Phong hàn điển hình?',
      answer: '• Thể Phong hàn: Do ngủ quên thổi quạt/máy lạnh, có triệu chứng sợ gió lạnh, rêu trắng mỏng, mạch Phù khẩn. Điều trị dùng Ôn châm/Cứu ngải tán hàn.\n• Thể Huyết ứ (Case 7): Do chấn thương/va chạm nhẹ, đau nhói cố định như kim châm, lưỡi tím điểm ứ, mạch Trầm sáp. Điều trị dùng châm tả trích huyết hoạt huyết hóa ứ (không cần cứu nóng).'
    },
    reasoning: [
      { evidence: 'Va chạm tập võ, đau nhói cố định như kim châm', conclusion: 'Chấn thương gây Huyết ứ kinh lạc.' },
      { evidence: 'Lưỡi tím điểm ứ, mạch Sáp, không sợ lạnh', conclusion: 'Huyết ứ thực chứng.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là bệnh nhân phát hiện vẹo cổ vào buổi sáng sau khi ngủ dậy, làm sinh viên dễ phản xạ chẩn đoán là "Vẹo cổ do nhiễm phong hàn đêm". Tuy nhiên, dữ kiện va chạm võ thuật chiều hôm trước, tính chất đau kim châm cố định, lưỡi tím điểm ứ và mạch Sáp khẳng định bản chất là Huyết ứ.'
    }
  },

  {
    id: 'bank_8',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau khớp gối mạn - Thể Phong hàn thấp tý kiêm Khí huyết hư',
    summary: 'Nữ 65t, gối sưng to lạo xạo sờ lạnh ngắt, da tái nhợt, mệt mỏi hụt hơi, sắc mặt nhợt, rêu trắng mỏng, mạch Tế nhược',
    caseText: 'Bệnh nhân nữ, 65 tuổi, làm nông. Nhập viện vì lý do: Đau sưng hai khớp gối kéo dài và mệt mỏi.\nBệnh sử: Bệnh nhân đau gối hai bên âm ỉ 5 năm nay. 1 tuần nay thời tiết rét đậm rét hại, hai khớp gối bệnh nhân sưng to phình ra, đau nặng nề không thể tự đi lại được. Tuy sưng to nhưng sờ vào vùng khớp gối lạnh ngắt, da quanh gối tái nhợt, chườm ngải cứu nóng thấy đỡ đau dễ chịu. Bệnh nhân người mệt mỏi thều thào, hụt hơi, da niêm nhợt nhạt, mỏi lưng gối, tiểu đêm 3 lần. Đại tiện nát.\nKhám YHHĐ: Khớp gối hai bên tràn dịch nhẹ, tiếng lạo xạo rõ. X-quang: Thoái hóa khớp gối độ 3.\nKhám YHCT: Sắc mặt trắng nhợt không tươi. Lưỡi nhợt bệu, rêu lưỡi trắng mỏng. Mạch Tế nhược vô lực.',
    q1: {
      chung: 'Sưng đau khớp gối 2 bên, sờ gối lạnh ngắt, da tái nhợt, chườm ấm dễ chịu, lạo xạo khớp gối, mệt mỏi sắc nhợt, tiểu đêm, lưỡi nhợt bệu rêu trắng, mạch Tế nhược.',
      nguyenNhan: 'Bản hư: Tuổi cao khí huyết suy hư, Can Thận suy hư không nuôi dưỡng gân cốt. Tiêu thực: Phong hàn thấp tà ngoại phạm bế tắc kinh lạc khớp gối làm khí huyết ngưng trệ gây đau sưng.',
      viTri: 'Khớp gối kiêm tạng Can, Thận, Tỳ. Thuộc Lý kiêm Biểu.',
      batCuong: 'Lý kiêm Biểu – Hư thực thác tạp (Phong hàn thấp tý trên nền Khí huyết Can Thận hư).',
      benhDanh: 'Hạc tất phong / Thấp khớp – Thể Phong hàn thấp tý kiêm Khí huyết hư.',
      phapTri: 'Khu phong tán hàn trừ thấp, thông lạc chỉ thống (Trị tiêu); Bổ khí huyết, bổ Can Thận (Trị bản).',
      dungThuoc: 'Bài thuốc chủ trị: Độc hoạt ký sinh thang phối hợp Bát trân thang gia giảm.\n• Độc hoạt, Tần giao, Phòng phong, Tế tân: Khu phong tán hàn trừ thấp.\n• Đảng sâm, Hoàng kỳ, Đương quy, Thục địa: Đại bổ khí huyết.\n• Đỗ trọng, Tang ký sinh, Ngưu tất: Bổ Can Thận cường gân cốt.',
      khongDungThuoc: 'Ôn châm, cứu ngải ấm các huyệt khớp gối và huyệt bổ khí huyết; Tập gấp duỗi gối không tải.',
      anUongSinhHoat: 'Đeo băng ấm giữ nhiệt khớp gối. Ăn đồ bổ khí huyết ấm nóng. Hạn chế leo cầu thang.',
      tienLuongPhongBenh: '• Tiên lượng: Tiến triển mạn tính (kiên trì ôn bổ 1-2 tháng).\n• Phòng bệnh: Giữ ấm khớp gối mùa đông.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Độc tị, Tất nhãn (2 bên)', detail: 'Huyệt đặc hiệu khớp gối - ôn châm tán hàn thông lạc' },
        { name: 'Dương lăng tuyền (2 bên)', detail: 'Cân hội - chữa co cứng đau gân gối' },
        { name: 'Túc tam lý (2 bên)', detail: 'Bổ Tỳ Vị ích khí huyết' },
        { name: 'Thận du (2 bên)', detail: 'Bổ Can Thận ở lưng' }
      ],
      chamCuu: [
        'Ôn châm hoặc Cứu ngải ấm huyệt Độc tị, Tất nhãn, Dương lăng tuyền 20 phút.',
        'Châm bổ Túc tam lý, Thận du.',
        'Lưu kim 25 phút.'
      ],
      xoaBop: [
        '1. Xát hai lòng bàn tay cho ấm rồi xát quanh khớp gối.',
        '2. Day miết xung quanh bánh chè.',
        '3. Vận động gấp duỗi khớp gối nhẹ nhàng.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt điểm khác nhau quan trọng khi khớp gối sưng to ở Thể Nhiệt tý (Viêm khớp nhiễm khuẩn/Gút) và Thể Phong hàn thấp tý kiêm Khí hư (Case 8)?',
      answer: '• Thể Nhiệt tý: Khớp gối sưng TO kèm NÓNG ĐỎ, sờ vào sực nóng, đau dữ dội không cho chạm, sốt cao, lưỡi đỏ rêu vàng dầy, mạch sác. Chống chỉ định cứu nóng.\n• Thể Phong hàn thấp tý kiêm Khí hư (Case 8): Khớp gối sưng to phình nhưng sờ vào LẠNH NGẮT, da xung quanh TÁI NHỢT, thích chườm ngải cứu nóng, người mệt nhợt hụt hơi, lưỡi bệu nhợt rêu trắng, mạch Tế nhược. Bắt buộc phải Ôn châm/Cứu ấm.'
    },
    reasoning: [
      { evidence: 'Khớp gối sưng lạo xạo, sờ gối lạnh ngắt, chườm ngải nóng dễ chịu', conclusion: 'Phong hàn thấp tý (Hàn chứng).' },
      { evidence: 'Sắc mặt nhợt, mệt mỏi hụt hơi, lưỡi bệu nhợt, mạch Tế nhược', conclusion: 'Khí huyết hư (Bản hư).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là hai khớp gối bệnh nhân "sưng to phình ra". Hình ảnh khớp sưng to dễ làm sinh viên vội vã kết luận là Viêm khớp cấp / Thấp nhiệt tý (Nhiệt chứng) và không dám dùng ngải cứu. Tuy nhiên, sờ vào khớp lạnh ngắt, da tái nhợt và thích chườm nóng khẳng định bản chất là Hàn thấp tý trên nền Khí huyết hư.'
    }
  },

  {
    id: 'bank_9',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau dạ dày / Vị quản thống - Thể Tỳ Vị hư hàn kiêm Thực tích',
    summary: 'Nam 45t, đau âm ỉ thượng vị nôn nước trong thích chườm ấm kéo dài, sau bữa tiệc nôn thức ăn chua hôi ứ đọng, rêu trắng nhớt, mạch Trầm trì hoãn',
    caseText: 'Bệnh nhân nam, 45 tuổi, nhân viên kinh doanh. Nhập viện vì lý do: Đau tức vùng thượng vị và nôn ra thức ăn chua hôi.\nBệnh sử: Bệnh nhân có tiền sử đau âm ỉ thượng vị 3 năm nay, nôn ra nước trong, thích chườm ấm, ăn đồ lạnh dễ bị đau bụng đi ngoài. Tối qua sau khi dự tiệc tất niên ăn uống nhiều thịt mỡ và rượu bia, đêm về bệnh nhân bộc phát cơn đau trướng dữ dội vùng thượng vị, ợ hơi ra mùi thức ăn hôi thối, buồn nôn vọt ra nhiều thức ăn chưa tiêu từ tối qua. Nôn xong thì bụng trướng đau đỡ hơn một chút. Bệnh nhân người mệt mỏi, sợ lạnh, tay chân hơi lạnh.\nKhám YHHĐ: Ấn đau vùng thượng vị, bụng trướng nhẹ.\nKhám YHCT: Sắc mặt hơi nhợt. Lưỡi bệu, rêu lưỡi trắng dầy nhớt hôi. Mạch Trầm trì hoãn.',
    q1: {
      chung: 'Đau âm ỉ thượng vị mạn tính thích ấm, sau ăn no nôn thức ăn chua hôi không tiêu, ợ hôi, nôn xong đỡ đau, tay chân lạnh, lưỡi bệu rêu trắng dầy nhớt hôi, mạch Trầm trì hoãn.',
      nguyenNhan: 'Bản hư: Tỳ Vị hư hàn lâu ngày làm năng lượng vận hóa suy yếu. Tiêu thực: Ăn uống quá bội làm thức ăn bội trệ không tiêu hóa được ngưng đọng ở Vị ("Thực tích"), bế tắc Vị khí bộc phát đau trướng ợ nôn.',
      viTri: 'Tạng Tỳ và Vị. Thuộc Lý.',
      batCuong: 'Lý – Hàn – Hư thực thác tạp (Tỳ Vị hư hàn là bản, Thực tích là tiêu).',
      benhDanh: 'Vị quản thống – Thể Tỳ Vị hư hàn kiêm Thực tích.',
      phapTri: 'Ôn trung tán hàn, kiện Tỳ hòa Vị (Trị bản); Tiêu thực đạo trệ, giáng nghịch chỉ nôn (Trị tiêu).',
      dungThuoc: 'Bài thuốc chủ trị: Lý trung thang phối hợp Bảo hòa hoàn gia giảm.\n• Hoàng kỳ, Đảng sâm, Can khương, Bạch thuật: Ôn trung kiện Tỳ Vị.\n• Sơn tra, Thần khúc, Lai phục tử: Tiêu thực đạo trệ, tiêu thức ăn ăn đọng.\n• Trần bì, Bán hạ: Hòa Vị giáng nghịch chỉ nôn.',
      khongDungThuoc: 'Ôn châm hoặc cứu ấm huyệt Trung quản, Túc tam lý; Xoa bóp bụng nhẹ nhàng.',
      anUongSinhHoat: 'Ngừng ăn 6-8 tiếng cho dạ dày nghỉ. Sau đó ăn cháo loãng nấu gừng. Tránh tuyệt đối ăn quá no.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giải thực tích sau 1-2 ngày, cần ôn Tỳ thêm 2 tuần).\n• Phòng bệnh: Ăn uống định lượng, không ăn nhậu quá bội.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Trung quản', detail: 'Huyệt Mộ của Vị - cứu ấm tiêu tích hòa Vị' },
        { name: 'Túc tam lý (2 bên)', detail: 'Hợp huyệt Vị - kiện Tỳ hòa Vị tiêu thực' },
        { name: 'Nội quan (2 bên)', detail: 'Giáng nghịch chỉ nôn ợ hôi' },
        { name: 'Thái bạch (2 bên)', detail: 'Huyệt Nguyên kinh Tỳ - kiện Tỳ vận hóa' }
      ],
      chamCuu: [
        'Ôn châm hoặc cứu ngải ấm huyệt Trung quản, Túc tam lý 20 phút.',
        'Châm bình bổ bình tả huyệt Nội quan, Thái bạch.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Thao tác xoa ấm vùng bụng quanh rốn theo chiều kim đồng hồ.',
        '2. Ấn day huyệt Trung quản, Túc tam lý, Nội quan.'
      ]
    },
    openQuestion: {
      question: 'Tại sao bệnh nhân có triệu chứng nôn thức ăn chua hôi (thường gặp trong Thực Nhiệt) nhưng Bát cương vẫn chẩn đoán là Hàn chứng?',
      answer: 'Triệu chứng nôn thức ăn chua hôi ở đây là do "Thực tích" (thức ăn ngưng đọng lâu không tiêu hóa được sinh chua hôi), chứ không phải do Nhiệt tà. Bản chất gốc bệnh vẫn là Tỳ Vị hư hàn (tiền sử đau âm ỉ nôn nước trong, thích chườm ấm, sợ lạnh, tay chân lạnh, rêu lưỡi trắng dầy ướt và mạch Trầm trì). Do đó bài thuốc bắt buộc phải dùng thuốc ấm (Can khương, Trần bì, Sơn tra tính ấm) mới tiêu được tích hàn.'
    },
    reasoning: [
      { evidence: 'Tiền sử đau thượng vị âm ỉ nôn nước trong thích ấm, tay chân lạnh, mạch Trầm trì', conclusion: 'Tỳ Vị hư hàn (Bản hư).' },
      { evidence: 'Ăn no tiệc nôn thức ăn chua hôi ứ đọng, nôn xong đỡ đau', conclusion: 'Thực tích trệ Vị (Tiêu thực).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là nôn ra thức ăn có mùi chua hôi sau bữa tiệc. Triệu chứng chua hôi dễ làm sinh viên nhầm sang Thể Can Vị uất nhiệt hoặc Thực nhiệt tích trệ mà dùng thuốc đắng lạnh thanh nhiệt (như Hoàng liên). Điều này sẽ làm Tỳ Vị hư hàn nặng thêm, gây nôn mửa và đi ngoài phân lỏng cấp.'
    }
  },

  {
    id: 'bank_10',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Hội chứng cổ vai cánh tay - Thể Phong thấp nhiệt tý',
    summary: 'Nữ 50t, đau lan cổ gáy xuống bả vai cánh tay (P) tê ngón tay, vùng vai nóng rát thích mát, rêu lưỡi vàng mỏng, mạch Phù sác',
    caseText: 'Bệnh nhân nữ, 50 tuổi, công nhân may. Nhập viện vì lý do: Đau mỏi cổ gáy lan xuống vai tay phải kèm cảm giác nóng rát.\nBệnh sử: 3 ngày nay thời tiết mùa hè oi nóng ẩm ướt, bệnh nhân bộc phát đau dữ dội vùng cổ gáy bên phải, đau lan xuống bả vai, mặt ngoài cánh tay và tê dại ngón tay trỏ, ngón giữa (P). Vùng vai và gáy bệnh nhân có cảm giác nóng rát như lửa đốt, vùng bả vai sờ vào thấy ấm nóng rõ, không thích quàng khăn hay chườm ấm, thích chườm khăn mát. Bệnh nhân họng khô khát nước, bứt rứt khó ngủ.\nKhám YHHĐ: Ấn đau điểm cạnh sống cổ C5-C6 (P). Spurling (P) (+). Vùng cơ thang (P) hơi xung huyết ấm.\nKhám YHCT: Lưỡi đỏ, rêu lưỡi vàng mỏng. Mạch Phù sác.',
    q1: {
      chung: 'Đau cổ gáy lan vai cánh tay (P), tê ngón trỏ ngón giữa, gáy vai nóng rát thích chườm mát, Spurling (+), họng khô, lưỡi đỏ rêu vàng mỏng, mạch Phù sác.',
      nguyenNhan: 'Ngoại nhân: Phong thấp nhiệt tà xâm nhập bế tắc kinh lạc Thủ Dương minh và Thủ Thiếu dương vùng cổ vai tay làm khí huyết bế tắc gây đau rát.',
      viTri: 'Biểu (Kinh lạc vùng cổ vai cánh tay phải).',
      batCuong: 'Biểu – Nhiệt – Thực.',
      benhDanh: 'Kiên tý thống – Thể Phong thấp nhiệt.',
      phapTri: 'Tân lương giải biểu, thanh nhiệt trừ thấp, thông kinh hoạt lạc.',
      dungThuoc: 'Bài thuốc chủ trị: Quyên tý thang gia giảm phối hợp Bạch hổ quế chi thang gia vị.\n• Bạc hà, Khương hoạt: Khu phong giải biểu ở chi trên.\n• Tri mẫu, Thạch cao: Thanh nhiệt tả hỏa.\n• Khương hoàng (Nghệ vàng), Quế chi, Mộc qua: Dẫn thuốc thông kinh lạc vai tay.',
      khongDungThuoc: 'Châm tả Phong trì, Kiên井, Khúc trì, Hợp cốc; KHÔNG CỨU NGẢI hay chườm ấm.',
      anUongSinhHoat: 'Uống nước mát bột sắn dây. Tránh đồ cay nóng, giữ vệ sinh lao động.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giảm đau nhanh sau 3-5 ngày thanh nhiệt).\n• Phòng bệnh: Tránh làm việc môi trường quá nóng ẩm.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Phong trì (2 bên)', detail: 'Khu phong giải nhiệt vùng gáy' },
        { name: 'Kiên井 (P)', detail: 'Huyệt đỉnh vai - châm tả giải nhiệt co cứng vai' },
        { name: 'Khúc trì (P)', detail: 'Huyệt Hợp kinh Dương minh - thanh nhiệt toàn thân thông tay' },
        { name: 'Hợp cốc (P)', detail: 'Thanh nhiệt giải thông tê ngón tay' }
      ],
      chamCuu: [
        'Châm tả các huyệt Phong trì, Kiên井, Khúc trì, Hợp cốc.',
        'Kỹ thuật châm tả thanh nhiệt.',
        'CHỐNG CHỈ ĐỊNH cứu ấm/ôn châm.'
      ],
      xoaBop: [
        '1. Vuốt miết nhẹ nhàng vùng cổ gáy xuống bả vai.',
        '2. Day bấm huyệt Phong trì, Khúc trì, Hợp cốc.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt sự khác nhau trong dùng phương pháp điều trị Không dùng thuốc giữa Hội chứng cổ vai cánh tay thể Phong hàn thấp và Thể Phong thấp nhiệt (Case 10)?',
      answer: '• Thể Phong hàn thấp: Cổ vai lạnh đau, thích chườm ấm. BẮT BỘC dùng Ôn châm, Cứu ngải ấm hoặc chiếu đèn hồng ngoại lên các huyệt Kiên井, Khúc trì, Phong trì để tán hàn thông lạc.\n• Thể Phong thấp nhiệt (Case 10): Cổ vai nóng rát, thích chườm mát, mạch Phù sác. CHỐNG CHỈ ĐỊNH cứu ngải hay chườm nóng. Bắt buộc dùng kỹ thuật Châm tả thanh nhiệt và chườm khăn mát.'
    },
    reasoning: [
      { evidence: 'Đau gáy lan vai tay (P), tê ngón tay, Spurling (+)', conclusion: 'Kiên tý thống (Hội chứng cổ vai cánh tay P).' },
      { evidence: 'Cảm giác nóng rát vùng vai, thích chườm mát, rêu vàng, mạch Phù sác', conclusion: 'Phong thấp nhiệt tý (Nhiệt thực chứng).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là bệnh nhân là thợ may có tiền sử đau mỏi gáy (dễ nghĩ đến mạn tính do Phong hàn). Tuy nhiên, đợt cấp lần này xuất hiện cảm giác nóng rát như lửa đốt ở gáy vai, thích chườm mát, họng khô và mạch Phù sác đòi hỏi sinh viên phải nhận diện đúng Thể Phong thấp nhiệt và không được dùng ngải cứu.'
    }
  },

  {
    id: 'bank_11',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Rối loạn tiền đình / Huyễn vựng - Thể Đờm thấp quấy nhiễu thanh dương',
    summary: 'Nam 55t, chóng mặt trần nhà quay mòng mòng, cảm giác đầu nặng như đeo đá, buồn nôn đờm dãi nhớt, rêu lưỡi trắng dầy nhớt, mạch Nhu hoạt',
    caseText: 'Bệnh nhân nam, 55 tuổi, béo phì, quản lý kho hàng. Nhập viện vì lý do: Chóng mặt dữ dội và đầu nặng trệ.\nBệnh sử: Sáng nay ngủ dậy, bệnh nhân đột ngột thấy trần nhà quay mòng mòng, không thể ngồi dậy được, hễ xoay đầu là chóng mặt buồn nôn. Khác với cơn chóng mặt do huyết áp cao, bệnh nhân không đau căng đỉnh đầu mà cảm thấy vùng đầu nặng chèn trệ như bị cuộn đệm đá nặng gạt lên. Bệnh nhân lợm giọng buồn nôn vọt ra nhiều đờm dãi nhớt màu trắng, ngực sườn đẫy trướng đầy ắp, người lờ đờ thèm ngủ. Đại tiện phân nát dính.\nKhám YHHĐ: Romberg (+), Nystagmus ngang (+). Huyết áp 125/80 mmHg.\nKhám YHCT: Thể trạng béo bệu, sắc mặt trệ. Lưỡi bệu to, rêu lưỡi trắng dầy nhớt dính. Mạch Nhu hoạt.',
    q1: {
      chung: 'Chóng mặt quay mòng mòng, đầu nặng như đeo đá, buồn nôn đờm dãi nhớt, ngực trướng, lờ đờ, HA 125/80, lưỡi bệu rêu trắng dầy nhớt, mạch Nhu hoạt.',
      nguyenNhan: 'Nội nhân: Tỳ hư mất vận hóa, tân dịch ngưng trệ thành Đờm thấp; Đờm thấp theo khí ngược lên che lấp vùng thanh dương ở đầu ("Đờm phấp thượng mông") gây chóng mặt quay mòng mòng và đầu nặng.',
      viTri: 'Tạng Tỳ, Vị và Vùng Đầu mặt. Thuộc Lý.',
      batCuong: 'Lý – Đờm Thấp – Thực.',
      benhDanh: 'Huyễn vựng – Thể Đờm thấp / Bán hạ bạch truật thiên ma thang.',
      phapTri: 'Táo thấp hóa đờm, kiện Tỳ hòa Vị, định phong giải chóng mặt.',
      dungThuoc: 'Bài thuốc cổ phương kinh điển: Bán hạ bạch truật thiên ma thang gia giảm.\n• Bán hạ chế, Thiên ma: Táo thấp hóa đờm, định phong giải chóng mặt.\n• Bạch thuật, Phục linh: Kiện Tỳ trừ thấp ở gốc.\n• Trần bì, Cam thảo: Hòa Vị giáng nghịch chỉ nôn.',
      khongDungThuoc: 'Châm tả Phong long, Trung quản; Châm bổ Túc tam lý, Phục linh; Nằm nghỉ phòng tối tĩnh.',
      anUongSinhHoat: 'Ăn thanh nhạt, kiêng tuyệt đối đồ béo ngậy, sữa, rượu bia, đồ ngọt. Tập vận động nhẹ khi đỡ chóng mặt.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giảm chóng mặt rõ sau 1-2 ngày hóa đờm).\n• Phòng bệnh: Kiểm soát cân nặng, giảm mỡ máu.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Phong long (2 bên)', detail: 'Huyệt đặc hiệu hóa đờm toàn thân' },
        { name: 'Trung quản', detail: 'Huyệt Mộ của Vị - hòa Vị giáng nghịch chỉ nôn' },
        { name: 'Túc tam lý (2 bên)', detail: 'Kiện Tỳ vận hóa trừ thấp' },
        { name: 'Bách hội, Đầu duy', detail: 'Huyệt vùng đầu - giải nặng đầu chóng mặt' }
      ],
      chamCuu: [
        'Châm tả các huyệt Phong long, Trung quản, Đầu duy.',
        'Châm bổ Túc tam lý.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Vuốt miết nhẹ vùng trán và da đầu.',
        '2. Day bấm huyệt Phong long, Trung quản, Túc tam lý.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt mấu chốt triệu chứng Đầu và Mạch giữa Chóng mặt thể Can dương thượng ngoạn (Case 15) và thể Đờm thấp quấy nhiễu (Case 11)?',
      answer: '• Thể Can dương thượng ngoạn (Case 15): Đầu ĐAU CĂNG TỨC vùng đỉnh nhịp đập thình thịch, mặt đỏ cáu gắt, Huyết áp tăng cao (170 mmHg), mạch Huyền sác căng nảy.\n• Thể Đờm thấp (Case 11): Đầu NẶNG TRỆ NHƯ ĐEO ĐÁ, lợm giọng nôn đờm dãi nhớt, người lờ đờ béo bệu, Huyết áp bình thường (125 mmHg), rêu lưỡi trắng dầy nhớt, mạch Nhu hoạt.'
    },
    reasoning: [
      { evidence: 'Chóng mặt trần nhà quay mòng mòng, lợm giọng nôn đờm dãi nhớt', conclusion: 'Đờm thấp thượng mông (Huyễn vựng).' },
      { evidence: 'Đầu nặng như đeo đá, béo bệu, rêu trắng dầy nhớt, mạch Nhu hoạt', conclusion: 'Đờm thấp thực chứng.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là triệu chứng chóng mặt dữ dội quay mòng mòng dễ làm sinh viên vội vã chẩn đoán Tăng huyết áp / Can dương thượng ngoạn và kê bài Thiên ma câu đằng ẩm. Tuy nhiên, chỉ số HA 125/80 mmHg bình thường, cảm giác đầu nặng trệ như đeo đá, nôn đờm dãi nhớt và rêu dầy dính khẳng định đây là thể Bán hạ bạch truật thiên ma thang.'
    }
  },

  {
    id: 'bank_12',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Cảm mạo phong hàn kiêm Thấp trệ Kinh lạc - Thể Phong hàn thấp tý',
    summary: 'Nữ 30t, dầm mưa lạnh về bị sợ lạnh hắt xì, mình mẩy đau nhức nặng nề như bị ai đánh, rêu lưỡi trắng dầy, mạch Phù nhu',
    caseText: 'Bệnh nhân nữ, 30 tuổi, nhân viên văn phòng. Nhập viện vì lý do: Sợ lạnh, hắt hơi và đau nhức mình mẩy nặng nề.\nBệnh sử: Chiều qua dầm mưa lạnh ẩm về, bệnh nhân xuất hiện gai người rét run, sợ gió sợ lạnh, hắt hơi liên tục, chảy nước mũi trong. Đặc biệt, toàn thân mình mẩy bệnh nhân đau nhức dữ dội, cảm giác các bắp thịt và khớp ngón tay chân nặng trệ mỏi nhừ như bị đòn đánh, các khớp ngón tay có cảm giác dính cứng nhẹ vào buổi sáng. Bệnh nhân không sốt hoặc sốt nhẹ 37.4°C, không khát nước, thích chườm ấm.\nKhám YHHĐ: Nhiệt độ 37.4°C, họng bình thường, các khớp chi không sưng đỏ.\nKhám YHCT: Sắc mặt hơi nhợt. Rêu lưỡi trắng dầy ướt. Mạch Phù nhu khẩn.',
    q1: {
      chung: 'Gai người sợ lạnh, hắt xì nước mũi trong, đau nhức mình mẩy nặng nề như đòn đánh, dính cứng khớp ngón tay sáng, rêu trắng dầy ướt, mạch Phù nhu.',
      nguyenNhan: 'Ngoại nhân: Phong Hàn Thấp tà đồng thời xâm nhập biểu Phế vệ và kinh lạc toàn thân; Hàn gây sợ lạnh đau nhức, Thấp gây nặng nề trệ trệ các bắp cơ và khớp.',
      viTri: 'Biểu (Phế vệ và Kinh lạc toàn thân).',
      batCuong: 'Biểu – Hàn Thấp – Thực.',
      benhDanh: 'Cảm mạo phong hàn kiêm Thấp tý.',
      phapTri: 'Khu phong tán hàn, trừ thấp thông lạc giải biểu.',
      dungThuoc: 'Bài thuốc cổ phương kinh điển: Cửu vị khương hoạt thang gia giảm.\n• Khương hoạt, Độc hoạt: Trừ phong hàn thấp ở chi trên và chi dưới.\n• Phòng phong, Thương thuật: Sơ phong giải biểu, táo thấp bắp cơ.\n• Bạch chỉ, Xuyên khung: Giảm đau nhức đầu mình mẩy.',
      khongDungThuoc: 'Ôn châm hoặc cứu ngải ấm huyệt Phong trì, Hợp cốc, Túc tam lý; Xát ấm toàn thân.',
      anUongSinhHoat: 'Uống cháo hành gừng ấm xông hơi nhẹ ra mồ hôi. Giữ ấm toàn thân, tránh nước lạnh.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (khỏi giải cảm sau 2-3 ngày).\n• Phòng bệnh: Tránh mặc đồ ướt mưa lâu.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Phong trì (2 bên)', detail: 'Khu phong tán hàn giải biểu' },
        { name: 'Hợp cốc (2 bên)', detail: 'Thông tuyên Phế khí giải đau mình' },
        { name: 'Túc tam lý (2 bên)', detail: 'Kiện Tỳ vận hóa trừ thấp toàn thân' },
        { name: 'Dương lăng tuyền (2 bên)', detail: 'Cân hội - giải mỏi đau cơ bắp' }
      ],
      chamCuu: [
        'Ôn châm các huyệt Phong trì, Hợp cốc, Túc tam lý.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Xát ấm toàn thân dọc kinh Bàng quang.',
        '2. Day ấn huyệt Phong trì, Túc tam lý.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt triệu chứng Đau mình mẩy ở Cảm mạo phong hàn thuần túy và Cảm mạo phong hàn kiêm Thấp tý (Case 12)?',
      answer: '• Cảm mạo phong hàn thuần túy: Đau mỏi đầu và mình mẩy nhẹ, triệu chứng sợ lạnh hắt xì nước mũi trong nổi bật, rêu lưỡi trắng mỏng, mạch Phù khẩn.\n• Cảm mạo phong hàn kiêm Thấp tý (Case 12): Đau nhức mình mẩy NẶNG NỀ trệ trệ như bị đòn đánh, khớp ngón tay dính cứng mỏi nhừ (do Thấp tà trệ bắp cơ), rêu lưỡi trắng DẦY ướt, mạch Phù nhu khẩn.'
    },
    reasoning: [
      { evidence: 'Dầm mưa lạnh về, sợ lạnh hắt xì nước mũi trong', conclusion: 'Phong hàn phạm biểu.' },
      { evidence: 'Đau nhức mình mẩy nặng nề như bị đánh, rêu trắng dầy, mạch Nhu', conclusion: 'Thấp tà trệ kinh lạc bắp cơ.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là triệu chứng đau nhức bắp cơ nặng nề và dính cứng khớp ngón tay vào buổi sáng dễ làm sinh viên nghĩ đến bệnh Lý (như Viêm khớp dạng thấp mạn tính). Tuy nhiên, hoàn cảnh dầm mưa về phát gai người sợ lạnh hắt xì, mạch Phù nhu khẳng định đây là ngoại cảm Phong hàn thấp tý ở biểu.'
    }
  },

  {
    id: 'bank_13',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Liệt VII ngoại biên giai đoạn di chứng - Thể Huyết ứ kinh lạc',
    summary: 'Nam 48t, méo miệng kéo dài 2 tháng sau liệt VII, cơ mặt co cứng nhẹ cố định, nhân trung lệch cứng, lưỡi tím có điểm ứ, mạch Trầm sáp',
    caseText: 'Bệnh nhân nam, 48 tuổi, thợ mộc. Nhập viện vì lý do: Méo miệng kéo dài 2 tháng và co cứng vùng má phải.\nBệnh sử: 2 tháng trước bệnh nhân bị liệt VII ngoại biên bên phải, điều trị châm cứu không đều. Hiện tại méo miệng chưa phục hồi, rãnh mũi má (P) không mờ mà trái lại có cảm giác bị gân co cứng nhô lên, kéo lệch miệng và nhân trung cố định sang trái. Bệnh nhân cảm thấy vùng má phải đau tức cố định, cơ mặt không nhẽo mà cứng ngắc khó cử động. Bệnh nhân không sốt, không mệt mỏi, ăn uống bình thường.\nKhám YHHĐ: Liệt VII ngoại biên (P) di chứng biến chứng co cứng cơ mặt nhẹ. Nhân trung lệch trái.\nKhám YHCT: Lưỡi có điểm nốt ứ huyết tím ở rãnh má rãnh lưỡi, rêu lưỡi mỏng. Mạch Trầm sáp.' ,
    q1: {
      chung: 'Méo miệng (P) kéo dài 2 tháng, cơ mặt (P) co cứng đau tức cố định, nhân trung lệch cứng, lưỡi có điểm ứ tím, mạch Trầm sáp.',
      nguyenNhan: 'Bệnh lâu ngày không giải triệt để làm khí huyết ngưng trệ, Huyết ứ bế tắc kinh lạc Dương minh và Thiếu dương vùng mặt gây co cứng xơ gân cơ.',
      viTri: 'Kinh lạc vùng mặt (Kinh Dương minh, Thiếu dương). Thuộc Lý.',
      batCuong: 'Lý – Thực (Huyết ứ trệ kinh lạc).',
      benhDanh: 'Khẩu nhãn oa tà di chứng – Thể Huyết ứ.',
      phapTri: 'Hoạt huyết hóa ứ, thư cân giải co thắt, thông kinh hoạt lạc.',
      dungThuoc: 'Bài thuốc chủ trị: Thân thống trục ứ thang hoặc Đào hồng tứ vật thang gia vị.\n• Đào nhân, Hồng hoa, Xuyên khung: Hoạt huyết hóa ứ.\n• Bạch chỉ, Ngưu tất: Dẫn thuốc vào kinh Dương minh vùng mặt.\n• Xích thược, Mộc qua: Nhu cân giải co thắt cơ mặt.',
      khongDungThuoc: 'Châm tả nhẹ các huyệt bên liệt; Trích huyết nặn máu ứ tím huyệt Địa thương, Giáp xa; NGỪNG ĐIỆN CHÂM MẠNH.',
      anUongSinhHoat: 'Xoa bóp vuốt nhẹ miết lỏng cơ mặt hàng ngày. Tránh kích thích mạnh.',
      tienLuongPhongBenh: '• Tiên lượng: Cần kiên trì (giải co cứng chậm hơn phục hồi nhẽo).\n• Phòng bệnh: Tránh kích thích châm cứu quá tải.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Địa thương (P)', detail: 'Châm tả hoặc trích huyết giải ứ lệch miệng' },
        { name: 'Giáp xa (P)', detail: 'Giải co cứng cơ cắn má' },
        { name: 'Cách du (2 bên)', detail: 'Huyết hội - hoạt huyết hóa ứ toàn thân' },
        { name: 'Hợp cốc (2 bên)', detail: 'Huyệt Nguyên kinh Dương minh - thông khí huyết mặt' }
      ],
      chamCuu: [
        'Châm tả nhẹ các huyệt Địa thương, Giáp xa, Hợp cốc.',
        'Có thể trích huyết nhẹ tại nốt ứ tím vùng mặt.',
        'CHỐNG CHỈ ĐỊNH điện châm tần số mạnh dồn dập.'
      ],
      xoaBop: [
        '1. Miết vuốt nhẹ nhàng làm thả lỏng khối cơ má bị co cứng.',
        '2. Day ấn nhẹ huyệt Địa thương, Giáp xa.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt phương pháp xoa bóp giữa Liệt VII ngoại biên thể Khí huyết hư (cơ nhẽo - Case 6) và Thể Huyết ứ co cứng (Case 13)?',
      answer: '• Thể Khí huyết hư (cơ nhẽo - Case 6): Dùng thủ thuật BÓP NHÉO, VÉO CƠ MẶT mạnh dạn để tăng trương lực cơ bị teo nhẽo.\n• Thể Huyết ứ co cứng (Case 13): CHỐNG CHỈ ĐỊNH bóp nhéo mạnh. Bắt buộc dùng thủ thuật VUỐT NẶN NHẸ NHÀNG, MIẾT DÃN CƠ để thả lỏng và làm mềm khối cơ mặt đang bị co cứng.'
    },
    reasoning: [
      { evidence: 'Méo miệng kéo dài 2 tháng, cơ mặt co cứng đau tức cố định', conclusion: 'Di chứng liệt VII biến chứng co cứng.' },
      { evidence: 'Lưỡi có điểm ứ tím, mạch Sáp', conclusion: 'Huyết ứ trệ kinh lạc vùng mặt.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là tình trạng méo miệng kéo dài 2 tháng làm sinh viên hay phản xạ chẩn đoán là "Khí huyết hư cơ mặt nhẽo". Tuy nhiên, dữ kiện cơ mặt bị co cứng đau tức cố định, nhân trung lệch cứng, lưỡi tím điểm ứ và mạch Sáp khẳng định bản chất là Huyết ứ bế tắc.'
    }
  },

  {
    id: 'bank_14',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau thần kinh tọa do thoát vị đĩa đệm - Thể Khí trệ huyết ứ',
    summary: 'Nam 40t, bốc vác, đau dữ dội thắt lưng lan mông đùi cẳng chân (T), đau nhói như kim châm tăng về đêm, Lasegue 45°, lưỡi tím điểm ứ, mạch Sáp',
    caseText: 'Bệnh nhân nam, 40 tuổi, công nhân bốc vác container. Nhập viện vì lý do: Đau thắt lưng lan xuống chân trái dữ dội.\nBệnh sử: 3 ngày trước sau khi ráng sức khiêng kiện hàng nặng 50kg, bệnh nhân nghe tiếng "khựa" ở lưng, ngay sau đó bộc phát cơn đau nhói dữ dội thắt lưng lan tức thì xuống mông, mặt sau đùi, cẳng chân và ngón chân út (T). Đau có tính chất cố định nhói như kim châm, đau tăng dữ dội về đêm khiến bệnh nhân trằn trọc không ngủ được, ho hay hắt hơi là đau nhói lên sọ. Bệnh nhân không sợ lạnh, không sốt, không tiểu đêm.\nKhám YHHĐ: Co cứng lệch cơ cạnh sống L4-S1. Lasegue (T) 45° (+) rõ. Điểm Valex (T) dương tính.\nKhám YHCT: Sắc mặt đau đớn. Lưỡi tím có nốt ứ huyết ở rêu lưỡi. Mạch Trầm sáp.' ,
    q1: {
      chung: 'Đau thắt lưng lan mông đùi cẳng chân (T) sau bê nặng, đau cố định như kim châm tăng về đêm, Lasegue (T) 45°, lưỡi tím điểm ứ, mạch Trầm sáp.',
      nguyenNhan: 'Bất nội ngoại nhân: Bê nặng sai tư thế làm đĩa đệm tổn thương, huyết xuất ra ngoài ngưng trệ gây "Khí trệ huyết ứ", bế tắc kinh Bàng quang và Thiếu dương bộc phát đau dữ dội.',
      viTri: 'Kinh Bàng quang và Đởm chân trái. Thuộc Lý.',
      batCuong: 'Lý – Thực (Khí trệ huyết ứ).',
      benhDanh: 'Tọa cốt thống – Thể Khí trệ huyết ứ.',
      phapTri: 'Hành khí hoạt huyết, hóa ứ thông lạc, thư cân chỉ thống.',
      dungThuoc: 'Bài thuốc chủ trị: Thân thống trục ứ thang gia giảm.\n• Đào nhân, Hồng hoa, Đương quy, Xuyên khung: Hoạt huyết hóa ứ chỉ thống.\n• Nhũ hương, Một dược: Sơ thông kinh lạc bế tắc.\n• Ngưu tất, Đỗ trọng: Dẫn thuốc xuống hạ chi.',
      khongDungThuoc: 'Châm tả các huyệt kinh Bàng quang; Trích huyết huyệt Ủy trung nặn máu tím; Nằm đệm cứng.',
      anUongSinhHoat: 'Nằm nghỉ tuyệt đối trên giường cứng 3-5 ngày. Tránh gập lưng bê vác.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giảm đau nhanh sau khi giải ứ huyết).\n• Phòng bệnh: Đeo đai lưng khi làm việc nặng.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Hoàn khiêu (T)', detail: 'Huyệt chốt mông - châm tả thông kinh tọa' },
        { name: 'Ủy trung (T)', detail: 'Hợp huyệt Bàng quang - trích huyết giải ứ thắt lưng chân' },
        { name: 'Cách du (2 bên)', detail: 'Huyết hội - hoạt huyết hóa ứ' },
        { name: 'Thái冲 (2 bên)', detail: 'Hành khí giải trệ' }
      ],
      chamCuu: [
        'Châm tả sâu huyệt Hoàn khiêu, Ân môn, Ủy trung bên trái.',
        'Trích huyết huyệt Ủy trung nặn vài giọt máu ứ tím.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Day miết hai khối cơ cạnh sống thắt lưng bị co cứng.',
        '2. Bóp nắn nhẹ nhàng các nhóm cơ mông đùi bị đau.',
        '3. Bấm day huyệt Hoàn khiêu, Ủy trung, Cách du.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt triệu chứng Đau ở Tọa cốt thống thể Phong hàn thấp và Thể Khí trệ huyết ứ (Case 14)?',
      answer: '• Thể Phong hàn thấp: Đau mỏi lan xuống chân, ĐAU TĂNG KHI LẠNH MƯA, giảm khi chườm ngải cứu nóng, rêu lưỡi trắng, mạch Phù khẩn.\n• Thể Khí trệ huyết ứ (Case 14): Đau sau chấn thương/bê nặng đột ngột, ĐAU CỐ ĐỊNH NHƯ KIM CHÂM, ĐAU TĂNG VỀ ĐÊM, lưỡi tím điểm ứ, mạch Trầm sáp.'
    },
    reasoning: [
      { evidence: 'Bê nặng đột ngột nghe tiếng khựa, đau lan chân (T), Lasegue 45°', conclusion: 'Tọa cốt thống (Đau thần kinh tọa T).' },
      { evidence: 'Đau nhói kim châm cố định, đau tăng về đêm, lưỡi tím điểm ứ, mạch Sáp', conclusion: 'Khí trệ huyết ứ (Thực chứng).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là cơn đau lan xuống chân dữ dội làm dễ nhầm với đợt đau cấp do Phong hàn thấp tý trên nền Can Thận hư. Tuy nhiên, hoàn cảnh bê nặng nghe tiếng khựa, đau nhói kim châm tăng về đêm, không sợ lạnh, lưỡi tím điểm ứ và mạch Sáp khẳng định bản chất thuần túy là Khí trệ huyết ứ.'
    }
  },

  {
    id: 'bank_15',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Di chứng đột quỵ yếu nửa người - Thể Can hỏa bộc phát',
    summary: 'Nữ 70t, di chứng liệt nửa người (P), mặt đỏ gay cáu gắt chửi mắng, đêm không ngủ được, táo bón 3 ngày, rêu lưỡi vàng dầy, mạch Huyền sác có lực',
    caseText: 'Bệnh nhân nữ, 70 tuổi, hưu trí. Nhập viện vì lý do: Yếu nửa người phải kèm cáu gắt mất ngủ trầm trọng.\nBệnh sử: 1 tháng sau tai biến xuất huyết brain đã điều trị ổn định, bệnh nhân di chứng yếu nửa người (P), sức cơ 3/5. Gần đây do mâu thuẫn gia đình, bệnh nhân trở nên cực kỳ hung dữ, mặt đỏ gay, liên tục cáu gắt chửi mắng con cháu. Đêm trằn trọc không ngủ được minute nào, trong người bứt rứt cuồng nôn. Bệnh nhân đắng miệng, mắt đỏ, đại tiện táo bón 3-4 ngày mới đi 1 lần phân bãi đen cứng, nước tiểu đỏ sẫm. Huyết áp: 165/95 mmHg.\nKhám YHHĐ: Liệt cứng nửa người (P).\nKhám YHCT: Lưỡi đỏ thon, rêu lưỡi vàng dầy khô. Mạch Huyền sác có lực.',
    q1: {
      chung: 'Yếu nửa người (P), mặt đỏ gay, cáu gắt chửi mắng, mất ngủ trằn trọc, đắng miệng táo bón 3 ngày, rêu vàng dầy khô, mạch Huyền sác có lực.',
      nguyenNhan: 'Nội nhân: Uất giận làm Can khí bị uất hóa thành Hỏa bộc phát; Can hỏa thượng ngoạn quấy nhiễu Tâm thần gây cáu gắt mất ngủ; Can hỏa thiêu đốt tân dịch gây táo bón và mặt đỏ.',
      viTri: 'Tạng Can, Đởm, Tâm. Thuộc Lý.',
      batCuong: 'Lý – Nhiệt – Thực (Can hỏa vượng / Can hỏa bộc phát).',
      benhDanh: 'Trúng phong di chứng – Thể Can hỏa bộc phát.',
      phapTri: 'Thanh Can tả hỏa, trấn tĩnh an thần, thông tiện giáng hỏa.',
      dungThuoc: 'Bài thuốc chủ trị: Long đởm tả can thang gia giảm (Long đởm thảo, Hoàng cầm, Chi tử, Trạch tả, Mộc thông, Xa tiền tử, Sinh địa, Đương quy, Sài hồ, Cam thảo gia Đại hoàng).\n• Long đởm thảo, Chi tử, Hoàng cầm: Thanh tả Can hỏa uất nhiệt.\n• Đại hoàng: Thông đại tiện, dẫn hỏa hạ hành.',
      khongDungThuoc: 'Châm tả Thái冲, Hành gian, Khúc trì, Nội quan; Trích huyết tai; KHÔNG DÙNG THUỐC BỔ ẤM.',
      anUongSinhHoat: 'Ăn đồ mát thanh nhiệt (rau mồng tơi, bột sắn dây, nước rau má). Giữ phòng yên tĩnh, tránh chọc giận bệnh nhân.',
      tienLuongPhongBenh: '• Tiên lượng: Cần cẩn trọng (nguy cơ tái phát tai biến do huyết áp tăng cao khi giận).\n• Phòng bệnh: Kiểm soát huyết áp và tâm lý.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Thái冲 (2 bên)', detail: 'Huyệt Nguyên kinh Can - bình Can tả hỏa hạ huyết áp' },
        { name: 'Hành gian (2 bên)', detail: 'Huyệt Huỳnh kinh Can - tả Can hỏa trực tiếp' },
        { name: 'Khúc trì (2 bên)', detail: 'Thanh nhiệt hạ áp' },
        { name: 'Nội quan (2 bên)', detail: 'Dưỡng Tâm trấn tĩnh an thần' }
      ],
      chamCuu: [
        'Châm tả các huyệt Thái冲, Hành gian, Khúc trì.',
        'Trích huyết chóp tai (Nhĩ尖) nặn 3-5 giọt máu hạ áp.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Vuốt nhẹ từ trán ra hai bên thái dương.',
        '2. Day ấn huyệt Thái冲, Hành gian.'
      ]
    },
    openQuestion: {
      question: 'Tại sao ca di chứng đột quỵ này tuyệt đối KHÔNG ĐƯỢC dùng bài thuốc Bổ dương hoàn ngũ thang?',
      answer: 'Bài Bổ dương hoàn ngũ thang dùng liều cao Hoàng kỳ (60-120g) có tính đại bổ khí ấm nóng, chuyên trị thể Khí hư huyết ứ (mệt mỏi, sắc nhợt, mạch Tế nhược). Ở case này bệnh nhân đang có Can hỏa bộc phát dữ dội (mặt đỏ gay, cáu gắt, táo bón, mạch Huyền sác có lực). Nếu dùng Bổ dương hoàn ngũ thang sẽ làm hỏa tà bùng phát mạnh hơn, đẩy huyết áp tăng vọt và gây tái phát xuất huyết não tức thì.'
    },
    reasoning: [
      { evidence: 'Yếu nửa người (P) sau tai biến 1 tháng', conclusion: 'Di chứng trúng phong.' },
      { evidence: 'Mặt đỏ gay, cáu gắt chửi mắng, đắng miệng, táo bón 3 ngày, rêu vàng dầy, mạch Huyền sác có lực', conclusion: 'Can hỏa bộc phát (Nhiệt thực chứng).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là tình trạng di chứng liệt nửa người sau tai biến, dễ làm sinh viên quen tay kê bài Bổ dương hoàn ngũ thang. Dữ kiện mặt đỏ gay, cáu gắt chửi mắng, mất ngủ hoàn toàn, táo bón 3 ngày phân đen cứng và mạch Huyền sác có lực đòi hỏi phải đổi sang bài Long đởm tả can thang thanh tả Can hỏa.'
    }
  },

  {
    id: 'bank_16',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau thắt lưng mạn - Thể Hàn thấp trệ',
    summary: 'Nữ 58t, đau thắt lưng trướng nặng như đeo đá, trời mưa ẩm đau tăng dữ dội, chườm ấm dễ chịu, rêu lưỡi trắng dầy nhớt, mạch Trầm nhu',
    caseText: 'Bệnh nhân nữ, 58 tuổi, giặt là thuê. Nhập viện vì lý do: Đau thắt lưng nặng nề không thể cúi được.\nBệnh sử: Bệnh nhân làm nghề giặt là tiếp xúc nước lạnh nhiều năm. 1 tuần nay thời tiết mưa nồm ẩm kéo dài, bệnh nhân bộc phát đau trướng dữ dội vùng thắt lưng. Khác với đau nhói do chấn thương, đau ở đây có tính chất nặng trệ như bị đeo một tảng đá nặng sau lưng, cúi ngửa rất khó khăn. Đau tăng dữ dội khi trời mưa ẩm hoặc lạnh, chườm ấm hoặc chiếu đèn hồng ngoại thì giảm đau dễ chịu rõ. Bệnh nhân không sốt, không tiểu buốt, đại tiện phân hơi nát.\nKhám YHHĐ: Cơ cạnh sống thắt lưng hai bên căng trướng nhẹ. Schober 10/12cm.\nKhám YHCT: Lưỡi bệu nhợt, rêu lưỡi trắng dầy nhớt ướt. Mạch Trầm nhu hoặc Trầm khẩn.',
    q1: {
      chung: 'Đau thắt lưng nặng trệ như đeo đá, cúi ngửa khó, mưa ẩm lạnh đau tăng, chườm ấm dễ chịu, rêu trắng dầy nhớt ướt, mạch Trầm nhu.',
      nguyenNhan: 'Ngoại nhân: Hàn Thấp tà thừa lúc làm việc dầm nước đọng lại bế tắc ở kinh Bàng quang và mạch Đốc vùng thắt lưng; Hàn gây đau, Thấp gây trướng nặng trệ.',
      viTri: 'Kinh Bàng quang và mạch Đốc vùng thắt lưng. Thuộc Lý kiêm Biểu.',
      batCuong: 'Lý kiêm Biểu – Hàn Thấp – Thực.',
      benhDanh: 'Yêu thống – Thể Hàn thấp trệ.',
      phapTri: 'Ôn kinh tán hàn, trừ thấp thông lạc chỉ thống.',
      dungThuoc: 'Bài thuốc cổ phương kinh điển: Can khương thương thuật thang (Thận trước thang gia giảm).\n• Can khương, Tế tân: Ôn trung tán hàn thắt lưng.\n• Thương thuật, Phục linh, Ý dĩ: Táo thấp trừ thấp trệ nặng nề.\n• Đỗ trọng, Cam thảo: Ôn bổ Thận khí hòa trung.',
      khongDungThuoc: 'Ôn châm, cứu ngải ấm huyệt Thận du, Đại trường du, Yêu dương quan; Chiếu đèn hồng ngoại.',
      anUongSinhHoat: 'Giữ ấm thắt lưng, đeo đai lưng khi giặt đồ. Tránh ngâm chân nước lạnh.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giảm đau rõ sau 3-5 ngày cứu ngải).\n• Phòng bệnh: Dùng ủng và găng tay cao su khi làm nghề giặt là.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Thận du (2 bên)', detail: 'Bổ Thận khí, ôn thắt lưng' },
        { name: 'Đại trường du (2 bên)', detail: 'Giảm đau thắt lưng L4' },
        { name: 'Yêu dương quan', detail: 'Dưới gai L4 - ôn thông mạch Đốc' },
        { name: 'Ủy trung (2 bên)', detail: 'Hợp huyệt Bàng quang - "Yêu bối Ủy trung cầu"' }
      ],
      chamCuu: [
        'Ôn châm hoặc Cứu ngải ấm huyệt Thận du, Đại trường du, Yêu dương quan 20 phút.',
        'Châm bổ Ủy trung.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Xát ấm vùng thắt lưng bằng dầu gừng.',
        '2. Day miết hai khối cơ cạnh sống thắt lưng.',
        '3. Day ấn huyệt Thận du, Đại trường du, Ủy trung.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt triệu chứng Tính chất đau giữa Đau thắt lưng thể Khí trệ huyết ứ và Thể Hàn thấp trệ (Case 16)?',
      answer: '• Thể Khí trệ huyết ứ: Đau cố định NHÓI NHƯ KIM CHÂM, đau tăng về đêm, lưỡi tím điểm ứ, mạch Sáp.\n• Thể Hàn thấp trệ (Case 16): Đau TRƯỚNG NẶNG TRỆ NHƯ ĐEO ĐÁ, ĐAU TĂNG KHI MƯA NỒM ẨM LẠNH, chườm ấm dễ chịu rõ, rêu lưỡi trắng DẦY nhớt ướt, mạch Trầm nhu.'
    },
    reasoning: [
      { evidence: 'Tiếp xúc nước lạnh, mưa nồm ẩm đau tăng, chườm ấm dễ chịu', conclusion: 'Hàn Thấp tà ngoại phạm (Hàn chứng).' },
      { evidence: 'Đau trướng nặng trệ như đeo đá, rêu trắng dầy nhớt ướt, mạch Nhu', conclusion: 'Thấp tà trệ thắt lưng (Thấp thực).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case me này là gì?',
      answer: 'Chi tiết bẫy là cảm giác đau trướng dữ dội làm dễ nhầm với đợt đau cấp do Thoát vị đĩa đệm (Khí trệ huyết ứ). Tuy nhiên, tính chất đau nặng trệ như đeo đá, tăng dữ dội khi mưa nồm ẩm, chườm ấm dễ chịu và rêu dầy ướt khẳng định bản chất là Hàn thấp trệ.'
    }
  },

  {
    id: 'bank_17',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Mất ngủ mạn tính - Thể Tâm Thận bất giao',
    summary: 'Nam 52t, mất ngủ trằn trọc, tâm bứt rứt hỏa bốc, nóng lòng bàn tay chân, ù tai mỏi lưng, lưỡi đỏ khô rêu ít, mạch Tế sác',
    caseText: 'Bệnh nhân nam, 52 tuổi, giáo viên trung học. Nhập viện vì lý do: Mất ngủ trầm trọng và ù tai kéo dài 4 tháng.\nBệnh sử: 4 tháng nay bệnh nhân trằn trọc cả đêm không ngủ được quá 1-2 tiếng, trong lòng lúc nào cũng bứt rứt sốt ruột. Bệnh nhân hay có cảm giác hỏa bốc nhẹ lên đầu mặt, mộng mị nhiều, hoa mắt, ù tai tiếng ve kêu liên tục. Đêm ngủ lòng bàn tay bàn chân nóng (ngũ tâm phiền nhiệt), hay vã mồ hôi trộm (đạo hãn). Kèm theo đau mỏi thắt lưng âm ỉ, quên trước quên sau.\nKhám YHHĐ: Rối loạn thần kinh thực vật / Mất ngủ mạn tính.\nKhám YHCT: Thể trạng gầy nhợt. Lưỡi thon đỏ, khô, ít rêu. Mạch Tế sác (bộ Xích yếu, bộ Thốn sác).' ,
    q1: {
      chung: 'Mất ngủ trằn trọc, tâm bứt rứt, hỏa bốc đầu mặt, nóng lòng bàn tay chân, vã mồ hôi trộm, ù tai mỏi lưng, lưỡi đỏ khô ít rêu, mạch Tế sác.',
      nguyenNhan: 'Nội nhân: Tuổi cao suy nghĩ nhiều làm Thận âm hư suy ở dưới không đưa Thủy lên dập Hỏa; Tâm hỏa uất độc ở trên không đi xuống giao hòa với Thận ("Tâm Thận bất giao"), Tâm hỏa quấy nhiễu thần trí gây mất ngủ bứt rứt.',
      viTri: 'Tạng Tâm và Thận. Thuộc Lý.',
      batCuong: 'Lý – Hư Nhiệt (Tâm Thận bất giao / Âm hư hỏa vượng).',
      benhDanh: 'Thất miên – Thể Tâm Thận bất giao.',
      phapTri: 'Tư âm giáng hỏa, giao hòa Tâm Thận, an thần định chí.',
      dungThuoc: 'Bài thuốc cổ phương kinh điển: Giao thái hoàn phối hợp Lục vị địa hoàng hoàn gia giảm (Hoàng liên, Nhục quế, Thục địa, Sơn thù, Hoài sơn, Trạch tả, Đan bì, Phục linh gia Táo nhân, Viễn chí).\n• Hoàng liên (tả Tâm hỏa) + Nhục quế (dẫn hỏa quy nguyên): Cặp đôi Giao thái hoàn chữa Tâm Thận bất giao đặc hiệu.\n• Thục địa, Sơn thù: Bổ Thận âm ở gốc.',
      khongDungThuoc: 'Châm tả Hoàng liên / châm Thái冲; Châm bổ Thái khê, Tam âm giao, Thần môn; Thiền định.',
      anUongSinhHoat: 'Ăn chè hạt sen đậu đen bổ âm. Tránh cà phê, trà đặc, rượu bia.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (cải thiện giấc ngủ sau 2-3 tuần giao hòa Tâm Thận).\n• Phòng bệnh: Giữ tinh thần thanh tĩnh.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Thần môn (2 bên)', detail: 'An thần định chí' },
        { name: 'Thái khê (2 bên)', detail: 'Huyệt Nguyên kinh Thận - tư âm bổ Thận thủy' },
        { name: 'Tam âm giao (2 bên)', detail: 'Tư âm hạ hỏa an thần' },
        { name: 'Dũng tuyền (2 bên)', detail: 'Dẫn hỏa hạ hành' }
      ],
      chamCuu: [
        'Châm bổ các huyệt Thái khê, Tam âm giao, Thần môn.',
        'Châm chóp Dũng tuyền hướng xuống.',
        'KHÔNG CỨU NÓNG.'
      ],
      xoaBop: [
        '1. Day ấn huyệt Thái khê, Dũng tuyền ở chân.',
        '2. Bấm day huyệt Thần môn, Ấn đường.'
      ]
    },
    openQuestion: {
      question: 'Phân tích cơ chế kỳ diệu của cặp vị thuốc "Hoàng liên - Nhục quế" (Bài Giao thái hoàn) trong điều trị mất ngủ thể Tâm Thận bất giao?',
      answer: '• Hoàng liên (vị đắng tính lạnh): Vào kinh Tâm, tả ngọn Tâm hỏa đang bốc cháy hừng hực ở trên.\n• Nhục quế (vị cay ngọt tính nóng): Dùng liều RẤT NHỎ (1-2g), vào kinh Thận, có tác dụng "Dẫn hỏa quy nguyên" (kéo luồng hư hỏa đang đi lang thang ở trên quay trở về sưởi ấm Thận thủy ở dưới).\n➜ Hoàng liên giáng Hỏa xuống, Nhục quế dẫn Hỏa quy nguyên, giúp Tâm Thận giao hòa lại với nhau, giấc ngủ lập tức êm dịu.'
    },
    reasoning: [
      { evidence: 'Mất ngủ bứt rứt, nóng lòng bàn tay chân, mồ hôi trộm', conclusion: 'Âm hư sinh nội nhiệt (Âm hư hỏa vượng).' },
      { evidence: 'Ù tai tiếng ve, mỏi lưng, lưỡi đỏ khô ít rêu, mạch Tế sác', conclusion: 'Thận âm hư (Tâm Thận bất giao).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là tình trạng mỏi lưng ù tai hay quên dễ làm sinh viên chẩn đoán là Thể Tâm Tỳ khí huyết hư (Case 11) và dùng bài Quy tỳ thang. Tuy nhiên, triệu chứng nóng lòng bàn tay chân (ngũ tâm phiền nhiệt), vã mồ hôi trộm, lưỡi đỏ khô ít rêu và mạch Tế sác khẳng định đây là thể Tâm Thận bất giao (Hư Nhiệt), dùng Quy tỳ thang ngọt ấm sẽ làm hỏa vượng nặng thêm.'
    }
  },

  {
    id: 'bank_18',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Đau dạ dày / Vị quản thống - Thể Can Vị hư hàn',
    summary: 'Nữ 36t, đau thượng vị âm ỉ nôn nước trong thích ấm kéo dài, nhưng mỗi khi tức giận đau nhói lan 2 bẹ sườn, lưỡi nhợt bệu rêu trắng, mạch Trầm huyền',
    caseText: 'Bệnh nhân nữ, 36 tuổi, nhân viên hành chính. Nhập viện vì lý do: Đau dạ dày mạn tính tăng dữ dội sau cãi nhau.\nBệnh sử: Bệnh nhân có tiền sử đau dạ dày âm ỉ 2 năm nay, thường xuyên nôn ra nước trong khi đói, thích chườm túi nước ấm, ăn đồ mát lạnh vào là đầy bụng đau ngay. Chiều qua sau khi cãi nhau dữ dội với đồng nghiệp, bệnh nhân xuất hiện đợt đau nhói trướng dữ dội vùng thượng vị lan sang hai bên bẹ sườn, ợ hơi liên tục, đau tăng khi giận dữ. Bệnh nhân người sợ lạnh, tay chân lạnh ngắt.\nKhám YHHĐ: Ấn đau nhẹ vùng thượng vị và hạ sườn (P).\nKhám YHCT: Sắc mặt nhợt. Lưỡi bệu nhợt, rêu lưỡi trắng mỏng ướt. Mạch Trầm huyền (vừa trầm trì vừa huyền).' ,
    q1: {
      chung: 'Đau thượng vị âm ỉ nôn nước trong thích ấm mạn tính, đợt này giận dữ đau nhói lan 2 bẹ sườn ợ hơi, tay chân lạnh, lưỡi bệu nhợt rêu trắng, mạch Trầm huyền.',
      nguyenNhan: 'Bản hư: Tỳ Vị hư hàn lâu ngày. Tiêu thực: Uất giận làm Can khí hoành nghịch phạm Vị; Can uất hoành nghịch trên nền Vị hư hàn bộc phát đau trướng dữ dội.',
      viTri: 'Tạng Can và Tạng Vị. Thuộc Lý.',
      batCuong: 'Lý – Hàn – Hư thực thác tạp (Tỳ Vị hư hàn là bản, Can khí phạm Vị là tiêu).',
      benhDanh: 'Vị quản thống – Thể Can Vị hư hàn.',
      phapTri: 'Ôn trung tán hàn, kiện Tỳ hòa Vị (Trị bản); Sơ Can giải uất, hành khí chỉ thống (Trị tiêu).',
      dungThuoc: 'Bài thuốc chủ trị: Sài hồ sơ can tán phối hợp Lý trung thang gia giảm.\n• Can khương, Bạch thuật, Cam thảo: Ôn trung tán hàn kiện Tỳ.\n• Sài hồ, Hương phụ: Sơ Can giải uất.\n• Thược dược, Cam thảo: Nhu Can hoãn cấp chỉ thống.',
      khongDungThuoc: 'Ôn châm/Cứu ấm huyệt Trung quản, Túc tam lý, Thái冲; Xoa bóp bụng ấm.',
      anUongSinhHoat: 'Ăn cháo gừng ấm. Tránh uất giận, kiêng đồ chua lạnh cay.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (giảm đau sau 2-3 ngày ôn sơ).\n• Phòng bệnh: Tránh căng thẳng uất giận.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Trung quản', detail: 'Huyệt Mộ Vị - cứu ấm ôn trung giải đau' },
        { name: 'Thái冲 (2 bên)', detail: 'Huyệt Nguyên Can - sơ Can giải uất' },
        { name: 'Túc tam lý (2 bên)', detail: 'Kiện Tỳ Vị ôn trung' },
        { name: 'Nội quan (2 bên)', detail: 'Giáng nghịch chỉ nôn ợ hơi' }
      ],
      chamCuu: [
        'Ôn châm hoặc cứu ngải ấm huyệt Trung quản, Túc tam lý 20 phút.',
        'Châm bình bổ bình tả Thái冲, Nội quan.',
        'Lưu kim 20 phút.'
      ],
      xoaBop: [
        '1. Xoa ấm vùng bụng quanh rốn.',
        '2. Vuốt nhẹ hai bên bẹ sườn.',
        '3. Day bấm huyệt Trung quản, Thái冲, Túc tam lý.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt thể Can khí phạm Vị điển hình (Case 13) và Thể Can Vị hư hàn (Case 18)?',
      answer: '• Thể Can khí phạm Vị điển hình (Case 13): Bát cương Lý Thực Nhiệt/Thực. Bệnh nhân thể trạng thực, đau trướng dữ dội lan sườn sau giận, ợ chua rát họng, lưỡi đỏ rêu mỏng, mạch Huyền sác. Bài thuốc: Sài hồ sơ can tán.\n• Thể Can Vị hư hàn (Case 18): Bát cương Lý Hàn Hư thực thác tạp. Tiền sử đau âm ỉ nôn nước trong thích ấm, sợ lạnh tay chân lạnh ngắt, lưỡi bệu nhợt rêu trắng ướt, mạch Trầm huyền. Bài thuốc bắt buộc phối hợp Ôn trung (Can khương, Lý trung thang) với Sơ Can.'
    },
    reasoning: [
      { evidence: 'Tiền sử đau âm ỉ nôn nước trong thích ấm, tay chân lạnh, mạch Trầm', conclusion: 'Tỳ Vị hư hàn (Bản hư).' },
      { evidence: 'Cãi nhau đau nhói lan 2 bẹ sườn ợ hơi, mạch Huyền', conclusion: 'Can khí hoành nghịch phạm Vị (Tiêu thực).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là hoàn cảnh xuất hiện cơn đau nhói lan 2 bẹ sườn sau khi cãi nhau dễ làm sinh viên chẩn đoán thuần túy là "Can khí phạm Vị" (Thực chứng) và dùng bài Sài hồ sơ can tán thuần túy với các vị khí trệ mát. Tuy nhiên, tiền sử nôn nước trong thích chườm ấm, tay chân lạnh ngắt, lưỡi bệu nhợt rêu trắng ướt đòi hỏi phải dùng thuốc Ôn trung (Can khương) làm gốc.'
    }
  },

  {
    id: 'bank_19',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Vẹo cổ cấp do Phong nhiệt - Thể Lạc chẩm phong nhiệt',
    summary: 'Nam 22t, ngủ dậy vẹo cổ (P), vùng gáy bả vai nóng rát, sốt nhẹ 37.8°C, họng đỏ mỏng, rêu lưỡi vàng mỏng, mạch Phù sác',
    caseText: 'Bệnh nhân nam, 22 tuổi, sinh viên. Nhập viện vì lý do: Đau cứng gáy bên phải kèm sốt nhẹ sau khi ngủ dậy.\nBệnh sử: Tối qua sau khi đá bóng trưa nắng về, bệnh nhân nằm ngủ quên dưới quạt máy thổi thẳng vào cổ gáy. Sáng nay ngủ dậy, bệnh nhân thấy vùng cổ gáy và bả vai bên phải đau nhói dữ dội, đầu bị kéo nghiêng về bên phải không xoay sang trái được. Vùng cơ gáy (P) sờ vào có cảm giác nóng rát, bệnh nhân sốt nhẹ 37.8°C, sợ gió, họng hơi khô đỏ, khát nước thích uống nước mát. Bệnh nhân không thích chườm ấm.\nKhám YHHĐ: Co cứng cơ ức đòn chũm và cơ thang (P). Tầm vận động cổ xoay (T) 0°. Họng xung huyết mỏng. Nhiệt độ 37.7°C.\nKhám YHCT: Lưỡi đỏ, rêu lưỡi vàng mỏng. Mạch Phù sác.',
    q1: {
      chung: 'Đau cứng đơ gáy (P) nghiêng phải không xoay trái được, gáy nóng rát, sốt 37.8°C, sợ gió, họng khô khát, lưỡi đỏ rêu vàng mỏng, mạch Phù sác.',
      nguyenNhan: 'Ngoại nhân: Phong nhiệt tà xâm nhập kinh Bàng quang, Đởm vùng cổ gáy làm khí huyết bế tắc gây co cứng cơ gáy.',
      viTri: 'Biểu (Kinh Bàng quang, Đởm vùng cổ gáy).',
      batCuong: 'Biểu – Nhiệt – Thực.',
      benhDanh: 'Lạc chẩm – Thể Phong nhiệt.',
      phapTri: 'Tân lương giải biểu, khu phong thanh nhiệt, thông kinh hoạt lạc.',
      dungThuoc: 'Bài thuốc chủ trị: Tang cúc ẩm hoặc Ngân kiều tán gia Cát cánh, Khương hoạt, Mộc qua.\n• Cát cánh: Giải cơ sơ thông kinh gáy.\n• Kim ngân hoa, Liên kiều, Bạc hà: Thanh nhiệt giải biểu.\n• Mộc qua, Xích thược: Nhu cân giải co thắt.',
      khongDungThuoc: 'Châm tả Lạc chẩm, Hậu khê, Phong trì; KHÔNG CỨU NGẢI hay chườm nóng.',
      anUongSinhHoat: 'Nghỉ ngơi thoáng mát, uống nước bột sắn dây. Tránh quạt thổi trực tiếp.',
      tienLuongPhongBenh: '• Tiên lượng: Rất tốt (khỏi sau 1-2 ngày thanh nhiệt).\n• Phòng bệnh: Tránh nằm quạt trần thẳng gáy khi vừa đi nắng về.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Lạc chẩm (bên đau P)', detail: 'Huyệt đặc trị vẹo cổ - châm tả vận động' },
        { name: 'Phong trì (2 bên)', detail: 'Khu phong giải nhiệt vùng gáy' },
        { name: 'Hậu khê (P)', detail: 'Du huyệt kinh Tiểu trường - thông kinh gáy' },
        { name: 'Khúc trì (2 bên)', detail: 'Thanh nhiệt giải biểu toàn thân' }
      ],
      chamCuu: [
        'Châm tả huyệt Lạc chẩm, Hậu khê vừa châm vừa hướng dẫn BN xoay cổ nhẹ nhàng.',
        'Châm tả Phong trì, Khúc trì.',
        'CHỐNG CHỈ ĐỊNH cứu ấm/ôn châm.'
      ],
      xoaBop: [
        '1. Miết nhẹ nhàng vùng cổ gáy bị co cứng.',
        '2. Day bấm huyệt Lạc chẩm, Phong trì, Khúc trì.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt điểm khác nhau mấu chốt giữa Vẹo cổ cấp thể Phong hàn (Case 10) và Thể Phong nhiệt (Case 19)?',
      answer: '• Thể Phong hàn (Case 10): Do ngủ gối cao/lạnh đêm, có sợ lạnh nhiều, chườm ngải cứu nóng dễ chịu rõ, rêu lưỡi trắng mỏng, mạch Phù khẩn. Bắt buộc dùng Ôn châm/Cứu ấm.\n• Thể Phong nhiệt (Case 19): Do đá bóng nắng về nằm quạt, sốt nhẹ 37.8°C, gáy nóng rát, họng đỏ khát nước, rêu lưỡi vàng mỏng, mạch Phù sác. Chống chỉ định cứu nóng, dùng Châm tả thanh nhiệt.'
    },
    reasoning: [
      { evidence: 'Ngủ quên dưới quạt sau đi nắng về, vẹo cổ nghiêng (P)', conclusion: 'Phong nhiệt tà xâm nhập kinh gáy.' },
      { evidence: 'Gáy nóng rát, sốt 37.8°C, họng đỏ khát, rêu vàng, mạch Phù sác', conclusion: 'Biểu Nhiệt Thực.' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là hoàn cảnh vẹo cổ sau khi ngủ dậy làm sinh viên dễ quen tay chẩn đoán là "Vẹo cổ do trúng phong hàn" và dùng ngải cứu. Dữ kiện đá bóng trưa nắng về, sốt 37.8°C, gáy nóng rát thích mát, rêu vàng mỏng và mạch Phù sác khẳng định đây là thể Phong nhiệt tý.'
    }
  },

  {
    id: 'bank_20',
    category: 'advanced',
    levelLabel: 'Trạm ngẫu nhiên',
    title: 'Rối loạn tiền đình / Huyễn vựng - Thể Khí huyết hư',
    summary: 'Nữ 60t, chóng mặt hoa mắt tối sầm mặt mũi mỗi khi đứng dậy, sắc mặt nhợt nhạt, mệt mỏi hụt hơi, lưỡi nhợt bệu, mạch Tế nhược vô lực',
    caseText: 'Bệnh nhân nữ, 60 tuổi, hưu trí. Nhập viện vì lý do: Hay bị chóng mặt tối sầm mặt mũi và mệt mỏi kéo dài.\nBệnh sử: 6 tháng nay, bệnh nhân thường xuyên bị chóng mặt hoa mắt. Khác với cơn chóng mặt quay mòng mòng, bệnh nhân cảm thấy mỗi khi đổi tư thế từ ngồi đứng dậy đột ngột là trước mắt tối sầm lại, choáng váng như muốn ngất xỉu. Kèm theo bệnh nhân mệt mỏi thều thào, nói hụt hơi, ăn uống kém không ngon miệng, hay hồi hộp đánh trống ngực, móng tay da niêm nhợt nhạt, đêm ngủ chập chờn hay giật mình.\nKhám YHHĐ: Huyết áp 95/60 mmHg (Hạ huyết áp tư thế). CTM: Hồng cầu 3.2 T/L, Hb 95 g/L (Thiếu máu nhẹ).\nKhám YHCT: Sắc mặt trắng nhợt không tươi. Lưỡi bệu mỏng, sắc nhợt, rêu lưỡi trắng mỏng. Mạch Tế nhược vô lực (bộ Thốn và Quan yếu nhạt).' ,
    q1: {
      chung: 'Chóng mặt choáng váng tối sầm khi đứng dậy, mệt mỏi hụt hơi, ăn kém hồi hộp, da niêm nhợt, HA 95/60, Hb 95g/L, lưỡi nhợt bệu, mạch Tế nhược.',
      nguyenNhan: 'Nội nhân: Tuổi cao Tỳ Vị suy hư không vận hóa sinh ra khí huyết; Khí hư không đưa huyết lên nuôi dưỡng vùng đầu mặt làm "Thanh dương thất dưỡng" gây chóng mặt tối sầm mặt mũi.',
      viTri: 'Tạng Tỳ, Tâm và Vùng Đầu mặt. Thuộc Lý.',
      batCuong: 'Lý – Hư (Khí huyết hư).',
      benhDanh: 'Huyễn vựng – Thể Khí huyết hư.',
      phapTri: 'Bổ khí nuôi huyết, kiện Tỳ dưỡng Tâm, thăng dương định chóng mặt.',
      dungThuoc: 'Bài thuốc cổ phương kinh điển: Bát trân thang phối hợp Bổ trung ích khí thang gia giảm.\n• Đảng sâm, Hoàng kỳ, Bạch thuật, Cam thảo: Bổ tỳ ích khí, thăng dương.\n• Đương quy, Thục địa, Bạch thược, Xuyên khung: Bổ huyết dưỡng Tâm.\n• Bách hội, Thăng ma, Sài hồ: Thăng dương khí lên đầu.',
      khongDungThuoc: 'Châm bổ Túc tam lý, Tam âm giao, Bách hội, Thần môn; Cứu ấm Bách hội, Khí hải.',
      anUongSinhHoat: 'Ăn đồ bổ khí huyết (thịt bò, trứng, táo đỏ, hạt sen). Tránh đứng dậy quá nhanh.',
      tienLuongPhongBenh: '• Tiên lượng: Tốt (cải thiện sau 2-4 tuần bổ khí huyết).\n• Phòng bệnh: Đổi tư thế từ từ.'
    },
    q2: {
      minHuyet: 4,
      huyetGoiY: [
        { name: 'Bách hội', detail: 'Huyệt đỉnh đầu - châm bổ hoặc cứu thăng dương khí giải chóng mặt' },
        { name: 'Túc tam lý (2 bên)', detail: 'Bổ Tỳ Vị đại bổ khí huyết' },
        { name: 'Tam âm giao (2 bên)', detail: 'Bổ 3 kinh âm chân dưỡng huyết' },
        { name: 'Thần môn (2 bên)', detail: 'Bổ Tâm huyết an thần' }
      ],
      chamCuu: [
        'Châm bổ hoặc cứu ấm các huyệt Bách hội, Túc tam lý, Tam âm giao, Thần môn.',
        'Lưu kim 20-25 phút.'
      ],
      xoaBop: [
        '1. Vuốt miết nhẹ nhàng vùng trán và đầu.',
        '2. Day ấn huyệt Bách hội, Túc tam lý, Tam âm giao.'
      ]
    },
    openQuestion: {
      question: 'Phân biệt triệu chứng Chóng mặt (Huyễn vựng) ở 3 thể lâm sàng: Can dương thượng ngoạn (Case 15), Đờm thấp (Case 11) và Khí huyết hư (Case 20)?',
      answer: '• Thể Can dương thượng ngoạn (Case 15): Chóng mặt QUAY MÒNG MÒNG kèm ĐAU CĂNG TỨC ĐỈNH ĐẦU nhịp đập, mặt đỏ cáu gắt, Huyết áp TĂNG CAO (170 mmHg), mạch Huyền sác.\n• Thể Đờm thấp (Case 11): Chóng mặt QUAY MÒNG MÒNG kèm ĐẦU NẶNG NHƯ ĐEO ĐÁ, lợm giọng nôn đờm dãi nhớt, rêu lưỡi dầy nhớt, mạch Nhu hoạt.\n• Thể Khí huyết hư (Case 20): Chóng mặt TỐI SẦM MẶT MŨI KHI ĐỨNG DẬY, người mệt mỏi hụt hơi, da niêm nhợt, Huyết áp HẠ (95 mmHg), lưỡi nhợt bệu, mạch Tế nhược vô lực.'
    },
    reasoning: [
      { evidence: 'Chóng mặt tối sầm khi đứng dậy, HA 95/60, Hb 95g/L', conclusion: 'Thanh dương thất dưỡng do thiếu máu/hạ áp (Huyễn vựng).' },
      { evidence: 'Mệt mỏi hụt hơi, da niêm nhợt, lưỡi nhợt bệu, mạch Tế nhược', conclusion: 'Khí huyết hư suy (Bản hư).' }
    ],
    trap: {
      question: 'Chi tiết bẫy trong case này là gì?',
      answer: 'Chi tiết bẫy là triệu chứng chóng mặt hoa mắt ở người lớn tuổi dễ làm sinh viên nhầm với Rối loạn tiền đình do Tăng huyết áp / Can dương thượng ngoạn. Dữ kiện chóng mặt tối sầm khi đứng dậy (Hạ huyết áp tư thế), mệt mỏi hụt hơi, Hb 95g/L, HA 95/60 mmHg, da niêm nhợt và mạch Tế nhược vô lực khẳng định đây là thể Khí huyết hư.'
    }
  }
];
