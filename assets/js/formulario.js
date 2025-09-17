document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function (e) {
       // Evita que se recargue la página

      // Obtener datos del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const tipoMascota = document.getElementById('tipo_mascota').value;

      // Validación rápida
      if (!nombre || !email || !telefono || !tipoMascota) {
        mostrarMensaje("Por favor completa todos los campos.", "error");
        return;
      }

      // Simulación de envío exitoso (aquí podrías enviar a un servidor con fetch)
      mostrarMensaje("🎉 ¡Formulario enviado con éxito! Gracias por querer adoptar ❤️", "exito");

      // Limpiar el formulario
      formulario.reset();
    });

    function mostrarMensaje(texto, tipo) {
      mensaje.textContent = texto;
      mensaje.className = ''; // Limpia clases anteriores
      mensaje.classList.add(tipo === "exito" ? 'mensaje-exito' : 'mensaje-error');
      mensaje.style.display = 'block';
    }
  });
