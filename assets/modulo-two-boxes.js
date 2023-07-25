(function(document) {

    let selectors = {
        twoBoxes: '.two-boxes'
    };
  
    let twoBoxes = document.querySelectorAll(selectors.twoBoxes)

    window.addEventListener("load", (event) => {
        
        twoBoxes.forEach((twoBox,i) => {

            twoBox.classList.add('two-boxes-' + i);

            let termichImg = twoBox.querySelector(".termich-test-img")

            termichImg.addEventListener("click", function() {
                twoBox.querySelector(".termich-test-iframe").classList.remove("hide")
                let linkYt = twoBox.querySelector(".termich-test-iframe").getAttribute("src")
                twoBox.querySelector(".termich-test-iframe").setAttribute('src', linkYt + '&autoplay=1');
                termichImg.classList.add("hide")
            })
        })
    })
    

})(document);
  