function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const backgroundEl = document.querySelector('body');
let colorTimer = null;

let rave = new Audio(
  'https://musmore.com/load/577266210/Dxrk_-_RAVE_(musmore.com).mp3'
);
let raveLord = document.createElement('div');
backgroundEl.append(raveLord);

const raveLordEl = document.querySelector('div');
raveLordEl.style.position = 'absolute';
raveLordEl.style.top = '50%';
raveLordEl.style.left = '50%';
raveLordEl.style.transform = 'translate(-50%,-50%)';

let raveLordContent =
  '<button type="button" data-rave>CLICK ONLY IF YOU ARE THE RAVELORD</button><img class="ravelord-img" src="https://media.tenor.com/OQd19jDQ3vwAAAAC/nito-souls.gif" alt="RAVELORD NITO" style = "opacity: 0"/>';

startButtonEl.addEventListener('click', onStartClick);
stopButtonEl.addEventListener('click', onStopClick);

stopButtonEl.disabled = true;

const changeColor = () =>
  (backgroundEl.style.backgroundColor = getRandomHexColor());

function onStartClick(e) {
  changeColor();
  colorTimer = setInterval(() => changeColor(), 1000);

  raveLordEl.insertAdjacentHTML('beforeend', raveLordContent);
  const raveLordButtonEl = document.querySelector('[data-rave]');
  raveLordButtonEl.style.width = '400px';
  raveLordButtonEl.addEventListener('click', onRaveLord);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function onRaveLord(e) {
  const raveLordImgEl = document.querySelector('.ravelord-img');
  raveLordImgEl.style.opacity = '1';
  clearInterval(colorTimer);
  colorTimer = setInterval(
    () => (backgroundEl.style.backgroundColor = getRandomHexColor()),
    250
  );
  rave.play();
}

function onStopClick(e) {
  clearInterval(colorTimer);
  rave.pause();
  raveLordEl.innerHTML = '';
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}
