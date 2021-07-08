let progressBar = document.getElementById('progress');
function barEnlarge() {
  if (progressBar.value < 0.8) {
    progressBar.value = progressBar.value + 0.001;
  }
}
let form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.UNSENT) {
      progressBar.value = 0.02;
    }
    if (xhr.readyState === xhr.OPENED) {
      progressBar.value = 0.04;
    }
    if (xhr.readyState === xhr.HEADERS_RECEIVED) {
      progressBar.value = 0.1;
      setInterval(barEnlarge, 100);
    }
    if (xhr.readyState === xhr.LOADING) {
      setInterval(barEnlarge, 30000);
    }
    if (xhr.readyState === xhr.DONE) {
      progressBar.value = 1;
    }
  })
})