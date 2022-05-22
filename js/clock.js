const clock = document.querySelector("#clock");

function handleClock() {
    clock.innerText = new Date();
}

clock.innerText = new Date();
setInterval(handleClock, 1000);