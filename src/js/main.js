// Initializing WOW
wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: false,
  live: true
});
wow.init();

// Function to toggle the News tabs Open and Close
function panelActive(n) {
  var slideIndex = n;
  var i;
  var dots = document.getElementsByClassName("add-button");
  var slides = document.getElementsByClassName("panel");
  if (slides[slideIndex - 1].style.display !== "block") {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = "add-button";
    }
  }
  if (slides[slideIndex - 1].style.display === "block") {
    slides[slideIndex - 1].style.display = "none";
    dots[slideIndex - 1].className = "add-button";
  } else {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activated";
  }
}

// Function for FAQ Contents
function accordActive(n) {
  var slideIndex = n;
  var i;
  var slides = document.getElementsByClassName("accContent");
  if (slides[slideIndex - 1].style.display !== "block") {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  }
  if (slides[slideIndex - 1].style.display === "block") {
    slides[slideIndex - 1].style.display = "none";
  } else {
    slides[slideIndex - 1].style.display = "block";
  }
}
