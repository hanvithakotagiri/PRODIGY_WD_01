window.onscroll = function() {
    changeNavbarStyle();
};

function changeNavbarStyle() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#222";
    } else {
        navbar.style.backgroundColor = "#333";
    }
}
