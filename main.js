const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');

openNav.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.add('active');
});

closeNav.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
});
