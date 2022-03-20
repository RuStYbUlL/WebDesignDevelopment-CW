window.onscroll = function() {responsiveTopnav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function responsiveTopnav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


function responsiveNavMenu() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
  }
}