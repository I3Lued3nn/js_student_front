let username = window.prompt("qual o seu nome?");
console.log(username);







let user;

document.getElementById("mybt").onclick = function(){
    user = document.getElementById("mytext").value;
    console.log(user);
}