let user;


function validar(){
    var nome = document.getElementById("text").value;
    if(nome === ""){
        alert("Coloque seu nome !")
    }
}

document.getElementById("submit").onclick = function(){
    user = document.getElementById("text").value;
    if(user === ""){
        document.getElementById("h1").textContent = "coloque seu nome !"    
    }
    else{
        document.getElementById("h1").textContent = 'Olá ' + user;
    }
    console.log(user);
}