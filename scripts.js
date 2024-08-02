document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle');
    const moonEmoji = '🌙';
    const sunEmoji = '☀️';

    // Set initial emoji for the toggle button
    toggleButton.textContent = moonEmoji;

    toggleButton.addEventListener('click', function() {
        const isPressed = toggleButton.getAttribute('aria-pressed') === 'true';
        toggleButton.setAttribute('aria-pressed', !isPressed);
        document.body.classList.toggle('dark-mode', !isPressed);
        
        // Toggle the emoji based on the mode
        if (isPressed) {
            toggleButton.textContent = moonEmoji;
        } else {
            toggleButton.textContent = sunEmoji;
        }
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

    // Attach event listeners to elements
    document.querySelector('.hire-me').addEventListener('click', navigateToContact);
    document.querySelector('.profile-image').addEventListener('click', showProfileInfo);
});
