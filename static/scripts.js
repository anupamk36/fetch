// Calculate total price based on selected ingredients
// Calculate total price based on selected ingredients
function calculateTotalPrice() {
    const foodType = '{{ food_type }}';
    const basePrice = foodType === 'veg' ? 100 : 150; // Set base price based on food type
    let totalPrice = basePrice; // Initialize total price with base price

    const checkboxes = document.querySelectorAll('input[name="ingredients"]:checked');
    checkboxes.forEach(checkbox => {
        totalPrice += parseFloat(checkbox.dataset.price); // Add price of selected ingredients
    });

    let quantity = parseInt(document.getElementById('quantity').value); // Parse quantity as integer
    quantity = isNaN(quantity) || quantity < 1 ? 1 : quantity; // Ensure quantity is positive and non-empty
    totalPrice *= quantity; // Multiply total price by quantity
    document.getElementById('totalPrice').textContent = totalPrice;
}

// Initialize total price with default cost
document.addEventListener('DOMContentLoaded', function () {
    const foodType = '{{ food_type }}';
    const defaultCost = foodType === 'veg' ? 100 : 150;
    document.getElementById('totalPrice').textContent = defaultCost;
});

// Event listener for ingredient checkboxes
document.querySelectorAll('input[name="ingredients"]').forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotalPrice);
});

// Event listener for quantity input
document.getElementById('quantity').addEventListener('input', calculateTotalPrice);
