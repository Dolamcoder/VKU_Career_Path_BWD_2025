 document.addEventListener("DOMContentLoaded", function () {
    const userNameSpans = document.querySelectorAll(".userName");
    const loginButtons = document.querySelectorAll(".logIn_signUp");
    const avatarDivs = document.querySelectorAll(".avartar");
    userNameSpans.forEach((userNameSpan, index) => {
      const userName = userNameSpan.dataset.name;
      const loginButton = loginButtons[index];
      const avatarDiv = avatarDivs[index];

      if (userName && userName.trim() !== "") {
        // Nếu có tên người dùng, ẩn nút đăng nhập và hiển thị thông tin người dùng
        if (loginButton) loginButton.style.display = "none";
        if (avatarDiv) avatarDiv.style.display = "flex";
        userNameSpan.textContent = userName;
      } else {
        // Nếu không có tên người dùng, hiển thị nút đăng nhập và ẩn avatar
        if (loginButton) loginButton.style.display = "block";
        if (avatarDiv) avatarDiv.style.display = "none";
      }
    });
  });