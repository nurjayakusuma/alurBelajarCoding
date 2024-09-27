// const method = {
//     gaji : function(kerja) {
//         this.uang += kerja;
//     }
// }

// function Mhs (nama, uang) {
// let mhs = {};
//     mhs.nama = nama;
//     mhs.uang = uang;
//     mhs.gaji = method.gaji;
// return mhs;
// }

// let masnur = new ('masnur', 10);


const method = {
    gaji : function(kerja) {
        this.uang += kerja;
    }
}

function Mhs(nama, uang) {
let mhs = Object.create(method);
    mhs.nama = nama;
    mhs.uang = uang;
return mhs;
}

let masnur = Mhs('masnur', 10);