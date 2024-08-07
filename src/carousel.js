const carousel = (function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('#slides > img');
    const totalSlides = slides.length;
    const circles = document.querySelectorAll('.circle');

    const showSlide = (index) => {
        const newLeft = -index * 100 + '%';
        document.getElementById('slides').style.transform = `translateX(${newLeft})`;
        updateCircles(index);
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    };

    const updateCircles = (index) => {
        circles.forEach((circle, i) => {
            if (i === index) {
                circle.classList.add('selected');
            } else {
                circle.classList.remove('selected');
            }
        });
    };

    const goToSlide = (index) => {
        currentIndex = index;
        showSlide(currentIndex);
    };

    setInterval(nextSlide, 5000);

    const start = () => {
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        circles.forEach((circle, index) => {
            circle.addEventListener('click', () => goToSlide(index));
        });

        showSlide(currentIndex);
    };

    return { start };
})();

export default carousel;
