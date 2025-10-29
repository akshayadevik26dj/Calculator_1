const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let displayValue = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.textContent;

    if (value === 'C') {
      displayValue = '';
    } else if (value === '⌫') {
      displayValue = displayValue.slice(0, -1);
    } else if (value === '=') {
      try {
        displayValue = eval(displayValue).toString();
      } catch {
        displayValue = 'Error';
      }
    } else {
      displayValue += value;
    }

    display.value = displayValue;
  });
});
