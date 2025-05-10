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



// object câu hỏi b2
const questions = [
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

// biến bài test  b2
let currentQuestion = 0;
let answers = [];
let testStarted = false;

// DOM
const startTestBtn = document.getElementById('start-test-btn');
const testIntro = document.getElementById('test-intro');
const testQuestions = document.getElementById('test-questions');
const testResults = document.getElementById('test-results');
const questionContainer = document.getElementById('question-container');
const currentQuestionEl = document.getElementById('current-question');
const progressFill = document.getElementById('progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const retakeBtn = document.getElementById('retake-btn');
const saveResultsBtn = document.getElementById('save-results-btn');

// nhắn chat (ch xong)
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');

// ss ngành (ch xong)
const program1Select = document.getElementById('program1');
const program2Select = document.getElementById('program2');
const compareBtn = document.getElementById('compare-btn');
const comparisonResult = document.getElementById('comparison-result');
const program1Title = document.getElementById('program1-title');
const program2Title = document.getElementById('program2-title');
const program1Jobs = document.getElementById('program1-jobs');
const program2Jobs = document.getElementById('program2-jobs');
const program1Salary = document.getElementById('program1-salary');
const program2Salary = document.getElementById('program2-salary');
const program1Skills = document.getElementById('program1-skills');
const program2Skills = document.getElementById('program2-skills');
const program1Duration = document.getElementById('program1-duration');
const program2Duration = document.getElementById('program2-duration');
const program1Strengths = document.getElementById('program1-strengths');
const program2Strengths = document.getElementById('program2-strengths');
const program1Reviews = document.getElementById('program1-reviews');
const program2Reviews = document.getElementById('program2-reviews');
const aiRecommendation = document.getElementById('ai-recommendation');
const aiRecommendationText = document.getElementById('ai-recommendation-text');

// container kq cuối cùng
const finalResultsContainer = document.getElementById('final-results-container');

// nút bất đầu bài test b2
startTestBtn.addEventListener('click', function () {
    testIntro.classList.add('hidden');
    testQuestions.classList.remove('hidden');
    loadQuestion(currentQuestion);
});

// hiển thị câu hỏi b2
function loadQuestion(index) {
    if (index >= questions.length) {
        showResults();
        return;
    }

    const question = questions[index];
    currentQuestionEl.textContent = "Câu " + question.id + "/" + questions.length; //hiển thị số lương câu hỏi
    progressFill.style.width = (question.id / questions.length * 100) + "%"; //bar tiến trình

    let questionHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-6">${question.text}</h3>
    `; //hiển thị câu hỏi

    if (question.type === 'slider') {
        questionHTML += `
            <div class="slider-container mb-4">
                <div class="flex justify-between mb-2">
                    <span class="text-gray-600">${question.options[0].text}</span>
                    <span class="text-gray-600">${question.options[1].text}</span>
                </div>
                <input type="range" min="0" max="100" value="50" class="slider w-full" id="slider-${question.id}">
                <div class="flex justify-between mt-1">
                    <span class="text-xs text-gray-500">Không thích</span>
                    <span class="text-xs text-gray-500">Rất thích</span>
                </div>
            </div>
        `;
    } else if (question.type === 'choice') {
        questionHTML += `
            <div class="grid grid-cols-1 gap-3">
        `;
        for (let i = 0; i < question.options.length; i++) {
            const opt = question.options[i];
            questionHTML += `
                <label class="flex items-center space-x-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="choice-${question.id}" value="${opt.value}" class="form-radio h-4 w-4">
                    <span class="text-gray-700">${opt.text}</span>
                </label>
            `;
        }
        questionHTML += `</div>`;
    }

    questionContainer.innerHTML = questionHTML;

    // nút qua lại cho câu hỏi đầu và cuối
    if (index === 0) { //câu hỏi đầu = k có nút quay lai
        prevBtn.classList.add('opacity-0');
    } else {
        prevBtn.classList.remove('opacity-0');
    }

    if (index === questions.length - 1) { //cuối = nút hoàn thành bài test
        nextBtn.innerHTML = 'Hoàn thành <i class="fas fa-check ml-2"></i>';
    } else {
        nextBtn.innerHTML = 'Tiếp theo <i class="fas fa-arrow-right ml-2"></i>';
    }
}

// nút tiếp theo
nextBtn.addEventListener('click', function () {
    saveAnswer();

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        showResults();
    }
});

// nút quay lại
prevBtn.addEventListener('click', function () {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

// lưu kq b2
function saveAnswer() {
    const question = questions[currentQuestion];
    let answerValue = null;

    if (question.type === 'slider') {
        const slider = document.getElementById('slider-' + question.id);
        if (slider) {
            answerValue = parseInt(slider.value);
        }
    } else if (question.type === 'choice') {
        const selected = document.querySelector('input[name="choice-' + question.id + '"]:checked');
        if (selected) {
            answerValue = selected.value;
        }
    }

    // cập nhật r thêm câu trả lời vô arr (cập nhật lại nếu trả lời lại)
    let existingIndex = -1;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].questionId === question.id) {
            existingIndex = i;
            break;
        }
    }

    if (existingIndex !== -1) {
        answers[existingIndex].value = answerValue;
    } else {
        answers.push({
            questionId: question.id,
            value: answerValue
        });
    }
}

// hiện thị kq b2 (demo á)
function showResults() {
    testQuestions.classList.add('hidden');
    testResults.classList.remove('hidden');

    // tính điểm tb
    let total = 0;
    let count = 0;

    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (typeof answer.value === 'number') {
            total += answer.value;
            count++;
        }
    }

    let avgScore = 0;
    if (count > 0) {
        avgScore = total / count;
    }

    // sắp xếp kq giảm dần theo mức phù hợp 
    const sortedPrograms = [];
    for (let i = 0; i < programs.length; i++) {
        sortedPrograms.push(programs[i]);
    }

    sortedPrograms.sort(function (a, b) {
        const diffA = Math.abs(a.fitScore - avgScore);
        const diffB = Math.abs(b.fitScore - avgScore);
        return diffA - diffB;
    });

    // hiển tị 3 ngành phù hợp nhất
    resultsContainer.innerHTML = '';
    for (let i = 0; i < 3 && i < sortedPrograms.length; i++) {
        const program = sortedPrograms[i];
        const fitPercentage = 100 - Math.abs(program.fitScore - avgScore);

        let strengthsHTML = '';
        for (let j = 0; j < program.strengths.length; j++) {
            strengthsHTML += `<span class="advantage-badge bg-blue-100 text-blue-800">${program.strengths[j]}</span>`;
        }

        resultsContainer.innerHTML += `
            <div class="program-card bg-white p-6 rounded-lg border border-gray-200 fade-in" style="animation-delay: ${i * 0.1}s">
                <div class="flex items-center mb-4">
                    <img src="${program.image}" alt="${program.name}" class="w-16 h-16 object-cover rounded-md mr-4">
                    <h4 class="text-lg font-bold text-gray-800">${program.name}</h4>
                </div>
                <p class="text-gray-600 mb-4">${program.description}</p>
                <div class="mb-4">
                    <div class="flex justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700">Độ phù hợp</span>
                        <span class="text-sm font-medium text-blue-600">${Math.round(fitPercentage)}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full" style="width: ${fitPercentage}%"></div>
                    </div>
                </div>
                <div class="mb-4">
                    <h5 class="text-sm font-medium text-gray-700 mb-2">Thế mạnh tại VKU</h5>
                    <div class="flex flex-wrap gap-2">
                        ${strengthsHTML}
                    </div>
                </div>
                <a href="${program.link}" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Xem chi tiết <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        `;
    }
}

// nút làm lại bài test b2
retakeBtn.addEventListener('click', function () {
    currentQuestion = 0;
    answers = [];
    testResults.classList.add('hidden');
    testQuestions.classList.remove('hidden');
    loadQuestion(currentQuestion);
});

// nút lưu kq b2
saveResultsBtn.addEventListener('click', function () {
    alert('Vui lòng đăng nhập để lưu kết quả trắc nghiệm của bạn.');
});



// hiện thị kq b5
function displayFinalResults() {
    const avgScore = answers.reduce((sum, answer) => sum + answer.value, 0) / answers.length;

    const sortedPrograms = [...programs].sort((a, b) => {
        const aDiff = Math.abs(a.fitScore - avgScore);
        const bDiff = Math.abs(b.fitScore - avgScore);
        return aDiff - bDiff;
    });

    // hiển thị lại 3 ngành phù hợp nhất
    finalResultsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const program = sortedPrograms[i];
        const fitPercentage = 100 - Math.abs(program.fitScore - avgScore);

        finalResultsContainer.innerHTML += `
                    <div class="program-card bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <span class="text-blue-600 font-bold">${i + 1}</span>
                            </div>
                            <h4 class="text-lg font-bold text-gray-800">${program.name}</h4>
                        </div>
                        <p class="text-gray-600 mb-3 text-sm">${program.description}</p>
                        <div class="mb-3">
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Độ phù hợp</span>
                                <span class="text-sm font-medium text-blue-600">${fitPercentage.toFixed(0)}%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-600 h-2 rounded-full" style="width: ${fitPercentage}%"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <h5 class="text-xs font-medium text-gray-700 mb-1">Thế mạnh tại VKU</h5>
                            <div class="flex flex-wrap gap-1">
                                ${program.strengths.map(strength =>
            `<span class="advantage-badge bg-blue-100 text-blue-800 text-xs">${strength}</span>`
        ).join('')}
                            </div>
                        </div>
                        <a href="${program.link}" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            <i class="fas fa-info-circle mr-1"></i> Chi tiết ngành học
                        </a>
                    </div>
                `;
    }
}


// func cho chat (ch xong)
sendChatBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListenear('keydown', function (event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
});
