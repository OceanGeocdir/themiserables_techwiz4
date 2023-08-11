var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/page/page1.html",
      controller: "page1Controller",
    })
    .when("/a", {
      templateUrl: "/page1.html",
      controller: "page1Controller",
    })
    .when("/b", {
      templateUrl: "page/page2.html",
      controller: "page2Controller",
    })
    .when("/c", {
      templateUrl: "page/page3.html",
      controller: "page3Controller",
    })
    .when("/d", {
      templateUrl: "page/page4.html",
      controller: "page4Controller",
    })
    .when("/e", {
      templateUrl: "page/page5.html",
      controller: "page5Controller",
    })
    .when("/f", {
      templateUrl: "page/page6.html",
      controller: "page6Controller",
    })
    .when("/g", {
      templateUrl: "page/page7.html",
      controller: "page7Controller",
    })
    .when("/h", {
      templateUrl: "page/page8.html",
      controller: "page8Controller",
    });
});

app.controller("page1Controller", function ($scope, $http) {
  $http.get("./json/Succulents2.json").then(function (response) {
    $scope.data1 = response.data.page1;
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

app.controller("page2Controller", function ($scope, $http) {
  $http.get("./json/Succulents2.json").then(function (response) {
    $scope.data2 = response.data.page2;
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

app.controller("page3Controller", function ($scope, $http) {
  $http.get("./json/Succulents2.json").then(function (response) {
    $scope.data3 = response.data.page3;
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

app.controller("page4Controller", function ($scope, $http) {
  $http.get("./json/Succulents2.json").then(function (response) {
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

app.controller("page5Controller", function ($scope, $http) {
  $http.get("./json/Succulents2.json").then(function (response) {
    $scope.data5 = response.data.page5;
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
