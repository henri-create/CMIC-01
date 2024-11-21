// Réponses boules
const responses = [
    "Ouais",
    "Naann",
    "non-peut etre",
    "Kess j'en sais",
    "zebi",
    "Mes couilles ti",
    "Pia d'mes couilles",
    "Ferdom",
    "oufti",
    "un bandit francis",
    "Qué neni",
    "Carapills", 
    "T'es d'ja un Ket", 
];

// Fonction pour l'aléatoire
function getAnswer() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    document.getElementById('response').textContent = response;
}

// S'assurer que l'événement est attaché après que la page soit complètement chargée
window.addEventListener('DOMContentLoaded', function() {
    const magicBall = document.getElementById('magicBall');
    
    // Ajoute l'événement de clic à l'image
    magicBall.addEventListener('click', getAnswer);
});