'use strict';

const coment = [];

document.querySelector('.btn1').onclick = () => {
    let value = document.querySelector('input').value;
    coment.push(value);
    draw();
}



function draw(){
    let out = '';
    for(let i = 0; i < coment.length; i++){
        out += `<li>${coment[i]}</li>`;
    }
    document.querySelector('ul').innerHTML = out;
}
//======================================================

document.querySelector('.Plus').onclick = () => {
    onClick()
}
        let clicks = 0;
        function onClick() {
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
        };

document.querySelector('.Minus').onclick = () => {
    onClick2()
}
        function onClick2() {
            if (clicks == 0) {
            return clicks = 0;
            } else clicks--;
                
            document.getElementById("clicks").innerHTML = clicks;
        };
