document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const mensajeEnvio = document.getElementById('mensaje-envio');
    mensajeEnvio.textContent = '¡Mensaje enviado! Gracias por contactarme.';
    mensajeEnvio.style.color = 'green';

    this.reset();
});