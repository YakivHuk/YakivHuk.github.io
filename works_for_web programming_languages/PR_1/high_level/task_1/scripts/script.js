function Customer(name, email) {
    this.name = name;
    this.email = email;
}

function Orders(orderId, name, email, items, total) {
    this.orderId = orderId;
    this.customer = new Customer(name, email);
    this.items = items;
    this.total = total;
}

let orders = [
    new Orders(1, "Яків", "gukakiv@gmail.com", ["Galaxy S24 Ultra", "Galaxy Watch 4"], 67000),
    new Orders(2, "Денис", "denys.andrusiak-pi2201@kep.nung.edu.ua", ["Redmi note 10", "Mi band 5"], 11000),
    new Orders(3, "Віталій", "vitalii.malisevych-pi2201@kep.nung.edu.ua", ["Iphone 12", "Apple watch 6"], 38000),
    new Orders(4, "Яків", "gukakiv@gmail.com", ["Galaxy bugs FE", "Panasonic NN-ST25HBZUE", "Galaxy tag"], 6500)
]

function getTotalSpentByCustomer(orders, nameCustomer) {
    let customerOrders = orders.filter(orders => orders.customer.name === nameCustomer);
    return customerOrders.reduce((acc, curr) => acc + curr.total, 0)
}

console.log("Загальна сума, які Яків витратив на замовлення товарів становить " + getTotalSpentByCustomer(orders, "Яків"))