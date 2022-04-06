const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //toggle nav

    burger.addEventListener("click" , () => {
        nav.classList.toggle("nav-active");


    //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

// image slider

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listerners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});

// Data Validation on Feedback

function validateForm(event) {
  event.preventDefault();
  var fnameValid = validateFname();
  var snameValid = validateSname();
  var emailValid = validateEmail();
  var descripValid = validateDescription();

  if (!fnameValid || !snameValid || !emailValid || !descripValid) {

    return;
}

event.target.submit();
}

function validateFname() {
  let x = document.forms["feedbackForm"]["fname"].value;
  if (x == ""){
    document.getElementById("Fname").style.color = "Red";
    document.getElementById("Fname").innerHTML = "First Name Required";
    return false;
  }
  document.getElementById('Fname').style.color = 'white';
  document.getElementById('Fname').innerHTML = 'First Name:';

  return true;
}
function validateSname() {
  let x = document.forms["feedbackForm"]["sname"].value;
  if (x == ""){
    document.getElementById("Sname").style.color = "Red";
    document.getElementById("Sname").innerHTML = "Surname Required";
    return false;
  }
  document.getElementById('Sname').style.color = 'white';
  document.getElementById('Sname').innerHTML = 'Surname:';

  return true;
}
function validateEmail() {
  let x = document.forms["feedbackForm"]["email"].value;
  if (x == ""){
    document.getElementById("Email").style.color = "Red";
    document.getElementById("Email").innerHTML = "Email Required";
    return false;
  }
  document.getElementById('Email').style.color = 'white';
  document.getElementById('Email').innerHTML = 'Email:';

  return true;
}
function validateDescription() {
  let x = document.forms["feedbackForm"]["subject"].value;
  if (x == ""){
    document.getElementById("smallDes").style.color = "Red";
    document.getElementById("smallDes").innerHTML = "Small Description Required";
    return false;
  }
  document.getElementById('smallDes').style.color = 'white';
  document.getElementById('smallDes').innerHTML = 'Small Description:';

  return true;
}
