
  //sound status
  const soundButton = document.getElementById('sound_button');
  const bgm = document.querySelector('.bgm');
  const soundStatus = document.querySelector('.sound_status');

  soundButton.addEventListener("click", ()=>{
    if(!bgm.paused) {
      bgm.pause();
      soundButton.innerHTML = 'SOUND OFF';
      soundButton.classList.toggle('sound_status_on');
      soundButton.classList.toggle('sound_status');
      console.log(soundStatus);
    }else {
      bgm.play();
      soundButton.innerHTML = 'SOUND ON';
      soundButton.classList.toggle('sound_status');
      soundButton.classList.toggle('sound_status_on');
      console.log(soundStatus);
    }
  });

