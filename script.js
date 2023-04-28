var typed = new Typed(".multiple-text",{
	strings: ["Frontend Developer", "Blogger", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
	});
	const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", window.scrollY > 0);
});

const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', function(){
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
});

window.addEventListener('resize', function(){
  if (window.innerWidth > 768){
  menu.classList.remove('active');
  navbar.classList.remove('active');
}
});