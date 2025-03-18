(function init100vh() {
  function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();

window.addEventListener('orientationchange', () => {
  location.reload(true);
});


// padding no-ios
document.addEventListener('DOMContentLoaded', function () {
  let sum = document.querySelector('.reg__sum');
  let fs = document.querySelector('.reg__fs');

  if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
    console.log('ADD CLASS no iOS');
    sum.classList.add('noios-padding');
    fs.classList.add('noios-padding');
  }
});
