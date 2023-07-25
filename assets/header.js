(function(document) {

  var selectors = {
      mobileNavLangs: '.mobile-nav-tools__langs',
      siteHeader: 'header.site-header',
      mobileNavWrapper: '#NavDrawer',
  };

  let siteHeader = document.querySelector(selectors.siteHeader);
  let mobileNavWrapper = document.querySelector(selectors.mobileNavWrapper);

  let disclosureButtons = "";
  let disclosureLists = "";
  
  if (window.innerWidth > 768) {
    disclosureButtons = siteHeader.querySelectorAll(".disclosure__button")
    disclosureLists = siteHeader.querySelectorAll(".disclosure__list")
  } else {
    disclosureButtons = mobileNavWrapper.querySelectorAll(".disclosure__button")
    disclosureLists = mobileNavWrapper.querySelectorAll(".disclosure__list")
  }

  function closeLocalizations() {
    disclosureButtons.forEach((disclosureButton) => {
      disclosureButton.setAttribute("aria-expanded", "false")
    })
    disclosureLists.forEach((disclosureList) => {
      disclosureList.setAttribute("hidden", "true")
    })
  }

  disclosureButtons.forEach((disclosureButton) => {
    disclosureButton.addEventListener('click', function() {
      let ariaControls_btn = disclosureButton.getAttribute("aria-controls")
      let ariaControls_aria = disclosureButton.getAttribute("aria-expanded")
      closeLocalizations()
      disclosureLists.forEach((disclosureList) => {
        let ariaControls_list = disclosureList.getAttribute("id")
        console.log(ariaControls_btn+ " "+ariaControls_list)
        if (ariaControls_btn == ariaControls_list) {
          if (ariaControls_aria == "false") {
            disclosureList.removeAttribute("hidden")
            disclosureButton.setAttribute("aria-expanded", "true")
          } else {
            disclosureList.setAttribute("hidden", "true")
            disclosureButton.setAttribute("aria-expanded", "false")
          }
        } 
      })
    })
  })

  class LocalizationForm extends HTMLElement {
      constructor() {
        super();
        this.elements = {
          input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        };
    
        this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
      }
    
      onItemClick(event) {
        event.preventDefault();
        const form = this.querySelector('form');
        this.elements.input.value = event.currentTarget.dataset.value;
        if (form) form.submit();
      }
      
    }
    
    customElements.define('localization-form', LocalizationForm);

  //   if (window.location.hostname == "www.silverskin.it") {

  // const node = document.createElement("li");
  // const textnode = document.createTextNode("dk");
  // node.appendChild(textnode);
  // node.setAttribute('data-lang', 'dk');
  // node.classList.add('disclosure__item');

  //     let optionDK = `
  //         <li class="disclosure__item" tabindex="-1" key="dk">
  //             <a href="https://www.silverskin.dk" aria-current="true" hreflang="dk" lang="dk" data-value="dk">
  //             <span>dk</span>
  //             </a>
  //         </li>
  //     `

  //     document.querySelector("#LanguageList").appendChild(node)

  //     document.querySelector("li[data-lang='dk']").addEventListener("click", function(){
  //         window.location.replace("https://www.silverskin.dk")
  //     })
  // }

})(document);
