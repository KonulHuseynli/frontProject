  // LOGINPART#####################################################################
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

window.onscroll = function() {myFunction()};
var container1 = document.getElementById("container1");
var sticky = container1.offsetHeight;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    container1.classList.add("sticky")
  } else {
    container1.classList.remove("sticky");
    
  }
}


//carousel
const text1_options = [
    "The Little Prince ",
    "Petter Rabbit",
    "Pinocchio",
    "Heidi"
  ];
  const text2_options = [
    "Subject: A fairy-tale memory of a pilot whose plane crashed into a desert",
    "Subject: the story of Peter the Rabbit, a mischievous and disobedient animal.",
    "Topics: The adventures of a mischievous wooden puppet on his way to becoming a real boy",
    "Subject: Village and city life of a little girl"
  ];
  const text3_options = [
    "Author: Antoine de Saint-Exupéry",
    "Author: Beatrix Potter",
    "Author: Carlo Collodi",
    "Author: Johanna Spyri"
  ];
  const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
  const image_options = [
    src="/assets/images/littleprince.jpeg",
    src="/assets/images/peterbook.jpg",
    src="/assets/images/pinocchio.jpg",
    src="/assets/images/heidi.png",
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionText3 = document.getElementById("current-option-text3");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionText3.innerText = text3_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    currentOptionText3.dataset.nextText = text3_options[i];
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      currentOptionText3.innerText = text3_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
    currentOptionText3.dataset.previousText = text3_options[i];
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      currentOptionText3.innerText = text3_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  


// SEARCHPART##############################################################################
const search=document.querySelector('.search')
const btn=document.querySelector('.btn')
const input=document.querySelector('.input')
btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})
//body4js signup login##############################################################
var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container5 = document.getElementById('container5');

signUpButton.addEventListener('click', () => {
	container5.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container5.classList.remove("left-panel-active");
});
