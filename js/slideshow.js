// JavaScript Document
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function initial(){
	showSlides(1);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
	
  var div = document.getElementById("firstSlide");
  var dots = document.getElementsByClassName("dot");
  var actualDiv = document.getElementById("actualID");
	var prefix = "resources/";
	var postfix = ".jpg";
  var paths =["DSC03868", "DSC03876", "DSC03886", "DSC03890 (2)", "DSC03890", "DSC03903 (2)", "DSC03903", "DSC03912", "DSC03913", "DSC03927-2", "DSC03971 (2)", "DSC03971", "DSC03986", "DSC03986-2", "DSC04043", "DSC04049", "DSC04051", "DSC04071", "DSC04073-2"];
	
	
	
  if (n > 19) {slideIndex = 1;}
  if (n < 1) {slideIndex = 19;}
	
	var path = (prefix.concat(paths[slideIndex-1])).concat(postfix);
      div.src=path;
  
	
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  actualDiv.style.display = "block";
  dots[slideIndex-1].className += " active";
	
	
  var numberText = document.getElementById("numbertext");
	var stringN = n.toString();
	var newNumberText = stringN.concat("/19");
	numberText.innerHTML = newNumberText;
}

