// Init UI
const chat = new Chat();
// Init socket 
const socket = io();

// Init local variables
let currentRoom; // undefined

// Socket events

socket.on('welcome', room => {
    currentRoom = room;
    chat.hideLogin();
    chat.showAuthorired(); 
});


socket.on('rooms', rooms => chat.generateRooms(rooms)); // получили все комнаты

socket.on('chat message', ({username, message}) => chat.addMessage(username, message)); // Отправляем сообщение

socket.on('new user joined', user => chat.newUserJoin(user)); // уведомление о новом пользователе

socket.on('roommates', ({usernames}) =>  {
    let users = Object.keys(usernames) // Получили массив из имен ['user1', 'user2']
            .filter(user => usernames[user].room === currentRoom) // => ['user1', 'user2'...];
            .map(user => {
                usernames[user].name = user;
                return usernames[user];
            }); // => [{user1}, {user2}]
   
            chat.generateUsersInRoom(users);
});

socket.on('has left the room', user => chat.userLeftRoom(user));