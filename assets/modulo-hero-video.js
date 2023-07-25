(function(document) {

    let selectors = {
        heroVideos: '.hero-video',
    };
  
    let heroVideos = document.querySelectorAll(selectors.heroVideos)

    function toggleVol(video) {
        if (video.muted) {
            video.muted = false;
        }else{
            video.muted = true;
        }
    }

    window.addEventListener("load", (event) => {
        
        heroVideos.forEach((e,i) => {

            heroVideos[i].classList.add('hero-video-' + i);
            
            let volControls = heroVideos[i].querySelectorAll(".volumeControl")
            let volUp = heroVideos[i].querySelector(".volUp")
            let volDown = heroVideos[i].querySelector(".volDn")

            let videos  = heroVideos[i].querySelectorAll(".hero-video video")

            volControls.forEach((volControl,i) => {
                volControl.addEventListener("click", function(){
                    volControls.forEach((volControl_check,i) => {
                        volControl_check.classList.remove("active")
                    })

                    videos.forEach((video,i) => {
                        if(video.muted){
                            toggleVol(video);
                            volUp.classList.add("active")
                        } else {
                            toggleVol(video);
                            volDown.classList.add("active")
                        }                    
                    })

                })
            })

        })
    });

    


})(document);
  