let loadmoreBtn = document.querySelector("#more-btn")
let boxes = [...document.querySelectorAll(".post-list .post-cell")]
let lines = [...document.querySelectorAll(".post-list .horizontal-splitline")]
let currItem = 3

loadmoreBtn.onclick = () => {
    for (var i = currItem; i < currItem + 3 && i < boxes.length; i++) {
        boxes[i].style.display = "flex"
        lines[i].style.display = "block"
    }
    currItem += 3
    if (currItem >= boxes.length) {
        loadmoreBtn.style.display = "none"
    }
}