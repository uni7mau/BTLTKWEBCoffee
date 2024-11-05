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
    // Lấy thông tin sản phẩm từ HTML
    const name = document.querySelector('.product-title h1').textContent;
    const price = parseInt(document.querySelector('.product-price .pro-price.active').textContent.replace('₫', '').replace(',', ''));
    const quantity = parseInt(document.getElementById('quantity').value);
    const image = document.querySelector('.product-gallery img').src;

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // Nếu có, tăng số lượng sản phẩm lên
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Nếu chưa có, thêm mới vào giỏ hàng
        cart.push({ name, price, quantity, image });
    }

    // Lưu giỏ hàng vào localStorage và cập nhật hiển thị
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
    
    cartItemsContainer.innerHTML = '';
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
                    <div class="pro-price-view">Giá: ${item.price}₫</div>
                </div>
                <div class="total-item-price">Thành tiền: ${itemTotal}₫</div>
                <button onclick="removeFromCart('${item.name}')">Xóa</button>
            </td>
        `;
        cartItemsContainer.appendChild(cartRow);
    });

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
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
        displayCartItems();
    }
};
