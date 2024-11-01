let sidebarExpandBtn = document.querySelector("#sidebar-expand-btn")
let sidebar = document.querySelector("#sidebar")
sidebarExpandBtn.onclick = () => {
    sidebarExpandBtn.classList.toggle("active")
    sidebar.classList.toggle("active")
}