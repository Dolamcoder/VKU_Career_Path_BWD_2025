const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider(index) {
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  bullets[index - 1].classList.add("active");
}

// Manual click on bullets
bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    moveSlider(bullet.dataset.value);
  });
});

// Automatic sliding every 8 seconds
let currentIndex = 1;
const totalSlides = bullets.length;

function autoSlide() {
  currentIndex = (currentIndex % totalSlides) + 1; // Loop back to 1 after the last slide
  moveSlider(currentIndex);
}

let slideInterval = setInterval(autoSlide, 3000); // Slide every 8 seconds

// Optional: Pause auto-slide on hover and resume on mouse leave
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});
carousel.addEventListener("mouseleave", () => {
  slideInterval = setInterval(autoSlide, 8000);
});
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
        const result = await response.json(); // Expect JSON response
        if (response.ok) {
          // Show success alert with username and redirect on OK
          Swal.fire({
            title: "Đăng nhập thành công!",
            text: `Xin chào ${result.name}`,
            icon: "success",
            confirmButtonText: "OK", // Customize button text
            allowOutsideClick: false, // Prevent closing by clicking outside
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/"; // Redirect to homepage on OK
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
});
