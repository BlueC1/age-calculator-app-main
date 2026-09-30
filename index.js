const form = document.querySelector('form');

const dayLabel = document.getElementById('day-label');
const monthLabel = document.getElementById('month-label');
const yearLabel = document.getElementById('year-label');

const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');

const yearResult = document.getElementById('span-years');
const monthResult = document.getElementById('span-months');
const dayResult = document.getElementById('span-days');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmpty();
});

let isValid = false;

function checkEmpty() {
  if (!dayInput.value) {
    dayError.textContent = 'This field is required';
    errors(dayInput, dayLabel);
  } else {
    noError(dayError, dayInput, dayLabel);
  }

  if (!monthInput.value) {
    monthError.textContent = 'This field is required';
    errors(monthInput, monthLabel);
  } else {
    noError(monthError, monthInput, monthLabel);
  }

  if (!yearInput.value) {
    yearError.textContent = 'This field is required';
    errors(yearInput, yearLabel);
  } else {
    noError(yearError, yearInput, yearLabel);
  }

  if (dayInput.value && monthInput.value && yearInput.value) {
    checkValid();
  }
}

function checkValid() {
  if (dayInput.value > 31 || dayInput.value < 1) {
    dayError.textContent = 'Must be a valid day';
    errors(dayInput, dayLabel);
    isValid = false;
  } else {
    noError(dayError, dayInput, dayLabel);
    isValid = true;
  }

  if (monthInput.value > 12 || monthInput.value < 1) {
    monthError.textContent = 'Must be a valid month';
    errors(monthInput, monthLabel);
    isValid = false;
  } else {
    noError(monthError, monthInput, monthLabel);
    isValid = true;
  }

  if (yearInput.value > 2026 || yearInput.value < 1900) {
    yearError.textContent = 'Must be a valid year';
    errors(yearInput, yearLabel);
    isValid = false;
  } else {
    noError(yearError, yearInput, yearLabel);
    isValid = true;
  }
  if (isValid) {
    isValidBirthDate();
  }
}

function isValidBirthDate() {
  const month = parseInt(monthInput.value);
  const day = parseInt(dayInput.value);
  const year = parseInt(yearInput.value);

  const date = new Date(year, month - 1, day);

  if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
    noError(dayError, dayInput, dayLabel);
    noError(monthError, monthInput, monthLabel);
    noError(yearError, yearInput, yearLabel);
    isValid = true;
  } else {
    dayError.textContent = 'Must be a valid date';
    errors(dayInput, dayLabel);
    errors(monthInput, monthLabel);
    errors(yearInput, yearLabel);
    isValid = false;
  }

  if (isValid === true) {
    results();
  }
}

function results() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  if (isValid === true) {
    yearResult.textContent = currentYear - yearInput.value;

    monthResult.textContent = currentMonth - monthInput.value;

    dayResult.textContent = currentDay - dayInput.value;
  }
}

function errors(input, label) {
  input.classList.add('error');
  label.style.color = 'var(--clr-red)';
}

function noError(error, input, label) {
  error.textContent = '';
  input.classList.remove('error');
  label.style.color = 'var(--clr-grey-500)';
}
