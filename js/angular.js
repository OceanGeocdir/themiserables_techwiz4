var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider  
  .when("/", { templateUrl: "home.html"})
  .when("/home", { templateUrl: "home.html"})
  .when("/about", { templateUrl: "about.html"})
  .when("/cart", { templateUrl: "cart.html"})
  .when("/contact", { templateUrl: "contact.html"})
  .when("/feedback", { templateUrl: "feedback.html"})
  .when("/product", { templateUrl: "test.html", controller: "productController"})
  .when("/login", { templateUrl: "login.html"})


});

app.controller("homeController", function ($scope, $http){
    // trang home.html
})
app.controller("aboutController", function ($scope, $http){
    // trang home.html
})

app.controller("cartController", function ($scope, $http){
    // trang home.html
})

app.controller("contactController", function ($scope, $http){
    // trang home.html
})

app.controller("feedbackController", function ($scope, $http){
    // trang home.html
})

app.controller("productController", function ($scope, $http){
    // trang home.html
})
app.controller("loginController", function ($scope, $http){
    // trang home.html
})


