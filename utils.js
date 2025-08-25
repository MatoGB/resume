function cambiarIdioma(idioma) {
    document.querySelectorAll(".eng").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".esp").forEach(el => el.classList.remove("active"));
    document.querySelectorAll("." + idioma).forEach(el => el.classList.add("active"));
}

document.addEventListener("DOMContentLoaded", () => cambiarIdioma("esp"))