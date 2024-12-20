document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("miFormulario");
    formulario.addEventListener("submit", event => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const errorNombre = document.getElementById("errorNombre");
        const errorTelefono = document.getElementById("errorTelefono");
        const errorEmail = document.getElementById("errorEmail");
        const errorMensaje = document.getElementById("errorMensaje");

        let formularioValido = true;

        // Validar nombre
        if (nombre === "") {
            errorNombre.style.display = "block"; // Mostrar
            formularioValido = false;
        } else {
            errorNombre.style.display = "none";  // Ocultar
        }

        // Validar teléfono
        if (telefono === "") {
            errorTelefono.style.display = "block";
            formularioValido = false;
        } else {
            errorTelefono.style.display = "none";
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorEmail.style.display = "block";
            formularioValido = false;
        } else {
            errorEmail.style.display = "none";
        }

        // Validar mensaje
        if (mensaje.length < 10) {
            errorMensaje.style.display = "block";
            formularioValido = false;
        } else {
            errorMensaje.style.display = "none";
        }

        if (formularioValido) {
            alert("Formulario enviado correctamente.");
        }
    });
});