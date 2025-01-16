document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');
  const dateInput = document.getElementById('dateInput');
  const output = document.getElementById('output');

  submitBtn.addEventListener('click', async () => {
    const date = dateInput.value;
    try {
      const response = await fetch(`/api/${date}`);
      const data = await response.json();
      output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    }
  });
});
