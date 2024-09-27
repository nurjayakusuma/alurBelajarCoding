// pilihan komputer
function getPilihanComputer() {
    const comp = Math.random();

    if (comp <= 0.3) {return 'gajah';}
    else if (comp > 0.3 && comp <= 0.6) {return 'orang';}
    else {return 'semut';}
}

function getHasil(comp, user) {
    if (comp == user) {return 'seri';}
    if (comp == 'gajah') {if (user == 'semut'){return 'menang';} else {return 'kalah';}}
    if (comp == 'orang') {if (user == 'gajah'){return 'menang';} else {return 'kalah';}}
    if (comp == 'semut') {if (user == 'orang'){return 'menang';} else {return 'kalah';}}
}

const pilihan = document.querySelectorAll('.bawah input');

function putar () {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;

    const waktuMulai = new Date().getTime();

    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        
        imgComputer.setAttribute('src', 'asset/image/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    }, 100);
}

let A = 0;
let B = 0;

pilihan.forEach(function(i){
        i.addEventListener('click', function(){
            const pilihanComputer = getPilihanComputer();
            const pilihanUser = i.className;
            let Hasil = getHasil(pilihanComputer, pilihanUser);

            putar();

            setTimeout(function(){
                const imgComputer = document.querySelector('.img-computer');
                imgComputer.setAttribute('src', 'asset/image/' + pilihanComputer + '.png');
            
                const info = document.querySelector('.info');
            
                info.innerHTML = Hasil;

            }, 1000)   

        if (Hasil == 'menang') {
            A++;
        } else if (Hasil == 'kalah') {
            B++;
        }

        setTimeout(function(){
            let skor = document.querySelector('.skor');
            skor.innerHTML = A + ':' + B;
        },1000)
    })
})
