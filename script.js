document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#4a90e2';  // Darker shade of blue
        navbar.style.padding = '10px';
    } else {
        navbar.style.backgroundColor = 'rgb(144, 192, 238)';  // Light blue
        navbar.style.padding = '20px';
    }
});
