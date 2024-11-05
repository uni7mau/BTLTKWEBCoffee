let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image, quantity) {
    quantity = parseInt(quantity);
    if (quantity <= 0) return; // Không thêm nếu số lượng không hợp lệ

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // Nếu đã có, tăng số lượng
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Nếu chưa có, thêm mới
        cart.push({ name, price, image, quantity });
    }

    saveCart(); // Lưu giỏ hàng vào localStorage
    updateCartDisplay(); // Cập nhật hiển thị số lượng sản phẩm trong giỏ hàng
    displayCartItems(); // Hiển thị lại giỏ hàng
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartDisplay() {
    const cartCount = document.getElementById('targetCount');
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
}

// Hàm hiển thị chi tiết giỏ hàng
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
        
        // Kiểm tra từng giá trị trước khi hiển thị
        const itemName = item.name || "Sản phẩm chưa có tên";
        const itemPrice = item.price || 0;
        const itemImage = item.image || "path/to/default-image.jpg";
        const itemQuantity = item.quantity || 1;

        cartRow.innerHTML = `
            <td class="img">
                <img src="${itemImage}" alt="${itemName}" />
            </td>
            <td>
                <p class="pro-title">${itemName}</p>
                <div>Số lượng: ${itemQuantity}</div>
                <div>Giá: ${itemPrice}₫</div>
                <div>Thành tiền: ${itemTotal}₫</div>
                <button onclick="removeFromCart('${itemName}')">Xóa</button>
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

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    updateCartDisplay();
    displayCartItems();
}

// Tải giỏ hàng từ localStorage khi trang tải
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
        displayCartItems();
    }
};
