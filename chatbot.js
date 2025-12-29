const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("userInput");

chatBody.innerHTML += "<p><b>HealthBot:</b> Hello! How can I help you today?</p>";

userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let userText = userInput.value;
        chatBody.innerHTML += "<p><b>You:</b> " + userText + "</p>";

        let reply = "Please consult a doctor for detailed advice.";

        if (userText.toLowerCase().includes("fever")) {
            reply = "For fever, take rest, drink fluids, and monitor temperature.";
        } 
        else if (userText.toLowerCase().includes("appointment")) {
            reply = "You can book a doctor appointment through our help desk.";
        }

        chatBody.innerHTML += "<p><b>HealthBot:</b> " + reply + "</p>";
        userInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
