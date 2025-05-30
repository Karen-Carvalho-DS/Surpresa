function openGift() {
  document.querySelector('.gift-box').style.display = 'none';
  document.querySelector('.content').classList.remove('hidden');
  launchHearts();
}

function launchHearts() {
  const hearts = document.querySelector('.hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: absolute;
  bottom: -20px;
  width: 20px;
  height: 20px;
  background: pink;
  transform: rotate(45deg);
  animation: floatUp linear;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: pink;
  border-radius: 50%;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  left: -10px;
  top: 0;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(45deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);