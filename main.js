var page = document.querySelector('html');
var receiveMessageButton = document.querySelector('button');
var mantraZone = document.querySelector('.mantra-zone');
var meditateImg = document.querySelector('img');

var msgSpan = document.createElement('span');
msgSpan.classList.add('hidden');
mantraZone.appendChild(msgSpan);

var spinner = document.createElement('div');
spinner.classList.add('spinner', 'hidden');
spinner.setAttribute('id', 'fadeAndHide');
mantraZone.appendChild(spinner);

var sparkleEmoji = String.fromCodePoint(0x2728);  // this function stringifies emoji code
var messageTypeStr;
var msgText;

receiveMessageButton.addEventListener('click', function () {
    if(validateRadioButtons()) {
        messageTypeStr = document.querySelector('input[name="message-type"]:checked').value || messageTypeStr;
    } else {
        msgSpan.innerText = "^^ Please select a message type! ^^";
        msgSpan.setAttribute('id', 'validation');
        mantraZone.appendChild(msgSpan);
        meditateImg.classList.add('hidden');
        msgSpan.classList.remove('hidden');
        return;
    }

    msgSpan.classList.add('hidden');
    resetAnimation(spinner);
    mantraZone.removeChild(msgSpan);
    changeBackground(messageTypeStr);
    meditateImg.classList.add('hidden');
    spinner.classList.remove('hidden');
    msgText = `${sparkleEmoji} ${getMessage(messageTypeStr)} ${sparkleEmoji}`
    msgSpan.innerText = msgText;
    msgSpan.setAttribute('id', 'revealMeAfter10Seconds')
    mantraZone.appendChild(msgSpan);
    setTimeout(() => {
        msgSpan.classList.remove('hidden');
    }, 2000);
});

function validateRadioButtons() {
    var radios = document.getElementsByName('message-type');
    var radioChecked = false;

    radios.forEach((radio) => {
        if(radio.checked) {
            radioChecked = true;
        }
    });

    return radioChecked;
}

function changeBackground(msgType) {
    if(msgType === 'affirmation') {
        page.style.background = `linear-gradient(#D9AFD9 16%, #97D9E1)`;
    } else {
        page.style.background = `linear-gradient(#85FFBD 16%, #FFFB7D)`;
    }
}
 
function getMessage(messageTypeStr) {
    var strToVar = eval(`${messageTypeStr}s`)  // eval() was the easiest way I found to use our incoming string to access the similarly named data arrays
    var randomMessage = strToVar[getRandomIndex(strToVar)];
    return randomMessage;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function resetAnimation(el) {
    el.style.animation = 'none';
    el.offsetHeight; // this is one of the props that triggers reflow automatically
    el.style.animation = ''; // setting this to empty string forces inheritance from css again
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
    `It’s easier to put on slippers than to carpet the whole world.`,
    "Labels disable."
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    `Don’t let yesterday take up too much of today.`,
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
    "I am the sky, the rest is weather.",
    "When you come to a fork in the road.... take it.",
    "You can observe a lot by just watching.",
    "It ain't over till it's over.",
    "We made too many wrong mistakes.",
    "No one goes there nowadays, it’s too crowded.",
    "I always thought the record would stand until it was broken.",
    "Love is the most important thing in the world, but baseball is pretty good, too.",
    "In theory there is no difference between theory and practice. In practice there is.",
    "Pair up in threes.",
    "You've got to be very careful if you don't know where you are going, because you might not get there.",
    "The future ain’t what it used to be.",
    "I usually take a two-hour nap from 1 to 4.",
    "If the world was perfect, it wouldn't be.",
    "You don’t have to swing hard to hit a home run. If you got the timing, it’ll go.",
    "Ninety percent of the game is half mental.",
    "Never answer an anonymous letter.",
    "Why buy good luggage? You only use it when you travel.",
    "Take it with a grin of salt.",
    "It gets late early out here.",
    "It's deja vu all over again",
    "I never said most of the things I said."
];
