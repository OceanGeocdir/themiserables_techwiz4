var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider  
    .when("/", { templateUrl: "home.html"})
    .when("/home", { templateUrl: "home.html"})
    .when("/about", { templateUrl: "about.html"})
    .when("/cart", { templateUrl: "newcart.html", controller: "CartController" })
    .when("/contact", { templateUrl: "contact.html"})
    .when("/feedback", { templateUrl: "feedback.html"})
    .when("/product", { templateUrl: "product.html"})
    .when("/login", { templateUrl: "login.html"})
});

app.controller("homeController", function ($scope, $http){
    // trang home.html
});

app.controller("aboutController", function ($scope, $http){
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
});

app.controller("contactController", function ($scope, $http){
    // trang contact.html
});

app.controller("feedbackController", function ($scope, $http){
    // trang feedback.html
});

app.controller("productController", function ($scope, $http){
    // trang product.html
});

app.controller("loginController", function ($scope, $http){
    // trang login.html
});
