// TRUE FOCUS ANIMATION LOGIC
document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.focus-word');
    let currentIndex = 0;

    // Fungsi untuk memindahkan fokus
    function moveFocus() {
        // Hapus class active dari semua kata
        words.forEach(word => word.classList.remove('active'));
        
        // Tambahkan class active ke kata saat ini
        words[currentIndex].classList.add('active');

        // Pindah ke kata berikutnya (loop)
        currentIndex = (currentIndex + 1) % words.length;
    }

    // Jalankan animasi berpindah otomatis setiap 2 detik
    let focusInterval = setInterval(moveFocus, 2000);

    // Kalau di-hover manual pakai mouse, hentikan interval otomatis
    words.forEach((word, index) => {
        word.addEventListener('mouseenter', () => {
            clearInterval(focusInterval);
            words.forEach(w => w.classList.remove('active'));
            word.classList.add('active');
        });

        // Lanjutkan otomatis saat mouse pergi
        word.addEventListener('mouseleave', () => {
            currentIndex = index; // Mulai dari posisi terakhir
            focusInterval = setInterval(moveFocus, 2000);
        });
    });
});