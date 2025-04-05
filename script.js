const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    switch (value) {
      case '=':
        try {
          display.value = eval(display.value);
        } catch {
          display.value = 'Error';
        }
        break;

      case 'C':
        display.value = '';
        break;

      case 'DEL':
        display.value = display.value.slice(0, -1);
        break;

      case 'sin':
        display.value += 'Math.sin(';
        break;

      case 'cos':
        display.value += 'Math.cos(';
        break;

      case 'tan':
        display.value += 'Math.tan(';
        break;

      case 'log':
        display.value += 'Math.log10(';
        break;

      case 'ln':
        display.value += 'Math.log(';
        break;

      case '√':
        display.value += 'Math.sqrt(';
        break;

      case 'π':
        display.value += 'Math.PI';
        break;

      case 'e':
        display.value += 'Math.E';
        break;

      case '^':
        display.value += '**'; // JavaScript exponentiation
        break;

      default:
        display.value += value;
    }
  });
});

