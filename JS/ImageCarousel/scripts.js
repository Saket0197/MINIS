const previousBtn = document.querySelector('[data-prev-btn]');
const nextBtn = document.querySelector('[data-next-btn]');
const imgWrapper = document.querySelector('.img-wrapper');
const imgList = [...imgWrapper.children];
const modalBtn = document.querySelector('.modal-btn');
const text = document.querySelector('.actionText');

previousBtn.addEventListener('click',() => {
    const activeImg = document.querySelector('.active');
    let currInd = imgList.indexOf(activeImg.closest('.img-container'));

    currInd = currInd + parseInt(previousBtn.dataset.prevBtn);
    if(currInd < 0) {
        currInd = imgList.length - 1;
    }

    imgList[currInd].querySelector('img').classList.add('active');
    activeImg.classList.remove('active');
})

nextBtn.addEventListener('click',() => {
    const activeImg = document.querySelector('.active');
    let currInd = imgList.indexOf(activeImg.closest('.img-container'));
    
    currInd = currInd + parseInt(nextBtn.dataset.nextBtn);
    if(currInd >= imgList.length) {
        currInd = 0;
    }

    imgList[currInd].querySelector('img').classList.add('active');
    activeImg.classList.remove('active');
})

modalBtn.addEventListener('click',() => {
    text.textContent = text.textContent === 'Open' ? 'Close' : 'Open';
    document.querySelector(modalBtn.dataset.modalTarget).classList.toggle('visible');
    document.querySelector('.overlay').classList.toggle('visible');
})