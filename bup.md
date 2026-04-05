/_ --- RESET & DASAR --- _/

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /_ Perbaikan typo: box-box-sizing _/
  }

body {
background: #0d1117; /_ Biru gelap hampir hitam _/
color: white;
font-family: "Inter", sans-serif;
overflow: hidden; /_ Mencegah scrollbar _/
}

/_ --- TEMA GOJO SATORU --- _/
.gojo-theme {
background: radial-gradient(
circle,
rgba(16, 21, 30, 1) 0%,
rgba(13, 17, 23, 1) 70%
);
}

.background-overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: radial-gradient(
circle at 50% 50%,
rgba(65, 105, 225, 0.05),
transparent 80%
);
pointer-events: none;
z-index: 1;
}

.main-container {
position: relative;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
}

/_ --- KUBUS INTERAKTIF 3D (PRISON REALM) --- _/
#cube-container {
perspective: 1000px;
width: 200px;
height: 200px;
z-index: 100;
cursor: pointer;
}

#cube {
width: 100%;
height: 100%;
position: relative;
transform-style: preserve-3d;
transition: transform 0.1s ease-out;
pointer-events: auto;
}

.cube-face {
position: absolute;
width: 200px;
height: 200px;
border: 2px solid #a6d0ff;
background-size: cover;
background-position: center;
box-shadow:
inset 0 0 20px rgba(88, 166, 255, 0.5),
0 0 15px rgba(88, 166, 255, 0.3);
pointer-events: none;
/_ Animasi mulus saat meledak _/
transition:
transform 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67),
opacity 1s ease-out;
will-change: transform, opacity;
}

/_ Koordinat kubus _/
.front {
transform: rotateY(0deg) translateZ(100px);
}
.back {
transform: rotateY(180deg) translateZ(100px);
}
.right {
transform: rotateY(90deg) translateZ(100px);
}
.left {
transform: rotateY(-90deg) translateZ(100px);
}
.top {
transform: rotateX(90deg) translateZ(100px);
}
.bottom {
transform: rotateX(-90deg) translateZ(100px);
}

/_ --- KARTU ULANG TAHUN --- _/
.birthday-card {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0.9);
background: rgba(13, 17, 23, 0.95);
border: 3px solid #58a6ff;
padding: 40px;
border-radius: 20px;
text-align: center;
box-shadow: 0 0 20px rgba(88, 166, 255, 0.8);
transition: all 0.8s ease;
opacity: 0;
pointer-events: none;
z-index: 10;
width: 80%;
max-width: 600px;
}

.birthday-card.visible {
opacity: 1;
pointer-events: auto;
transform: translate(-50%, -50%) scale(1);
}

.birthday-card.hidden {
display: none;
}

.birthday-card h1 {
font-family: "Anton", sans-serif;
font-size: 3rem;
color: white;
margin-bottom: 10px;
}

.birthday-card h2,
.birthday-card h3 {
color: #58a6ff;
margin-bottom: 5px;
}

.p-limit {
font-style: italic;
color: #c9d1d9;
}

.message-box {
margin: 30px 0;
line-height: 1.6;
color: white;
font-size: 1.1rem;
}

.limitless-btn {
background-color: transparent;
border: 2px solid #58a6ff;
color: #58a6ff;
padding: 15px 30px;
font-family: "Inter", sans-serif;
font-size: 18px;
font-weight: bold;
text-transform: uppercase;
border-radius: 10px;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 0 10px rgba(88, 166, 255, 0.5);
}

.limitless-btn:hover {
background-color: #58a6ff;
color: #0d1117;
box-shadow: 0 0 30px rgba(88, 166, 255, 1);
}

/_ --- ANIMASI HOLLOW PURPLE --- _/
#hollow-purple-container {
position: absolute;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 50;
display: flex;
justify-content: center;
align-items: center;
}

.orb {
position: absolute;
border-radius: 50%;
opacity: 0;
transform: scale(0);
transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/_ --- PERBAIKAN POSISI AWAL BOLA BOS --- _/
#blue-orb {
width: 80px;
height: 80px;
background: #0088ff;
box-shadow:
0 0 40px #0088ff,
0 0 80px #0088ff;
right: 20%; /_ Mulai dari KANAN _/
}

#red-orb {
width: 80px;
height: 80px;
background: #ff0000;
box-shadow:
0 0 40px #ff0000,
0 0 80px #ff0000;
left: 20%; /_ Mulai dari KIRI _/
}

#purple-orb {
width: 120px;
height: 120px;
background: #8a2be2;
box-shadow:
0 0 80px #8a2be2,
0 0 150px #8a2be2,
inset 0 0 40px #fff;
z-index: 51;
}

#flash-screen {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: white;
opacity: 0;
z-index: 99;
pointer-events: none;
transition: opacity 0.4s ease;
}

/_ --- TAMBAHAN BARU BOS: CSS UNTUK TANGAN & VIGNETTE DINAMIS --- _/
#hand-background {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
/_ JANGAN LUPA TARUH FILE hand.jpg DI FOLDER YANG SAMA BOS _/
background-image: url("hand.jpg");
background-size: cover;
background-position: center;
opacity: 0; /_ Sembunyi dulu _/
z-index: 40; /_ Di belakang bola (50), di depan void (1) _/
pointer-events: none;
transition: opacity 1s ease; /_ Muncul pelan-pelan _/
}

#vignette-overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: black;
opacity: 0; /_ Sembunyi dulu _/
z-index: 41; /_ Di depan gambar tangan _/
pointer-events: none;
overflow: hidden;
transition: opacity 1s ease; /_ Muncul pelan-pelan _/
}

/_ Pseudo-element untuk membuat lubang Vignette yang bisa melebar _/
#vignette-overlay::after {
content: "";
position: absolute;
top: 50%;
left: 50%;
/_ Ukuran raksasa untuk menutupi layar _/
width: 250vw;
height: 250vw;
border-radius: 50%;
/_ Gradasi: Tengah transparan, pinggir hitam pekat _/
background: radial-gradient(
circle,
transparent 10%,
rgba(0, 0, 0, 0.9) 30%,
black 100%
);

/_ PENTING: Mulai dari skala 0 (artinya lubang transparan super kecil = layar full hitam) _/
transform: translate(-50%, -50%) scale(0);

/_ Animasi pelebaran Vignette _/
transition: transform 2s ease-out;
will-change: transform;
}

/_ Class ini akan ditambahkan lewat JS untuk melebarkan Vignette _/
#vignette-overlay.expand::after {
/_ Skala 1: Lubang transparan membesar, menyisakan vignette di sudut _/
transform: translate(-50%, -50%) scale(1);
}
