const inputPeso = document.querySelector("#inputPeso");
const inputAltura = document.querySelector("#inputAltura");
const buttonSubmit = document.querySelector("#inputSubmit");


buttonSubmit.addEventListener("click", coletarDados);

function coletarDados(e){
    e.preventDefault()

    let peso = inputPeso.value;
    let altura = inputAltura.value;
    let imc = (peso / (altura * altura)).toFixed(2)

    console.log(`Peso: ${peso} | Altura: ${altura} | IMC = ${imc}`)
    
}