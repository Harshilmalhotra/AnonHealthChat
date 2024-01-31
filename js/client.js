const socket = io('http://localhost:3000');


const form = document.grtelElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");


const name = prompt("Enter your name to join");
socket.emit('new-user-joined',name);