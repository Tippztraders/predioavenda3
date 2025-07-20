console.log("Page loaded successfully.");

// List of gallery image filenames (inside js/src=image or adjust as needed)
const galleryImages = [
  "PH1.jpg",
  "PH2.jpg",
  "PH3.jpg",
  "PH4.jpg"
];

// Populate gallery swiper
const swiperWrapper = document.querySelector(".gallery-swiper .swiper-wrapper");

if (swiperWrapper) {
  galleryImages.forEach(img => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="js/src=image/${img}" alt="Prédio" style="width:100%; border-radius:12px;">`;
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper
  new Swiper('.gallery-swiper', {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
} else {
  console.warn("Gallery swiper wrapper not found.");
}
