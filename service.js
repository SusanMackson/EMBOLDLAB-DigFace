const slider = document.querySelector('.testimonial-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= 320; // Adjust to match card width + gap
});

nextBtn.addEventListener('click', () => {
  slider.scrollLeft += 320; // Adjust to match card width + gap
});