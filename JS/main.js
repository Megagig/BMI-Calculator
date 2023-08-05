const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calButton = document.querySelector('.calculate');
const resetButton = document.querySelector('.reset');
const errorEl = document.querySelector('.error');
const resultEl = document.querySelector('#bmi');
const statusEl = document.querySelector('.comment');

calButton.addEventListener('click', (e) => {
  e.preventDefault();
  const heightValue = height.value;
  const weightValue = weight.value;
  if (!heightValue || !weightValue) {
    errorEl.textContent = 'Please fill out all fields';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);

    return;
  } else if (!Number(heightValue) || !Number(weightValue)) {
    errorEl.textContent = 'Please enter a valid number';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
    return;
  }

  let bmi = weightValue / (heightValue / 100) ** 2;
  bmi = bmi.toFixed(2);
  resultEl.textContent = bmi; //whats the diff bw innerHTML & textContent?
  let status = '';
  if (bmi < 18.5) {
    status = 'Underweight';
  }
  if (bmi > 18.5 && bmi < 24.9) {
    status = 'Normal';
  }
  if (bmi > 24.9) {
    status = 'Overweight';
  }
  if (bmi >= 30) {
    status = 'Obese';
  }

  statusEl.textContent = `Comment:  you are ${status}`;
});

const resetBtn = () => {
  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    height.value = '';
    weight.value = '';
  });
};

//Explanation of the above code:
// This code defines a function resetBtn that adds an event listener to the reset button. This event listener calls the reset function. The reset function resets the values of the height and weight input fields to an empty string.
// I need to implement the localStorage
