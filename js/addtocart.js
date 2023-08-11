angular.module('myApp', [])
.controller('SucculentsController', function ($scope, $http) {
    $http.get('./json/Succulents2.json').then(function (response) {
        $scope.succulents = response.data.page1;
        $scope.Flower = response.data.page2;
        $scope.indoors = response.data.page3;
        $scope.outdoors = response.data.page4;
    });

    $scope.addToCart = function (item) {
        var productInfo = {
            id: item.id,
            product: item.name,
            price: item.price,
            img: item.img,
            code: item.discountCode
        };

        var productList = JSON.parse(localStorage.getItem('product_list')) || [];

        var existingProduct = productList.find(function (product) {
            return product.id === item.id;
        });

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            productInfo.quantity = 1;
            productList.push(productInfo);
        }

        localStorage.setItem('product_list', JSON.stringify(productList));
    };
});
