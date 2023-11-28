// um bom dia amigo


function abrirBau(){
    var bau = document.getElementById("abrir-bau");
    var carousel = document.getElementById("carousel-museu");
    bau.classList.remove("elemento-interativo");
    bau.classList.add("abrir");
    setTimeout(() => {
        bau.remove()
        carousel.hidden = false;
    }, 6000);
}
