//INITIALIZING VARIABLES
const blackScreen = document.getElementById('blackScreen');
const btnCloseIMC = document.getElementById('btnCloseIMC');
const btnIMC = document.getElementById('btnIMC');
const btnImcCalculate = document.getElementById('btnImcCalculate');
const btnIMCService = document.getElementById('btnIMCService');
const height = document.getElementById('height');
const imageIMCResults = document.getElementById('imageIMCResults');
const imc = document.getElementById('imc');
const imcResults = document.getElementById('imcResults');
const imcResult = document.getElementById('imcResult');
const newIMC = document.getElementById('btnNewSearch');
const weight = document.getElementById('weight');

//OPEN IMC SCREEN
btnIMC.onclick = ()=>{
     imc.classList.remove('d-none');
     blackScreen.classList.remove('d-none');
}

//CLOSE IMC SCREEN
btnCloseIMC.onclick = ()=>{
     imc.classList.add('d-none');
     blackScreen.classList.add('d-none');
     imageIMCResults.classList.add('d-none');
}

//CALCULATE IMC
btnImcCalculate.onclick = ()=>{
     let imcResult = (parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value)));
     document.getElementById('btnNewIMC').classList.remove('d-none');
     document.getElementById('imageIMCResults').classList.remove('d-none');
     document.getElementById('imcResults').classList.remove('d-none');
     document.getElementById('imcResult').classList.remove('d-none');
     document.getElementById('imcResult').value = imcResult.toFixed(2);
}

//CALCULATE IMC NEW SEARCH
btnNewIMC.onclick = ()=>{
     document.getElementById('weight').value = "";
     document.getElementById('height').value = "";
     document.getElementById('imcResult').value = "";
     document.getElementById('btnNewSearch').value = "";
}

