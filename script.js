'use strict';

///////////////////////////////////////
//TODO: Selecting elements
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// TODO: Modal window
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


// TODO: Implementing Smooth scrollling


btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect(); //this gives the coordinate of the element on the page
  // console.log('Current scroll (X/y=Y)', window.pageXOffset,pageYOffset);
  // console.log('height /width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);


  // implementing scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  // );

  // another way of implementing this
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behaviour: 'smooth'
  // })

  // the first two implementations are old way of doing this smooth scrolling, the mordern way

  section1.scrollIntoView({behaviour:'smooth'});


})

// TODO: implementing Page navigation

//* A uneffective way of implementing this 

// document.querySelectorAll('.nav__link').forEach( function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behaviour:'smooth'})

//   })
// })

// * effective way

//  1. add eventListener to the parent elements
//  2.  Determine what elemment originated the the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  // const id = e.target.getAttribute('href');
  // document.querySelector(id).scrollIntoView({ behaviour: 'smooth' }); this worked but it aint the proper way
  //* If statement ensures on the right targets respond
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behaviour: 'smooth' });
  }
})





// * NOTES

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




// TODO: EVENTS (An event is a signal that is generated by a certain DOM node, a signal means that somthing has happened)
 const h1 = document.querySelector('h1');
 const alertH1 = e => {
   alert('Great! This is the heading');

   h1.removeEventListener('mouseenter', alertH1); //you can also rempve event listeners
 };

h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // you can set a timer to remove vents using this code

// one old way of listening for events
// h1.onmouseenter = e => {
//   alert('onmouseenter: Great! This is the heading');
// };

// TODO: Event bubbling and capturing
// these are two important properties of JS events
// Capturing ===> DoWN, Bubbling ===> Up

// TODO: event propagation in practice

//* generating random color

const randomInt = (min,max) => 
  Math.floor( Math.random() * (max - min + 1) + min);
//* function to generate random number

const randomColor = () => 
  ` rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//* function to generate random colors

// document.querySelector('.nav__link').addEventListener('click',  function(e) {

//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);

//   // * You can stop event propagation
//   e.stopPropagation();

// })

// document.querySelector('.nav__links').addEventListener('click',function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
  
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget );
// });

// *the addEventlistener method only listens for events in the bubbling phase and not in the capturing phase. To listen to the capture phase you need to add a 3rd parameter as true



//  TODO: DOM Traversing

// * going downwards
console.log(h1.querySelectorAll('.highlight'));
  console.log(h1.childNodes); //nodes can be anything, so we might not use this
  console.log(h1.children); //this wotks for only direct children
  h1.firstElementChild.style.color = 'red'

  // * Going upwards
  console.log(h1.parentNode);
  console.log(h1.parentElement);

  h1.closest('.header').style.background = 'var (--gradient-secondary)';

  console.log(h1.closest('.header').style.background);

  h1.closest('h1').style.background = 'var (--gradient-secondary)';
  console.log(h1.closest('h1').style.background);

  //* Going sideways
  console.log(h1.previousElementSibling);
  console.log(h1.nextElementSibling);

  // node
  console.log(h1.previousSibling);
  console.log(h1.nextSibling);

  





