const mainNav = document.querySelector('.main-nav');
mainNav.classList.remove('main-nav--opened');
const mainNavSubscription = document.querySelector('.main-nav__subscription');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNavToggle.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--opened');

    if (mainNav.classList.contains('main-nav--opened')) {
        mainNavSubscription.textContent = 'Close site menu';
    } else {
        mainNavSubscription.textContent = 'Open site menu';
    }
});
