let ms = document.getElementById("ms")
let total = document.getElementById("total");
let bt = document.getElementById("bt");

bt.onclick = function(){
    const desc = total.value >= 100? 10 : 0;
    const valor = total.value - total.value * (desc/100);

    ms.textContent = `Total a pagar $${valor}`;
};


/*
let total = 100;
let desc = total >= 100 ? 10 : 0;

console.log(`Total a pagar $${total - total * (desc/100)}`); */