document.addEventListener('DOMContentLoaded', () => {
    const sliderInnerContent = document.querySelector('.slider__inner-content');
    const slides = document.querySelectorAll('.slider__content-card');
    const dots = document.querySelectorAll('.dot');
    const checkWidth = () => {
        if (window.innerWidth < 1000) {
            let currentSlide = 0;
            const totalSlides = slides.length;

            const updateSliderPosition = () => {
                const slideWidth = slides[0].offsetWidth;
                sliderInnerContent.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                updateDots();
            };

            const updateDots = () => {
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            };

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    currentSlide = Number(e.target.dataset.slide);
                    updateSliderPosition();
                });
            });

            let startX = 0;

            sliderInnerContent.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });

            sliderInnerContent.addEventListener('touchmove', (e) => {
                const moveX = e.touches[0].clientX;
                if (startX - moveX > 30) {
                    currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
                    updateSliderPosition();
                } else if (moveX - startX > 30) {
                    currentSlide = Math.max(currentSlide - 1, 0);
                    updateSliderPosition();
                }
            });

            updateSliderPosition();
        } 
    }
    window.addEventListener('resize', checkWidth);
    checkWidth();
});
