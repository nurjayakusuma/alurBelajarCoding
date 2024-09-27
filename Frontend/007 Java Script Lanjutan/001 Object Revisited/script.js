// ############################################### object literal #####################################################################

// let Mahasiswa = {
//     nama : 'Masnur',
//     energy : 10,
//     makan : function (porsi) {
//         Mahasiswa.energy += porsi;
//         console.log(`hallo ${this.nama} selamat makan`)
//     }
// }

// ############################################### object declaration #####################################################################


// function Mahasiswa (nama, energy) {
//     let mhs = {};

//     mhs.nama = nama;
//     mhs.energy = energy;
//     mhs.makan = function(porsi) {
//         mhs.energy += porsi;
//         console.log (`hallo ${this.nama} selamat makan!`)
//     }

//     mhs.main = function(jam) {
//         this.energy -= jam;
//         console.log(`hallo ${this.nama} selamat bermain!`)
//     }
// return mhs;
// }

// let masnur = Mahasiswa ('masnur', 10);

// ############################################### object keyword new #####################################################################


// const methodMhs = {
//     kerja: function(porsi) {
//         this.uang += porsi;
//     console.log ('Hallo ' + this.nama + ' selamat kerja, total Uang : ' + this.uang);
//     },

//     main: function(main) {
//         this.uang -= main;
//     console.log ('Hallo ' + this.nama + ' selamat Ngentot, total Uang : ' + this.uang)
//     },

//     tidur: function(jam) {
//         this.uang += jam * 2;
//     console.log(`hallo ${this.nama} selamat uang anda di x 2`)
//     }
// };

// function Mhs (nama, Uang) {
//     this.nama = nama;
//     this.uang = Uang;
//     this.kerja = methodMhs.kerja;
//     this.main = methodMhs.main;
//     this.tidur = methodMhs.tidur;
// }

// let masnur = new Mhs('masnur', 10);

// ############################################### object dot create #####################################################################

// const methodMhs = {
//     kerja: function(porsi) {
//         this.uang += porsi;
//     console.log ('Hallo ' + this.nama + ' selamat kerja, total Uang : ' + this.uang);
//     },

//     main: function(main) {
//         this.uang -= main;
//     console.log ('Hallo ' + this.nama + ' selamat Ngentot, total Uang : ' + this.uang)
//     },

//     tidur: function(jam) {
//         this.uang += jam * 2;
//     console.log(`hallo ${this.nama} selamat uang anda di x 2`)
//     }
// };

// function Mhs (nama, Uang) {
//     let mahasiswa = Object.create(methodMhs);
//     mahasiswa.nama = nama;
//     mahasiswa.uang = Uang;

// return mahasiswa;
// }

// let masnur = new Mhs('masnur', 10);


// ############################################### object prototype #####################################################################



// function Mhs (nama, Uang) {
//     this.nama = nama;
//     this.uang = Uang;
// }

// Mhs.prototype.kerja = function(jam) {
//     this.uang += jam;
// return(`hallo ${this.nama} semangat bekerja!, sisa uang kamu ${this.uang}`)
// }

// Mhs.prototype.main = function(jam) {
//     this.uang -= jam;
// return(`hallo ${this.nama} selamat menghabiskan uang!, sisa uang kamu ${this.uang}`)
// }

// Mhs.prototype.tidur = function(jam) {
//     this.uang += jam * 10;
// return(`hallo ${this.nama} selamat tertidur & sisa uang kamu ${this.uang}`)
// }

// let masnur = new Mhs('masnur', 10);


// ############################################### versi class #####################################################################


// class Mhs {
//     constructor(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }

// makan(porsi) {
//     this.energy += porsi;
// return (`hallo ${this.nama} selamat makan, sisa energy kamu adalah ${this.energy}`)
// }
// }

// let masnur = new Mhs(`masnur`, 10);
