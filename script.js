// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("pats-silver");
}
function beach(el){
	document.getElementById("left_picture").src = ("image/leftbeach.png");
	document.getElementById("middle_picture").src = ("image/middlebeach.png");
	document.getElementById("right_picture").src = ("image/rightbeach.png");
}
// rocket --> spaceship --> alien --> planet --> astronaut
function firstImage(el){
	if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.PNG";
	} else if (el.scr.match ("image/planet.PNG")){
		el.scr ="image/astronaut.png";
	} else if (el.scr.match ("image/astronaut.png")){
		el.scr ="image/rocket.png";
	}
}