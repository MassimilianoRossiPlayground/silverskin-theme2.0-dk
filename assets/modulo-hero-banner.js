(function(document) {

    let selectors = {
        heroBanners: '.section-hero-banner'
    };
  

    let heroBanners = document.querySelectorAll(selectors.heroBanners)

    window.addEventListener("load", (event) => {
        
        heroBanners.forEach((heroBanner,i) => {

            heroBanner.classList.add('section-hero-banner-' + i);

            let heroBanner_height = heroBanner.offsetHeight
            let heroScrollDown = heroBanner.querySelector('.hero-scroll-down')

            heroScrollDown.addEventListener("click", function(){
                window.scrollTo({ left: 0, top: heroBanner_height, behavior: "smooth" });
            })
            
        })
    })


    


})(document);
  