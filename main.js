

let countdown = new Date("june 16, 2023 09:00:00").getTime();




function counter(){

let now = new Date().getTime();
let timeleft = countdown - now;



    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60 ))/1000).toLocaleString();
    seconds;
    
        document.querySelector(".day").textContent = `0${days}`;
        document.querySelector(".hour").textContent = hours;
        document.querySelector(".min").textContent = minutes;
        document.querySelector(".sec").textContent = seconds;
        console.log(seconds,days,minutes,hours)
}
let myCounter = setInterval(counter,1000)

