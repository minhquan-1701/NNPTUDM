
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

  const inStockProducts = products.filter(p => p.quantity > 0);
console.log(inStockProducts);
 
const hasPriceOver30 = products.some(p => p.price > 30);
console.log(hasPriceOver30);

const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log(allAccessoriesAvailable);

const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
  );
  
  console.log(totalInventoryValue);

  for (const product of products) {
    console.log(
      `Tên: ${product.name} - Danh mục: ${product.category} - Trạng thái: ${product.isAvailable}`
    );
  }

  for (const key in products[0]) {
    console.log(key, ":", products[0][key]);
  }

  const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log(sellingAndInStockNames);


  