const display = document.querySelector('.display')

// setInterval(() => {
                                             //setInterval func syntax
// }, interval);


setInterval(function () {                        //method that run on every moment & that moment is controlled by us
    let date = new Date()
    // display.innerHTML = date;                 //It will display everything related to today(date,time,...)
    // const date1 = console.log(date.toLocaleDateString());          ------>  No need to decl var
    display.innerHTML = date.toLocaleTimeString();
    // display.innerHTML = date1;
}, 1000);                                       //1000ms -> It will show the interval to run the func(time)
