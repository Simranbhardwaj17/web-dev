//using switch case

const buttons = document.querySelectorAll('.button');

const body = document.querySelector("body")             //("tagName")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {      
        console.log(e);
        console.log(e.target); 

        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'black':
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = "black";
                break;
        }
    })    
});






