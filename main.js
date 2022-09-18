



let leen = document.querySelector(".login");
let sine = document.querySelector(".singup");
function logFunction(){
    leen.classList.add("show");
    sine.classList.remove("show");
    
}
function remobFunctionLog(){
    leen.classList.remove("show");
    sine.classList.remove("show");
}


function sinFunction(){
    sine.classList.add("show");
    leen.classList.remove("show");
}
function remobFunctionSin(){
    sine.classList.remove("show");
    leen.classList.remove("show");
}

