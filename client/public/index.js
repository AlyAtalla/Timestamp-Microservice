document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');
  const dateInput = document.getElementById('dateInput');
  const userOutput = document.getElementById('userOutput');

  submitBtn.addEventListener('click', async () => {
    const date = dateInput.value;
    console.log(`Date input: ${date}`); // Debugging log
    try {
      const response = await fetch(`/api/${date}`);
      console.log(`API response status: ${response.status}`); // Debugging log
      const data = await response.json();
      console.log(`API response data: ${JSON.stringify(data)}`); // Debugging log
      userOutput.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(`Error: ${error.message}`); // Debugging log
      userOutput.textContent = `Error: ${error.message}`;
    }
  });
});
