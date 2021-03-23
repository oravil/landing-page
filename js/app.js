/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint 
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach((element) => {
  const dataNav = element.getAttribute("data-nav");

  const li = document.createElement("li");

  const link = document.createElement("a");

  const node = document.createTextNode(dataNav);

    link.classList.add(['menu__link']);
    link.id = `link-${element.getAttribute("id")}`;
    
  link.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth" });
  });

  link.appendChild(node);
  li.appendChild(link);

  fragment.appendChild(li);
});

nav.appendChild(fragment);

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", () => {
  sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const link = document.getElementById(`link-${sec.getAttribute('id')}`);
    if (rect.top >= -50 && rect.top < 200) {
        sec.classList.add("your-class-active");
        link.classList.add('active')
    } else {
        sec.classList.remove("your-class-active");
        link.classList.remove('active');
    }
  });
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


