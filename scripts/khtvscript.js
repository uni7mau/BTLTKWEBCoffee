function toggleMobileBtn() {
    let mBtn = document.querySelector("#mMenuBtn")
    mBtn.classList.toggle("active")
    let target = document.querySelector(".m-nav-list")
    target.classList.toggle("active")
}

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle("active")
    button.classList.toggle("active")
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

let crs = document.querySelector(".carousel .carousel-pics");
let crsItems = document.querySelectorAll(".carousel .carousel-pics .carousel-item")
let dots = document.querySelectorAll(".indicator-circle .item")

let prev = document.getElementById("prev-btn")
let next = document.getElementById("next-btn")

let active = 0

next.onclick = function() {
    if (active+1 == crsItems.length) active = 0
    else active += 1

    reloadSlider()
}

prev.onclick = function() {
    if (active-1 < 0) active = crsItems.length-1
    else active -= 1

    reloadSlider()
}

let refreshSlider = setInterval(() => { next.click() }, 5000)

function reloadSlider() {
    let checkLeft = crsItems[active].offsetLeft
    crs.style.left = -checkLeft + "px"

    let lastActiveDot = document.querySelector(".indicator-circle .item.active")
    lastActiveDot.classList.remove("active")
    dots[active].classList.add("active")

    clearInterval(refreshSlider)
    refreshSlider = setInterval(() => { next.click() }, 5000)
}

dots.forEach((li, key) => {
    li.addEventListener("click", function() {
        active = key
        reloadSlider()
    })
})