let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function() {

  if (xhr.readyState === xhr.DONE) {
    let response = JSON.parse(this.responseText);
    let pollTitle = document.getElementById('poll__title');
    let pollAnswers = document.getElementById('poll__answers');
    let answers = response.data.answers;
    pollTitle.innerText = `${response.data.title}`;
    for (let i = 0; i < answers.length; i++) {
      pollAnswers.innerHTML += `
   <button class="poll__answer">
          ${answers[i]}
        </button>
`
    }
    let button = Array.from(document.querySelectorAll('.poll__answer'));
    button.forEach(item =>
      item.addEventListener('click', function() {
        alert('Спасибо, Ваш голос засчитан!');
      }));
  }
})