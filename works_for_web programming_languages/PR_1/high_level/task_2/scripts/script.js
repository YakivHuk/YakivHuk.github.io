function Products(id, name, price) {
    this.productId = id;
    this.name = name;
    this.price = price;
}

function Purchases(purchaseId, productId, quantity) {
    this.purchaseId = purchaseId;
    this.productId = productId;
    this.quantity = quantity;
}

let products = [
    new Products(1, "яблуко", 20),
    new Products(2, "груша", 25),
    new Products(3, "ананас", 50),
    new Products(4, "кавун", 70),
    new Products(5, "айва", 25)
]

let purchases = [
    new Purchases(1, 3, 10),
    new Purchases(2, 3, 5),
    new Purchases(3, 1, 50),
    new Purchases(4, 5, 15),
    new Purchases(5, 5, 10),
    new Purchases(6, 2, 40),
    new Purchases(7, 4, 10)
]

function getTotalSales() {
    let totalSales = new Array(products.length);
    for(i = 0; i < products.length; i++) {
        let sumArray = [];
        let index = purchases.findIndex(purchase => purchase.productId === i + 1);
        while(index != -1) {
            sumArray.push(purchases.find(purchase => purchase.productId === i + 1).quantity * products[i].price);
            purchases.splice(index, 1);
            index = purchases.findIndex(purchase => purchase.productId === i + 1);
        }
        totalSales[i] = [products[i].name, sumArray.reduce((acc, curr) => acc + curr, 0)];
    }
    return Object.fromEntries(totalSales);
}

console.log(getTotalSales());