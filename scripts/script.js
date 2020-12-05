new WOW().init();

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

const features = document.querySelector('.skills'),
projects = document.querySelector('.all-projects'),
// education = document.querySelector('.education'),
contacts = document.querySelector('.contacts'),
skillsLink = document.querySelector('#skills'),
allProjectsLink = document.querySelector('#all-projects'),
educationLink = document.querySelector('#education'),
contactsLink = document.querySelector('#contacts');

function scrollTo(elem) {
    window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: 'smooth'
    })
}

console.log(skillsLink);
features.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo(skillsLink)});
projects.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo(allProjectsLink)});
// education.addEventListener('click', (event) => {
  // event.preventDefault();  
  // scrollTo(educationLink)});
contacts.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo(contactsLink)});
