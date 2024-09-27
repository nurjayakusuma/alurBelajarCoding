const button = document.querySelector('.button');

button.addEventListener('click',function(){
   
    document.body.classList.toggle('biru-muda');
});

const acak = document.createElement('button');
const text = document.createTextNode('acak warna');

acak.appendChild(text);
acak.setAttribute('type', 'button');
acak.style.display = 'block';

button.after(acak);

acak.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log (r);
    console.log (g);
    console.log (b);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});


// ...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const smerah = document.querySelector('input[name="smerah"]');

const shijau = document.querySelector('input[name="shijau"]');

const sbiru = document.querySelector('input[name="sbiru"]');

smerah.addEventListener('input', function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;

    console.log (r);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

shijau.addEventListener('input', function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;

    console.log (g);


    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});

sbiru.addEventListener('input', function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;

    console.log (b);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


document.body.addEventListener('mousemove', function(event) {
    let R = Math.floor((event.clientX / window.innerWidth) * 255);
    let G = Math.floor((event.clientY / window.innerHeight) * 255);
    console.log(event.pageX);

    document.body.style.backgroundColor = 'rgb('+ R +', '+ G +', 100)'
});