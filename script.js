window.addEventListener('DOMContentLoaded', () => {
  // Select all price cells
  const priceCells = document.querySelectorAll('.price');
  let total = 0;

  // Sum up the prices
  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create a new row for the total
  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  newRow.style.backgroundColor = '#e0ffe0'; // Optional styling

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'center';

  newRow.appendChild(totalCell);
  table.querySelector('tbody').appendChild(newRow);
});