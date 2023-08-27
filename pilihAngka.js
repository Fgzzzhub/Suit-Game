var p = prompt("Masukan angka dari 1 sampai 10");

if (p < 1 || p > 10) {
  alert("Masukkan angka antara 1 dan 10 saja!");
} else {
  var comp = Math.random();

  if (comp >= 0 && comp < 0.1) {
    comp = 1;
  } else if (comp >= 0.1 && comp < 0.2) {
    comp = 2;
  } else if (comp >= 0.2 && comp < 0.3) {
    comp = 3;
  } else if (comp >= 0.3 && comp < 0.4) {
    comp = 4;
  } else if (comp >= 0.4 && comp < 0.5) {
    comp = 5;
  } else if (comp >= 0.5 && comp < 0.6) {
    comp = 6;
  } else if (comp >= 0.6 && comp < 0.7) {
    comp = 7;
  } else if (comp >= 0.7 && comp < 0.8) {
    comp = 8;
  } else if (comp >= 0.8 && comp < 0.9) {
    comp = 9;
  } else if (comp >= 0.9 && comp < 1) {
    comp = 10;
  }

  console.log(comp);

  var hasil = "";

  if (p == comp) {
    alert("Tebakanmu benar coyy");
  } else if (p == 1) {
    alert("Kurang Gede Boss");
  } else if (p == 2) {
    if (comp < 2) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 3) {
    if (comp < 3) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 4) {
    if (comp < 4) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 5) {
    if (comp < 5) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 6) {
    if (comp < 6) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 7) {
    if (comp < 7) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 8) {
    if (comp < 8) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 9) {
    if (comp < 9) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  } else if (p == 10) {
    if (comp < 10) {
      alert("Kegeden Boss");
    } else {
      alert("Kurang gede bosquu");
    }
  }
}
