var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider  
    .when("/", { templateUrl: "/listpage/home.html"})
    .when("/home", { templateUrl: "/listpage/home.html"})
    .when("/about", { templateUrl: "/listpage/about.html"})
    .when("/cart", { templateUrl: "/listpage/cart.html", controller: "CartController" })
    .when("/contact", { templateUrl: "/listpage/contact.html", controller: "contactController"})
    .when("/feedback", { templateUrl: "/listpage/feedback.html"})
    .when("/product", { templateUrl: "/listpage/product.html", controller: "productController" })
    .when("/blog", { templateUrl: "/listpage/blog.html", controller: "blogductController"})

});

app.controller("homeController", function ($scope, $http){
    // trang home.html
});

app.controller("aboutController", function ($scope, $http){
    // trang about.html
});
app.controller("blogController", function ($scope, $http){
    // trang about.html
});

app.controller("CartController", function ($scope) {

    
    $scope.cartItems = JSON.parse(localStorage.getItem('product_list')) || [];
    $scope.shipping = 5; // Set the shipping cost here

    $scope.calculateSubtotal = function() {
        return $scope.cartItems.reduce(function(total, item) {
            return total + (item.price * item.quantity);
        }, 0);
    };

    $scope.calculateTotal = function() {
        var subtotal = $scope.calculateSubtotal();
        return subtotal + $scope.shipping;
    };
    $scope.checkout = function () {
        var userLoggedIn = localStorage.getItem('login');

        if (userLoggedIn === 'true') {
            alert("Payment Succes");
            localStorage.removeItem('product_list');
            // Làm tươi lại trang web
            window.location.reload();
        } else {
            alert("You need login to payment");
            window.location.href = "./login.html";
        }
    };
});

app.controller("contactController", function ($scope, $http){
    // trang contact.html
});


app.controller("feedbackController", function ($scope, $http){
    // trang feedback.html
});

app.controller("productController", function ($scope, $http){


    
});

app.controller("loginController", function ($scope, $http){
    // trang login.html
});
