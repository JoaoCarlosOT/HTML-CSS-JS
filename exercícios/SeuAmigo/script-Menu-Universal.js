var menuAberto = false;
function AbrirEFecharMenu() { 
    var naverElement = window.document.querySelector('.naver');
    if (menuAberto) {
        naverElement.style.left = "-100%";
        menuAberto = false;
    } else {
        naverElement.style.left = "0";
        menuAberto = true;
    }
}

function tirouCursorDeCimaMenuLateral(element) {
    element.classList.add('tirouCursorDeCimaMenuLateral');
}