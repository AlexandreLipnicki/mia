let fr = document.getElementsByClassName('fr');
let eng = document.getElementsByClassName('eng');
let langue = document.getElementById('langue');

function changeLang() {
    lang = document.getElementById('langue').value;
    if (lang === 'fr') {
        for (let i = 0; i < fr.length; i++) {
            fr[i].style.display = 'block';
        }
        for (let i = 0; i < eng.length; i++) {
            eng[i].style.display = 'none';
        }
    } else if (lang === 'eng') {
        for (let i = 0; i < fr.length; i++) {
            fr[i].style.display = 'none';
        }
        for (let i = 0; i < eng.length; i++) {
            eng[i].style.display = 'block';
        }
    }
}
changeLang();
langue.addEventListener('change', changeLang);

let burger = document.getElementById('header-svg');
let modal = document.getElementById('header-modal');

// Ouvre et ferme le modal lorsque l'on clique sur le burger
burger.addEventListener('click', function (event) {
    event.stopPropagation(); // empêche la fermeture du modal lors du clic sur le burger
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
});

// Ferme le modal lorsqu'on clique n'importe où sur la page
document.addEventListener('click', function () {
    modal.style.display = 'none';
});



    
