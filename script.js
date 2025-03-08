// Animation des étoiles
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Création des étoiles
const stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.5 + 0.2,
}));

// Fonction d'animation des étoiles
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > window.innerHeight) star.y = 0;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animateStars);
}

animateStars();

// Fonction pour démarrer la simulation
function startSimulation() {
    // Masquer la page d'accueil (le titre, le slogan et le bouton)
    document.querySelector('.content').style.display = 'none';
    document.getElementById('rocket').style.display = 'none';
    
    // Afficher la bannière Premium
    document.getElementById('premiumBanner').style.display = 'block';

    // Afficher l'image Mars et l'image 360
    document.getElementById('marsImage').style.display = 'block'; // Afficher l'image de Mars
    document.getElementById('image360').style.display = 'block'; // Afficher l'image 360

    // Agrandir l'image de Mars au démarrage
    document.getElementById('marsImage').style.width = '400px'; // Agrandir l'image de Mars
    document.getElementById('marsImage').style.transition = 'all 0.5s ease';

    // Animer la fusée
    startRocketAnimation();
}

// Fonction pour afficher/cacher les fonctionnalités premium
function toggleFeatures() {
    const features = document.getElementById('premiumFeatures');
    const message = document.getElementById('premiumMessage');
    const arrow = document.getElementById('toggleFeatures');
    
    if (features.style.display === 'none') {
        features.style.display = 'block';
        message.style.display = 'none';
        arrow.textContent = '▲';
    } else {
        features.style.display = 'none';
        message.style.display = 'block';
        arrow.textContent = '▼';
    }
}
