let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image, quantity) {
    quantity = parseInt(quantity);
    if (quantity <= 0) return; // Kiểm tra số lượng hợp lệ

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã có, tăng số lượng lên
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Nếu chưa có, thêm mới vào giỏ hàng
        cart.push({ name: name, price: price, image: image, quantity: quantity });
    }
    
    saveCart(); // Lưu vào localStorage
    updateCartDisplay(); // Cập nhật số lượng hiển thị
}

// Hàm cập nhật hiển thị tổng số lượng sản phẩm trong giỏ hàng
function updateCartDisplay() {
    const cartCount = document.getElementById('targetCount');
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
}

// Hàm hiển thị sản phẩm trong giỏ hàng
function displayCartItems() {
    const cartItemsContainer = document.getElementById('clone-item-cart').querySelector('tbody');
    const totalViewCart = document.getElementById('total-view-cart');

    cartItemsContainer.innerHTML = ''; // Xóa các sản phẩm cũ
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

    totalViewCart.innerText = `${totalPrice}₫`; // Cập nhật tổng tiền
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm tải giỏ hàng từ localStorage khi trang tải lại
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
        displayCartItems(); // Hiển thị lại các sản phẩm trong giỏ hàng
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveCart(); // Lưu giỏ hàng sau khi xóa
    updateCartDisplay(); // Cập nhật hiển thị số lượng
    displayCartItems(); // Hiển thị lại giỏ hàng sau khi xóa
}

// Gọi loadCart khi trang tải
window.onload = loadCart;
