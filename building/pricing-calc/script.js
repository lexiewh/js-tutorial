// first: grab everything we need from doc
// second: make functions we need
// third: add event listeners

// need: price and quantity inputs and div output
const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label')

// functions
function calculatePieCost() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  console.log(cost);
  total.innerText = '$' + cost.toFixed(2);
}

function updateQuantityLabel() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

calculatePieCost();

// event listeners
priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);
