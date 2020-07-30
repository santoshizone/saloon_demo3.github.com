$(document).ready (function(){
    $(".button").click(function(){
      var value=$(this).attr("data-filter");
      if (value=="All")
      {
        $(".filter").show("1000");
        
      }
      else
      {
      $(".filter").not("."+value).hide("1000");
      $(".filter").filter("."+value).show("1000");
      }
      
    
  
  
        $("ul.button").click(function(){
        $(this).addClass('active').sibling().removeClass('active');
})
})
})






/*// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 20) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};*/


//Get the button:
mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}








$(document).ready(function(){

$('.sec1_col1').waypoint(function(direction){

    $('.sec1_col1').addClass(' animated fadeInLeft')
    
    $('.sec1_col2').addClass(' animated fadeInRight')
 
   
    

   
  },{
    offset:'50%'
  })



$('.media1').waypoint(function(direction){

    $('.media1').addClass(' animated fadeInUp')
    
  },{
    offset:'50%'
  })



$('.sec3_img').waypoint(function(direction){

    $('.sec3_img').addClass(' animated fadeInLeft')
    $('.sec3_col').addClass(' animated fadeInRight')
    
  },{
    offset:'50%'
  })



});



