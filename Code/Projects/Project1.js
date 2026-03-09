const allButtons = document.querySelectorAll('.button');

allButtons.forEach((button) => {
  let mybody = document.body;

  button.addEventListener('click', () => {
    mybody.setAttribute('style', `background-color: ${button.id}`);
  });
});
//  OR ---- >
const allButtons = document.querySelectorAll('.button');

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = button.id;
    });
});