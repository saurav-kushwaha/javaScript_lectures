const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// traversing each button
buttons.forEach(function(button) {
    //console.log(button);

    // adding event listener to each button
    button.addEventListener('click', function(e) {
       // console.log(e);
        //console.log(e.target);


        //targeting each button by id
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        
    });

})