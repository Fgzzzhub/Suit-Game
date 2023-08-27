var tanya = true;
while (tanya) {
  // Menangkap pilihan player
  var p = prompt("Selamat datang di GKB yaitu gunting kertas batu \nmasukan gunting, kertas atau batu.");
  // Menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "kertas";
  } else {
    comp = "batu";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri boss";
  } else if (p == "gunting") {
    //     if (comp == "kertas") {
    //         hasil = "Menang"
    //     } else {
    //         hasil = "Kalah";
    hasil = comp == "kertas" ? "Menang" : "Kalah";
  } else if (p == "kertas") {
    hasil = comp == "batu" ? "Menang" : "Kalah";
  } else if (p == "batu") {
    hasil = comp == "gunting" ? "Menang" : "Kalah";
  } else {
    hasil = "Pilihanmu salah BLOKKK!!";
  }
  // tampilkan hasilnya
  alert("Kamu memilih " + p + " dan komputer memilih " + comp + "\nMaka hasiilnya kamu: " + hasil);

  tanya = confirm("Maww lagi??");
}

alert("Suwun wis manut karo nyong hehe :)");
