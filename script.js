var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2");
var body = document.getElementById("body");
var h3 = document.querySelector("h3");

function change() {
     body.style.background = 
     	"linear-gradient(to right, "
     	+ col1.value
     	+ ", "
     	+ col2.value
     	+ ")";
     	h3.innerHTML = body.style.background+";";
    }

col1.addEventListener("input",change);
col2.addEventListener("input",change);