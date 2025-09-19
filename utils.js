function cambiarIdioma(idioma) {
    document.querySelectorAll(".eng").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".esp").forEach(el => el.classList.remove("active"));
    document.querySelectorAll("." + idioma).forEach(el => el.classList.add("active"));
}

function mostrarPDF(nombre) {
    if (nombre == "VOXY") {
        document.getElementById("pdfFrame").src = "data/" + nombre + ".png";
        document.getElementById("visor").style.display = "block";
    }
    else{
        document.getElementById("pdfFrame").src ="data/" + nombre + ".pdf";
    document.getElementById("visor").style.display = "block";
}
    
}

function cerrarPDF() {
    document.getElementById("visor").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => cambiarIdioma("esp"))