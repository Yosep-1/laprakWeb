<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laporan Praktikum | Yosep D. Tel</title>
    
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/circular-gallery.css">
    <link rel="stylesheet" href="assets/css/glass-surface.css">
    
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap" rel="stylesheet">

    <link rel="icon" href="assets/content/img/logo-ydt.png" type="image/png">
</head>
<body>

    <div class="bg-animated"></div>
    <div class="bg-noise"></div>

    <header>
        <nav class="container">
            <div class="logo">
                <img src="assets/content/img/logo-ydt.png" alt="YDT Logo">
            </div>
            <ul class="nav-links">
                <li><a href="#home" class="cursor-target">Home</a></li>
                <li><a href="#laporan-preview" class="cursor-target">Laporan</a></li>
                <li><a href="#contact" class="cursor-target">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        
        <div class="hero-3d-center">
            <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-mOSVa8HdEmrqmublDMR7JzWG/' frameborder='0'></iframe>
        </div>

        <div class="hero-content container">
            
            <div class="title-wrapper">
                <h4 class="badge">Arsip Digital Praktikum</h4>
                <h1 class="main-title true-focus-container cursor-target">
                    <span class="focus-word text-white active">Teknik</span> 
                    <span class="focus-word text-purple">Informatika</span>
                </h1>
            </div>

            <div class="info-wrapper">
                <div class="info-left">
                    <div class="info-item">
                        <span>Mahasiswa</span>
                        <p>Yosep Dominicke Telaumbanua</p>
                    </div>
                    <div class="info-item">
                        <span>NPM</span>
                        <p class="npm-text" style="color: white;">240840039</p>
                    </div>
                    <div class="hero-btns">
                        <a href="#laporan-preview" class="btn-primary cursor-target">Lihat Laporan</a>
                    </div>
                </div>

                <div class="info-right">
                    <div class="info-item text-right">
                        <span>Universitas</span>
                        <p>Universitas Katolik Santo Thomas</p>
                    </div>
                    <div class="info-item text-right">
                        <span>Mata Kuliah</span>
                        <p>Praktikum Pemrograman Web</p>
                    </div>
                    <div class="info-item text-right">
                        <span>Dosen Pengampu</span>
                        <p>Wasit Ginting, S.kom, M.Kom.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section  style="padding: 10rem 0 5rem 0; position: relative;">
        <div class="container" style="margin-bottom: 2rem; position: relative; z-index: 10;">
            <h4 class="badge" style="text-align: center;">Preview Tugas</h4>
            <h2 style="font-size: 3.5rem; text-align: center; margin-bottom: 1rem;">Galeri <span style="color: var(--accent-color);">Praktikum</span></h2>
        </div>
        
        <div style="height: 600px; width: 100%; position: relative;">
            <div id="circular-gallery" class="circular-gallery cursor-target"></div>
        </div>
    </section>

    <div class="custom-cursor-dot"></div>
    <div class="custom-cursor-outline"></div>

    <script src="assets/js/script.js"></script>

    <script type="module">
        import { initCircularGallery } from './assets/js/circular-gallery.js';
        
        // 1. Definisikan daftar gambar modul Anda di sini
        const daftarModul = [
    { image: 'assets/content/img/Prak.%20Modul%201.png', text: 'Modul 1' },
    { image: 'assets/content/img/Prak.%20Modul%202.png', text: 'Modul 2' },
    { image: 'assets/content/img/Prak.%20Modul%203.jpg', text: 'Modul 3' },
    { image: 'assets/content/img/Prak.%20Modul%204.png', text: 'Modul 4' },
    { image: 'assets/content/img/Prak.%20Modul%205.png', text: 'Modul 5' }
];
        
        // 2. Masukkan daftar gambar tersebut ke dalam inisialisasi galeri
        initCircularGallery('#circular-gallery', {
            items: daftarModul, // Menyisipkan gambar lokal Anda
            bend: -2,
            textColor: "#ffffff",
            borderRadius: 0.06,
            scrollSpeed: 2,
            scrollEase: 0.05
        });
    </script>

    </section> <?php include 'laporan-section.php'; ?>

    <section id="glass-scroll" class="glass-scroll-wrapper">
        
        <div class="sticky-glass-container">
            <div class="glass-pill"></div>
        </div>

        <div class="glass-content-area">
            
            <div class="glass-panel text-panel">
                <h2>Try scrolling.</h2>
            </div>

            <div class="glass-panel image-panel cursor-target">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Code">
                <h2>Seni Dalam<br>Kode</h2>
            </div>

            <div class="glass-panel image-panel cursor-target">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Cyber Security">
                <h2>Sistem Yang<br>Aman</h2>
            </div>

            <div class="glass-panel image-panel cursor-target">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Hardware">
                <h2>Teknologi Masa<br>Depan</h2>
            </div>

        </div>

    </section>

    <?php include 'contact-section.php'; ?>

    <div class="custom-cursor-dot"></div>

    <div class="custom-cursor-outline"></div>

    <link rel="stylesheet" href="assets/css/circular-gallery.css">
    <link rel="stylesheet" href="assets/css/glass-surface.css">
    
    <script src="assets/js/script.js"></script>

    <script type="module">
        import { initCircularGallery } from './assets/js/circular-gallery.js';
        const daftarModul = [
            { image: 'assets/content/img/cover-1.png.png', text: 'Modul 1' },
            { image: 'assets/content/img/cover-2.png.png', text: 'Modul 2' },
            { image: 'assets/content/img/cover-3.png.png', text: 'Modul 3' },
            { image: 'assets/content/img/cover-4.png.png', text: 'Modul 4' },
            { image: 'assets/content/img/cover-5.png.png', text: 'Modul 5' }
        ];
        
        initCircularGallery('#circular-gallery', {
            items: daftarModul,
            bend: -2,
            textColor: "#ffffff",
            borderRadius: 0.06,
            scrollSpeed: 2,
            scrollEase: 0.05
        });
    </script>


</body>
</html>