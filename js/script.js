const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__list');

const navMenuLinks = document.querySelectorAll('.header__list--item');

hamburger.addEventListener('click', function () {
	navMenu.classList.toggle('active');
	hamburger.classList.toggle('active');
});

navMenuLinks.forEach(item =>
	item.addEventListener('click', function () {
		navMenu.classList.toggle('active');
		hamburger.classList.toggle('active');
	})
);
