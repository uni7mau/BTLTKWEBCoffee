let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm cộng thêm số lượng sản phẩm
function plusQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

// Hàm giảm số lượng sản phẩm
function minusQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart() {
    const name = document.querySelector('.product-title h1').textContent;
    const price = parseInt(document.querySelector('.product-price .pro-price.active').textContent.replace('₫', '').replace(',', ''));
    const quantity = parseInt(document.getElementById('quantity').value);
    const image = document.querySelector('.product-gallery img').src;

    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ name, price, quantity, image });
    }

    saveCart();
    updateCartDisplay();
    displayCartItems();
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cập nhật số lượng trên biểu tượng giỏ hàng
function updateCartDisplay() {
    const cartCount = document.getElementById('targetCount');
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.innerText = totalQuantity;
}

// Hiển thị các sản phẩm trong giỏ hàng
function displayCartItems() {
    const cartItemsContainer = document.getElementById('clone-item-cart').querySelector('tbody');
    const totalViewCart = document.getElementById('total-view-cart');
    
    // Sử dụng DocumentFragment để tối ưu việc thêm phần tử
    const fragment = document.createDocumentFragment();
    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const cartRow = document.createElement('tr');
        cartRow.classList.add('item-2');
        
        cartRow.innerHTML = `
            <td class="img">
                <a href="#" title="${item.name}">
                    <img src="${item.image}" alt="${item.name}">
                </a>
            </td>
            <td>
                <p class="pro-title">
                    <a href="#" class="pro-title-view">${item.name}</a>
                </p>
                <div class="mini-cart-quantity">
                    <p>Số lượng: ${item.quantity}</p>
                    <div class="pro-price-view">Giá: ${item.price.toLocaleString()}₫</div>
                </div>
                <div class="total-item-price">Thành tiền: ${itemTotal.toLocaleString()}₫</div>
                <button onclick="removeFromCart('${item.name}')">Xóa</button>
            </td>
        `;
        fragment.appendChild(cartRow);
    });

    // Cập nhật vào DOM một lần duy nhất
    cartItemsContainer.innerHTML = '';
    cartItemsContainer.appendChild(fragment);
    totalViewCart.innerText = `${totalPrice.toLocaleString()}₫`;
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    updateCartDisplay();
    displayCartItems();
}

// Tải giỏ hàng khi trang tải lại
window.onload = function() {
    if (cart.length > 0) {
        updateCartDisplay();
        displayCartItems();
    }
};
