const bgColors = document.querySelectorAll('[data-color]');

bgColors.forEach(bgColor => {
    bgColor.addEventListener('click',() => {
        if(!bgColor.classList.contains('active')){
            bgColor.classList.add('active');
            bgColor.style.backgroundColor = '#fff';
            bgColor.closest('.container').style.backgroundColor = bgColor.dataset.color; 
            return;
        } 
        bgColor.classList.remove('active');
        bgColor.style.backgroundColor = bgColor.dataset.color;
        bgColor.closest('.container').style.backgroundColor = '#fff';
    })
})