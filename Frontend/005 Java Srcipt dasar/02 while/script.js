var tanya = true;

while(tanya) {
    while (p = prompt('silahkan masukan pilihan anda \n cnth: gajah, orang, semut'))  {

        var comp = Math.random();

        if (comp < 0.34) {
            comp = 'gajah';
        }

        else if (comp >= 0.34 && comp < 0.67) {
            comp = 'orang';
        } else {
            comp = 'semut';
        }

        hasil = '';

        if (p == comp) {
            hasil = 'SERI !';
        }

        else if (p == 'gajah') {
            if (comp == 'semut') {
                hasil = 'MENANG !';
            } else {
                hasil = 'KALAH !';
            }
        }

        else if (p == 'orang') {
            if (comp == 'semut') {
                hasil = 'MENANG !';
            } else {
                hasil = 'KALAH !';
            }
        }

        else if (p == 'semut') {
            if (comp == 'gajah') {
                hasil = 'MENANG !';
            } else {
                hasil = 'KALAH !';
            }
        } else {
            hasil = 'error !'
        }

        alert ('Kamu Memilih : ' + p + '\nComputer Memilih : ' + comp + ' \nKamu : ' + hasil)

    }
    tanya = confirm('lagi ?');
}

alert ('terima kasih !!')