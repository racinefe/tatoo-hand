//js galeria de img
const galeriaModal = document.querySelector(".galeria-modal");
const imagemGaleriaModal = document.querySelector(".galeria-modal img");

function fechaGaleria(){
    galeriaModal.style.visibility = "hidden"; 
    imagemGaleriaModal.transform = "scale(0)";
}
function abreGaleria(src){
    galeriaModal.style.visibility = "visible";
    imagemGaleriaModal.transform = "scale(1)";  
    imagemGaleriaModal.src = src;
}