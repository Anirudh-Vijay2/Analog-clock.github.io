let hr = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let timeBox = document.getElementById('time')
const displayTime = () =>{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    timeBox.innerHTML=`${hh} : ${mm} : ${ss}`;
}

setInterval(displayTime, 1000)