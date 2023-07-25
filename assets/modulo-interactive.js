(function(document) {

    let selectors = {
        imagePins: '.interactive-banner__image__pin'
    };
  
    let imagePins = document.querySelectorAll(selectors.imagePins)

    window.addEventListener("load", (event) => {
        
        imagePins.forEach((imagePin,i) => {

            imagePin.addEventListener("click", function() {
                let attr_pin = imagePin.getAttribute("attr-pin")
                
                let lines = document.querySelectorAll(".interactive-banner__line")
                let infos = document.querySelectorAll(".interactive-banner__info")

                let attr_open = imagePin.getAttribute("attr-open")
                imagePin.setAttribute("src",attr_open)
    
    
                lines.forEach((line,i) => {
                    let lineAttrPin = line.getAttribute("attr-pin")
                    if (lineAttrPin == attr_pin) {
                        line.classList.add("open")
                    } else {
                        line.classList.remove("open")
                    }
                })
                infos.forEach((info,i) => {
                    let lineAttrPin = info.getAttribute("attr-pin")
                    if (lineAttrPin == attr_pin) {
                        info.classList.add("open")
                        if (window.innerWidth <= 768) {
                            info.scrollIntoView({
                                behavior: 'smooth'
                           });
                        }
                    } else {
                        info.classList.remove("open")
                    }
                })
        
                
                imagePins.forEach((imagePin_check,i) => {
                    if ( imagePin_check.classList.contains("open") ) {
                        let attr_close = imagePin_check.getAttribute("attr-close")
                        imagePin_check.setAttribute("src",attr_close)
    
                        imagePin_check.classList.remove("open")
                    }
                })

                imagePin.classList.add("open")

            })

        });
        
    });

    

})(document);
  