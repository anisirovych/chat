// Init elements
const loginForm = document.forms['login-form'];
const userName = loginForm.elements['username'];
const messageForm = document.forms['send-message'];
const message = messageForm.elements['message'];
const roomList = document.querySelector('.rooms-list');
const userNameLogin = document.querySelector('.user-name');
const emojionearea = document.querySelector('.emojionearea');
const submitMessage = document.getElementById('submit-message');
const clearMessages = document.getElementById('clear-message');
const exitBtn = document.getElementById('exit');

// Init local variables
let messageContainer = document.querySelector('.message-container');

var logReg = /^[a-zа-яё]+$/i;


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();


    if ( userName.value ) {
        const name = userName.value;
        socket.emit('new user', name);
        userNameLogin.insertAdjacentHTML('beforebegin', name); // вывод никнейма 
    } else {
        throw new Error ('asd')
    }
});

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if ( message.value ) {
        socket.emit('message', message.value);
        message.innerHTML = '';
        messageForm.reset();

        $('.message-container').animate({scrollTop: $('.message-container')[0].scrollHeight}, 500);
    
        var element = $('#message').emojioneArea(); 
        element[0].emojioneArea.setText(''); // clear input after send message
    }
});


clearMessages.addEventListener('click', function (e) {
    e.preventDefault();
    messageContainer.innerHTML = '';
});

exitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.location.reload(true);
});

roomList.addEventListener('click', function (e) {
    if ( e.target.dataset.roomIndex ) {
        let index = e.target.dataset.roomIndex;
        socket.emit('roomchange', index);
        $('.sidenav').sidenav('close'); // закрываем боковую панель при смене комнаты
    }
});
