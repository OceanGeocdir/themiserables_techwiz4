angular.module('myApp', [])
.controller('SucculentsController', function ($scope, $http) {
    $http.get('./json/Succulents.json').then(function (response) {
        $scope.succulents = response.data.Succulents;
        $scope.Flower = response.data.flower;
        $scope.indoors = response.data.indoor;
        $scope.outdoors = response.data.outdoor;
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
