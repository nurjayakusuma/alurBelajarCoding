// const close = document.querySelectorAll('.close');

// close.forEach(function(L){
//     L.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         // e.preventDefault(); //untuk menghentikan refresh pada halaman!
//         // e.stopPropagation(); //untuk  menghentikan gelembung 
//     });
// });

// // const  card = document.querySelectorAll ('.card');

// // card.forEach(function(i){
// //     i.addEventListener('click', function(e){
// //         alert('oke');
// //     })
// // })



const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
})