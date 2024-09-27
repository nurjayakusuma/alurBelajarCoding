function Mhs(nama, uang) {
    this.nama = nama;
    this.uang = uang;
}

Mhs.prototype.gaji = function(kerja) {
    this.uang += kerja;
}
Mhs.prototype.jajan = function(harga) {
    this.uang -= harga;
console.log('Hallo ' + this.nama + ' selamat mengentot, dan sisa uang anda : ' + this.uang);
}
let masnur = new Mhs('Masnur', 10);
