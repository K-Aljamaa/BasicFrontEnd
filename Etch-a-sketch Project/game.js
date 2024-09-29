// Select container and button
const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');

// Create the initial 16x16 grid
createGrid(16);

// Function to create the grid
function createGrid(size) {
  container.innerHTML = ''; // Clear any existing grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Ensures even sizing

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-square');
    div.style.width = `${960 / size}px`;
    div.style.height = `${960 / size}px`;

    // Add hover effect
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black'; // Change this color to any you'd like
    });

    container.appendChild(div);
  }
}

// Handle the button click to reset the grid
resetBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (1-100):');

  // Ensure the input is valid
  if (newSize && newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Invalid input! Please enter a number between 1 and 100.');
  }
});
