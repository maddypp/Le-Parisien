console.log("Le Parisien V1");
console.log("Mathieu Plassard, Webflow | Web Services");

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-collapse');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active'); // Toggle the 'active' class
    });
});

width = window.innerWidth;
console.log(width);

if (width < 890) {

}

