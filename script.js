document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const container = document.querySelector('.container');
  const audio = document.getElementById('background-music');

  function updateAnimationDuration() {
      const messageWidth = message.offsetWidth;
      const containerWidth = container.offsetWidth;
      const totalDistance = containerWidth + messageWidth;

      const duration = totalDistance / 200; // Adjust the speed by changing the denominator
      const messages = document.querySelectorAll('.message');
      messages.forEach(msg => {
          msg.style.animationDuration = `${duration}s`;
      });
  }
   
  window.addEventListener('resize', updateAnimationDuration);
  updateAnimationDuration();

    audio.volume = 0;  
  audio.play().then(() => {
      
      let volume = 0;
      const interval = setInterval(() => {
          if (volume < 1) {
              volume += 0.05;
              audio.volume = volume;
          } else {
              clearInterval(interval);
          }
      }, 100);
  }).catch(error => {
      console.log('Autoplay failed:', error);
  });
});
