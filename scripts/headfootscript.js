var mobileIcon = document.getElementById("mb-menu-i")
var mobileIconActive = 0
const sidebar = document.querySelector(".mobile-sidebar")

function changeSidebar() {
    mobileIconActive = !mobileIconActive;
    if (mobileIconActive == 1) {
        mobileIcon.classList.add("active")
        sidebar.style.left = '0'
    } else {
        mobileIcon.classList.remove("active")
        sidebar.style.left = '-300px'
    }
}

function toogleSubMenu(button) {
    button.nextElementSibling.classList.toggle('active')
    button.classList.toggle('active')
}

const input = document.querySelector("#email"), 
    submitBtn = document.querySelector("#emailSubmit")

    submitBtn.disabled = true

input.addEventListener("keyup", () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/
    submitBtn.disabled = !submitBtn.disabled
    if (input.value === "") {
        submitBtn.classList.remove("active")
        return ;
    }
    if (input.value.match(pattern)) {
        submitBtn.classList.add("active")
        return ;
    }
    submitBtn.classList.remove("active")
})

function emailSent() {
    alert("Email sent")
}