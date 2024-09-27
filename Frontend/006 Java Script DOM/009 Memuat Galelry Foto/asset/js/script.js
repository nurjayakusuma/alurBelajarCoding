const thumnail = document.querySelector('.thumnail');
let view = document.querySelector('.view');

thumnail.addEventListener('click', function(e){
    if (e.target.className == 'thum') {
        view.src = e.target.src;
    }
});