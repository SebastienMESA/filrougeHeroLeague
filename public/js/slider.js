const slider = {
    firstReview : document.querySelector('.slider__element'),
    sliderSection: document.querySelector('#slider'),
    prevButtonElement: document.querySelector('#slider-prev'),
    nextButtonElement: document.querySelector('#slider-next'),
    slides: document.querySelectorAll('.slider__element'),
    position: 0,

    init() {
        this.firstReview.classList.add('slider__element--current');
        slider.prevButtonElement.addEventListener('click', slider.handleClickOnPrevButton);
        slider.nextButtonElement.addEventListener('click', slider.handleClickOnNextButton);
    },
    handleClickOnNextButton: function() {
        slider.position++;

        if(slider.position >= slider.slides.length) {
            slider.position = 0;
        }

        slider.goTo(slider.position);
    },
    handleClickOnPrevButton: function() {
        slider.position--;

        if(slider.position < 0) {
            slider.position = slider.slides.length - 1;
        }

        slider.goTo(slider.position);
    }, 
    goTo: function(pos) {
        for(slide of slider.slides) {
            slide.classList.remove('slider__element--current');
        }

        slider.slides[pos].classList.add('slider__element--current');
    }
}

slider.init();