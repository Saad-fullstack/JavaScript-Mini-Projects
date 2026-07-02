const time  = document.querySelector("#time");
const date  = document.querySelector("#dateDisplay");

setInterval(() => {
    let timeDate = new Date();

    time.innerHTML = `${timeDate.toLocaleTimeString()}`
    date.innerHTML = `${String(timeDate.getDate()).padStart("2", 0)}-${String(timeDate.getMonth() + 1).padStart("2", 0)}-${timeDate.getFullYear()}`
}, 1000)
