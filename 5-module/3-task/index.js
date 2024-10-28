function initCarousel() {
  // ваш код...
    const carouselInner = document.querySelector('.carousel__inner');
    const slides = carouselInner.children; 
    const totalSlides = slides.length; 
    let currentIndex = 0; 
  
    const slideWidth = slides[0].offsetWidth;
  
    const arrowRight = document.querySelector('.carousel__arrow_right');
    const arrowLeft = document.querySelector('.carousel__arrow_left');
  
    function updateArrows() {
      arrowLeft.style.display = currentIndex === 0 ? 'none' : '';
      arrowRight.style.display = currentIndex === totalSlides - 1 ? 'none' : '';
    }
  
    arrowRight.addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateArrows();
      }
    });
  
    arrowLeft.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateArrows();
      }
    });
  
    updateArrows();
  }
  
 