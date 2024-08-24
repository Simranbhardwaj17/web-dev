//using if s/t

const buttons = document.querySelectorAll('.button');
// console.log(buttons);           to know o/p

const body = document.querySelector("body")     //("tagName")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {               //use click event,as click then call that fn       //In event (obj), there r lots of details,cld as anything (e) also
        console.log(e);
        // console.log(e.target);        //kis tgt se ye event aaya h(src ele/ div ele)
        
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
    })    
});






