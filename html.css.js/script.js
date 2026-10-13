console.log("Halo, JavaScript!");
const hewan = "Elang";
console.log("Hewan favoritku: " + hewan);

const umur = 5;
console.log("Hewan favoritku " + hewan + ", umurnya " + umur + " tahun ");

//BAGIAN B

const kontak = document.querySelector("#kontak h2");
kontak.textContent = "Hubungi Kami";

let favorit = prompt("Apa hewan favoritmu?");
alert("Hewan favoritmu: " + favorit + "!");


const judul = document.querySelector("#judul h1");
console.log(judul.textContent);
judul.textContent = "Mengenal Hewan Nusantara";


// =========================
// MODE GELAP / MODE TERANG
// =========================

const tombolGelap = document.getElementById("tombol-gelap");

tombolGelap.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
        tombolGelap.textContent = "☀️ Mode Terang";
    } else {
        tombolGelap.textContent = "🌙 Mode Gelap";
    }
    
});


// =========================
// TOMBOL SUKA
// =========================

const tombolSuka = document.querySelectorAll(".btn-suka");

tombolSuka.forEach(function (tombol) {
    tombol.addEventListener("click", function () {

        // Mencari jumlah suka pada artikel yang sama
        const jumlahSuka = tombol.parentElement.querySelector(".jumlah-suka");

        // Mengambil angka
        let jumlah = parseInt(jumlahSuka.textContent);

        // Menambah 1
        jumlah++;

        // Menampilkan angka baru
        jumlahSuka.textContent = jumlah;
    });
});


// =========================
// BACA SELENGKAPNYA
// =========================

const tombolBaca = document.querySelectorAll(".btn-baca");

tombolBaca.forEach(function (tombol) {

    tombol.addEventListener("click", function () {

        // Mencari artikel tempat tombol berada
        const artikel = tombol.closest(".kartu");

        // Mencari teks selengkapnya
        const teks = artikel.querySelector(".selengkapnya");

        // Menampilkan / menyembunyikan teks
        teks.classList.toggle("sembunyi");

        // Mengubah tulisan tombol
        if (teks.classList.contains("sembunyi")) {
            tombol.textContent = "Baca selengkapnya";
        } else {
            tombol.textContent = "Sembunyikan";
        }
    });

});


// =========================
// PENCARIAN HEWAN
// =========================

const kotakCari = document.getElementById("cari");
const kartuHewan = document.querySelectorAll(".kartu");

kotakCari.addEventListener("input", function () {

    const kataKunci = kotakCari.value.toLowerCase();

    kartuHewan.forEach(function (kartu) {

        const namaHewan = kartu.textContent.toLowerCase();

        if (namaHewan.includes(kataKunci)) {
            kartu.style.display = "block";
        } else {
            kartu.style.display = "none";
        }

    });

  // Lanjutkan sendiri: fitur Baca selengkapnya untuk setiap kartu.
  // Tiru pola di atas: ambil tombolBaca dan teksLengkap dari "kartu",
  // lalu pasang event klik yang isinya sama seperti bukaTutup.

});




// const judul =
//   document.getElementById('judul');
// judul.style.backgroundColor = 'teal';

// const judul = document.getElementById('judul');
// judul.style.backgroundColor = 'teal';

// const Kartu =
//   document.getElementsByTagName('article');
// for (let i = 0; i < kartu.length; i++) {
//   kartu[i].style.border = '3px solid teal';
// }

// const kartu = document.getElementsByTagName('article');
// kartu[0].style.border = '3px solid teal';
// kartu[1].style.border = '3px solid teal';

// const baca =
//   document.getElementsByClassName('btn-baca');
// baca[0].style.backgroundColor = 'orange';

// const baca = document.getElementsByClassName('btn-baca');
// baca[0].style.backgroundColor = 'orange';

// const judulKartu =
//   document.getElementById('jenis')
//     .getElementsByTagName('h3')[0];
// judulKartu.style.color = 'crimson';

// document.querySelector('#judul h1');
// document.querySelector('.btn-suka');
// document.querySelector('#jenis article p');

// const suka = document.querySelector('.btn-suka');
// suka.style.backgroundColor = 'crimson';

// const suka =
//   document.querySelectorAll('.btn-suka');
// suka.forEach(t => {
//   t.style.backgroundColor = 'crimson';
// });

// const suka = document.querySelectorAll('.btn-suka');
// suka.forEach(t => t.style.backgroundColor = 'crimson');
