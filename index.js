const form = document.querySelector('form');
const label = document.querySelectorAll('label');
const small = document.querySelectorAll('small');
const input = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmpty();
});

function checkEmpty() {
  for (let i = 0; i < input.length; i++) {
    if (!input[i].value) {
      small[i].textContent = 'This field is required';
      input[i].classList.add('error');
      label[i].style.color = 'var(--clr-red)';
    } else if (input[i].value) {
      small[i].textContent = '';
      input[i].classList.remove('error');
      label[i].style.color = 'var(--clr-grey-500)';
      checkDate();
    }
  }
}

function checkDate() {
  for (let i = 0; i < input.length; i++) {
    if (input[0].value > 31 || input[0].value < 1) {
      small[0].textContent = 'Must be a valid day';
      input[0].classList.add('error');
      label[0].style.color = 'var(--clr-red)';
    } else {
      small[0].textContent = '';
      input[0].classList.remove('error');
      label[0].style.color = 'var(--clr-grey-500)';
    }

    if (input[1].value > 12 || input[1].value < 1) {
      small[1].textContent = 'Must be a valid month';
      input[1].classList.add('error');
      label[1].style.color = 'var(--clr-red)';
    } else {
      small[1].textContent = '';
      input[1].classList.remove('error');
      label[1].style.color = 'var(--clr-grey-500)';
    }

    if (input[2].value > 2026 || input[2].value < 1900) {
      small[2].textContent = 'Must be a valid year';
      input[2].classList.add('error');
      label[2].style.color = 'var(--clr-red)';
    } else {
      small[2].textContent = '';
      input[2].classList.remove('error');
      label[2].style.color = 'var(--clr-grey-500)';
    }
  }
}

function results() {}
