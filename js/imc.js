const btnIMC = document.getElementById('btnIMC');
const imc = document.getElementById('imc');
const btnCloseIMC = document.getElementById('btnCloseIMC')
const blackScreen = document.getElementById('blackScreen');

btnIMC.onclick = ()=>{
     imc.classList.remove('d-none');
     blackScreen.classList.remove('d-none');
}

btnCloseIMC.onclick = ()=>{
     imc.classList.add('d-none');
     blackScreen.classList.add('d-none');
}