const clock = document.querySelector('.clock');

function runClock() {

    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    },1000);

}

runClock();