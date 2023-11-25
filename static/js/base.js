// um bom dia amigo!

function zoom(id, page) {
    document.getElementById(id).classList.remove("elemento-interativo");
    document.getElementById(id).classList.add("zoom");
    setTimeout(function() {
        window.location.href = page;
    }, 2000)
}

function goto(page) {
    setTimeout(function() {
        window.location.href = page;
    }, 500)
}