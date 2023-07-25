(function(document) {

    let selectors = {
        containerSliderMarkers: '.container-sliders_markers'
    };
  
    let containerSliderMarkers = document.querySelectorAll(selectors.containerSliderMarkers)

    window.addEventListener("load", (event) => {
        
        containerSliderMarkers.forEach((e,i) => {

            containerSliderMarkers[i].classList.add('container-sliders_markers-' + i);
        
            let swiper_left = new Swiper('.container-sliders_markers-' + i + ' .swiper-container.container-left', {
                touchRatio: 0.1,
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.container-sliders_markers-' + i + ' .swiper-pagination'
                }
            });
            let swiper_right = new Swiper('.container-sliders_markers-' + i + ' .swiper-container.container-right', {
                navigation: {
                    nextEl: '.container-sliders_markers-' + i + ' .slider-navigation-specs .swiper-button-next',
                    prevEl: '.container-sliders_markers-' + i + ' .slider-navigation-specs .swiper-button-prev',
                },
                pagination: {
                    el: '.container-sliders_markers-' + i + ' .swiper-pagination'
                }
            });
    
            if (typeof swiper_left !== null) {
                swiper_left.controller.control = swiper_right;
            }
            if (typeof swiper_right !== null) {
                swiper_right.controller.control = swiper_left;
            }

            swiper_left.on('slideChange', function (e) {
                console.log("change")
                swiper_left.pagination.update()
                swiper_right.pagination.update()
            });
            swiper_right.on('slideChange', function (e) {
                console.log("change")
                swiper_left.pagination.update()
                swiper_right.pagination.update()
            });
        });
        

    });

    


})(document);
  