const cm = document.querySelector('#height');
const kg = document.querySelector('#weight');
const form = document.querySelector('form');
const userStatus = document.querySelector('.status');
const bmiStatuses = document.querySelectorAll('[data-bmi-status]');

function getStatus(bmi) {
    return (bmi <= 18.4) ? 'underweight' : (bmi < 25) ? 'normal' : (bmi < 40) ? 'overweight' : 'obese';
}

function calculateBmi(kg,cm) {
    const m = cm/100;
    const res = kg/(m*m);
    userStatus.textContent = res.toFixed(1);
    return getStatus(res);
}

form.addEventListener('submit',(ev) => {
    ev.preventDefault();
    bmiStatuses.forEach(stat => {stat.classList.remove('active');})

    if(cm.value < 0 || isNaN(parseFloat(cm.value)) || kg.value < 0 || isNaN(parseFloat(kg.value))) {
        userStatus.textContent = 'Please Enter Valid Values';
        return;
    }
    const res = calculateBmi(parseFloat(kg.value),parseFloat(cm.value));

    bmiStatuses.forEach(stat => {
        if(stat.dataset.bmiStatus === res) {
            stat.classList.add('active');
        }
    })
    
})
