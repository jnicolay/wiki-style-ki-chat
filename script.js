function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();
    if (message === "") return;

    const chatBox = document.getElementById("chat-box");
    const userMessage = document.createElement("div");
    userMessage.textContent = "Du: " + message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    inputField.value = "";

    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.textContent = "KI: Ich habe das leider nicht verstanden.";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
