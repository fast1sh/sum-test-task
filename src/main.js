//UI
const sumButton = document.getElementById('sum-button');
const firstNumberInput = document.getElementById('first-number');
const secondNumberInput = document.getElementById('second-number');

const sum = () => {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  //0.1 + 0.2 fix
  const result = (firstNumber + secondNumber).toFixed(1);

  alert(result);
};

sumButton.addEventListener('click', sum);