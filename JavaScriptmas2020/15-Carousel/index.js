// javascript
const prev = document.querySelector(".previous")
const next = document.querySelector(".next")
const gallery = document.querySelector(".gallery")
const imgLength = document.querySelectorAll(".gallery > img").length

let index = 0;

next.addEventListener("click", () => {
    if(index === (imgLength - 1)) {
        index = -1;
    };
    index++;
    carousel();
})
prev.addEventListener("click", () => {
    if (index === 0) {
        index = imgLength;
    };
    index--;
    carousel();
})

const carousel = () => {
    gallery.style.transform = `translateX(-${index * 220}px)`;
    if (index === 0) {
        prev.style.opacity = "0.3"
    }
    else {
        prev.style.opacity = "1"
    } 
    if (index === imgLength - 1) {
        next.style.opacity = "0.3"
    }
     else {
        next.style.opacity = "1"
    } 
}