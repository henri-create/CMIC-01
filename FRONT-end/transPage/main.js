"use strict"
//bloquer l'ouverture du lien 
//ajouter anim css
//addEventListener animationend reactive le lien
var link = document.querySelector(".link");


link.addEventListener("click", PageTransition)

function PageTransition(event){
    event.preventDefault();
    var linkhref = link.href;
    
    document.body.classList.add("pageTransition");
    document.body.addEventListener("animationend", function(){
        //quand l'anim est terminé, l'url de la fentre est remis dedans
        window.location = linkhref;
    });

}
