document.addEventListener("DOMContentLoaded",
    function(e) {
        let button = document.querySelector("input")

        let img = document.querySelector("img")
        let img1 = "image/machine.jpg"
        let img2 = "image/chemistry.png"
        let img3 = "image/electricity.png"

        button.addEventListener("click",
            function(e) {
                let src = img.getAttribute("src")
                if (src === img1){
                    img.setAttribute("src", img2)
                } else if(src === img2){
                    img.setAttribute("src", img3)
                } else{
                    img.setAttribute("src", img1)
                }
            }
        )
    }
)