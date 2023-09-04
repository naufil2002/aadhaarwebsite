// Get the menu toggle button and navigation links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the "active" class to show/hide the navigation links
    navLinks.classList.toggle('active');
    // Toggle the menu icon animation
    menuToggle.classList.toggle('active');
});
