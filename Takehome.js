console.log('===============================');
console.log('Tugas - Take Home Task - Object');
console.log('===============================');

// Objek 1
const mobil1 = {
  merk: "Toyota",
  tipe: "Avanza",
  harga: 200000000,
  tahun: 2020,
  detail: { warna: "Putih", mesin: "1500cc" },
  aksesoris: ["Sensor parkir", "Sunroof", "Kamera belakang"],
};

// Objek 2
const buku1 = {
  judul: "Harry Potter and the Philosopher's Stone",
  penulis: "J.K. Rowling",
  harga: 100000,
  halaman: 223,
  detail: { penerbit: "Bloomsbury", tahun_terbit: 1997 },
  review: ["Sangat seru!", "Buku ini bisa dibaca berulang-ulang"],
};

// Objek 3
const laptop1 = {
  merk: "Asus",
  tipe: "Zenbook",
  harga: 15000000,
  ukuran_layar: 14,
  detail: { prosesor: "Intel Core i7", ram: "16GB" },
  warna: ["zenbook hitam", "zenbook merah"],
};

// Objek 4
const makanan1 = {
  nama: "Nasi Goreng",
  jenis: "Makanan Berat",
  harga: 30000,
  kalori: 500,
  detail: { bahan: ["nasi", "telur", "daging ayam", "bumbu rempah"] },
  review: ["Enak!", "Porsinya cukup banyak"],
};

// Objek 5
const handphone1 = {
  merk: "Samsung",
  tipe: "Galaxy S21",
  harga: 12000000,
  ukuran_layar: 6.2,
  detail: { kamera: "108MP", storage: "128GB" },
  warna: ["s21_gold", "s21_black"],
};
console.log("Hasil Output Mobil :");
console.log(mobil1); // Output
console.log("==============================================================");
console.log("Hasil Output Buku :");
console.log(buku1); // Output
console.log(
  "==================================================================="
);
console.log("Hasil Output Laptop :");
console.log(laptop1); // Output
console.log("=============================================");
console.log("Hasil Output Makanan :");
console.log(makanan1); // Output
console.log(
  "======================================================================="
);
console.log("Hasil Output Handphone :");
console.log(handphone1); // Output
console.log("================================================");
console.log("Mengakses properti dari objek :");
console.log("Merek :", mobil1.merk); // Mengakses properti dari objek
console.log("Harga Buku :", buku1.harga); // Mengakses properti dari objek
console.log("Warna Laptop :", laptop1.warna[0]); // Mengakses properti dari objek
console.log("============================");
console.log("Mengakses isi dari properti objek :");
console.log("Bahan Makanan :", makanan1.detail.bahan[0]); // Mengakses isi dari properti objek
console.log("============================");
console.log("Mengakses isi dari properti array pada objek :");
console.log("Warna Handphone :", handphone1.warna[1]); // Mengakses isi dari properti array pada objek
console.log("============================");
// Objek perhitunganMatematika
const perhitunganMatematika = {
  tambah: function (a, b) {
    return a + b;
  },
  kurang: function (a, b) {
    return a - b;
  },
  kali: function (a, b) {
    return a * b;
  },
  bagi: function (a, b) {
    return a / b;
  },
  pangkat: function (a, b) {
    return a**b;
  },
  modulus: function (a, b) {
    return a % b;
  },
};

// Contoh penggunaan fungsi dalam objek perhitunganMatematika
console.log("Hasil :", perhitunganMatematika.tambah(5, 3)); // Output: 8
console.log("Hasil :", perhitunganMatematika.kurang(5, 3)); // Output: 2
console.log("Hasil :", perhitunganMatematika.kali(5, 3)); // Output: 15
console.log("Hasil :", perhitunganMatematika.bagi(5, 3)); // Output: 1.6666666666666667
console.log("Hasil :", perhitunganMatematika.pangkat(5, 3)); // Output: 125
console.log("Hasil :", perhitunganMatematika.modulus(5, 3)); // Output: 2
