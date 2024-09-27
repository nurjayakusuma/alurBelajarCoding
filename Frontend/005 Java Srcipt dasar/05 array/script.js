// var Mhs = [];

// var tambahData = function (namaMhs) {
//     for (var i = 0; i <= Mhs.length; i++) {
//         if (Mhs[i] == namaMhs) {
//             console.log (namaMhs + ' sudah terdaftar !');

//         return Mhs;
//         }
//     }

//     for (var i = 0; i <= Mhs.length; i++) {
//         if (Mhs[i] == undefined) {
//             Mhs[i] = namaMhs;

//         return Mhs;
//         }

//         else if (Mhs[i] <= Mhs.length) {
//             Mhs.push (namaMhs);

//         return Mhs;
//         }
//     }
// }


// var hapusData = function (namaMhs) {
//     for (var i = 0; i <= Mhs.length; i++) {
//         if (i == Mhs.length) {
//             console.log ('Belum ada data !')

//         return Mhs;
//         }

//         else if (Mhs[i] == namaMhs) {
//             Mhs[i] = undefined;

//         return Mhs;
//         }

//         else if (i == Mhs.length -1) {
//             console.log ('Data tidak ditemukan !');

//         return Mhs;
//         }
//     }
// }



var penumpang = [];

var tambahPenumpang = function (namaPenumpang) {

    for (var i = 0; i <= penumpang.length; i++) {
        
        if (penumpang[i] == namaPenumpang) {

            console.log (namaPenumpang + ' sudah terdaftar !');

            return penumpang;
        }
    }

    for (var i = 0; i <= penumpang.length; i++) {

        if  (penumpang[i] == undefined) {

            penumpang[i] = namaPenumpang;

            return penumpang;
        }

        else if (i == penumpang.length) {

            penumpang.push (namaPenumpang);

            return penumpang;
        }
    }
}

var hapusPenumpang = function (namaPenumpang) {

    for (var i = 0; i <= penumpang.length; i++) {

        if (i == penumpang.length) {

            console.log ('Belum ada penumpang !');
    
            return penumpang;
        }

        else if (penumpang[i] == namaPenumpang) {

            penumpang[i] = undefined;

            return penumpang;
        }
        
        else if (i == penumpang.length -1) {
            console.log (namaPenumpang + ' tidak ada !');

            return penumpang;
        }
    }
    
    return penumpang;
}
