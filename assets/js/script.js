document.addEventListener("DOMContentLoaded", function() {
    
    // 1. TRUE FOCUS ANIMATION LOGIC
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

    // 2. CUSTOM CURSOR LOGIC 
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorOutline = document.querySelector('.custom-cursor-outline');
    const targets = document.querySelectorAll('.cursor-target, .btn-primary, .focus-word, a');

    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 150, fill: "forwards" });
    });

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

    // ==========================================
    // 3. LOGIKA MODAL SPLIT VIEW (LAPORAN)
    // ==========================================
    const cards = document.querySelectorAll('.laporan-card');
    const modal = document.getElementById('split-modal');
    const closeModal = document.querySelector('.close-modal');
    
    const modalTitle = document.getElementById('modal-title');
    const modalPdf = document.getElementById('modal-pdf');
    const modalVideo = document.getElementById('modal-video');

    // Buka Modal saat card laporan di-klik
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const pdfSrc = card.getAttribute('data-pdf');
            const videoSrc = card.getAttribute('data-video');

            // Masukkan data ke dalam Modal pop-up
            modalTitle.textContent = title;
            
            // JURUS ANTI-CACHE: Menambahkan waktu saat ini agar browser selalu memuat ulang PDF (Tidak pakai memori lama)
            // Mengambil file PDF dan menyembunyikan Toolbar/Menu bawaan browser
            modalPdf.src = pdfSrc + "#toolbar=0&navpanes=0&scrollbar=0";
            
            modalVideo.src = videoSrc;

            // Tampilkan Modal
            modal.classList.add('active');
            
            // Sembunyikan kursor custom
            const cursorDot = document.querySelector('.custom-cursor-dot');
            const cursorOutline = document.querySelector('.custom-cursor-outline');
            if(cursorDot) cursorDot.style.display = 'none';
            if(cursorOutline) cursorOutline.style.display = 'none';
            document.body.style.cursor = 'auto'; 
        });
    });

    // Fungsi Tutup Modal
    function closeSplitModal() {
        modal.classList.remove('active');
        
        setTimeout(() => {
            modalPdf.src = "";
            modalVideo.src = "";
        }, 400); 
        
        // Munculkan kembali kursor custom
        const cursorDot = document.querySelector('.custom-cursor-dot');
        const cursorOutline = document.querySelector('.custom-cursor-outline');
        if(cursorDot) cursorDot.style.display = 'block';
        if(cursorOutline) cursorOutline.style.display = 'block';
        document.body.style.cursor = 'none';
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeSplitModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeSplitModal();
            }
        });
    }

    // ==========================================
    // 4. SCROLL REVEAL (INTERSECTION OBSERVER)
    // ==========================================
    
    // Pengaturan sensor: elemen akan bereaksi jika 15% bagiannya sudah terlihat di layar
    const observerOptions = {
        threshold: 0.15 
    };

    // Membuat alat pemantau (Observer)
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke dalam layar
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Jalankan animasi masuk
            } else {
                // Jika elemen keluar dari layar (dilewati atas/bawah)
                entry.target.classList.remove('active'); // Kembalikan ke state awal agar bisa dianimasikan lagi
            }
        });
    }, observerOptions);

    // Cari semua elemen yang punya class animasi, lalu pantau mereka!
    const hiddenElements = document.querySelectorAll('.reveal-fade-up, .reveal-scale-up');
    hiddenElements.forEach((el) => {
        scrollObserver.observe(el);
    });
    
});