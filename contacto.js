document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
  
    // Simulación de envío (puedes reemplazarlo con una petición real a un servidor)
    console.log("Datos del formulario:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Correo: ${email}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Asunto: ${asunto}`);
    console.log(`Mensaje: ${mensaje}`);
  
    // Feedback para el usuario
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
  
    // Limpiar formulario
    document.getElementById("contactForm").reset();
  });
  