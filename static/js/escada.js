function elevador() {
    
    document.getElementById("entrada-porao").classList.remove("elemento-interativo");
    document.getElementById("entrada-porao").classList.add("zoom");
    setTimeout(function() {
        // salva o ultimo local onde estavamos antes de trocar de página
        var local_agora = window.location.pathname;
        localStorage.setItem("localPassado", local_agora)
        
        document.getElementById("escada").hidden = true;
        document.getElementById("elevador").hidden = false;

        setTimeout(function() {
            window.location.href = "/porao.html";
        }, 5000);

    }, 1000)
}