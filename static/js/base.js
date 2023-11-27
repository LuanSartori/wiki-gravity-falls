// um bom dia amigo!

function zoom(id, page) {
    document.getElementById(id).classList.remove("elemento-interativo");
    document.getElementById(id).classList.add("zoom");
    setTimeout(function() {
        // salva o ultimo local onde estavamos antes de trocar de página
        var local_agora = window.location.pathname;
        localStorage.setItem("localPassado", local_agora)

        window.location.href = page;
    }, 1000)
}

function goto(page) {
    setTimeout(function() {
        // salva o ultimo local onde estavamos antes de trocar de página
        var local_agora = window.location.pathname;
        localStorage.setItem("localPassado", local_agora)

        window.location.href = page;
    }, 500)
}