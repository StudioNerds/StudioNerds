document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.getElementById("typing-text");
    let typingSound = document.getElementById("typing-sound");
    let text = "This is a work in progress made by crimson demon";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            typingSound.currentTime = 0; 
            typingSound.play();
            index++;
            setTimeout(typeText, 100); 
        }
    }

    typeText(); 
});
