let modalDialog = document.querySelector(".modal-contact-wrapper")
let closeModalBtn = document.getElementById("modal-close-btn")

setTimeout(function () { modalDialog.classList.add("fade", "in") }, 1500)


closeModalBtn.onclick = () => {
    modalDialog.classList.remove("fade", "in")
    setTimeout(function () { modalDialog.style.display = "none" }, 400)
}