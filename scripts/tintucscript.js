function showSidebar() {
    const mobileIcon = document.getElementById("mb-menu-i")
    mobileIcon.classList.add("active")

    const sidebar = document.querySelector('.mobile-sidebar')

    sidebar.style.left = '0'
}

function hideSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar')
    sidebar.classList.remove('active')

    sidebar.style.left = '-300px'
}

