var kesempatan = 3;
var benar = false;
var comp;

while (kesempatan > 0) {
  var p = prompt("Masukan angka dari 1 sampai 10");

  if (p < 1 || p > 10) {
    alert("Masukkan angka antara 1 dan 10 saja!");
    continue;
  } else {
    if (!comp) {
      comp = Math.floor(Math.random() * 10) + 1;
      console.log(comp);
    }

    if (p == comp) {
      alert("Tebakanmu benar coyy");
      benar = true;
      break;
    } else if (p < comp) {
      alert("Kurang gede Boss");
    } else if (p > comp) {
      alert("Kegeden Boss");
    }
  }

  kesempatan--;
}

if (!benar) {
  alert("Kesempatan sudah habis. Tebakanmu salah. Angka yang benar adalah " + comp);
}
