const targetDate = new Date("June 17, 2024 19:30:00 GMT+00:00").getTime();

function updateCountdown() {
    const newDate = new Date().getTime();
    const timeDifference = targetDate - newDate;

    if (timeDifference <= 0) {
        document.getElementById('count').innerHTML = '<div>Eid-ul-Azha is here!</div>';
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); 

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);

    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;  
}

updateCountdown();
var countdownInterval = setInterval(updateCountdown, 1000);