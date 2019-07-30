// function mostrarMouse(event){
//     if(event.pageY <=10){
//         alert("Bro, num sai da página não :(");
//     }
// }   window.onmousemove = mostrarMouse;

// localStorage.setItem();

let texto = document.querySelector("h1");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let resetar = document.querySelector("a");

function acesso(){
    localStorage.setItem(`nome`, input.value);
}

function apagar(){
    localStorage.removeItem(`nome`);
}

if(localStorage.nome){
    texto.innerHTML = `Seja bem-vindo ${localStorage.nome}!`;
    resetar.innerHTML = `Vocẽ não é ${localStorage.nome}?`;
    input.style.display = "none";
    botao.style.display = "none";
}

else{
    texto.innerHTML = "Digite seu nome";
    input.innerHTML = "";
    botao.innerHTML = "Acessar";
    botao.onclick = acesso;
    input.onclick = apagar;
}

function acesso(){
    localStorage.setItem(`nome`, input.value);
    texto.innerHTML = `Seja bem-vindo ${localStorage.nome}!`;
    input.style.display = "none";
    botao.style.display = "none";
    resetar.innerHTML = `Vocẽ não é ${localStorage.nome}?`;

}

function apagar(){
    localStorage.removeItem(`nome`);
}

resetar.onclick = apagar;