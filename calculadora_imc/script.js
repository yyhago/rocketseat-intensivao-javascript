const inputPeso = document.querySelector("#inputPeso");
const inputAltura = document.querySelector("#inputAltura");
const buttonSubmit = document.querySelector("#inputSubmit");

const boxContainerPrimary = document.querySelector(".boxContainerPrimary");
const boxContainerModal = document.querySelector(".boxContainerModal");
const xfecharModal = document.querySelector("#fecharModal");
const valorIMC = document.querySelector("#valorIMC");

buttonSubmit.addEventListener("click", coletarDados);
xfecharModal.addEventListener("click", fecharModal);

function coletarDados(e){
    e.preventDefault();

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    let alturaMetros = altura / 100;
    let imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);

    valorIMC.textContent = `Seu IMC é de ${imc}`;
    boxContainerModal.hidden = false;
}

function fecharModal(e){
    e.preventDefault();

    boxContainerModal.hidden = true;
    inputPeso.value = "";
    inputAltura.value = "";
    valorIMC.textContent = "";
}