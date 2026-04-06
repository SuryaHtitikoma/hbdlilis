document.addEventListener("DOMContentLoaded", () => {
  const cube = document.getElementById("cube");
  const container = document.getElementById("cube-container");
  const card = document.getElementById("birthday-card");

  let isMouseMoving = false;
  let idleRotationX = 0;
  let idleRotationY = 0;
  let mouseTimeout;
  let animationTriggered = false;

  // Inisialisasi Audio (Pastikan nama file sesuai)
  const gojoAudio = new Audio("sound.mp3");
  const bgMusic = new Audio("dh.mp3"); // Musik Ulang Tahun (Setelah Card muncul)
  bgMusic.loop = true; // Set looping untuk musik latar

  // --- 1. GENERATE SISI KUBUS ---
  const cubeData = [
    { class: "front", img: "g1.webp" },
    { class: "back", img: "g2.webp" },
    { class: "top", img: "g3.webp" },
    { class: "bottom", img: "g4.webp" },
    { class: "right", img: "g5.webp" },
    { class: "left", img: "g6.webp" },
  ];

  cubeData.forEach((side) => {
    const face = document.createElement("div");
    face.className = `cube-face ${side.class}`;
    face.style.backgroundImage = `url('${side.img}')`;
    cube.appendChild(face);
  });

  // --- 2. ROTASI IDLE ---
  function autoRotate() {
    if (
      !isMouseMoving &&
      container.style.display !== "none" &&
      !animationTriggered
    ) {
      idleRotationX += 0.5;
      idleRotationY += 0.8;
      cube.style.transform = `rotateX(${idleRotationX}deg) rotateY(${idleRotationY}deg)`;
    }
    requestAnimationFrame(autoRotate);
  }
  autoRotate();

  // // --- 3. ROTASI MOUSE ---
  // document.addEventListener("mousemove", (e) => {
  //   if (animationTriggered) return;

  //   isMouseMoving = true;
  //   clearTimeout(mouseTimeout);

  //   const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  //   const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

  //   const rotateY = dx * 180;
  //   const rotateX = -dy * 180;

  //   if (container.style.display !== "none") {
  //     cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //     idleRotationX = rotateX;
  //     idleRotationY = rotateY;
  //   }

  //   mouseTimeout = setTimeout(() => {
  //     isMouseMoving = false;
  //   }, 200);
  //   // Event untuk PC (Mouse)
  //   document.addEventListener("mousemove", (e) => {
  //     handleRotation(e.clientX, e.clientY);
  //   });

  //   // Event untuk HP (Touch)
  //   document.addEventListener(
  //     "touchmove",
  //     (e) => {
  //       // Ambil koordinat dari sentuhan jari pertama
  //       handleRotation(e.touches[0].clientX, e.touches[0].clientY);
  //     },
  //     { passive: true },
  //   );
  // });

  // --- 3. ROTASI MOUSE & TOUCH (MOBILE) ---
  function handleRotation(clientX, clientY) {
    if (animationTriggered) return;

    isMouseMoving = true;
    clearTimeout(mouseTimeout);

    const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const dy = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    const rotateY = dx * 180;
    const rotateX = -dy * 180;

    if (container.style.display !== "none") {
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      idleRotationX = rotateX;
      idleRotationY = rotateY;
    }

    mouseTimeout = setTimeout(() => {
      isMouseMoving = false;
    }, 200);
  }

  // Event untuk PC (Mouse)
  document.addEventListener("mousemove", (e) => {
    handleRotation(e.clientX, e.clientY);
  });

  // Event untuk HP (Touch)
  document.addEventListener(
    "touchmove",
    (e) => {
      handleRotation(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true },
  );

  // --- 4. ANIMASI CINEMATIC HOLLOW PURPLE DENGAN AUDIO SYNC ---
  cube.addEventListener("click", () => {
    if (animationTriggered) return;
    animationTriggered = true;

    // Putar Audio TEPAT saat diklik!
    gojoAudio.play();

    // A. KUBUS PECAH (T = 0s)
    const faces = document.querySelectorAll(".cube-face");
    requestAnimationFrame(() => {
      faces.forEach((face) => {
        const randomX = (Math.random() - 0.5) * 2500;
        const randomY = (Math.random() - 0.5) * 2500;
        const randomZ = (Math.random() - 0.5) * 2500;
        face.style.opacity = "0.5";
        face.style.transform = `translate3d(${randomX}px, ${randomY}px, ${randomZ}px) rotateX(${Math.random() * 1080}deg) rotateY(${Math.random() * 1080}deg)`;
      });
    });

    const blueOrb = document.getElementById("blue-orb");
    const redOrb = document.getElementById("red-orb");
    const purpleOrb = document.getElementById("purple-orb");
    const flash = document.getElementById("flash-screen");
    const handBg = document.getElementById("hand-background");
    const vignette = document.getElementById("vignette-overlay");

    // Sembunyikan sisa container kubus
    setTimeout(() => {
      container.style.display = "none";
    }, 500);

    // T = 3000ms (Detik ke-3): MUNCULKAN BIRU
    setTimeout(() => {
      blueOrb.style.opacity = "1";
      blueOrb.style.transform = "scale(1)";
    }, 2500);

    // T = 6000ms (3 detik kemudian / Detik ke-6): MUNCULKAN MERAH
    setTimeout(() => {
      redOrb.style.opacity = "1";
      redOrb.style.transform = "scale(1)";
    }, 5500);

    // T = 12000ms (Detik ke-12): PROSES PEMBENTUKAN (Tarik ke tengah)
    setTimeout(() => {
      blueOrb.style.right = "calc(50% - 40px)";
      redOrb.style.left = "calc(50% - 40px)";
    }, 12000);

    // T = 15000ms (Detik ke-15): JADI UNGU + MUNCUL TANGAN
    setTimeout(() => {
      blueOrb.style.opacity = "0";
      redOrb.style.opacity = "0";

      purpleOrb.style.opacity = "1";
      purpleOrb.style.transform = "scale(1.5)";

      handBg.style.opacity = "1";
      vignette.style.opacity = "1";

      setTimeout(() => {
        vignette.classList.add("expand");
      }, 100);
    }, 15000);

    // T = 17000ms (Detik ke-17): MELEDAK
    setTimeout(() => {
      purpleOrb.style.transition = "all 0.3s ease-in";
      purpleOrb.style.transform = "scale(40)";
      purpleOrb.style.opacity = "0";
      flash.style.opacity = "1";

      // Hapus tangan dan vignette bersamaan dengan ledakan putih
      handBg.style.opacity = "0";
      vignette.style.opacity = "0";
    }, 17000);

    // T = 18000ms (Detik ke-18): MUNCUL KARTU ULANG TAHUN
    setTimeout(() => {
      flash.style.opacity = "0";

      // Munculkan Kartu Birthday Charlize
      card.classList.remove("hidden");
      setTimeout(() => {
        card.classList.add("visible");

        // --- TAMBAHAN BARU BOS: ANIMASI GONTA-GANTI GAMBAR GOJO ---
        const gojoCardImg = document.querySelector(".card-image img"); // Ambil elemen gambar Gojo
        const gojoImages = [
          "gojo1.jpg",
          "gojo2.jpg",
          "gojo3.jpg",
          "gojo4.jpg",
          "gojo5.jpg",
        ]; // Daftar file gambar kamu
        let currentGojoIndex = 0;

        // Fungsi untuk mengganti gambar dengan efek pudar
        function changeGojoImage() {
          // Pertama, buat gambar pudar dulu (opacity 0)
          gojoCardImg.style.transition = "opacity 0.5s ease";
          gojoCardImg.style.opacity = "0";

          // Tunggu sebentar (0.5s) sampai benar-benar pudar
          setTimeout(() => {
            currentGojoIndex = (currentGojoIndex + 1) % gojoImages.length; // Hitung index gambar berikutnya
            gojoCardImg.src = gojoImages[currentGojoIndex]; // Ganti sumber gambar

            // Setelah gambar diganti, buat gambar muncul kembali (opacity 1)
            gojoCardImg.style.opacity = "1";
          }, 500); // 500ms = 0.5s
        }

        // Jalankan fungsi ganti gambar setiap 3 detik (3000ms)
        setInterval(changeGojoImage, 2000); // Beri jeda total 3.5s agar efek pudarnya terasa

        // MULAI MUSIK BARU DI SINI
        bgMusic.play().catch((error) => {
          console.log(
            "Autoplay dicegah oleh browser, tapi karena ini hasil klik harusnya aman.",
          );
        });
      }, 100);
    }, 18000);
  });
});

// --- Tambahkan ini di bagian paling bawah script.js mu ---
const limitlessBtn = document.querySelector(".limitless-btn");

limitlessBtn.addEventListener("click", () => {
  // Membuka link Instagram di tab baru
  window.open(
    "https://www.instagram.com/klippyi.all?igsh=MjN3OWo4MDRic3Yz",
    "_blank",
  );
});
