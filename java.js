// Popup Animations
const popup = document.querySelector('.popup');
popup.classList.add('animate__animated', 'animate__bounceIn');

// Click Sounds
const button = document.querySelector('.button');
const audio = new Audio('click-sound.mp3');
button.addEventListener('click', () => {
  audio.play();
});

// Click Animations
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
      button.classList.remove('animate__animated', 'animate__pulse');
    }, 1000);
  });
});
