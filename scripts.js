document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle');
    const moonEmoji = '🌙';
    const sunEmoji = '☀️';
    const synth = window.speechSynthesis;

    // Set initial emoji for the toggle button
    toggleButton.textContent = moonEmoji;

    toggleButton.addEventListener('click', function() {
        const isPressed = toggleButton.getAttribute('aria-pressed') === 'true';
        toggleButton.setAttribute('aria-pressed', !isPressed);
        document.body.classList.toggle('dark-mode', !isPressed);
        
        // Toggle the emoji based on the mode
        toggleButton.textContent = isPressed ? moonEmoji : sunEmoji;
    });

    // Function to navigate to the Contact page
    function navigateToContact() {
        window.location.href = 'contact.html';
    }

    // Function to show profile information
    function showProfileInfo() {
        const profileInfo = document.getElementById('profile-info');
        profileInfo.classList.toggle('hidden');
    }

    // Function to play introduction about Sujay
    function playIntroduction() {
        const introduction = "Hello! My name is Sujay M Kaushik. I am a DevOps Engineer with experience in cloud computing, automation tools, and process improvement. Welcome to my portfolio!";
        const utterance = new SpeechSynthesisUtterance(introduction);
        synth.speak(utterance);
    }

    // Attach event listeners to elements
    document.querySelector('.hire-me').addEventListener('click', navigateToContact);
    document.querySelector('.profile-image').addEventListener('click', showProfileInfo);

    // Attach event listener to the video element to play the introduction
    document.getElementById('doll-click').addEventListener('click', playIntroduction);
});
