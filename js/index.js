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
