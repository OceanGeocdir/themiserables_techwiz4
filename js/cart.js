function applyDiscount() {
    var discountCode = document.getElementById('discount-code').value;
    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    fetch('./json/discountCodes.json')
        .then(response => response.json())
        .then(data => {
            var totalDiscount = 0;

            productList.forEach(function(product) {
                var matchingDiscount = data.discountCodes.find(function(discount) {
                    return discount.code === discountCode;
                });

                if (matchingDiscount) {
                    totalDiscount += (parseFloat(product.price.replace('$', '')) * product.quantity) * matchingDiscount.percentage;
                }
            });

            var cartSubtotalElement = document.getElementById('cart-subtotal');
            var cartDiscountElement = document.getElementById('cart-discount');
            var cartTotalElement = document.getElementById('cart-total');

            var cartSubtotal = parseFloat(cartSubtotalElement.textContent.replace('$', ''));
            var discountedTotal = cartSubtotal - totalDiscount;

            cartDiscountElement.textContent = '$ ' + totalDiscount.toFixed(2);
            cartTotalElement.textContent = '$ ' + discountedTotal.toFixed(2);
        });
}

function updateCart() {
    var cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = '';

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];
    var cartSubtotal = 0;

    productList.forEach(function(product, index) {
        var row = document.createElement('tr');
        var subtotal = (parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2);
        cartSubtotal += parseFloat(subtotal);

        row.innerHTML = `
            <td>
                <i class="fa-solid fa-trash" onclick="removeProduct(${index})"></i>
            </td>
            <td>
                <img src="${product.img}" alt="">
            </td>
            <td>${product.product}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="decreaseQuantity(${index})">-</button>
                <input type="number" value="${product.quantity}">
                <button onclick="increaseQuantity(${index})">+</button>
            </td>
            <td>$${subtotal}</td>
        `;

        cartBody.appendChild(row);
    });

    var cartSubtotalElement = document.getElementById('cart-subtotal');
    var cartTotalElement = document.getElementById('cart-total');
    cartSubtotalElement.textContent = '$ ' + cartSubtotal.toFixed(2);
    cartTotalElement.textContent = '$ ' + cartSubtotal.toFixed(2);
    applyDiscount();
}

function decreaseQuantity(index) {
    var productList = JSON.parse(localStorage.getItem('product_list')) || [];
    var existingProduct = productList[index];

    if (existingProduct) {
        if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1;
        } else {
            productList.splice(index, 1);
        }

        localStorage.setItem('product_list', JSON.stringify(productList));
        updateCart();
    }
}

function increaseQuantity(index) {
    var productList = JSON.parse(localStorage.getItem('product_list')) || [];
    var existingProduct = productList[index];

    if (existingProduct) {
        existingProduct.quantity += 1;
        localStorage.setItem('product_list', JSON.stringify(productList));
        updateCart();
    }
}

function removeProduct(index) {
    var productList = JSON.parse(localStorage.getItem('product_list')) || [];
    productList.splice(index, 1);
    localStorage.setItem('product_list', JSON.stringify(productList));
    updateCart();
}

updateCart();

function login(){
    var login = JSON.parse(localStorage.getItem('login'))
    var checkout = document.getElementById('checkout')
    checkout.addEventListener('click', function(){
        if(login == true){
            alert("Payment Succes")
        }else{
            alert("You Need Login To Payment")
            window.location.href = "./login.html"
        }
    })
}
// Lưu danh sách sản phẩm vào Local Storage
function addToCart(product) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  // Lấy danh sách sản phẩm từ Local Storage
  function getCartItems() {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  }
  
login();
