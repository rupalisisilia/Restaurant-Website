const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navListEl = document.querySelector('.nav__list');
const navBgoverlayEl = document.querySelector('.nav__bgoverlay');

const navOpen = () => {
	navListEl.classList.add('show');
	navBgoverlayEl.classList.add('active');
	document.body.style='visibility: visible, height: 100vh; width: 100vw; overflow:hidden;'
}