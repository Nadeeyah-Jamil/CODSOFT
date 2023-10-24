let string = "";
let buttons = document.querySelectorAll('.button');
let inputElement = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML === '=') {
        string = eval(string);
        inputElement.value = string;
      } else if (e.target.innerHTML === 'C') {
        inputElement.value = "";
        string = "";
      } else if (e.target.innerHTML === 'DEL') {
        // Delete the last character
        if (string.length > 0) {
          string = string.slice(0, -1);
          inputElement.value = string;
        }
      } else if (e.target.innerHTML === '^2') {
        string = Math.pow(string, 2);
        inputElement.value = string;
      } else {
        string = string + e.target.innerHTML;
        inputElement.value = string;
      }
    } catch (error) {
      inputElement.value = "Error";
      string = "";
    }
  });
});
