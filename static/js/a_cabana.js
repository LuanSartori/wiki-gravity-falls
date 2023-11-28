// um bom dia amigo

var local_passado = localStorage.getItem("localPassado");
var frame_ativo;

switch (local_passado) {
    case "/a_cabana.html":
        frame_ativo = document.getElementById("frame-lojinha");
        break;

    case "/quarto.html":
        frame_ativo = document.getElementById("frame-sala-mapa");
        break;

    case "/museu.html":
        frame_ativo = document.getElementById("frame-sala-mapa");
        break;
        
    case "/escada.html":
        frame_ativo = document.getElementById("frame-maquina");
        break;

    default:
        frame_ativo = document.getElementById("frame-lojinha");
        break;
}
frame_ativo.classList.add("active");
