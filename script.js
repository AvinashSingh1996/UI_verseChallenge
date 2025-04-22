const playBtn = document.getElementById('playBtn');
const recBtn = document.getElementById('recBtn');
const repeatBtn = document.getElementById('repeatBtn');
const clickSound = document.getElementById('clickSound');

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

playBtn.addEventListener('click', () => {
  playBtn.classList.toggle('active');
  playClick();
});

recBtn.addEventListener('click', () => {
  recBtn.classList.toggle('active');
  playClick();
});

repeatBtn.addEventListener('click', () => {
  repeatBtn.classList.toggle('active');
  playClick();
});
