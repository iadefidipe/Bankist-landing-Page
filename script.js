'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); //to prevent default behaviour of some element tags
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// TODO: creating element in DOM 
const message = document.createElement('div');
message.classList.add('cookie-message'); //Adding a class to the newly created div
// message.textContent= ' We use cookies for improved performance';
message.innerHTML= 'We use cookies for improved performance. <button class= "btn btn--close-cookie"> Got it! </button>'

header.prepend(message); //prepend: adds the newly created message elements as the first child element of the header
// header.append(message); //append: adds the newly created message elements as the last child element of the header

// header.append(message.cloneNode(true)) // adding true to the this method ensures all the child elements are copied



// header.before(message); //before: adds the newly created message elements as a sibling element before the header
// header.after(message.cloneNode(true)); // after: adds the newly created message elements as a sibling element after the header 

// TODO: Deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  // message.remove(); //this is a newly added method, they had to traverse the DOM to do this before. As shown below
  message.parentElement.removeChild(message); //this is the older way of removing elements through DOM traversing
});

// TODO: working with styles
message.style.backgroundColor ='#37383d'; //these are added as inline styles
message.style.width = '120%'

// if we want to read the sytles of an element, it can be do
console.log(message.style.color); //this wont work because its not availble inline
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// TODO: working with CSS variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// TODO; Working with Atrributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
 logo.alt = 'Beatiful minimalist logo'
//the above will only read standard attributes, if set a non standard attribute you can use the getAtrribute method to read it
console.log(logo.designer); // this wont work because designer is not a standard attributes
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist'); //to set attributes

// TODO: Data Attributes
console.log(logo.dataset.versionNumber);



