function toogleSubMenu(button) {
    button.nextElementSibling.classList.toggle('active')
    button.classList.toggle('active')
}

let images = [...document.querySelectorAll(".carousel-item")]
let currImg = 1;
let currPos = 0;

function show(pos) {
    let target = document.querySelector(".carousel-pics")
    if (pos == 1) target. 
    

}

function prevImg() {
    currImg -= 1;
    if (currImg == 0) currImg = images.length
    show(currImg)
}

function nextImg() {
    currImg -= 1;
    if (currImg == 0) currImg = images.length
    show(currImg)
}