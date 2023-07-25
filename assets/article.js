(function(document) {

    // var selectors = {
    //     navBlog: '.nav-blog'
    // };

    // var navBlog = document.querySelector(selectors.navBlog);

    // window.onscroll = function() {scrollDown()};

    // function scrollDown() {
    //     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    //         navBlog.classList.remove("hidden")
    //     } else {
    //         navBlog.classList.add("hidden")
    //     }
    // }


    console.log("init article slider")
    const moreArticleSlider = new Swiper("#blog-others-articles", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            310: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    }) 

})(document);
  