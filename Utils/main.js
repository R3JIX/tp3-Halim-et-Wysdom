// Charge le contenu HTML des pages
async function loadPages() {
    document.getElementById('homePage').innerHTML = getHomePage();
    document.getElementById('aboutPage').innerHTML = getAboutPage();
    document.getElementById('explorePage').innerHTML = getExplorePage();
    document.getElementById('detailPage').innerHTML = getDetailPage();
    document.getElementById('loginModal').innerHTML = getLoginModal();
    document.getElementById('registerModal').innerHTML = getRegisterModal();
}

// Affiche la page sélectionnée
function showPage(page) {
    document.getElementById('homePage').classList.add('page-hidden');
    document.getElementById('aboutPage').classList.add('page-hidden');
    document.getElementById('explorePage').classList.add('page-hidden');
    document.getElementById('detailPage').classList.add('page-hidden');

    if (page === 'home') {
        document.getElementById('homePage').classList.remove('page-hidden');
    } else if (page === 'about') {
        document.getElementById('aboutPage').classList.remove('page-hidden');
    } else if (page === 'explore') {
        document.getElementById('explorePage').classList.remove('page-hidden');
    } else if (page === 'detail') {
        document.getElementById('detailPage').classList.remove('page-hidden');
    }

    window.scrollTo(0, 0);
}

// Ouvre la fenêtre modale
function openModal(type) {
    if (type === 'login') {
        document.getElementById('loginModal').classList.add('active');
    } else if (type === 'register') {
        document.getElementById('registerModal').classList.add('active');
    }
}

// Ferme la fenêtre modale
function closeModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('registerModal').classList.remove('active');
}

// Bascule vers le formulaire d'inscription
function switchToRegister() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('registerModal').classList.add('active');
}

// Bascule vers le formulaire de connexion
function switchToLogin() {
    document.getElementById('registerModal').classList.remove('active');
    document.getElementById('loginModal').classList.add('active');
}

// Fermer la modale en cliquant à l'extérieur
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    if (event.target === loginModal) {
        closeModal();
    }
    if (event.target === registerModal) {
        closeModal();
    }
}

// Charge les pages au démarrage
document.addEventListener('DOMContentLoaded', loadPages);