document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. TRUE FOCUS ANIMATION ---
    const words = document.querySelectorAll('.focus-word');
    let currentIndex = 0;

    function moveFocus() {
        words.forEach(word => word.classList.remove('active'));
        words[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % words.length;
    }
    let focusInterval = setInterval(moveFocus, 2000);

    words.forEach((word, index) => {
        word.addEventListener('mouseenter', () => {
            clearInterval(focusInterval);
            words.forEach(w => w.classList.remove('active'));
            word.classList.add('active');
        });
        word.addEventListener('mouseleave', () => {
            currentIndex = index;
            focusInterval = setInterval(moveFocus, 2000);
        });
    });

    // --- 2. CUSTOM CURSOR ANIMATION ---
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorOutline = document.querySelector('.custom-cursor-outline');
    const targets = document.querySelectorAll('.cursor-target, .btn-primary, .focus-word');

    // Mengikuti pergerakan mouse
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Titik putih bergerak instan
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Garis luar bergerak dengan sedikit delay (animasi di CSS)
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });

    // Efek saat menyentuh elemen tertentu (tombol/link)
    targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovered');
            cursorDot.style.width = '10px';
            cursorDot.style.height = '10px';
        });
        target.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovered');
            cursorDot.style.width = '6px';
            cursorDot.style.height = '6px';
        });
    });
});