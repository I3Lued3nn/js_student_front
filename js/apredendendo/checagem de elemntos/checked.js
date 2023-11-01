const checkbox = document.getElementById("caixinha");

const Visa = document.getElementById("VisaBtn");
const MasterCard = document.getElementById("MasterCardBtn");
const Inter = document.getElementById("InterBtn");

const Enviar = document.getElementById("Enviar");

const EnvResult = document.getElementById("EnvResult");
const PagueResult = document.getElementById("PagueResult");

Enviar.onclick = function(){
    if(checkbox.checked){
        EnvResult.textContent = "Você está inscrito";
    }
    else{
        EnvResult.textContent = "Você não está inscrito";
    }

    if(Visa.checked){
        PagueResult.textContent = "Você vai pagar com VISA";
    }
    else if(MasterCard.checked){
        PagueResult.textContent = "Você vai pagar com MasterCard";
    }
    else if(Inter.checked){
        PagueResult.textContent = "Você vai pagar com Inter";
    }
    
}


