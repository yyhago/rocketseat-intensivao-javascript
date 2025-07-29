const InputTxt = document.querySelector("#inputTxt");
const inputSubmit = document.querySelector("#submitButton");

let valueRandow = Math.ceil(Math.random() * 10)
//console.log(valueRandow)



inputSubmit.addEventListener("click", enviarFormulario)



function enviarFormulario(e){
    e.preventDefault()

    if(valueRandow == InputTxt.value){
        console.log("Parabéns você acertou!")
    } else{
        console.log("Você errou!")
    }
    
}