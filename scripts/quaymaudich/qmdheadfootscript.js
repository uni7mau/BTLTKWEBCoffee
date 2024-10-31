let modalDialog = document.querySelector(".modal-contact-wrapper")
let closeModalBtn = document.getElementById("modal-close-btn")

setTimeout(function () { modalDialog.classList.add("fade", "in") }, 1500)

closeModalBtn.onclick = () => {
    modalDialog.classList.remove("fade", "in")
    setTimeout(function () { modalDialog.style.display = "none" }, 400)
}

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

function popupMenu(button) {
    button.classList.toggle("active")
}

    