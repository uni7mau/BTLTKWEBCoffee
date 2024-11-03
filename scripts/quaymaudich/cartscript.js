let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image, quantity) {
    quantity = parseInt(quantity);
    if (quantity <= 0) return;

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã có, tăng số lượng
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Nếu chưa có, thêm mới vào giỏ hàng
        cart.push({ name: name, price: price, image: image, quantity: quantity });
    }

    saveCartDebounced(); // Gọi hàm lưu với debounce
    updateCartDisplay(); // Cập nhật số lượng trên biểu tượng giỏ hàng ngay lập tức
    displayCartItems(); // Cập nhật danh sách sản phẩm trong giỏ hàng ngay lập tức
}

// Hàm cập nhật hiển thị tổng số lượng sản phẩm trong giỏ hàng
function updateCartDisplay() {
    const cartCount = document.getElementById('targetCount');
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
}

// Hàm hiển thị các sản phẩm trong giỏ hàng
function displayCartItems() {
    const cartItemsContainer = document.getElementById('clone-item-cart').querySelector('tbody');
    const totalViewCart = document.getElementById('total-view-cart');

    cartItemsContainer.innerHTML = ''; // Xóa các sản phẩm cũ
    let totalPrice = 0;
    const fragment = document.createDocumentFragment(); // Sử dụng DocumentFragment để cải thiện hiệu suất

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
                    <label>Số lượng: </label>
                    <input type="number" class="qty-input" value="${item.quantity}" min="0" onchange="updateCartQuantity('${item.name}', this.value)">
                </div>
                <div class="pro-price-view">Giá: ${item.price}₫</div>
                <div class="total-item-price">Thành tiền: ${itemTotal}₫</div>
                <button onclick="removeFromCart('${item.name}')">Xóa sản phẩm</button>
            </td>
        `;
        fragment.appendChild(cartRow);
    });

    cartItemsContainer.appendChild(fragment); // Chèn tất cả phần tử vào DOM một lần để tăng hiệu suất
    totalViewCart.innerText = `${totalPrice}₫`; // Cập nhật tổng tiền
}

// Hàm cập nhật số lượng sản phẩm
function updateCartQuantity(name, quantity) {
    quantity = parseInt(quantity); // Chuyển đổi giá trị thành số nguyên
    const itemIndex = cart.findIndex(item => item.name === name);

    if (itemIndex !== -1) {
        if (quantity > 0) {
            cart[itemIndex].quantity = quantity; // Cập nhật số lượng mới
        } else {
            // Nếu số lượng là 0, xóa sản phẩm khỏi giỏ
            cart.splice(itemIndex, 1);
        }
        saveCartDebounced(); // Lưu thay đổi vào localStorage với debounce
        displayCartItems(); // Cập nhật lại hiển thị giỏ hàng
        updateCartDisplay(); // Cập nhật số lượng trên biểu tượng giỏ
    }
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm debounce để lưu giỏ hàng với khoảng chờ 300ms
let debounceTimeout;
function saveCartDebounced() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        saveCart();
    }, 300); // Chờ 300ms trước khi lưu vào localStorage
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCartDebounced(); // Lưu lại giỏ hàng sau khi xóa với debounce
    updateCartDisplay(); // Cập nhật số lượng trên biểu tượng giỏ hàng
    displayCartItems(); // Hiển thị lại giỏ hàng
}

// Tải giỏ hàng từ localStorage khi trang tải
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay(); // Hiển thị số lượng trên biểu tượng giỏ hàng
        displayCartItems(); // Hiển thị danh sách sản phẩm trong giỏ hàng
    }
};
