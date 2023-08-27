// Generate angka acak antara 1 dan 10
var angkaAcak = Math.floor(Math.random() * 10) + 1;

// Mengatur jumlah tebakan yang tersisa
var sisaTebakan = 3;

// Fungsi untuk memproses tebakan
function tebakAngka() {
  // Mendapatkan nilai yang diinput oleh pengguna
  var tebakan = parseInt(document.getElementById("tebakan").value);

  // Memeriksa apakah angka yang diinput valid
  if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
    document.getElementById("hasil").innerHTML = "Masukkan angka antara 1 dan 10.";
    return;
  }

  // Mengurangi jumlah tebakan yang tersisa
  sisaTebakan--;

  // Memeriksa apakah angka yang ditebak benar
  if (tebakan === angkaAcak) {
    document.getElementById("hasil").innerHTML = "Selamat, Anda berhasil menebak angka yang benar!";
    document.getElementById("mulai-lagi").style.display = "block"; // menampilkan tombol "mulai lagi"
  } else if (sisaTebakan === 0) {
    document.getElementById("hasil").innerHTML = "Sayang sekali, Anda gagal menebak angka yang benar. Angka yang benar adalah " + angkaAcak + ".";
    document.getElementById("mulai-lagi").style.display = "block"; // menampilkan tombol "mulai lagi"
  } else {
    document.getElementById("hasil").innerHTML = "Tebakan Anda terlalu " + (tebakan < angkaAcak ? "rendah" : "tinggi") + ". Coba lagi!";
  }

  // Menampilkan jumlah tebakan yang tersisa
  document.getElementById("sisa-tebakan").innerHTML = "Sisa Tebakan: " + sisaTebakan;
}

// Fungsi untuk memulai game lagi
function mulaiLagi() {
  // Mengatur ulang angka acak dan jumlah tebakan yang tersisa
  angkaAcak = Math.floor(Math.random() * 10) + 1;
  sisaTebakan = 3;

  // Mengatur ulang tampilan HTML
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("sisa-tebakan").innerHTML = "Sisa Tebakan: " + sisaTebakan;
  document.getElementById("mulai-lagi").style.display = "none";
  document.getElementById("tebakan").value = "";
}
