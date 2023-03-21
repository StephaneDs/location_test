//    Carousel           //


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// navigation //
window.addEventListener('resize', resize);

function resize() {
    if (window.innerWidth < 950) {
        //alert('window.innerWidth < 700');
        var x = document.getElementsByClassName("sidebar")[0].style.display = "none";
    }
    else
    {
        var x = document.getElementsByClassName("sidebar")[0].style.display = "block";
    }
}


function menu() {
    var x = document.getElementsByClassName("sidebar")[0];
    //console.log(x.style.display);
    console.log(x.style.display);
    if(x.style.display == "block"){
    //   x.style.display = block;
        //alert("Présent");
        x.style.display = "none";
    }
    else
    {
    //alert("Vide");
    x.style.display = "block";
    }
  }
