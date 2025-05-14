document.addEventListener("DOMContentLoaded", () => {
  const submitLogin = document.getElementById("submitLogin");
  if (submitLogin) {
    submitLogin.addEventListener("click", async (event) => {
      event.preventDefault(); // Prevent default form submission
      // Get form data
      const form = document.querySelector(".sign-in-form");
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");
      try {
        // Send login request to the server
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const result = await response.json(); //lay phan hoi tu server
        console.log(result);
        if (response.ok) {
          Swal.fire({
            title: "Đăng nhập thành công!",
            text: `Xin chào ${result.name}`,
            icon: "success",
            confirmButtonText: "OK", // Customize button text
            allowOutsideClick: false, // Prevent closing by clicking outside
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          });
        } else {
          // Show error alert
          Swal.fire({
            title: "Đăng nhập thất bại",
            text: result.error || "Email hoặc mật khẩu không hợp lệ",
            icon: "error",
            confirmButtonText: "OK",
            allowOutsideClick: false,
          });
        }
      } catch (error) {
        console.error("Error during login:", error);
        Swal.fire({
          title: "Lỗi",
          text: "Đã xảy ra lỗi, vui lòng thử lại sau.",
          icon: "error",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        });
      }
    });
  } else {
    console.error("submitLogin button not found");
  }
  const submitRegister = document.getElementById("submitRegister");
  if (submitRegister) {
    submitRegister.addEventListener("click", async (event) => {
      event.preventDefault();
      const form = document.querySelector(".sign-up-form");
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const passwordConfirm = formData.get("passwordConfirm");
      try {
        const response = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, passwordConfirm }),
        });
        const result = await response.json();
        if (response.ok) {
          Swal.fire({
            title: "Đăng ký thành công!",
            text: "Bạn đã đăng ký tài khoản thành công.",
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/login";
            }
          });
        } else {
          Swal.fire({
            title: "Đăng ký thất bại",
            text: result.error || "Đã xảy ra lỗi trong quá trình đăng ký.",
            icon: "error",
            confirmButtonText: "OK",
            allowOutsideClick: false,
          });
        }
      } catch (error) {
        console.error("Lỗi trong quá trình đăng ký:", error);
        Swal.fire({
          title: "Lỗi",
          text: "Đã xảy ra lỗi, vui lòng thử lại sau.",
          icon: "error",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        });
      }
    });
  } else {
    console.error("submitRegister button not found");
  }
});
