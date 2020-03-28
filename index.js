function calculateTotal() {
  let adultQuantity = document.getElementById("adult-quantity").value;
  let childrenANDseniorQuantity = document.getElementById(
    "children-senior-quantity"
  ).value;
  let adultCost = adultQuantity * 13;
  let childANDseniorCost = childrenANDseniorQuantity * 8;
  let totalCost = adultCost + childANDseniorCost;
  let totalCostAfterTax = totalCost + totalCost * 0.065;

  document.getElementById("display-total").innerHTML =
    "$" + totalCostAfterTax.toFixed(2);
}
