// Importing socket and other
const socket = io()
let name
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')

do {
    name = prompt('Please Enter Your Name To Continue:')
} while(!name)

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
        // console.log('send')
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append
    appendMessage(msg, 'outgoing')
    textarea.value = ''

    // Send to server
    socket.emit('message', msg)
}
// Message Logic
function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    // Automatic scroll
    scrollToBottom()
}

// Recive Message
socket.on('message', (msg) => {
    // console.log(msg)
    appendMessage(msg, 'incoming')
    // Automatic Scroll
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}