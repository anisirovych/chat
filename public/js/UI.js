
class UI {
    constructor() {
        this.login = document.querySelector('.login');
        this.authorized = document.querySelector('.authorized');
        this.roomsList = document.querySelector('.rooms-list');
        this.usersList = document.querySelector('.users-list');
        this.messageContainer = document.querySelector('.message-container');
        this.userName = document.querySelector('.user-name-login');
        console.log(this.login);
    }

    showLogin() {

    }

    hideLogin() {
        this.login.style.display = 'none';
    }

    showAuthorired() {
        this.authorized.style.display = 'block';
    }

    hideAuthorired() {

    }

    generateUsersInRoom(users) {
        this.usersList.innerHTML = '';
        users.forEach(user => this.usersList.insertAdjacentHTML('beforeend', UI.userListTemplate(user)));
    }

    generateRooms(rooms) {
        this.roomsList.innerHTML = ''; 
        rooms.forEach((room, index)  => {
            this.roomsList.insertAdjacentHTML('beforeend', UI.roomListTemplate(room, index));
        });
    }

    addMessage(message) {
        this.messageContainer.insertAdjacentHTML('beforeend', UI.messageTemplate(message));
    }

    newUserJoin(name) {
        // this.messageContainer.innerHTML = '';
        this.messageContainer.insertAdjacentHTML('beforeend', UI.newUserJoinTemplate(name));
        
    }

    userLeftRoom(user) {
        this.messageContainer.insertAdjacentHTML('beforeend', UI.userLeftRoomTemplate(user));
    }

    static userLeftRoomTemplate(user) {
        return `
            <div class="card blue-grey darken-1 left-room">
                <div class="card-content white-text">
                    <p> ${user} перешёл в другую комнату &#x1f621</p>
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

    static messageTemplate(msg) {
        return `
            <div class="message">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>${msg.message}</p>
                    </div>
                </div>
            <div>
        `;
    }

    static newUserJoinTemplate(name) {
        return `
            <div class="card teal lighten-2 join-chat">
                <div class="card-content white-text">
                    <p> ${name} присоединился к чату &#x270b</p>
                </div>
            </div>
        `;
    }

}   