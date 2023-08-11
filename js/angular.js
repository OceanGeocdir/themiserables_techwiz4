var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider  
    .when("/", { templateUrl: "home.html"})
    .when("/home", { templateUrl: "home.html"})
    .when("/about", { templateUrl: "about.html"})
    .when("/cart", { templateUrl: "newcart.html", controller: "CartController" })
    .when("/contact", { templateUrl: "contact.html", controller: "contactController"})
    .when("/feedback", { templateUrl: "feedback.html"})
    .when("/product", { templateUrl: "product.html", controller: "productController" })
    .when("/login", { templateUrl: "login.html"})
    .when("/blog", { templateUrl: "blog.html", controller: "blogductController"})
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
});

app.controller("contactController", function ($scope, $http){
    // trang contact.html
});


app.controller("feedbackController", function ($scope, $http){
    // trang feedback.html
});

app.controller("productController", function ($scope, $http){

    var app = angular.module("myApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
      $routeProvider
      .when("/", { templateUrl: "page1.html" })  // Không cần controller ở đây
      .when("/a", { templateUrl: "page1.html" })   // Cấu hình routing đến page1.html
      .when("/b", { templateUrl: "page2.html" })   // Cấu hình routing đến page2.html
      .when("/c", { templateUrl: "page3.html" })   // Cấu hình routing đến page3.html
      .when("/d", { templateUrl: "page4.html" })   // Cấu hình routing đến page4.html
    });
    
    app.controller("productController", function ($scope, $http) {
      $http.get("./json/Succulents2.json").then(function (response) {
        $scope.data1 = response.data.page1;
        $scope.data2 = response.data.page2;
        $scope.data3 = response.data.page3;
        $scope.data4 = response.data.page4;
        
      });
      $scope.addToCart = function (item) {
        var productInfo = {
          id: item.id,
          product: item.name,
          price: item.price,
          img: item.img,
        };
    
        var productList = JSON.parse(localStorage.getItem("product_list")) || [];
    
        var existingProduct = productList.find(function (product) {
          return product.id === item.id;
        });
    
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          productInfo.quantity = 1;
          productList.push(productInfo);
        }
    
        localStorage.setItem("product_list", JSON.stringify(productList));
      };
    });
    
    
    
    //filter
    
    //sort
    
    //search
    
});

app.controller("loginController", function ($scope, $http){
    // trang login.html
});
