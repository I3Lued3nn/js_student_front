// cont - constante não pode ser alterado seu valor

const PI = 3.14159; // usar caps no nome reforça a declaração de imutável
let raio;
let circunferencia;
/*
raio = window.prompt("coloque o raio do circulo");
raio = Number(raio);
*/
/*
console.log(circunferencia);

*/
// função para se clicar enter ele vai simular precionar um butão

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const btn = document.querySelector("#enviar");
        btn.click();
    }

})

document.getElementById("enviar").onclick = function(){
    raio = document.getElementById("myText").value;
    raio = Number(raio);
    circunferencia = 2*PI*raio;
    document.getElementById("myH3").textContent = "SUA CIRCUNFERÊNCIA É " + circunferencia + "cm";
    
}


