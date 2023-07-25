(function(document) {

    let selectors = {
        sectionBestsellers: '.section-bestsellers'
    };
  
    let sectionBestsellers = document.querySelectorAll(selectors.sectionBestsellers)

    window.addEventListener("load", (event) => {
        
        sectionBestsellers.forEach((sectionBestseller,i) => {

            sectionBestseller.classList.add('section-bestsellers-' + i);

            let productSlider = sectionBestseller.querySelector('.technology-slider')

            var technology_swiper = new Swiper(productSlider, {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".section-bestsellers-" + i + " .swiper-button-next",
                    prevEl: ".section-bestsellers-" + i + " .swiper-button-prev",
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    // when window width is >= 640px
                    991: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    }
                  }
            });
        });
        
    });

    

})(document);
  