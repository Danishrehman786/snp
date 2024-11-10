let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

// Function to show the slide based on the index
function showSlide(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Set up auto-changing of slides every 3 seconds (3000ms)
setInterval(() => {
    nextSlide();
}, 3000); // 3000ms = 3 seconds

showSlide(currentIndex);
