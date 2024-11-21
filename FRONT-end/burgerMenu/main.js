"use strict";

var burgerButton = document.querySelector(".menu__btn");
var navElement = document.querySelector(".menu");

burgerButton.addEventListener("click", navlistener);

function  navlistener(){
    navElement.classList.toggle("menu--open");
}

