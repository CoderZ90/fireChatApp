var button = document.querySelector('#start');
var button2 = document.querySelector('#button2')
var container = document.querySelector('#video-app');
var messageApp = document.querySelector('.chat__section');
var api = null;

button.addEventListener('click', () => {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var stringLength = 10;
    messageApp.classList.add('hidden');

    function pickRandom() {
        return possible[Math.floor(Math.random() * possible.length)];
    }

    var randomString = Array.apply(null, Array(stringLength)).map(pickRandom).join('');
    var domain = "meet.jit.si";
    var options = {
        "roomName": randomString,
        "parentNode": container,
        "width": 370,
        "height": 580,
    };
    api = new JitsiMeetExternalAPI(domain, options);
});

// Video Chat App Activate By Clicking Icon

button2.addEventListener('click', () => {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var stringLength = 10;
    messageApp.classList.add('hidden');

    function pickRandom() {
        return possible[Math.floor(Math.random() * possible.length)];
    }

    var randomString = Array.apply(null, Array(stringLength)).map(pickRandom).join('');
    var domain = "meet.jit.si";
    var options = {
        "roomName": randomString,
        "parentNode": container,
        "width": 370,
        "height": 580,
    };
    api = new JitsiMeetExternalAPI(domain, options);
});