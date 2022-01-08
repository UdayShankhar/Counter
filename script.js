const timeH = document.querySelector("h1");
let timeSecond = 10;

const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = `00:${timeSecond}`;
    if(timeSecond<10){
        timeH.innerHTML = `00:0${timeSecond}`
    }
    if(timeSecond===0){
        timeH.innerHTML = "Happy Independence Day!";
    }if(timeSecond<0){
        timeH.innerHTML = "00:00"
    }
},1000)