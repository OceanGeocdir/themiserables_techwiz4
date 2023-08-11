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


