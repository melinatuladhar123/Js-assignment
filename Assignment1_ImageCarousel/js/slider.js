sliderimage = document.getElementsByClassName("carousel-image")[0];
var imageHeight = sliderimage.height;
var imagewidth = sliderimage.width;
var container = document.getElementsByClassName("container")[0];
var carousel = document.getElementsByClassName("carousel")[0];
var totalItems = carousel.children.length;
carousel.style.width = imagewidth * totalItems + "px";
carousel.style.height = imageHeight + "px";
var imageCount = 0;
var marginLeft = 0;

// var FPS = 60;
// var frameLimit = 1000/FPS;

// for control buttons to move the slides left and right.
var prevButton = document.createElement("div");
prevButton.setAttribute("id", "prev-button");
prevButton.innerHTML = "&lt;";

var nextButton = document.createElement("div");
nextButton.setAttribute("id", "next-button");
nextButton.innerHTML = ">";

carousel.append(prevButton);
carousel.append(nextButton);

nextButton.addEventListener("click", () => moveNext());
prevButton.addEventListener("click", () => movePrev());

//go next slide
function moveNext() {
    
	if (imageCount == totalItems - 1) {
        imageCount = 0;
        marginLeft = 0;
        carousel.style.marginLeft = marginLeft; 
        
	} else {
		// var passMargin = -(imageWidth * imageCount);
        imageCount++;
        marginLeft= marginLeft-imagewidth;
        carousel.style.marginLeft = marginLeft + 'px';
        
	}
	// handleIndicator(imageCount);
}



//go prev slide
function movePrev() {
	if (imageCount === 0) {
        imageCount = totalItems - 1;
        marginLeft = -((totalItems-1)*imagewidth);
        carousel.style.marginLeft = marginLeft + 'px'; 

        // console.log(imageCount)
        // console.log(imageCount)
        // console.log(marginLeft)
        
	} else {
		// var passMar  gin = (imageWidth * imageCount);
        imageCount--;
        marginLeft= marginLeft+imagewidth;
        carousel.style.marginLeft = marginLeft + 'px'
	}
}

//for dots
var indicators = document.createElement('ul')
indicators.setAttribute('id', 'indicators')
container.append(indicators);

var indicatorsLi = ''


var indicators = document.createElement('ul')
   indicators.setAttribute('id', 'indicators')
   for (i=0; i<totalItems; i++){
       let index = i
       var newLi = document.createElement('li');
       newLi.addEventListener('click', ()=> changeSlide(index));
       if (index == imageCount) newLi.setAttribute('class', 'active');
       
       indicators.appendChild(newLi)
   }
   container.append(indicators)


  function changeSlide(i) {
   imageCount = i;
    marginLeft = -(imagewidth*i);
    carousel.style.marginLeft = marginLeft + 'px';
   }