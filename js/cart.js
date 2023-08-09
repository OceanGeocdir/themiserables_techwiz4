function updateCart() {
    var cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = ''; // Xóa dữ liệu cũ

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

    // Cập nhật tổng số tiền
    var cartSubtotalElement = document.getElementById('cart-subtotal');
    var cartTotalElement = document.getElementById('cart-total');
    cartSubtotalElement.textContent = '$ ' + cartSubtotal.toFixed(2);
    cartTotalElement.textContent = '$ ' + cartSubtotal.toFixed(2);
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