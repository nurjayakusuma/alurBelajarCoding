// var Angkot = function (sopir, penumpang, kas) {
//     this.sopir = sopir;
//     this.penumpang = penumpang;
//     this.kas = kas;

//     this.penumpangNaik = function (namaPenumpang) {
//         for (var i =0; i <= this.penumpang.length; i++) {

//             if (this.penumpang[i] == namaPenumpang) {
//                 console.log (namaPenumpang + ' sudah ada !');
//             return this.penumpang;
//             }
//         }

//         for (var i =0; i <= this.penumpang.length; i++) {
//             if (this.penumpang[i] == undefined) {
//                 this.penumpang[i] = namaPenumpang;
//             return this.penumpang;
//             }

//             else if (i == this.penumpang.length) {
//                 this.penumpang.push (namaPenumpang);
//             return this.penumpang;
//             }
//         }
//     }

//     this.penumpangTurun = function (namaPenumpang, bayar) {

//         for (var i = 0; i <= this.penumpang.length; i++) {
//             if (this.penumpang[i] == namaPenumpang) {
//                 this.penumpang[i] = undefined;
//                 this.kas += bayar;
//             return this.penumpang;
//             } 

//             else if (i == this.penumpang.length -1) {
//                 console.log (namaPenumpang + ' tidak ada !')
//             return this.penumpang;
//             }

//             else if (this.penumpang.length == 0) {
//                 console.log ('belum ada penumpang !')
//             return this.penumpang;
//             }
//         }
//     }

// }

// var angkot01 = new Angkot ('Marko', [], 0);
// var angkot02 = new Angkot ('saipul', [], 0);


// mengolah data angkot!

    let daftarAngkot = [];

    function cariAngkot(namaAngkot) {
        for(let i = 0; i < daftarAngkot.length; i++) {
            if(daftarAngkot[i].namaAngkot == namaAngkot) {
                return daftarAngkot[i];
            };
        };
    };

    function tambahAngkot(namaAngkot, sopir) {
        let angkotdata = {
            namaAngkot: namaAngkot,
            sopir: sopir,
            penumpang: [],
            kas: 0,

            tambahPenumpang: function(namaPenumpang) {
                for(let i = 0; i < this.penumpang.length; i++) {
                    if(this.penumpang[i] == namaPenumpang) {
                        console.log(`penumpang dengan nama ${namaPenumpang} sudah terdaftar!`);
                    return this.penumpang;
                    };
                };
                this.penumpang.push(namaPenumpang);
                console.log(`penumpang dengan nama ${namaPenumpang} berhasil ditambahkan!`)
            return this.penumpang;
            },

            hapusPenumpang: function(namaPenumpang, uang) {
                for(let i = 0; i < this.penumpang.length; i++) {
                    if(this.penumpang[i] == namaPenumpang) {
                        this.penumpang.splice(i, 1);
                        this.kas += uang;
                        console.log(`penumpang dengan nama ${namaPenumpang} berhasil dihapus! dengan uang = ${uang}`);
                    return this.penumpang;
                    };
                };
            }
        };

        for( let i = 0; i < daftarAngkot.length; i++) {
            if(daftarAngkot[i].namaAngkot == namaAngkot) {
                console.log(`angkot dengan nama ${namaAngkot} sudah terdaftar!`);
            return daftarAngkot;
            };
        };

        daftarAngkot.push(angkotdata);
    return daftarAngkot;
    };

    function hapusAngkot(namaAngkot) {
        if(daftarAngkot.length == 0) {
            console.log(`belum ada angkot yang terdaftar!`);
        return daftarAngkot;
        };

        for(let i = 0; i < daftarAngkot.length; i++) {
            if(daftarAngkot[i].namaAngkot == namaAngkot) {
                daftarAngkot.splice(i, 1);
                console.log(`angkot dengan nama ${namaAngkot} berhasil dihapus!`);
            return daftarAngkot;
            };
        };
    };
    