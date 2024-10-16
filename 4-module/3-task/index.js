function highlight(table) {
  const rows = table.tBodies[0].rows;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.cells;
    const statusCell = cells[3];
    const availability = statusCell.getAttribute('data-available');
    if (availability !== null) {
      row.classList.toggle('available', availability === 'true');
      row.classList.toggle('unavailable', availability === 'false');
    } else {
      row.hidden = true;
    }
    const genderCell = cells[2];
    const gender = genderCell.textContent;

    row.classList.toggle('male', gender === 'm');
    row.classList.toggle('female', gender === 'f');
    const ageCell = cells[1];
    const age = parseInt(ageCell.textContent, 10);

    if (age < 18) {
      row.style.cssText += 'text-decoration: line-through;';
    }
  }
}
