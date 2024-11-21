'use strict'

var messageElement = document.querySelector("#message");
var messages = ["wesh","sa va", "la biz", "tranquilou bilou"];
var randomMessage = messages[getRandomIntInclusive(0, messages.length-1)];
messageElement.innerHTML = randomMessage

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}