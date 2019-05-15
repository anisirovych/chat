class Chat {
    constructor() {
        this.login = document.querySelector('.login');
        this.authorized = document.querySelector('.authorized');
        this.roomsList = document.querySelector('.rooms-list');
        this.usersList = document.querySelector('.users-list');
        this.messageContainer = document.querySelector('.message-container');
        this.userName = document.querySelector('.user-name-login');
    }

    hideLogin() {
        this.login.style.display = 'none';
    }

    showAuthorired() {
        this.authorized.style.display = 'block';
    }

    generateUsersInRoom(users) {
        this.usersList.innerHTML = '';
        users.forEach(user => this.usersList.insertAdjacentHTML('beforeend', Chat.userListTemplate(user)));
    }

    generateRooms(rooms) {
        this.roomsList.innerHTML = ''; 
        rooms.forEach((room, index)  => {
            this.roomsList.insertAdjacentHTML('beforeend', Chat.roomListTemplate(room, index));
        });
    }

    addMessage(username, message) {
        this.messageContainer.insertAdjacentHTML('beforeend', Chat.messageTemplate(username, message));
    }

    newUserJoin(name) {
        // this.messageContainer.innerHTML = '';
        this.messageContainer.insertAdjacentHTML('beforeend', Chat.newUserJoinTemplate(name));
        $('.message-container').animate({scrollTop: $('.message-container')[0].scrollHeight}, 1000);
    }

    userLeftRoom(user) {
        this.messageContainer.insertAdjacentHTML('beforeend', Chat.userLeftRoomTemplate(user));
        $('.message-container').animate({scrollTop: $('.message-container')[0].scrollHeight}, 1000);
    }

    static userLeftRoomTemplate(user) {
        return `
            <div class="message">
              <div class="card blue-grey darken-1 left-room">
                  <div class="card-content white-text">
                        <p> ${user} перешёл в другую комнату &#x1f621</p>
                    </div>
                </div>
            </div>
        `;
    }

    static roomListTemplate(room, index) {
        return `
            <li> <a href="#" class="waves-effect" data-room-index="${index}">${room}</a> </li>
        `;
    }

    static userListTemplate({name, id}) {
        return `
            <li class="collection-item" data-user-id="${id}">${name}</li>
        `
    }

    static messageTemplate(user, msg) {
        return `
            <div class="message">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p><span class="user-name__color">${user}</span>: ${msg}</p>
                    </div>
                </div>
            <div>
        `;
    }

    static newUserJoinTemplate(name) {
        return `
            <div class="message">
                <div class="card teal lighten-2 join-chat">
                    <div class="card-content white-text">
                        <p> ${name} присоединился к чату &#x270b</p>
                    </div>
                </div>
            </div>
        `;
    }
}   