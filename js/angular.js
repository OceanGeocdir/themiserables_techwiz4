var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider  
  .when("/", { templateUrl: "home.html"})
  .when("/home", { templateUrl: "home.html"})
  .when("/about", { templateUrl: "about.html"})
  .when("/cart", { templateUrl: "cart.html", controller: "cartController" })
  .when("/contact", { templateUrl: "contact.html"})
  .when("/feedback", { templateUrl: "feedback.html"})
  .when("/product", { templateUrl: "product.html"})
  .when("/login", { templateUrl: "login.html"})


});

app.controller("homeController", function ($scope, $http){
    // trang home.html
})
app.controller("aboutController", function ($scope, $http){
    // trang about.html
})

app.controller("cartController", function ($scope, $http){
    $scope.cartItems = getCartItems();

    $scope.applyDiscount = function() {
        var discountCode = $scope.discountCode;
        var productList = JSON.parse(localStorage.getItem('product_list')) || [];

        // Đọc thông tin mã giảm giá từ tệp JSON
        $http.get('./json/discountCodes.json')
            .then(function (response) {
                var data = response.data;
                var totalDiscount = 0;

                productList.forEach(function(product) {
                    // Tìm mã giảm giá trong danh sách
                    var matchingDiscount = data.discountCodes.find(function(discount) {
                        return discount.code === discountCode;
                    });

                    if (matchingDiscount) {
                        totalDiscount += (parseFloat(product.price.replace('$', '')) * product.quantity) * matchingDiscount.percentage;
                    }
                });

                $scope.cartDiscount = totalDiscount.toFixed(2);

                // Cập nhật tổng số tiền
                var cartSubtotal = 0;

                productList.forEach(function(product) {
                    var subtotal = (parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2);
                    cartSubtotal += parseFloat(subtotal);
                });

                $scope.cartTotal = (cartSubtotal - totalDiscount).toFixed(2);
            });
    };

    $scope.updateCart = function() {
        var productList = JSON.parse(localStorage.getItem('product_list')) || [];
        var cartSubtotal = 0;

        productList.forEach(function(product, index) {
            var subtotal = (parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2);
            cartSubtotal += parseFloat(subtotal);
        });

        $scope.cartSubtotal = cartSubtotal.toFixed(2);
    };

    $scope.decreaseQuantity = function(index) {
        var productList = JSON.parse(localStorage.getItem('product_list')) || [];

        var existingProduct = productList[index];

        if (existingProduct) {
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else {
                productList.splice(index, 1);
            }

            localStorage.setItem('product_list', JSON.stringify(productList));
            $scope.updateCart();
        }
    };

    $scope.increaseQuantity = function(index) {
        var productList = JSON.parse(localStorage.getItem('product_list')) || [];

        var existingProduct = productList[index];

        if (existingProduct) {
            existingProduct.quantity += 1;
            localStorage.setItem('product_list', JSON.stringify(productList));
            $scope.updateCart();
        }
    };

    $scope.removeProduct = function(index) {
        var productList = JSON.parse(localStorage.getItem('product_list')) || [];

        productList.splice(index, 1);

        localStorage.setItem('product_list', JSON.stringify(productList));
        $scope.updateCart();
    };

    $scope.login = function() {
        var login = JSON.parse(localStorage.getItem('login'));
        $scope.checkout = function() {
            if (login) {
                alert("Payment Success");
            } else {
                alert("You Need to Login to Proceed Payment");
                window.location.href = "./login.html";
            }
        };
    };

    $scope.updateCart();
    $scope.login();
})

app.controller("contactController", function ($scope, $http){
    // trang contact.html
})

app.controller("feedbackController", function ($scope, $http){
    // trangfeedback.html
})

app.controller("productController", function ($scope, $http){
    // trang product.html
})
app.controller("loginController", function ($scope, $http){
    // trang home.html
})


