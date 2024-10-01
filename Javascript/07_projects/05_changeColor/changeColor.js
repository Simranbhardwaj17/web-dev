const randomColor = function () {
    let hex = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];           //not added 1,to get 0 to 16 value 
    }
    return color;
};
// console.log(randomColor());        to see o/p of randomColor

let intervalId;
const startChangingColor = function () {
    //use condition coz u have done intervalId = null
    if(!intervalId){                 //if(intervalId == null)
        intervalId = setInterval(changeBgColor,1000);
    }

    // intervalId = setInterval(changeBgColor,1000);

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;                //overwi8 occur. So,dereference the variable(clear code)
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

