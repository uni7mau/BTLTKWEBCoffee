let searchDropBtn = document.querySelector("#search-drop-btn")
let searchDialog = document.querySelector("#search-drop-box")
searchDropBtn.onclick = () => {
    searchDialog.classList.toggle("active")
}

let accDropBtn = document.querySelector("#account-drop-btn")
let accDialog = document.querySelector("#account-drop-box")
accDropBtn.onclick = () => {
    accDialog.classList.toggle("active")
}

let cartDropBtn = document.querySelector("#cart-drop-btn")
let cartDialog = document.querySelector("#cart-drop-box")
cartDropBtn.onclick = () => {
    cartDialog.classList.toggle("active")
}

let xTemp = document.getElementById("targetCount")
cartDropBtn.addEventListener("mouseenter", () => {
    xTemp.classList.add("active")
})
cartDropBtn.addEventListener("mouseleave", () => {
    xTemp.classList.remove("active")
})

let recovBtn = document.querySelector("#log-recovery-apr-btn")
let loginPanel = document.querySelector(".login-panel")
let recovPanel = document.querySelector(".recovery-panel")

recovBtn.onclick = () => {
    loginPanel.classList.add("change")
    recovPanel.classList.add("change")
}

let logbackBtn = document.querySelector("#log-back-btn")

logbackBtn.onclick = () => {
    loginPanel.classList.remove("change")
    recovPanel.classList.remove("change")
}

let mLeftDialog = document.querySelector("#m-left-drop-box")
function popupMenu(button) {
    button.classList.toggle("active")
    mLeftDialog.classList.toggle("active")
}

let footerSendEmailBtn = document.querySelector("#footer-email-submit-btn")
footerSendEmailBtn.onclick = () => {
    let footerEmailInp = document.querySelector("#footer-email")
    if (footerEmailInp.value === "") alert("Blank input email")
    else {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/
        if (footerEmailInp.value.match(pattern)) {
            alert(footerEmailInp.value)
            footerEmailInp.value = ""
        } else {
            alert("Invalid footer email")
        }
    }
}

let mSearchInput = document.querySelector("#m-search")
const mCloseSearchBtn = document.querySelector("#m-close-search-btn")
let mSearchBtn = document.querySelector("#m-search-btn")

mSearchInput.addEventListener("keyup", () => {
    if (mSearchInput.value === "") {
        mCloseSearchBtn.classList.remove("active")
        mSearchBtn.style.visibility = "visible"
        return ;
    } else if (mCloseSearchBtn.classList != "active") {
        mCloseSearchBtn.classList.add("active")
        mSearchBtn.style.visibility = "hidden"
        return ;
    }
    mCloseSearchBtn.classList.remove("active")
    mSearchBtn.style.visibility = "hidden"
})

mCloseSearchBtn.onclick = () => {
    mSearchInput.value = ""
    mCloseSearchBtn.classList.remove("active")
    mSearchBtn.style.visibility = "visible"
}

let mainSlide = document.querySelector("#main-slide")

let bstSlideBtn = document.querySelector("#bst-slide-btn")
let subSlideBst = document.querySelector("#sub-slide-bst")
bstSlideBtn.onclick = () => {
    subSlideBst.classList.remove("active")
    mainSlide.classList.add("active")
}

let coffeeSlideBtn = document.querySelector("#coffee-slide-btn")
let subSlideCoffee = document.querySelector("#sub-slide-coffee")
coffeeSlideBtn.onclick = () => {
    subSlideCoffee.classList.remove("active")
    mainSlide.classList.add("active")
}

let dvSlideBtn = document.querySelector("#dv-slide-btn")
let subSlideDv = document.querySelector("#sub-slide-dv")
dvSlideBtn.onclick = () => {
    subSlideDv.classList.remove("active")
    mainSlide.classList.add("active")
}

let bstBack = document.querySelector("#bst-back-btn")
bstBack.onclick = () => {
    subSlideBst.classList.add("active")
    mainSlide.classList.remove("active")
}

let coffeeBack = document.querySelector("#coffee-back-btn")
coffeeBack.onclick = () => {
    subSlideCoffee.classList.add("active")
    mainSlide.classList.remove("active")
}

let dvBack = document.querySelector("#dv-back-btn")
dvBack.onclick = () => {
    subSlideDv.classList.add("active")
    mainSlide.classList.remove("active")
}