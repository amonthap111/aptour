// เรียกใช้ JavaScript สำหรับเปิด/ปิดเมนู
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-link a'); // เลือกทุกลิงก์ในเมนู

// เปิด/ปิดเมนูเมื่อคลิกที่ hamburger
hamburger.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

// ซ่อนเมนูเมื่อคลิกที่ลิงก์ในเมนู
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('menu-open'); // ซ่อนเมนู
    });
});
