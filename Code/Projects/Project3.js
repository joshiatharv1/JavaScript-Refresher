const myDate = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  myDate.innerHTML = date.toLocaleTimeString();
}, 1000);
