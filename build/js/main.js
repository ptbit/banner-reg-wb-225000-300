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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmNhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxTQUFTQSxTQUFTQSxDQUFBLEVBQUc7RUFDcEIsU0FBU0MsU0FBU0EsQ0FBQSxFQUFHO0lBQ25CLElBQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUcsSUFBSTtJQUNsQ0MsUUFBUSxDQUFDQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sS0FBQUMsTUFBQSxDQUFLUCxFQUFFLE9BQUksQ0FBQztFQUMvRDtFQUNBRCxTQUFTLENBQUMsQ0FBQztFQUNYRSxNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRVQsU0FBUyxDQUFDO0FBQzlDLENBQUMsRUFBRSxDQUFDO0FBRUpFLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsWUFBTTtFQUNqREMsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQzs7QUFFRjtBQUNBUCxRQUFRLENBQUNLLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxJQUFJLENBQUMsc0JBQXNCLENBQUNHLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMsRUFBRTtJQUNyRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUE7QUFFSixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBpbml0MTAwdmgoKSB7XG4gIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcbiAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gIH1cbiAgc2V0SGVpZ2h0KCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xufSkoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xuICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG59KTtcblxuLy8gcGFkZGluZyBuby1pb3NcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ19fZGF0ZScpO1xuICAvLyBsZXQgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdfX3RpbWUnKTtcbiAgLy8gbGV0IHRlYW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ19fdGVhbScpO1xuICAvLyBsZXQgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbWlkJyk7XG4gIC8vIGxldCBiZWZvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19iZWZvcmUnKTtcblxuICBpZiAoIS9pUGFkfGlQaG9uZXxpUG9kfE1hYy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdBREQgQ0xBU1Mgbm8gaU9TJylcbiAgICAvLyBkYXRlLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICAvLyB0aW1lLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICAvLyB0ZWFtcy5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgLy8gICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICAvLyB9KTtcbiAgICAvLyBtaWQuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuICAgIC8vIGJlZm9yZS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4gIH1cbn0pO1xuIl19
