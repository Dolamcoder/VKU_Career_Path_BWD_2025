// Lấy tất cả các button và menu dropdown
const avartarButtons = document.querySelectorAll('.avartarButton');
const dropdownMenus = document.querySelectorAll('.dropdownMenuAvartar');
const logouts=document.querySelectorAll('.logout');
logouts.forEach((logout) => {
    logout.addEventListener('click', function(event) {
       // Gửi yêu cầu POST đến endpoint /logout
      fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Chuyển hướng về trang chủ sau khi đăng xuất thành công
          window.location.href = '/';
        } else {  
          alert('Đăng xuất thất bại. Vui lòng thử lại.');
        }
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
    });
  });
// Lặp qua tất cả các button và menu dropdown
avartarButtons.forEach((avartarButton, index) => {
  const dropdownMenu = dropdownMenus[index]; // Lấy menu tương ứng với button
  // Khi click vào button, hiển thị/ẩn menu
  avartarButton.addEventListener('click', function(event) {
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
    event.stopPropagation(); // Ngừng sự kiện nổi bọt để tránh đóng menu nếu click bên ngoài
  });

  // Ngừng đóng menu khi click vào chính menu dropdown
  dropdownMenu.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
// Đóng tất cả các menu khi click ra ngoài
window.addEventListener('click', function() {
  dropdownMenus.forEach((dropdownMenu) => {
    dropdownMenu.style.display = 'none';
  });
});
