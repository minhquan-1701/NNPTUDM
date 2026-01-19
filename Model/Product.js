
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "Laptop", 1000, 5, "Electronics", true),
    new Product(2, "Phone", 800, 0, "Electronics", true),
    new Product(3, "Headphone", 50, 20, "Accessories", true),
    new Product(4, "Mouse", 25, 15, "Accessories", false),
    new Product(5, "Keyboard", 40, 10, "Accessories", true),
  ];

  
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
  }));
  
  console.log(nameAndPrice);
  
  