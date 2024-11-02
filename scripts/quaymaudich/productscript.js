let qty = document.querySelector("#quantity")
function minusQuantity() {
    if (qty.value - "0" > 1) {
        qty.value = qty.value - "0" - 1
    }
}
function plusQuantity() {
    qty.value = qty.value - "0" + 1
}