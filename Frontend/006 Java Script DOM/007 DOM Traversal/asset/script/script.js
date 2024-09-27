// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });



// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(){
//         card[i].style.display = 'none';
//     });
// }


const close = document.querySelectorAll('.close');

close.forEach(function(l){
    l.addEventListener('click', function(e){
        e.target.parentElement.parentElement.
        style.display = 'none';
    })
});