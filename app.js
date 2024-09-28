// JavaScript code to display the welcome message in the div element
function displayMessage(message) {
    const messageDiv = document.getElementById('welcomeMessage');
    if (messageDiv) {
        messageDiv.innerText = message;
    }
}

displayMessage("Welcome to the ZipZap! Coming soon");
