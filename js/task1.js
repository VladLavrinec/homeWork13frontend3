
// 3
const employees = {
    jorik1: 12,
    jorik2: 110,
    "lazy Jorik": 0,
}

function findBestEmployee(employees) {
    const employeesArray = Object.entries(employees);
    let bestName = null;
    let bestScore = 0;

    for(const [key, value] of employeesArray) {
    
    if (value > bestScore) {
        bestScore = value;
        bestName = key;
    } 
    } 
    
    console.log(`Найкращий працівник: ${bestName} з показником ${bestScore}`);
}
findBestEmployee(employees);

// 6

const products2 = [
  { name: "Яблуко", price: 30, quantity: 3 },
  { name: "Банан", price: 20, quantity: 5 },
  { name: "Груша", price: 25, quantity: 2 }
]; 

function calculateTotalPrice(allProdcuts, productName) {
  for(const { name, price, quantity } of allProdcuts) {
    if (name  === productName) {
      return price  * quantity;
    }
  }
}

console.log(calculateTotalPrice(products2, "Яблуко"));
