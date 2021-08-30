
function controlCancion() {
    const cancion = document.getElementById('cancion');
    const btnControl = document.getElementById("btnReproducir");

    if (cancion.paused || cancion.ended) {
        btnControl.title = "Pausar";
        cancion.play();
    } else {
        btnControl.title = "Reproducir";
        cancion.pause();
    }
}