// qua lại các bước
function goToStep(step) {
    const steps = document.querySelectorAll('.step-content');
    steps.forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');

    const stepButtons = document.querySelectorAll('.stepper .step');
    stepButtons.forEach(btn => btn.classList.remove('active'));
    stepButtons[step - 1].classList.add('active');

    // qua b5 thì hiển thị kq từ b2
    if (step === 5) {
        displayFinalResults();
    }
}

// Object câu hỏi Holland Code
const questions = [
    // Nhóm Kỹ thuật (R)
    { id: 1, type: "holland", category: "R", text: "Tự mua và lắp ráp máy vi tính theo ý mình", options: options5() },
    { id: 2, type: "holland", category: "R", text: "Lắp ráp tủ theo hướng dẫn của sách hướng dẫn hoặc trang mạng", options: options5() },
    { id: 3, type: "holland", category: "R", text: "Trang điểm cho mình hay cho bạn theo hướng dẫn của sách hướng dẫn hoặc trang mạng", options: options5() },
    { id: 4, type: "holland", category: "R", text: "Cắt tỉa cây cảnh", options: options5() },
    { id: 5, type: "holland", category: "R", text: "Tháo mở điện thoại di động hay máy tính ra để tìm hiểu", options: options5() },
    { id: 6, type: "holland", category: "R", text: "Tham gia một chuyến du lịch thám hiểm (như khám phá hang động, núi rừng)", options: options5() },
    { id: 7, type: "holland", category: "R", text: "Chăm sóc vật nuôi", options: options5() },
    { id: 8, type: "holland", category: "R", text: "Sửa xe, như xe đạp, xe máy (các lỗi nhỏ)", options: options5() },
    { id: 9, type: "holland", category: "R", text: "Làm đồ nội thất", options: options5() },
    { id: 10, type: "holland", category: "R", text: "Lắp ráp máy vi tính", options: options5() },
    { id: 11, type: "holland", category: "R", text: "Leo núi", options: options5() },
    { id: 12, type: "holland", category: "R", text: "Đóng gói đồ đạc vào thùng", options: options5() },
    { id: 13, type: "holland", category: "R", text: "Chơi một môn thể thao", options: options5() },
    { id: 14, type: "holland", category: "R", text: "Tham gia chuyến đạp xe xuyên quốc gia (từ TPHCM ra Hà Nội, từ Hà Nội vào TPHCM)", options: options5() },

    // Nhóm Nghiên cứu (I)
    { id: 15, type: "holland", category: "I", text: "Tham quan bảo tàng", options: options5() },
    { id: 16, type: "holland", category: "I", text: "Tìm hiểu sự hình thành của các vì sao và vũ trụ", options: options5() },
    { id: 17, type: "holland", category: "I", text: "Tìm hiểu về văn hóa một quốc gia mà mình thích", options: options5() },
    { id: 18, type: "holland", category: "I", text: "Tìm hiểu về tâm lý con người", options: options5() },
    { id: 19, type: "holland", category: "I", text: "Đọc một cuốn sách về tương lai của loài người trong một triệu năm nữa", options: options5() },
    { id: 20, type: "holland", category: "I", text: "Đọc sách, báo hay xem trang tin tức về khoa học", options: options5() },
    { id: 21, type: "holland", category: "I", text: "Tìm hiểu về cảm xúc con người", options: options5() },
    { id: 22, type: "holland", category: "I", text: "Được xem một ca mổ tim", options: options5() },
    { id: 23, type: "holland", category: "I", text: "Tìm hiểu nguồn gốc của một dịch bệnh, nguồn gốc loài người, v.v", options: options5() },
    { id: 24, type: "holland", category: "I", text: "Đọc các bài báo về ảnh hưởng của AI (trí tuệ nhân tạo) lên nghề nghiệp tương lai", options: options5() },
    { id: 25, type: "holland", category: "I", text: "Tìm hiểu về thế giới động vật (qua các kênh tìm hiểu khoa học)", options: options5() },
    { id: 26, type: "holland", category: "I", text: "Phát minh xe điện", options: options5() },
    { id: 27, type: "holland", category: "I", text: "Tiến hành thí nghiệm hóa học", options: options5() },
    { id: 28, type: "holland", category: "I", text: "Nghiên cứu về chế độ dinh dưỡng", options: options5() },

    // Nhóm Nghệ thuật (A)
    { id: 29, type: "holland", category: "A", text: "Tạo ra một tác phẩm nghệ thuật, tranh, câu chuyện", options: options5() },
    { id: 30, type: "holland", category: "A", text: "Viết truyện ngắn", options: options5() },
    { id: 31, type: "holland", category: "A", text: "Chứng tỏ năng lực nghệ thuật của bản thân với người khác (nói lên suy nghĩ/quan điểm qua tác phẩm nghệ thuật)", options: options5() },
    { id: 32, type: "holland", category: "A", text: "Chơi trong một ban nhạc", options: options5() },
    { id: 33, type: "holland", category: "A", text: "Chỉnh sửa phim", options: options5() },
    { id: 34, type: "holland", category: "A", text: "Thuyết trình hoặc thiết kế, theo ý tưởng của mình", options: options5() },
    { id: 35, type: "holland", category: "A", text: "Vẽ phim hoạt hình", options: options5() },
    { id: 36, type: "holland", category: "A", text: "Hát trong một ban nhạc", options: options5() },
    { id: 37, type: "holland", category: "A", text: "Biểu diễn nhảy hiện đại", options: options5() },
    { id: 38, type: "holland", category: "A", text: "Dẫn chương trình (MC) cho một sự kiện", options: options5() },
    { id: 39, type: "holland", category: "A", text: "Đọc thoại hay kể chuyện trên đài phát thanh/phần mềm", options: options5() },
    { id: 40, type: "holland", category: "A", text: "Viết kịch bản cho phim hoặc chương trình truyền hình", options: options5() },
    { id: 41, type: "holland", category: "A", text: "Chụp ảnh cho các sự kiện trong cuộc sống hoặc sự kiện nghệ thuật", options: options5() },
    { id: 42, type: "holland", category: "A", text: "Viết một bài phê bình phim cho bộ phim mình thích/ghét nhất", options: options5() },

    // Nhóm Xã hội (S)
    { id: 43, type: "holland", category: "S", text: "Giúp người khác chọn nghề nghiệp phù hợp", options: options5() },
    { id: 44, type: "holland", category: "S", text: "Kết nối hai người bạn với nhau", options: options5() },
    { id: 45, type: "holland", category: "S", text: "Dạy cho bạn mình cách giảm cân qua ăn uống đúng cách", options: options5() },
    { id: 46, type: "holland", category: "S", text: "Tham gia ngày trái đất bằng cách lượm rác hay tắt điện", options: options5() },
    { id: 47, type: "holland", category: "S", text: "Hướng dẫn khách nước ngoài chỗ ăn ngon", options: options5() },
    { id: 48, type: "holland", category: "S", text: "Cứu động vật bị bỏ rơi ngoài đường", options: options5() },
    { id: 49, type: "holland", category: "S", text: "Tham gia vào một cuộc thảo luận nhóm nhỏ", options: options5() },
    { id: 50, type: "holland", category: "S", text: "Kể chuyện cười cho bạn bè nghe", options: options5() },
    { id: 51, type: "holland", category: "S", text: "Dạy em nhỏ chơi một trò chơi hay một môn thể thao", options: options5() },
    { id: 52, type: "holland", category: "S", text: "Lắng nghe bạn bè tâm sự về vấn đề cá nhân của họ", options: options5() },
    { id: 53, type: "holland", category: "S", text: "Giúp bạn bè giải quyết vấn đề liên quan đến tình yêu", options: options5() },
    { id: 54, type: "holland", category: "S", text: "Tham gia một chuyến đi từ thiện", options: options5() },
    { id: 55, type: "holland", category: "S", text: "Giúp một dự án cộng đồng trong sức của mình nhằm giúp các đối tượng đặc biệt, như LGBTQ, da cam, khuyết tật, trẻ em, v.v.", options: options5() },
    { id: 56, type: "holland", category: "S", text: "Sẵn sàng giúp thầy cô, bạn bè khi thấy họ cần", options: options5() },

    // Nhóm Quản lý (E)
    { id: 57, type: "holland", category: "E", text: "Tham gia ban đại diện học sinh ở trường", options: options5() },
    { id: 58, type: "holland", category: "E", text: "Làm cán bộ lớp", options: options5() },
    { id: 59, type: "holland", category: "E", text: "Bán hàng trực tuyến", options: options5() },
    { id: 60, type: "holland", category: "E", text: "Quản lý một cửa hàng trực tuyến", options: options5() },
    { id: 61, type: "holland", category: "E", text: "Học về thị trường chứng khoán (bitcoin, cổ phiếu, tiền tệ, v.v.)", options: options5() },
    { id: 62, type: "holland", category: "E", text: "Tham gia một khóa học về quản lý tài chính", options: options5() },
    { id: 63, type: "holland", category: "E", text: "Tham dự một trại huấn luyện kỹ năng lãnh đạo dành cho lứa tuổi thanh thiếu niên", options: options5() },
    { id: 64, type: "holland", category: "E", text: "Lập kế hoạch làm việc cho thành viên nhóm", options: options5() },
    { id: 65, type: "holland", category: "E", text: "Kiếm tiền bằng cách kinh doanh trực tuyến", options: options5() },
    { id: 66, type: "holland", category: "E", text: "Nói trước đám đông về một đề tài mình thích", options: options5() },
    { id: 67, type: "holland", category: "E", text: "Tham gia xây dựng các luật lệ mới cho lớp/trường", options: options5() },
    { id: 68, type: "holland", category: "E", text: "Thuyết phục cha mẹ theo ý mình", options: options5() },
    { id: 69, type: "holland", category: "E", text: "Tổ chức đi chơi cho một nhóm bạn", options: options5() },
    { id: 70, type: "holland", category: "E", text: "Kiếm tiền bằng cách làm thêm", options: options5() },

    // Nhóm Nghiệp vụ (C)
    { id: 71, type: "holland", category: "C", text: "Mở tài khoản tiết kiệm", options: options5() },
    { id: 72, type: "holland", category: "C", text: "Lập kế hoạch chi tiêu hàng tháng", options: options5() },
    { id: 73, type: "holland", category: "C", text: "Chuẩn bị ngân sách cho chuyến đi chơi tập thể lớp", options: options5() },
    { id: 74, type: "holland", category: "C", text: "Chuẩn bị cho buổi trình bày trước lớp", options: options5() },
    { id: 75, type: "holland", category: "C", text: "Lập kế hoạch cho kỳ nghỉ hè/Tết", options: options5() },
    { id: 76, type: "holland", category: "C", text: "Đếm và sắp xếp tiền", options: options5() },
    { id: 77, type: "holland", category: "C", text: "Sắp xếp lại bàn học", options: options5() },
    { id: 78, type: "holland", category: "C", text: "Viết kế hoạch học tập cho học kỳ mới", options: options5() },
    { id: 79, type: "holland", category: "C", text: "Hoàn tất bài tập theo đúng hạn được giao", options: options5() },
    { id: 80, type: "holland", category: "C", text: "Dò lỗi chính tả cho phụ đề của một phim ưa thích", options: options5() },
    { id: 81, type: "holland", category: "C", text: "Học một khóa vi tính văn phòng và biết cách sắp xếp văn bản, thư mục sao cho chỉnh chu", options: options5() },
    { id: 82, type: "holland", category: "C", text: "Làm thủ quỹ cho lớp", options: options5() },
    { id: 83, type: "holland", category: "C", text: "Sắp xếp lại tủ quần áo cá nhân", options: options5() },
    { id: 84, type: "holland", category: "C", text: "Giúp ba/mẹ quản lý tiền chợ của gia đình (mua gì, mua khi nào, mua bao nhiêu)", options: options5() },
];

function options5() {
    return [
        { text: "Rất không thích", value: 0 },
        { text: "Không thích", value: 25 },
        { text: "Bình thường", value: 50 },
        { text: "Thích", value: 75 },
        { text: "Rất thích", value: 100 }
    ];
}

// object câu hỏi b2
const questionsB2 = [
    {
        id: 1,
        text: "Bạn thích làm việc với dữ liệu hay sáng tạo nội dung?",
        type: "slider",
        options: [
            { text: "Dữ liệu", value: 0 },
            { text: "Sáng tạo", value: 100 }
        ]
    },
    {
        id: 2,
        text: "Bạn giỏi giải quyết vấn đề logic hay giao tiếp với mọi người?",
        type: "slider",
        options: [
            { text: "Logic", value: 0 },
            { text: "Giao tiếp", value: 100 }
        ]
    },
    {
        id: 3,
        text: "Bạn ưu tiên thu nhập cao hay môi trường sáng tạo?",
        type: "slider",
        options: [
            { text: "Thu nhập", value: 0 },
            { text: "Sáng tạo", value: 100 }
        ]
    },
    {
        id: 4,
        text: "Bạn hướng ngoại hay hướng nội?",
        type: "slider",
        options: [
            { text: "Hướng nội", value: 0 },
            { text: "Hướng ngoại", value: 100 }
        ]
    },
    {
        id: 5,
        text: "Bạn thích làm việc theo quy trình hay linh hoạt?",
        type: "slider",
        options: [
            { text: "Quy trình", value: 0 },
            { text: "Linh hoạt", value: 100 }
        ]
    },
    {
        id: 6,
        text: "Bạn quan tâm đến công nghệ mới hay các vấn đề xã hội?",
        type: "slider",
        options: [
            { text: "Công nghệ", value: 0 },
            { text: "Xã hội", value: 100 }
        ]
    },
    {
        id: 7,
        text: "Bạn thích làm việc độc lập hay theo nhóm?",
        type: "slider",
        options: [
            { text: "Độc lập", value: 0 },
            { text: "Nhóm", value: 100 }
        ]
    },
    {
        id: 8,
        text: "Bạn thích công việc ổn định hay nhiều thử thách?",
        type: "slider",
        options: [
            { text: "Ổn định", value: 0 },
            { text: "Thử thách", value: 100 }
        ]
    },
    {
        id: 9,
        text: "Bạn quan tâm đến chi tiết hay bức tranh tổng thể?",
        type: "slider",
        options: [
            { text: "Chi tiết", value: 0 },
            { text: "Tổng thể", value: 100 }
        ]
    },
    {
        id: 10,
        text: "Bạn thích làm việc với con số hay ý tưởng?",
        type: "slider",
        options: [
            { text: "Con số", value: 0 },
            { text: "Ý tưởng", value: 100 }
        ]
    },
    {
        id: 11,
        text: "Bạn thích tham gia hoạt động xã hội hay nghiên cứu chuyên sâu?",
        type: "slider",
        options: [
            { text: "Nghiên cứu", value: 0 },
            { text: "Xã hội", value: 100 }
        ]
    },
    {
        id: 12,
        text: "Bạn thích học các môn tự nhiên hay xã hội hơn?",
        type: "slider",
        options: [
            { text: "Tự nhiên", value: 0 },
            { text: "Xã hội", value: 100 }
        ]
    },
    {
        id: 13,
        text: "Bạn mong muốn một công việc ổn định hay có cơ hội thăng tiến nhanh?",
        type: "slider",
        options: [
            { text: "Ổn định", value: 0 },
            { text: "Thăng tiến", value: 100 }
        ]
    },
    {
        id: 14,
        text: "Bạn muốn làm việc trong môi trường năng động hay yên tĩnh?",
        type: "slider",
        options: [
            { text: "Yên tĩnh", value: 0 },
            { text: "Năng động", value: 100 }
        ]
    },
    {
        id: 15,
        text: "Bạn có thích giúp đỡ người khác giải quyết vấn đề cá nhân không?",
        type: "slider",
        options: [
            { text: "Không thích", value: 0 },
            { text: "Rất thích", value: 100 }
        ]
    },
    {
        id: 16,
        text: "Bạn thường chủ động lên kế hoạch hay thích làm việc theo cảm hứng?",
        type: "slider",
        options: [
            { text: "Lên kế hoạch", value: 0 },
            { text: "Theo cảm hứng", value: 100 }
        ]
    },
    {
        id: 17,
        text: "Bạn có thích sử dụng máy tính và phần mềm không?",
        type: "slider",
        options: [
            { text: "Không thích", value: 0 },
            { text: "Rất thích", value: 100 }
        ]
    },
    {
        id: 18,
        text: "Bạn có hứng thú với việc kinh doanh và đầu tư không?",
        type: "slider",
        options: [
            { text: "Không hứng thú", value: 0 },
            { text: "Rất hứng thú", value: 100 }
        ]
    },
    {
        id: 19,
        text: "Bạn thích lập trình máy tính không?",
        type: "slider",
        options: [
            { text: "Không thích", value: 0 },
            { text: "Rất thích", value: 100 }
        ]
    },
    {
        id: 20,
        text: "Bạn muốn làm việc ở công ty lớn hay khởi nghiệp nhỏ?",
        type: "choice",
        options: [
            { text: "Công ty lớn", value: "big_corp" },
            { text: "Khởi nghiệp", value: "startup" }
        ]
    },
    {
        id: 21,
        text: "Bạn muốn làm việc tại Việt Nam hay nước ngoài?",
        type: "choice",
        options: [
            { text: "Việt Nam", value: "vietnam" },
            { text: "Nước ngoài", value: "abroad" },
            { text: "Không biet", value: "unknown" },
            { text: "Không quan tài", value: "not_sure" }
        ]
    },
    {
        id: 22,
        text: "Bạn muốn học ngành thiên về kỹ thuật hay nhân văn?",
        type: "choice",
        options: [
            { text: "Kỹ thuật", value: "engineering" },
            { text: "Nhân văn", value: "humanities" }
        ]
    },
    {
        id: 23,
        text: "Bạn có thích thuyết trình trước đám đông không?",
        type: "slider",
        options: [
            { text: "Không thích", value: 0 },
            { text: "Rất thích", value: 100 }
        ]
    },
    {
        id: 24,
        text: "Bạn muốn công việc thiên về tay nghề hay trí tuệ?",
        type: "choice",
        options: [
            { text: "Tay nghề", value: "skill" },
            { text: "Trí tuệ", value: "intellectual" }
        ]
    },
    {
        id: 25,
        text: "Bạn cảm thấy hứng thú hơn với sản phẩm hữu hình hay dịch vụ?",
        type: "choice",
        options: [
            { text: "Sản phẩm", value: "product" },
            { text: "Dịch vụ", value: "service" }
        ]
    }
];

// Thêm câu hỏi Holland vào mảng questions
questions.push(...questionsB2);

// object dữ liệu ngành
const programs = [
    {
        id: "cntt",
        name: "Công nghệ Thông tin",
        description: "Đào tạo kỹ sư CNTT có khả năng phát triển phần mềm, quản trị hệ thống và ứng dụng công nghệ vào giải quyết các vấn đề thực tiễn.",
        strengths: ["Giảng viên chất lượng cao", "Phòng lab hiện đại", "Hợp tác doanh nghiệp"],
        fitScore: 85,
        image: "https://via.placeholder.com/300x200?text=CNTT",
        link: "#"
    },
    {
        id: "kt",
        name: "Kế toán",
        description: "Chương trình đào tạo cử nhân Kế toán có năng lực chuyên môn, đạo đức nghề nghiệp và khả năng ứng dụng công nghệ trong lĩnh vực kế toán - kiểm toán.",
        strengths: ["Chứng chỉ quốc tế", "Thực hành thực tế", "Cơ hội nghề nghiệp rộng"],
        fitScore: 72,
        image: "https://via.placeholder.com/300x200?text=Kế+Toán",
        link: "#"
    },
    {
        id: "qtkd",
        name: "Quản trị Kinh doanh",
        description: "Trang bị kiến thức và kỹ năng quản lý, điều hành doanh nghiệp trong môi trường kinh doanh hiện đại với các chuyên ngành hấp dẫn như Marketing, Quản trị nhân sự.",
        strengths: ["Giảng viên kinh nghiệm", "Case study thực tế", "Mạng lưới doanh nghiệp"],
        fitScore: 68,
        image: "https://via.placeholder.com/300x200?text=QTKD",
        link: "#"
    },
    {
        id: "mkt",
        name: "Marketing",
        description: "Đào tạo chuyên gia Marketing có khả năng phân tích thị trường, xây dựng chiến lược và triển khai các hoạt động marketing hiệu quả trong môi trường số.",
        strengths: ["Digital marketing", "Dự án thực tế", "Đối tác doanh nghiệp"],
        fitScore: 65,
        image: "https://via.placeholder.com/300x200?text=Marketing",
        link: "#"
    },
    {
        id: "nn",
        name: "Ngôn ngữ Anh",
        description: "Chương trình đào tạo cử nhân Ngôn ngữ Anh với các chuyên ngành Biên phiên dịch, Giảng dạy tiếng Anh và Tiếng Anh thương mại đáp ứng nhu cầu thị trường.",
        strengths: ["Giáo viên bản ngữ", "Môi trường quốc tế", "Chứng chỉ quốc tế"],
        fitScore: 60,
        image: "https://via.placeholder.com/300x200?text=Ngôn+Ngữ+Anh",
        link: "#"
    },
    {
        id: "truyen-thong",
        name: "Truyền thông Đa phương tiện",
        description: "Đào tạo chuyên gia sáng tạo nội dung đa phương tiện với các kỹ năng thiết kế đồ họa, quay phim, biên tập và sản xuất các sản phẩm truyền thông hiện đại.",
        strengths: ["Studio hiện đại", "Giảng viên giàu kinh nghiệm", "Dự án thực tế"],
        fitScore: 55,
        image: "https://via.placeholder.com/300x200?text=Truyền+Thông",
        link: "#"
    }
];

// objet ss ngành b4
const comparisonData = {
    cntt: {
        jobs: "Rất cao",
        salary: "12-20 triệu",
        skills: "Lập trình, phân tích, giải quyết vấn đề",
        duration: "4 năm",
        strengths: "Phòng lab hiện đại, giảng viên chất lượng",
        reviews: "4.8/5 (120 đánh giá)"
    },
    kt: {
        jobs: "Cao",
        salary: "8-15 triệu",
        skills: "Phân tích số liệu, tỉ mỉ, am hiểu luật",
        duration: "4 năm",
        strengths: "Chứng chỉ quốc tế, thực hành nhiều",
        reviews: "4.5/5 (95 đánh giá)"
    },
    qtkd: {
        jobs: "Cao",
        salary: "10-18 triệu",
        skills: "Giao tiếp, quản lý, phân tích thị trường",
        duration: "4 năm",
        strengths: "Case study thực tế, mạng lưới doanh nghiệp",
        reviews: "4.6/5 (110 đánh giá)"
    },
    mkt: {
        jobs: "Cao",
        salary: "10-20 triệu",
        skills: "Sáng tạo, phân tích, giao tiếp",
        duration: "4 năm",
        strengths: "Digital marketing, dự án thực tế",
        reviews: "4.7/5 (85 đánh giá)"
    },
    nn: {
        jobs: "Trung bình - cao",
        salary: "8-15 triệu",
        skills: "Ngôn ngữ, giao tiếp, nghiên cứu",
        duration: "4 năm",
        strengths: "Giáo viên bản ngữ, môi trường quốc tế",
        reviews: "4.4/5 (75 đánh giá)"
    },
    "truyen-thong": {
        jobs: "Trung bình - cao",
        salary: "8-18 triệu",
        skills: "Sáng tạo, công nghệ, làm việc nhóm",
        duration: "4 năm",
        strengths: "Studio hiện đại, dự án thực tế",
        reviews: "4.5/5 (65 đánh giá)"
    }
};

// --- HOLLAND GROUP LOGIC ---

// 1. Chia nhóm câu hỏi
const hollandGroups = [
  {
    code: 'R',
    name: 'Nhóm Kỹ thuật (Realistic - R)',
    description: 'Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...',
    questions: questions.filter(q => q.category === 'R')
  },
  {
    code: 'I',
    name: 'Nhóm Nghiên cứu (Investigative - I)',
    description: 'Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...',
    questions: questions.filter(q => q.category === 'I')
  },
  {
    code: 'A',
    name: 'Nhóm Nghệ thuật (Artistic - A)',
    description: 'Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...',
    questions: questions.filter(q => q.category === 'A')
  },
  {
    code: 'S',
    name: 'Nhóm Xã hội (Social - S)',
    description: 'Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...',
    questions: questions.filter(q => q.category === 'S')
  },
  {
    code: 'E',
    name: 'Nhóm Quản lý (Enterprising - E)',
    description: 'Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...',
    questions: questions.filter(q => q.category === 'E')
  },
  {
    code: 'C',
    name: 'Nhóm Nghiệp vụ (Conventional - C)',
    description: 'Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...',
    questions: questions.filter(q => q.category === 'C')
  }
];

let hollandCurrentGroup = 0;
let hollandAnswers = {}; // { R: {id: value, ...}, ... }

// 2. Render stepper
function renderHollandStepper() {
  const stepper = document.getElementById('holland-stepper');
  stepper.innerHTML = hollandGroups.map((g, idx) => `
    <span class="inline-block px-3 py-1 rounded-full ${idx === hollandCurrentGroup ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} mr-2">${idx + 1}. ${g.name.split('(')[0]}</span>
  `).join('');
}

// 3. Render nhóm hiện tại
function renderHollandGroup() {
  renderHollandStepper();
  const group = hollandGroups[hollandCurrentGroup];
  document.getElementById('holland-group-title').innerText = group.name;
  document.getElementById('holland-group-desc').innerText = group.description;
  let html = '';
  group.questions.forEach((q, idx) => {
    html += `<tr>
      <td>${idx + 1}. ${q.text}</td>
      ${q.options.map((opt, i) => `
        <td class="text-center">
          <input type="radio" name="q${q.id}" value="${opt.value}" ${hollandAnswers[group.code]?.[q.id] == opt.value ? 'checked' : ''}>
        </td>
      `).join('')}
    </tr>`;
  });
  document.getElementById('holland-questions-table').innerHTML = html;
  // Ẩn/hiện nút
  document.getElementById('holland-prev-btn').style.display = hollandCurrentGroup === 0 ? 'none' : '';
  document.getElementById('holland-next-btn').innerText = hollandCurrentGroup === hollandGroups.length - 1 ? 'Hoàn thành' : 'Tiếp tục';
}

// 4. Validate và lưu đáp án nhóm
function validateAndSaveHollandGroup() {
  const group = hollandGroups[hollandCurrentGroup];
  if (!hollandAnswers[group.code]) hollandAnswers[group.code] = {};
  let allAnswered = true;
  group.questions.forEach(q => {
    const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
    if (!checked) allAnswered = false;
    else hollandAnswers[group.code][q.id] = parseInt(checked.value);
  });
  return allAnswered;
}

// 5. Điều hướng
function setupHollandNav() {
  document.getElementById('holland-next-btn').onclick = function() {
    if (!validateAndSaveHollandGroup()) {
      alert('Bạn cần trả lời tất cả câu hỏi!');
      return;
    }
    if (hollandCurrentGroup < hollandGroups.length - 1) {
      hollandCurrentGroup++;
      renderHollandGroup();
    } else {
      // Chuyển sang hiển thị kết quả
      showHollandResults();
    }
  };
  document.getElementById('holland-prev-btn').onclick = function() {
    if (hollandCurrentGroup > 0) {
      hollandCurrentGroup--;
      renderHollandGroup();
    }
  };
}

// 6. Hiển thị kết quả Holland Code
function showHollandResults() {
  document.getElementById('test-questions').classList.add('hidden');
  testResults.classList.remove('hidden');
  // Gom đáp án thành mảng answers như cũ
let answers = [];
  hollandGroups.forEach(g => {
    Object.entries(hollandAnswers[g.code] || {}).forEach(([qid, value]) => {
      answers.push({ questionId: parseInt(qid), value });
    });
  });
  // Gọi lại showResults cũ
  showResults(answers);
}

// --- Kích hoạt logic mới khi bắt đầu test ---
document.addEventListener('DOMContentLoaded', function () {
  const startTestBtn = document.getElementById('start-test-btn');
  const testIntro = document.getElementById('test-intro');
  const testQuestions = document.getElementById('test-questions');
  const testResults = document.getElementById('test-results');
  const resultsContainer = document.getElementById('results-container');

  startTestBtn.addEventListener('click', function () {
    testIntro.classList.add('hidden');
    testQuestions.classList.remove('hidden');
    hollandCurrentGroup = 0;
    hollandAnswers = {};
    renderHollandGroup();
    setupHollandNav();
  });

  // Giữ nguyên các hàm renderHollandGroup, setupHollandNav, showResults, ...
});

// --- Sửa showResults để nhận answers truyền vào (nếu có) ---
function showResults(answersOverride) {
    testQuestions.classList.add('hidden');
    testResults.classList.remove('hidden');
    const useAnswers = answersOverride || answers;
    const hollandScores = calculateHollandScores(useAnswers);
    const sortedTypes = Object.entries(hollandScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    const hollandCode = sortedTypes.map(([type]) => type).join("");
    let resultsHTML = `
        <div class="w-full bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Kết quả Holland Code của bạn: ${hollandCode}</h3>
            <p class="text-gray-600 mb-6">Dưới đây là phân tích chi tiết về 3 nhóm tính cách nghề nghiệp phù hợp nhất với bạn:</p>
            <div class="space-y-6">
    `;
    sortedTypes.forEach(([type, score], index) => {
        const typeInfo = getHollandTypeDescription(type);
        resultsHTML += `
            <div class="bg-gray-50 p-6 rounded-lg">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="text-xl font-bold text-blue-800">${index + 1}. ${typeInfo.name}</h4>
                    <div class="text-lg font-bold text-blue-600">${Math.round(score)}%</div>
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <p class="font-medium text-gray-700 mb-2">Đặc điểm nổi bật:</p>
                        <p class="text-gray-600 mb-4">${typeInfo.traits}</p>
                        <p class="font-medium text-gray-700 mb-2">Điểm mạnh:</p>
                        <p class="text-gray-600">${typeInfo.strengths}</p>
                    </div>
                    <div>
                        <p class="font-medium text-gray-700 mb-2">Nghề nghiệp phù hợp:</p>
                        <p class="text-gray-600 mb-4">${typeInfo.careers}</p>
                        <p class="font-medium text-gray-700 mb-2">Mô tả:</p>
                        <p class="text-gray-600">${typeInfo.description}</p>
                    </div>
                </div>
            </div>
        `;
    });
    resultsHTML += `
            </div>
        </div>
    `;
    resultsContainer.innerHTML = resultsHTML;
    // Hiển thị các ngành học phù hợp
    showMatchingPrograms(hollandCode);
}

// Thêm các hàm cũ khác
function calculateHollandScores(answers) {
    const scores = {
        R: 0, // Realistic
        I: 0, // Investigative
        A: 0, // Artistic
        S: 0, // Social
        E: 0, // Enterprising
        C: 0  // Conventional
    };
    
    let counts = {
        R: 0, I: 0, A: 0, S: 0, E: 0, C: 0
    };

    answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.type === "holland") {
            scores[question.category] += answer.value;
            counts[question.category]++;
        }
    });

    // Tính điểm trung bình cho mỗi loại
    Object.keys(scores).forEach(key => {
        if (counts[key] > 0) {
            scores[key] = scores[key] / counts[key];
        }
    });

    return scores;
}

function getHollandTypeDescription(type) {
    const descriptions = {
        R: {
            name: "Realistic (Người thực tế)",
            traits: "Thích làm việc với đồ vật, máy móc, động vật, công cụ",
            strengths: "Kỹ năng thực hành, kỹ thuật, cơ khí",
            careers: "Kỹ sư, thợ máy, nông dân, kiến trúc sư, đầu bếp",
            description: "Bạn là người thực tế, thích làm việc với đồ vật hơn là con người. Bạn giỏi về kỹ thuật, cơ khí và thích giải quyết các vấn đề thực tiễn."
        },
        I: {
            name: "Investigative (Người nghiên cứu)",
            traits: "Thích tìm hiểu, phân tích, giải quyết vấn đề",
            strengths: "Tư duy logic, nghiên cứu, phân tích",
            careers: "Nhà khoa học, bác sĩ, lập trình viên, nhà nghiên cứu",
            description: "Bạn là người có tư duy phân tích, thích tìm hiểu và giải quyết các vấn đề phức tạp. Bạn giỏi về khoa học và nghiên cứu."
        },
        A: {
            name: "Artistic (Người nghệ thuật)",
            traits: "Thích sáng tạo, độc đáo, tự do biểu đạt",
            strengths: "Sáng tạo, nghệ thuật, thiết kế",
            careers: "Nghệ sĩ, nhà thiết kế, nhạc sĩ, nhiếp ảnh gia, nhà văn",
            description: "Bạn là người có óc sáng tạo, thích thể hiện bản thân qua nghệ thuật. Bạn đánh giá cao cái đẹp và sự độc đáo."
        },
        S: {
            name: "Social (Người xã hội)",
            traits: "Thích giúp đỡ, dạy dỗ và làm việc với người khác",
            strengths: "Giao tiếp, đồng cảm, hỗ trợ",
            careers: "Giáo viên, tư vấn viên, nhân viên xã hội, y tá",
            description: "Bạn là người hướng ngoại, thích làm việc với con người. Bạn có khả năng giao tiếp tốt và thích giúp đỡ người khác."
        },
        E: {
            name: "Enterprising (Người quản lý)",
            traits: "Thích lãnh đạo, thuyết phục và kinh doanh",
            strengths: "Lãnh đạo, quản lý, kinh doanh",
            careers: "Quản lý, doanh nhân, luật sư, nhân viên bán hàng",
            description: "Bạn là người có khả năng lãnh đạo, thích kinh doanh và thuyết phục người khác. Bạn hướng đến thành công và mục tiêu."
        },
        C: {
            name: "Conventional (Người quy ước)",
            traits: "Thích trật tự, quy tắc và chi tiết",
            strengths: "Tổ chức, quản lý dữ liệu, chính xác",
            careers: "Kế toán, thư ký, nhân viên ngân hàng, quản trị văn phòng",
            description: "Bạn là người có tổ chức, thích làm việc với số liệu và quy trình rõ ràng. Bạn đánh giá cao sự ổn định và trật tự."
        }
    };
    return descriptions[type] || {};
}

function showMatchingPrograms(hollandCode) {
    // Định nghĩa mối quan hệ giữa Holland Code và các ngành học
    const programMatches = {
        "RIC": ["cntt"],
        "RIA": ["truyen-thong"],
        "SEC": ["qtkd", "kt"],
        "SAE": ["nn", "mkt"],
        // Thêm các combination khác tùy theo ngành học của trường
    };

    // Tìm các ngành phù hợp
    let matchingProgramIds = [];
    Object.entries(programMatches).forEach(([code, ids]) => {
        if (code.split("").some(c => hollandCode.includes(c))) {
            matchingProgramIds.push(...ids);
        }
    });

    // Lọc các ngành học phù hợp
    const matchingPrograms = programs.filter(p => matchingProgramIds.includes(p.id));

    // Hiển thị các ngành phù hợp
        resultsContainer.innerHTML += `
        <div class="w-full bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Ngành học phù hợp với bạn:</h3>
            <div class="grid md:grid-cols-2 gap-4">
                ${matchingPrograms.map(program => `
                    <div class="program-card bg-white p-4 rounded-lg border border-gray-200">
                        <h4 class="text-lg font-bold text-gray-800 mb-2">${program.name}</h4>
                        <p class="text-gray-600 text-sm mb-3">${program.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${program.strengths.map(strength => 
                                `<span class="advantage-badge bg-blue-100 text-blue-800">${strength}</span>`
                            ).join('')}
                </div>
                    </div>
                `).join('')}
            </div>
            </div>
        `;
}

// func cho chat (ch xong)
sendChatBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListenear('keydown', function (event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
});
