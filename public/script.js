// Connect to the server
const socket = io();

// Elements
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        // Send the message to the server
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

// Listen for chat messages from the server
socket.on('chat message', ({ id, message }) => {
    const div = document.createElement('div');
    div.textContent = `${id}: ${message}`;
    div.className = id === socket.id ? 'you' : 'other';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll
});
