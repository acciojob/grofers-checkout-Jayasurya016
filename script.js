// Function to calculate and display the total price
function calculateTotalPrice() {
    // 1. Select all table cells with the class 'price'
    const priceElements = document.querySelectorAll('.price');

    let totalPrice = 0;

    // 2. Iterate through each element and sum up the prices
    priceElements.forEach(priceElement => {
        // Use parseFloat to convert the text content to a number
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // 3. Select the table body
    const tableBody = document.querySelector('table');

    // 4. Create a new table row for the total price
    const newRow = document.createElement('tr');
    
    // 5. Create a new table cell to hold the total
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2'); // Make the cell span both columns
    totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'right';

    // 6. Append the new cell to the new row
    newRow.appendChild(totalCell);

    // 7. Append the new row to the table body
    tableBody.appendChild(newRow);
}

// Call the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', calculateTotalPrice);