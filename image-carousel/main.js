let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");
const dots = document.querySelectorAll(".dots .dot");
const titles = [
  "Homer with glasses",
  "Mustache Homer",
  "Pasta Homer",
  "Burger Homer",
];
const descriptions = ["Springfield", " AI ART", "AI ART", "AI ART"];
const content = document.querySelector(".carousel-content");

function showSlide(index) {
  // Ensure the index is within bounds
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }

  // Hide all images and remove active class from dots
  images.forEach((img, i) => {
    img.classList.remove("active");
    dots[i].classList.remove("active");
  });

  // Show the current image and update the dots
  images[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");

  // Update the content based on the current index
  content.querySelector("h2").textContent = titles[currentIndex];
  content.querySelector("p").textContent = descriptions[currentIndex];
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize the carousel
showSlide(currentIndex);
