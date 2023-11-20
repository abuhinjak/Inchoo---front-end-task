const hamburger = document.querySelector('.mobile-menu');
const hamburgerClose = document.querySelector('.mobile-menu-close');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
});

hamburgerClose.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});

const shippingHeader = document.querySelector('.shipping-tax-wrap');
const shippingTitle = document.querySelector('.shipping-tax-wrap p');
const countrySelect = document.querySelector('.country-select-wrap');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

shippingHeader.addEventListener('click', function() {
    countrySelect.classList.toggle('open');
    shippingTitle.classList.toggle('open');
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
});
