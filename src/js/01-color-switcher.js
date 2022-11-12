function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const backgroundEl = document.querySelector('body');
let colorTimer = null;

startButtonEl.addEventListener('click', onStartClick);
stopButtonEl.addEventListener('click', onStopClick);

stopButtonEl.disabled = true;

const changeColor = () =>
  (backgroundEl.style.backgroundColor = getRandomHexColor());

function onStartClick(e) {
  changeColor();
  colorTimer = setInterval(() => changeColor(), 1000);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function onStopClick(e) {
  clearInterval(colorTimer);

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}
