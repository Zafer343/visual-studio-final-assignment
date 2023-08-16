const video = document.getElementById('video');

video.addEventListener('mouseover', function() {
    video.style.transform = 'scale(1.1) rotate(5deg)';
});

video.addEventListener('mouseout', function() {
    video.style.transform = 'scale(1) rotate(0deg)';
});

// Adding hover effects to the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.textDecoration = 'underline';
        this.style.opacity = '0.8';
    });
    link.addEventListener('mouseout', function() {
        this.style.textDecoration = 'none';
        this.style.opacity = '1';
    });
});
