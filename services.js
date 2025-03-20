let totalCost = 0;
let selectedPackages = {};
let extraItems = {};

function updateTotal() {
  totalCost = Math.max(0, totalCost); // Ensure totalCost is never negative
  document.getElementById("totalCost").innerText = "Rs " + totalCost;
}

function addPackage(price, costPerKg, packageName) {
  if (!selectedPackages[packageName]) {
    selectedPackages[packageName] = price;
    totalCost += price;
  }
  updateTotal();
}

function removePackage(packageName) {
  if (selectedPackages[packageName]) {
    totalCost -= selectedPackages[packageName];
    delete selectedPackages[packageName];
  }
  updateTotal();
}

function addCustomWeight() {
  let weight = parseInt(document.getElementById("customWeight").value) || 0;
  totalCost += weight * 70;
  updateTotal();
}

function removeCustomWeight() {
  let weight = parseInt(document.getElementById("customWeight").value) || 0;
  totalCost -= weight * 70;
  updateTotal();
}

function applyDiscount(type) {
  if (type === "nitw" && !selectedPackages["NITW"]) {
    totalCost -= 100;
    selectedPackages["NITW"] = -100;
  } else if (type === "ncc" && !selectedPackages["NCC"]) {
    totalCost -= 150;
    selectedPackages["NCC"] = -150;
  }
  updateTotal();
}

function removeDiscount(type) {
  let key = type.toUpperCase();
  if (selectedPackages[key]) {
    totalCost -= selectedPackages[key];
    delete selectedPackages[key];
  }
  updateTotal();
}

function addItem(item, price) {
  if (!extraItems[item]) {
    extraItems[item] = price;
    totalCost += price;
  }
  updateTotal();
}

function removeItem(item) {
  if (extraItems[item]) {
    totalCost -= extraItems[item];
    delete extraItems[item];
  }
  updateTotal();
}

function clearAll() {
  totalCost = 0;
  selectedPackages = {};
  extraItems = {};
  updateTotal();
  alert("Selections cleared! Total cost reset.");
}

function checkout() {
  alert("Your total cost is: Rs " + totalCost);
}
