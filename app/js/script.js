/////to hide or show the menu

const headernav = document.querySelector('.header__nav'),
    headertoggle = document.querySelector('.header__toggle'),
    headerclose = document.querySelector('.header__close');

if (headertoggle) {
    headertoggle.addEventListener('click', () => {
        headernav.classList.add('show_menu');
    });
}

if (headerclose) {
    headerclose.addEventListener('click', () => {
        headernav.classList.remove('show_menu');
    });
}
//////pour enlever le menu de navigation lorsqu'on clique sur un headerlink

const headerlink = document.querySelectorAll('.header__link');

function removemenu() {
    headernav.classList.remove('show_menu');
}
headerlink.forEach((n) => n.addEventListener('click', removemenu));



///////////////////////////////////////////////////////////
// pour gérer la timeline au niveau de expérience
const tabs = document.querySelectorAll('[data-target]'),
    tableContent = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tableContent.forEach((tabcont) => {
            tabcont.classList.remove('experience__active');
        });
        target.classList.add('experience__active');

        tabs.forEach((tab) => {
            tab.classList.remove('experience__active');
        });
        tab.classList.add('experience__active');
    });
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
