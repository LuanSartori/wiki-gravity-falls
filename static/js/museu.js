// um bom dia amigo


function abrirBau(){
    var bau = document.getElementById("abrir-bau");
    bau.classList.remove("elemento-interativo");
    bau.classList.add("abrir");
    setTimeout(() => {
        bau.remove()
    }, 6000);
}
