'use strict';

const coment = [];

document.querySelector('button').onclick = () => {
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