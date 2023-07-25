(function(document) {

    let selectors = {
        sliderCards: '.slider-cards'
    };
  
    let sliderCards = document.querySelectorAll(selectors.sliderCards)

    window.addEventListener("load", (event) => {
        
        if (sliderCards) {

            sliderCards.forEach((e,i) => {
    
                sliderCards[i].classList.add('slider-cards-' + i);
            
                let swiper_cards = new Swiper('.slider-cards-' + i + ' .swiper-container', {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                    fadeEffect: {
                        crossFade: true
                    },
                    navigation: {
                        nextEl: ".slider-cards-" + i + " .swiper-button-next",
                        prevEl: ".slider-cards-" + i + " .swiper-button-prev",
                    },
                    pagination: {
                        el: '.slider-cards-' + i + ' .swiper-pagination'
                    },
                    breakpoints: {
                        320: {
                          slidesPerView: 1.3,
                          spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 1.6,
                            spaceBetween: 20
                        },
                        991: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        },
                        1420: {
                            slidesPerView: 3.5,
                            spaceBetween: 30
                        },
                    }
                });
        
    
    
    
            });
        }
        

    });

    


})(document);
  