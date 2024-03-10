// generate a random color 

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0 ; i < 6 ; i ++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

let intervalId;
const startChangingColor = function() {

    if (!intervalId){ // not intervalId or null , undefined
        intervalId = setInterval(changeBgColor,1000)  // 1000ms = 1 sec

    }

    // // For Running it Continuosly
    //  intervalId = setInterval(changeBgColor,1000)  // 1000ms = 1 sec

    function changeBgColor(){
    // changing color 
    document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function() {
    clearInterval(intervalId);   // Stop the Interval Function // Window Method hai clearInterval
   intervalId = null; // so that stop pr bnd
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);

