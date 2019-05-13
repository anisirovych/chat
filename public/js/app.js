// Init elements
const loginForm = document.forms['login-form'];
const userName = loginForm.elements['username'];
const messageForm = document.forms['send-message'];
const message = messageForm.elements['message'];
const roomList = document.querySelector('.rooms-list');
const userNameLogin = document.querySelector('.user-name');
const emojionearea = document.querySelector('.emojionearea');
const submitMessage = document.getElementById('submit-message');
const exitBtn = document.getElementById('exit');

// Init local variables
let currentRoom; // undefined


// Forms events
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if ( userName.value ) {
        const name = userName.value;
        socket.emit('new user', name);
        userNameLogin.insertAdjacentHTML('beforebegin', name); // вывод никнейма 
    }
});

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if ( message.value ) {
        socket.emit('message', message.value);
        message.innerHTML = '';
        messageForm.reset();
        
        var element = $('#message').emojioneArea(); 
        element[0].emojioneArea.setText(''); // clear input after send message
    }
});

exitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    console.log('exit from current session')
});

roomList.addEventListener('click', function (e) {
    if ( e.target.dataset.roomIndex ) {
        let index = e.target.dataset.roomIndex;
        socket.emit('roomchange', index);
        $('.sidenav').sidenav('close'); // закрываем боковую панель при смене комнаты
    }
});
