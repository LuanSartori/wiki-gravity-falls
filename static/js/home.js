// um bom dia amigo!

var setaEsquerda = document.getElementById("seta-esquerda");
var setaDireita = document.getElementById("seta-direita");

var local_passado = localStorage.getItem("localPassado");
var frame_ativo;

switch (local_passado) {
    case "/home.html":
        frame_ativo = document.getElementById("frame-cabana");
        setaEsquerda.hidden = true;
        break;

    case "/estatua.html":
        frame_ativo = document.getElementById("frame-pinheiros");
        setaDireita.hidden = true;
        break;

    case "/arvore.html":
        frame_ativo = document.getElementById("frame-pinheiros");
        setaDireita.hidden = true;
        break;

    default:
        frame_ativo = document.getElementById("frame-cabana");
        setaEsquerda.hidden = true;
        break;
}
frame_ativo.classList.add("active");


// ================================================================================

function esquerda(){
    setaEsquerda.hidden = true;
    setaDireita.hidden = false;
}

function direita(){
    setaDireita.hidden = true;
    setaEsquerda.hidden = false;
}
