'use strict';
new WOW( {mobile: false} ).init();

const features = document.querySelector('.skills'),
projects = document.querySelector('.all-projects'),
education = document.querySelector('.education'),
contacts = document.querySelector('.contacts'),
skillsLink = document.querySelector('#skills'),
allProjectsLink = document.querySelector('#all-projects'),
educationLink = document.querySelector('#education'),
contactsLink = document.querySelector('#contacts'),
scrollUp = document.querySelector('.scroll-up'),
topOfPage = document.querySelector('.link-bar'),
mobMenu = document.querySelector('.mob-menu-wrapper'),
mobileBtn = document.querySelector('.mobile-btn'),
closeMobMenu = document.querySelector('.close-mob-menu'),
mobSkills = document.querySelector('.mob-skills'),
mobProjects = document.querySelector('.mob-projects'),
mobContacts = document.querySelector('.mob-contacts'),
mobEducation = document.querySelector('.mob-education');


function scrollTo(elem) {
  window.scroll({
    left: 0,
    top: elem.offsetTop,
    behavior: 'smooth'
  })
}

function trackScroll() {
let scrolled = window.pageYOffset;
let screenHeight = document.documentElement.clientHeight;

if (scrolled < screenHeight) {
  scrollUp.classList.add('hidden');
}
if (scrolled > screenHeight) {
  scrollUp.classList.remove('hidden');
}
}

function backToTop() {
if (window.pageYOffset > 0) {
  scrollTo(topOfPage);
}
}

function toggleMenuVisible() {
  mobMenu.classList.toggle('active');
}


var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});


window.addEventListener('scroll', trackScroll);
scrollUp.addEventListener('click', backToTop);
mobileBtn.addEventListener('click', toggleMenuVisible);
closeMobMenu.addEventListener('click', toggleMenuVisible);
features.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo(skillsLink)});
projects.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo(allProjectsLink)});
education.addEventListener('click', (event) => {
  event.preventDefault();  
  scrollTo(educationLink)});
contacts.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo(contactsLink)});

  mobSkills.addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(skillsLink);
    toggleMenuVisible();
  });
  mobProjects.addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(allProjectsLink);
    toggleMenuVisible();
  });
  mobEducation.addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(educationLink);
    toggleMenuVisible();
  });
  mobContacts.addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(contactsLink);
    toggleMenuVisible();
  });


