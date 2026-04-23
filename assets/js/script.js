document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. TRUE FOCUS ANIMATION LOGIC
    // ==========================================
    const words = document.querySelectorAll('.focus-word');
    let currentIndex = 0;

    // Fungsi mengganti fokus tulisan
    function moveFocus() {
        words.forEach(word => word.classList.remove('active'));
        words[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % words.length;
    }
    
    // Jalankan bergantian setiap 2 detik
    let focusInterval = setInterval(moveFocus, 2000);

    // Hentikan interval otomatis jika pengguna meng-hover tulisan
    words.forEach((word, index) => {
        word.addEventListener('mouseenter', () => {
            clearInterval(focusInterval);
            words.forEach(w => w.classList.remove('active'));
            word.classList.add('active');
        });
        
        // Lanjutkan otomatis saat mouse pergi
        word.addEventListener('mouseleave', () => {
            currentIndex = index;
            focusInterval = setInterval(moveFocus, 2000);
        });
    });

    // ==========================================
    // 2. CUSTOM CURSOR LOGIC (Target Cursor)
    // ==========================================
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorOutline = document.querySelector('.custom-cursor-outline');
    
    // Semua elemen yang jika di-hover kursornya membesar
    const targets = document.querySelectorAll('.cursor-target, .btn-primary, .focus-word, a');

    // Menggerakkan kursor putih dan outline
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Gerak instan untuk titik putih
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Animasi delay untuk lingkaran outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 150, fill: "forwards" });
    });

    // Efek Hover pada elemen tertentu
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