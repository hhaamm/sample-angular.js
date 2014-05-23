(function() {
    var app = angular.module("store", [ ]);
    app.controller("StoreController", function() {
        // Code executed when StoreController is called
        this.product = gem;
    });

    var gem = {
        name: "Dodecahedron",
        price: 2.95,
        description: ". . ."
    };
})();
