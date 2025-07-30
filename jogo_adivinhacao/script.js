const boxContainerPrimary = document.querySelector(".boxContainerPrimary")
const boxContainerSecondary = document.querySelector(".boxContainerSecondary")
const tituloSecondary = document.querySelector(".tituloSecondary")
const submitButtonAgain = document.querySelector(".submitButtonAgain")
const InputTxt = document.querySelector("#inputTxt");
const inputSubmit = document.querySelector("#submitButton");

let valueRandow = Math.ceil(Math.random() * 10);
let numeroTentativas = 0;

inputSubmit.addEventListener("click", enviarFormulario);
submitButtonAgain.addEventListener("click", resetarFormulario);





function enviarFormulario(e){
    e.preventDefault()

    numeroTentativas+=1
    if(valueRandow == InputTxt.value){

        boxContainerPrimary.hidden = true;
        boxContainerSecondary.hidden = false;
        tituloSecondary.innerHTML = `Você acertou e tentou ${numeroTentativas} vezes!`;

    }
    
}

function resetarFormulario(e){
    e.preventDefault()

    boxContainerPrimary.hidden = false;
    boxContainerSecondary.hidden = true;
    InputTxt.value = "";
    numeroTentativas = 0;
    valueRandow = Math.ceil(Math.random() * 10);
}