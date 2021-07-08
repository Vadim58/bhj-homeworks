let progressBar = document.getElementById('progress');
console.log(progressBar.value);
var formData = new FormData();

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
xhr.send(formData);
