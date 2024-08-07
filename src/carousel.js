

const carousel = (function(){

    let slides = document.getElementById('slides');
    // let index = 0;

    function nextSlide(){
        slides.style.transform = `translateX(-100%)`;
        // index++ ;
    }
    function prevSlide(){
        slides.style.transform = `translateX(100%)`;
        // index++ ;
    }

    const start = ()=>{
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }




    return{start}

})();

export default carousel;

