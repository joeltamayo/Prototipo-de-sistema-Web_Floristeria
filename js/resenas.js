document.getElementById("resenaForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;
  
    const nuevaResena = document.createElement("div");
    nuevaResena.classList.add("resena");
    nuevaResena.innerHTML = `
      <p><strong>Calificación:</strong> ${"★".repeat(rating)}${"☆".repeat(5 - rating)}</p>
      <p>${message}</p>
    `;
  
    document.getElementById("resenasList").appendChild(nuevaResena);
  
    // Limpiar formulario
    document.getElementById("resenaForm").reset();
  });
  