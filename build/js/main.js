"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener('orientationchange', function () {
  location.reload(true);
});

// padding no-ios
document.addEventListener('DOMContentLoaded', function () {
  // let date = document.querySelector('.reg__date');
  // let time = document.querySelector('.reg__time');
  // let teams = document.querySelectorAll('.reg__team');
  // let mid = document.querySelector('.footer__mid');
  // let before = document.querySelector('.footer__before');

  if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
    // console.log('ADD CLASS no iOS')
    // date.classList.add('noios-padding');
    // time.classList.add('noios-padding');
    // teams.forEach((team) => {
    //   team.classList.add('noios-padding');
    // });
    // mid.classList.add('noios-padding');
    // before.classList.add('noios-padding');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmNhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxTQUFTQSxTQUFTQSxDQUFBLEVBQUc7RUFDcEIsU0FBU0MsU0FBU0EsQ0FBQSxFQUFHO0lBQ25CLElBQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUcsSUFBSTtJQUNsQ0MsUUFBUSxDQUFDQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sS0FBQUMsTUFBQSxDQUFLUCxFQUFFLE9BQUksQ0FBQztFQUMvRDtFQUNBRCxTQUFTLENBQUMsQ0FBQztFQUNYRSxNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRVQsU0FBUyxDQUFDO0FBQzlDLENBQUMsRUFBRSxDQUFDO0FBRUpFLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsWUFBTTtFQUNqREMsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQzs7QUFFRjtBQUNBUCxRQUFRLENBQUNLLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxJQUFJLENBQUMsc0JBQXNCLENBQUNHLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMsRUFBRTtJQUNyRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUE7QUFFSixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBpbml0MTAwdmgoKSB7XHJcbiAgZnVuY3Rpb24gc2V0SGVpZ2h0KCkge1xyXG4gICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XHJcbiAgfVxyXG4gIHNldEhlaWdodCgpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG59KSgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xyXG4gIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxufSk7XHJcblxyXG4vLyBwYWRkaW5nIG5vLWlvc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ19fZGF0ZScpO1xyXG4gIC8vIGxldCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ19fdGltZScpO1xyXG4gIC8vIGxldCB0ZWFtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWdfX3RlYW0nKTtcclxuICAvLyBsZXQgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbWlkJyk7XHJcbiAgLy8gbGV0IGJlZm9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX2JlZm9yZScpO1xyXG5cclxuICBpZiAoIS9pUGFkfGlQaG9uZXxpUG9kfE1hYy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0FERCBDTEFTUyBubyBpT1MnKVxyXG4gICAgLy8gZGF0ZS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XHJcbiAgICAvLyB0aW1lLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcclxuICAgIC8vIHRlYW1zLmZvckVhY2goKHRlYW0pID0+IHtcclxuICAgIC8vICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIG1pZC5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XHJcbiAgICAvLyBiZWZvcmUuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==
