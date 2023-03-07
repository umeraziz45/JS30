const keys = document.querySelectorAll('.key');

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}'`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0; // forces sound to restart on keydown
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


keys.forEach( key => {
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);