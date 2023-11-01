
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");
const soma = document.getElementById("soma");
const conta = document.getElementById("conta")

let contar = 0;

soma.onclick = function(){
    contar++;
    conta.textContent = contar;
}

sub.onclick = function(){
    contar--;
    conta.textContent = contar;
}

reset.onclick = function(){
    contar = 0;
    conta.textContent = contar;
}