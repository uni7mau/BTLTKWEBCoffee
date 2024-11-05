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

let emptyCard = document.getElementById("item-cart-empty") //Lấy empty card sd ở hàm dưới

// Hàm hiển thị các sản phẩm trong giỏ hàng
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-view-inner').querySelector('tbody');
    const totalViewCart = document.getElementById('total-view-cart');

    cartItemsContainer.innerHTML = ''; // Xóa các sản phẩm cũ
    let totalPrice = 0;

    if (cart.length === 0) {
        emptyCard.style.display = "block"
    } else {
        emptyCard.style.display = "none"
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
                <td class="des">
                    <p class="pro-title">
                        <a href="#" class="pro-title-view">${item.name}</a>
                    </p>
                    <div class="mini-cart-quantity">
                        <div class="pro-quantity-view">
                            <span class="qty-value">${item.quantity}</span>
                        </div>
                        <div class="pro-price-view">${item.price}₫</div>
                    </div>
                    <div class="remove-cart">
                        <div onclick="removeFromCart('${item.name}')">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <g>
                                    <path d="M500,442.7L79.3,22.6C63.4,6.7,37.7,6.7,21.9,22.5C6.1,38.3,6.1,64,22,79.9L442.6,500L22,920.1C6,936,6.1,961.6,21.9,977.5c15.8,15.8,41.6,15.8,57.4-0.1L500,557.3l420.7,420.1c16,15.9,41.6,15.9,57.4,0.1c15.8-15.8,15.8-41.5-0.1-57.4L557.4,500L978,79.9c16-15.9,15.9-41.5,0.1-57.4c-15.8-15.8-41.6-15.8-57.4,0.1L500,442.7L500,442.7z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </td>
            `;
            fragment.appendChild(cartRow);
        });
    }

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
