const sendChatMessage = document.querySelector(".chat_input span");
const chatInput = document.querySelector(".chat_input textarea");
const chatbox = document.querySelector(".chatbox");
let userMessage;

const createChat = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add(className, "chat");

    if (className === "outgoing") {
        chatLi.innerHTML = `<p>${message}</p>`;
        chatInput.value = ""; // Clear input
    } else {
        chatLi.innerHTML = `<span class="material-symbols-outlined">robot_2</span><p>${message}</p>`;
    }

    return chatLi;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Hiển thị tin nhắn người dùng
    chatbox.appendChild(createChat(userMessage, "outgoing"));

    // Cuộn xuống cuối
    chatbox.scrollTop = chatbox.scrollHeight;

    // Hiển thị phản hồi "đang gõ..." sau 600ms
    setTimeout(() => {
        chatbox.appendChild(createChat("Xin chào", "incoming"));
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 600);
};

sendChatMessage.addEventListener("click", handleChat);
