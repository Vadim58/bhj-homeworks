let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function() {

if (xhr.readyState === xhr.DONE) {
let response = JSON.parse(this.responseText);
console.log(response);
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
console.log(response.data.answers);
let answers = response.data.answers;
pollTitle.innerText = `${response.data.title}`;
for (let i = 0; i < answers.length; i++) {
pollAnswers.innerHTML += `
   <button class="poll__answer">
          ${answers[i]}
        </button>
`
}
let button = document.querySelectorAll('');

}
})