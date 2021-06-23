const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const botMessagesList = [
    'вы кто такие',
    'я вас не звал',
    'спасибо, что выбрали нашу компанию!',
    'спокойной ночи'
];
const time = new Date();
chatInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' && this.value.length > 0) {
        messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
    <div class="message__text">
     ${chatInput.value} 
    </div>
  </div>
`
        chatInput.value = null;
        messages.innerHTML += `
  <div class="message>
    <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
    <div class="message__text">
     ${botMessagesList[Math.floor(Math.random() * botMessagesList.length)]} 
    </div>
  </div>
`
    }
})
chatWidget.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});