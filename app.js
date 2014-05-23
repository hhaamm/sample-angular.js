(function() {
    var app = angular.module("store", [ ]);
    app.controller("StoreController", function() {
        // Code executed when StoreController is called
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: ". . .",
            canPurchase: true
        },
        {
            name: "Pentagonal Gem",
            price: 5.41,
            description: ". . .",
            canPurchase: false
        }        
    ];
})();
