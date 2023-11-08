var click = document.getElementById("re");
var click1 = document.getElementById("ho");

click1.addEventListener("click", function() {  
    window.location.href = './index.html'; 
});

click.addEventListener("click", function() {  
    window.location.href = './game.html'; 
});
let score =localStorage.getItem("score")
let final=document.querySelector("#final")
final.textContent=score;

