const switchBtn = document.querySelector('#btn');
const img = document.querySelector('img');

var clicked = false;
img.src = './assets/images/cat.jpg';
switchBtn.textContent = 'Bytt til hund';
let toggleSwitchBtn = () => {
  if (clicked) {
    clicked = false;
    img.src = './assets/images/dog.jpg';
    switchBtn.textContent = 'Bytt til katt';
  } else {
    clicked = true;
    img.src = './assets/images/cat.jpg';
    switchBtn.textContent = 'Bytt til hund';
  }
};

switchBtn.addEventListener('click', toggleSwitchBtn);
