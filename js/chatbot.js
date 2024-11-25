const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage !== "") {
    // Agregar el mensaje del usuario al chat
    const userMsgElement = document.createElement("p");
    userMsgElement.className = "user-message";
    userMsgElement.textContent = userMessage;
    chatbox.appendChild(userMsgElement);

    // Respuesta automática del chatbot
    const botMsgElement = document.createElement("p");
    botMsgElement.className = "bot-message";
    botMsgElement.textContent = "Gracias por tu mensaje. Estamos aquí para ayudarte.";
    chatbox.appendChild(botMsgElement);

    // Limpiar el input del usuario
    userInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight; // Mantener el scroll al final
  }
});
