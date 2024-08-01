document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle');
    const moonEmoji = '🌙';
    const sunEmoji = '☀️';

    toggleButton.textContent = moonEmoji; // Set initial emoji

    toggleButton.addEventListener('click', function() {
        const isPressed = toggleButton.getAttribute('aria-pressed') === 'true';
        toggleButton.setAttribute('aria-pressed', !isPressed);
        document.body.classList.toggle('dark-mode', !isPressed);
        
        if (isPressed) {
            toggleButton.textContent = moonEmoji;
        } else {
            toggleButton.textContent = sunEmoji;
        }
    });
});
