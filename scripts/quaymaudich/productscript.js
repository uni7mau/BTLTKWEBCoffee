let qty = document.querySelector("#quantity")
function minusQuantity() {
    if (qty.value - "0" > 1) {
        qty.value = qty.value - "0" - 1
    }
}
function plusQuantity() {
    qty.value = qty.value - "0" + 1
}

let products = [...document.querySelectorAll(".swatch-element")]
let productsPrice = [...document.querySelectorAll(".pro-price")]
products.forEach(changeProduct)

function changeProduct(product) {
    product.addEventListener("click", () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i] != product) {
                products[i].classList.remove("active")
                productsPrice[i].classList.remove("active")
            } else {
                products[i].classList.add("active")
                productsPrice[i].classList.add("active")
            }
        }
        product.classList.add("active")
    })
}

let sections = document.querySelectorAll(".product-gallery-item")
let leftLink = document.querySelectorAll(".product-cell")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            leftLink.forEach(links => {
                links.classList.remove("current")
                document.querySelector(".left-product .product-cell a[href*=" + id + "]").closest(".product-cell").classList.add("current")
            })
        }
    })
}

let productsImg = [...document.querySelectorAll(".product-gallery-item")]
let productsButton = [...document.querySelectorAll(".dot")]
productsButton.forEach(appearControl)

//khi load trang thì cho tất cả ảnh trừ ảnh 1 sang bên phải màn hình

let screenXVal = window.innerWidth
for (let i = 1; i < productsImg.length; i++) {
    productsImg[i].style.left = screenXVal + "px"
}


function appearControl(p) {
    p.addEventListener("click", () => {
        for (let i = 0; i < productsButton.length; i++) {
            if (productsButton[i] === p) {
                p.classList.add("active")
                productsImg[i].style.left = "0"
            } else {
                productsButton[i].classList.remove("active")
                productsImg[i].style.left = screenXVal + "px"
            }
        }
    })
}

