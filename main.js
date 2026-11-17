let boton = document.getElementById("contactar");

boton.addEventListener("click", function() {

    let telefono = "5491131354776";
    let mensaje = "Hola, quisiera realizar una consulta.";

    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

});


window.addEventListener("load", () => {
    document.documentElement.classList.add("loaded");
});
