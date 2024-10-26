function toogleSubMenu(button) {
    button.nextElementSibling.classList.toggle('active')
    button.classList.toggle('active')
}
let images = [...document.querySelectorAll(".carousel-item")]
let idcts = [...document.querySelectorAll(".item")]
let currImg = 0;
images[0].style.display = "block"
idcts[0].classList.add("active")

function show(pos) {
    for (var i = 0; i < images.length; i++) {
        if (i != pos) {
            images[i].style.display = "none"
            idcts[i].classList.remove("active")
        }
    }
    images[pos].style.display = "block"
    idcts[pos].classList.add("active")
}
function prevImg() {
    currImg -= 1;
    if (currImg < 0) currImg = images.length - 1
    show(currImg)
}
function nextImg() {
    currImg += 1;
    if (currImg >= images.length) currImg = 0
    show(currImg)
}

let sections = document.querySelectorAll(".section")
let navLinks = document.querySelectorAll(".header .nav-cell a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 65
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active")
                document.querySelector(".header .nav-cell a[href*=" + id + "]").classList.add("active")
            })
        }
    })
}