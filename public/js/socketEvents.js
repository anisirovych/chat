// Init UI
const ui = new UI();
// Init socket 
const socket = io();


// Socket events

socket.on('welcome', room => {
    currentRoom = room;
    ui.hideLogin();
    ui.showAuthorired(); 
});


socket.on('rooms', rooms => ui.generateRooms(rooms)); // получили все комнаты

socket.on('chat message', message => ui.addMessage(message)); // Отправляем сообщение

socket.on('new user joined', user => ui.newUserJoin(user)); // уведомление о новом пользователе

socket.on('roommates', ({usernames}) =>  {
    let users = Object.keys(usernames) // Получили массив из имен ['user1', 'user2']
            .filter(user => usernames[user].room === currentRoom) // => ['user1', 'user2'...];
            .map(user => {
                usernames[user].name = user;
                return usernames[user];
            }); // => [{user1}, {user2}]
   
    ui.generateUsersInRoom(users);
});

socket.on('has left the room', user => ui.userLeftRoom(user));