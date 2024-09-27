var tanya = confirm ('SELAMAT DATANG DI GAME TEBAK ANGKA \nTEBAK ANGKA 1 - 10 \nANDA HANYA MEMILIKI 3 KESEMPATAN !')

while (tanya == true) {

    var me = prompt ('Silahkan masukan pilihan anda');

    var comp = Math.random ();
    console.log (comp);
    if (comp <= 0.19) {
        comp = '1';
    } else if (comp <= 0.29 && comp > 0.19) {
        comp = '2';
    } else if (comp <= 0.39 && comp > 0.29) {
        comp = '3';
    } else if (comp <= 0.49 && comp > 0.39) {
        comp = '4';
    } else if (comp <= 0.59 && comp > 0.49) {
        comp = '5';
    } else if (comp <= 0.69 && comp > 0.59) {
        comp = '6';
    } else if (comp <= 0.79 && comp > 0.69) {
        comp = '7';
    } else if (comp <= 0.89 && comp > 0.79) {
        comp = '8';
    } else if (comp <= 0.99 && comp > 0.89) {
        comp = '9';
    } else {
        comp = '10';
    }

    var hasil = '';

    if (me == comp) {
        hasil = 'KAMU BENAR !!';
        alert(hasil);
    } else {

        if (me < comp){
            hasil = 'KAMU SALAH !!';
            alert(hasil);
            me = prompt ('SISA 2 KESEMPATAN LAGI ! \nJAWABAN > ' + me);
        } else {
            hasil = 'KAMU SALAH !!';
            alert(hasil);
            me = prompt ('SISA 2 KESEMPATAN LAGI ! \nJAWABAN < ' + me);
        }

        if (me == comp) {
            hasil = 'KAMU BENAR !';
            alert(hasil);
        } else {
            if (me < comp){
                hasil = 'KAMU SALAH !!';
                alert(hasil);
                me = prompt ('SISA 1 KESEMPATAN LAGI ! \nJAWABAN > ' + me);
            } else {
                hasil = 'KAMU SALAH !!';
                alert(hasil);
                me = prompt ('SISA 1 KESEMPATAN LAGI ! \nJAWABAN < ' + me);
            } 

            if (me == comp) {
                hasil = 'KAMU BENAR ! ANJAY !';
                alert(hasil);
            } else {
                hasil = 'KAMU KALAHHHH !!!!'
                alert(hasil);
            }
        }
    }

    tanya = confirm ('lagi ?');
}