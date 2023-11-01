const mybtn = document.getElementById("role");
const mylab = document.getElementById("mylabel");

const min = 1;
const max = 6;

let ranNum;

mybtn.onclick = function(){
    ranNum = Math.floor(Math.random() * max) + min;
    mylab.textContent = ranNum;
}

