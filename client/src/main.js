const fetchBtn = document.getElementById('fetch-btn');
const dateInput = document.getElementById('date-input');
const output = document.getElementById('output');

fetchBtn.addEventListener('click', async () => {
  const date = dateInput.value;
  const url = `/api/${date}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = 'Error fetching data';
  }
});
