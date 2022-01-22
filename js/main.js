let switcherLis = document.querySelectorAll(".switcher li");
let switcherAll = document.querySelectorAll(".switcher .all");
let boxs = Array.from(document.querySelectorAll(".portofolio .imgs-contaniner .box"));

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  boxs.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}


let nums = document.querySelectorAll(".stats .number")
let numSection = document.querySelector(".stats")
let started = false


window.onscroll = function(){
  if(window.scrollY >= numSection.offsetTop){
    if(!started){
    nums.forEach((num) => startCount(num))
    }
    started = true
    // console.log('opsjg')
  }
}

// function startCount (el){
//   // 'user strict'
//   let goal = el.dataset.goal
//   let count = setInterval(()=> {
//     el.textContent++;
//     if(el.textContent == goal){
//       clearInterval(count)
//     }
//   }, 3000 / goal);
// }
// startCount()

let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .prog-holder .prog > span ");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop ) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};








var heroSliderContent = Array.from(document.querySelectorAll('.hero-slider'));

// Get Number Of Slides
var heroSlidesCount = heroSliderContent.length;

// Set Current Slide
var heroCurrentSlide = 1;


// Create The Main UL Element
var heroPaginationElement = document.createElement('ul');

// Set ID On Created Ul Element
heroPaginationElement.setAttribute('id','heroPagination-ul');
heroPaginationElement.setAttribute('class','heropBullets');

// Create List Items Based On Slides Count
for (var i = 1; i <= heroSlidesCount; i++) {

  // Create The LI
  var heroPaginationItem = document.createElement('li');

  // Set Custom Attribute
  heroPaginationItem.setAttribute('data-index', i);

  // Append Items to The Main Ul List
  heroPaginationElement.appendChild(heroPaginationItem);

}


// Add The Created UL Element to The Page
document.querySelector('.overlay').appendChild(heroPaginationElement);



// Previous and Next Buttons
var heroNextButton = document.getElementById('next');
var heroPrevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
heroNextButton.onclick = heroNextSlide;
heroPrevButton.onclick = heroPrevSlide;





// Get The New Created UL
var heroPaginationCreatedUl = document.getElementById('heroPagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var heroPaginationsBullets = Array.from(document.querySelectorAll('#heroPagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < heroPaginationsBullets.length; i++) {

  heroPaginationsBullets[i].onclick = function () {

    heroCurrentSlide = parseInt(this.getAttribute('data-index'));

    theHeroChecker();

  }
  
}







function theHeroChecker() {

  // Remove All Active Classes
  heroRemoveAllActive();
  
  // Set Active Class On Current Slide
  heroSliderContent[heroCurrentSlide - 1].classList.add('active');
  
  // Set Active Class on Current Pagination Item
  heroPaginationCreatedUl.children[heroCurrentSlide - 1].classList.add('active');

}

// Remove All Active Classes From Images and Pagination Bullets
function heroRemoveAllActive() {

  // Loop Through Images
  heroSliderContent.forEach(function (content) {

    content.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  heroPaginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });


  // Check if Current Slide is The First
  if (heroCurrentSlide == 1) {

    // Add Disabled Class on Previous Button
    heroPrevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    heroPrevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (heroCurrentSlide == heroSlidesCount) {

    // Add Disabled Class on Next Button
    heroNextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    heroNextButton.classList.remove('disabled');

  }




}
// Trigger The Checker Function
theHeroChecker();




// Trigger The Checker Function
// theHeroChecker();

// Next Slide Function
function heroNextSlide() {

  if (heroNextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    heroCurrentSlide++;

    theHeroChecker();

  }

}

// Previous Slide Function
function heroPrevSlide() {

  if (heroPrevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    heroCurrentSlide--;

    theHeroChecker();

  }

}







var sliderContent = document.querySelectorAll(".test-slider")


var slider = Array.from(document.querySelectorAll(".test-slider"))
// var 
var slidesCount = slider.length;
var currentSlide = 1;
// var mainContainer = document.querySelector(".testimonials")


var paginationUl = document.getElementsByClassName('.bullets');
var paginationLi = document.querySelectorAll('.bullets li')

var paginationsBullets = Array.from(paginationLi);


setInterval(function () {}, 1000);



var sliderContent = Array.from(document.querySelectorAll('.test-slider'));

// Get Number Of Slides
var slidesCount = sliderContent.length;

// Set Current Slide
var currentSlide = 1;


// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id','pagination-ul');
paginationElement.setAttribute('class','bullets');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}


// Add The Created UL Element to The Page
document.querySelector('.testimonials').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

function theChecker() {

  // Remove All Active Classes
  removeAllActive();
  
  // Set Active Class On Current Slide
  sliderContent[currentSlide - 1].classList.add('active');
  
  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderContent.forEach(function (content) {

    content.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}
// Trigger The Checker Function
theChecker();



