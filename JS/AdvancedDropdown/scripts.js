const dropButtons = document.querySelectorAll('[data-dropdown-button]');
const dropdowns = document.querySelectorAll('[data-dropdown]');

document.addEventListener('click',(event) => {
    const isButtonClicked = event.target.matches('[data-dropdown-button]');
    if(!isButtonClicked && event.target.closest('[data-dropdown]')) {
        return;
    }

    dropdowns.forEach(dropdown => {
        if(isButtonClicked && dropdown === event.target.closest('[data-dropdown]')){
            dropdown.classList.toggle('active');
        }
        else {
            dropdown.classList.remove('active');
        }
    })
})