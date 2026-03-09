const formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const r = document.querySelector('#results');

  if (isNaN(h) || h < 0) {
    r.innerHTML = 'Please give a valid height';
  } else if (isNaN(w) || w < 0) {
    r.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (w / ((h * h) / 1000)).toFixed(2);
    r.innerHTML = `<span>${bmi}</span>`;
  }
});
