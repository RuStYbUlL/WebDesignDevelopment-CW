// responsive topnav
window.onscroll = function() {responsiveTopnav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function responsiveTopnav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

    // responsive navigation menu

function responsiveNavMenu() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
  }
}
        

//Gallery Scripts

//expand image 
function expandedImage(x) {
	x.style.height = "210px";
	x.style.width = "210px";
}

//normal image
function normalImage(x) {
	x.style.height = "201.33px";
	x.style.width = "201.33";
}



function img1() {
	var newStuff = 
	'<img src="images/1.png" alt="" srcset="" id="displayedImage">'+
	'<div class="description" id="description" >'+
	//write description
		'<p style = "text-align:center; font-size:160%" > Ningguang from Genshin Impact </p>'+
	'</div>'+
	'<div id="backIcon" onclick="exit()">X</div>'
	
	document.getElementById('gallery').innerHTML = newStuff;
}

function img2() {
	var newStuff = 
	'<img src="images/2.png" alt="" srcset="" id="displayedImage">'+
	'<div class="description" id="description" >'+
	//write description
		'<p style = "text-align:center; font-size:160%">Narancia Ghirga from Jojo\'s Bizzare Adventure: Golden Wind </p>'+
	'</div>'+
	'<div id="backIcon" onclick="exit()">X</div>'
	
	document.getElementById('gallery').innerHTML = newStuff;
}
function img3() {
	var newStuff = 
	'<img src="images/3.png" alt="" srcset="" id="displayedImage">'+
	'<div class="description" id="description" >'+
	//write description
		'<p style = "text-align:center; font-size:160%">Haachama from Hololive</p>'+
	'</div>'+
	'<div id="backIcon" onclick="exit()">X</div>'
	
	document.getElementById('gallery').innerHTML = newStuff;
}
function img4() {
	var newStuff = 
	'<img src="images/4.png" alt="" srcset="" id="displayedImage">'+
	'<div class="description" id="description" >'+
	//write description
		'<p style = "text-align:center; font-size:160%">CocoButter OC</p>'+
	'</div>'+
	'<div id="backIcon" onclick="exit()">X</div>'
	
	document.getElementById('gallery').innerHTML = newStuff;
}
function img5() {
	var newStuff = 
	'<img src="images/5.png" alt="" srcset="" id="displayedImage">'+
	'<div class="description" id="description" >'+
	//write description
		'<p style = "text-align:center; font-size:160%">Koro-Sensei from Assasination Classroom</p>'+
	'</div>'+
	'<div id="backIcon" onclick="exit()">X</div>'
	
	document.getElementById('gallery').innerHTML = newStuff;
}

//when user closes expanded image, user is brought back to initial gallery page.
function exit(){
	var exit =
	'<div id="gallery">'+
	'<div id="img1" class="thumbnail" onclick="img1()">'+
		'<img onmouseover="expandedImage(this)" onmouseout="normalImage(this)" src="images/1.png" alt="" srcset="" class="ThumbnailImage">'+
		
	'</div>'+
	'<div id="img2" class="thumbnail" onclick="img2()">'+
		'<img onmouseover="expandedImage(this)" onmouseout="normalImage(this)" src="images/2.png" alt="" srcset="" class="ThumbnailImage">'+             
	'</div>'+
	'<div id="img3" class="thumbnail" onclick="img3()">'+
		'<img onmouseover="expandedImage(this)" onmouseout="normalImage(this)" src="images/3.png" alt="" srcset="" class="ThumbnailImage">'+              
	'</div>'+
	'<div id="img4" class="thumbnail" onclick="img4()">'+
		'<img onmouseover="expandedImage(this)" onmouseout="normalImage(this)" src="images/4.png" alt="" srcset="" class="ThumbnailImage">'+                
	'</div>'+
	'<div id="img5" class="thumbnail" onclick="img5()">'+
		'<img onmouseover="expandedImage(this)" onmouseout="normalImage(this)" src="images/5.png" alt="" srcset="" class="ThumbnailImage">'+                
	'</div>'+

'</div>'

	document.getElementById("gallery").innerHTML = exit;
}