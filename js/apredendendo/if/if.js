const mytext = document.getElementById("mytext");
const mySubmit = document.getElementById("enviar");
const result = document.getElementById("result");

let ano;

document.addEventListener("keypress", function(e){

    if(e.key == "Enter"){
        if(mytext.value == ""){
            result.textContent = "coloque sua idade";
        }
        else{
            const btn = document.querySelector("#enviar");
            btn.click();
        }
    }
})

mySubmit.onclick = function(){

    ano = mytext.value;
    ano = Number(ano);

    if(ano >= 120){
        result.textContent = "você não pode ser a pessoa mais velha do mundo";
    }
      else if(ano < 0){
       result.textContent = "Você não pode ter menos de 0 anos";
    }
    else if(ano >= 18){
        result.textContent = "Você tem idade para entrar na festa";
    }
  
    
    else{
        result.textContent = "Você precisar ter +18 anos";
    }
}


