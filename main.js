var receiveMessageButton = document.querySelector('button');
var mantraZone = document.querySelector('.mantra-zone');
var medidateImg = document.querySelector('img');

var msgSpan = document.createElement('span');
msgSpan.classList.add('hidden');
mantraZone.appendChild(msgSpan);
receiveMessageButton.addEventListener('click', function () {
    var messageTypeStr = document.querySelector('input[name="message-type"]:checked').value;
    medidateImg.classList.add('hidden');
    msgSpan.innerText = getMessage(messageTypeStr);
    msgSpan.classList.remove('hidden');
});

function getMessage(messageTypeStr) {
    var strToVar = eval(`${messageTypeStr}s`)
    var randomMessage = strToVar[getRandomIndex(strToVar)];
    return randomMessage;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices.",
    "I'm good enough, I'm smart enough, and doggone it, people like me.",
    "That's just stinkin' thinkin!",
    "You're should-ing all over yourself.",
    "Denial ain't just a river in Egypt!",
    "I am a worthy human being.",
    "...and that's...okay.",
    "Trace it, face it, and erase it.",
    "I don't know what I'm doing. They're gonna cancel the show. I'm gonna die homeless and penniless and twenty pounds overweight and no one will ever love me.",
    "I'm in a shame spiral.",
    "You're only as sick as your secrets.",
    "Compare and despair.",
    "You need a checkup from the neckup.",
    "I am a human being, not a human doing.",
    "Pee-wee Herman: There but for the grace of God go I.",
    "It’s easier to put on slippers than to carpet the whole world.",
    "Labels disable."
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don’t let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."
];
