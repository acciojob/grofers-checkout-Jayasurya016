const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Get the table body to work with
    const tableBody = document.querySelector('tbody');

    // 2. Remove any existing total rows to prevent duplicates
    const existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // 3. Get all price elements and initialize the total
    const priceElements = document.querySelectorAll('.prices');
    let totalPrice = 0;

    // 4. Iterate and sum up the prices
    priceElements.forEach(priceElement => {
        // Correctly parse the number, handling the currency symbol
        const price = parseFloat(priceElement.textContent.replace('₹', ''));
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // 5. Create a new row for the total
    const newRow = document.createElement('tr');
    newRow.setAttribute('id', 'total-row');

    // 6. Create a new cell to display the total price
    const totalCell = document.createElement('td');
    // The `colspan` attribute makes the cell span two columns
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'right';

    // 7. Append the cell to the row and the row to the table body
    newRow.appendChild(totalCell);
    tableBody.appendChild(newRow);
};

// 8. Attach the corrected function to the button's click event
getSumBtn.addEventListener("click", getSum);