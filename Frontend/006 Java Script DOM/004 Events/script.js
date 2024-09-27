

// inline Html
const p1 = document.querySelector ('.P1');


function aktif () {

    p1.style.backgroundColor = 'lightblue';

}

// Method
const p2 = document.querySelector ('.P2');

p2.onclick = aktif1;

function aktif1 () {
    p2.style.backgroundColor = 'blue';
}

const tombol = document.querySelector('button');

tombol.addEventListener('click', function() {

    const table = document.querySelector ('.a');

    const tambah = document.createElement ('p');
    const isi = document.createTextNode ('lorem ipsum');

    tambah.appendChild(isi);

    table.appendChild(tambah);

});