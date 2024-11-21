"use strict";
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var dice = getRandomIntInclusive(1, 6);
var roll = document.querySelector(".foo");
roll.innerText = "le dé affiche" + dice