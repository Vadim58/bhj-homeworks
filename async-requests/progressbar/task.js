const progressBar = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', function(e) {
    progressBar.value = e.loaded / e.total;
  });
  xhr.upload.addEventListener('error', function() {
    alert('произошла ошибка!');
  });
  xhr.upload.addEventListener('load', function() {
    alert('данные загружены');
  });
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
});