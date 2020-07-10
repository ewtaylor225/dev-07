function resetSign(event) {
	var signData = ['greeting', 'userSign' , 'tiles' , 'subTotal' , 'shipping' , 'grandTotal'];
	
	for (i=0; i<signData.length; i++) { 
		setTextContentById(signData[i], " " );

	}
	event.preventDefault();
	
}	

// Create variables for the welcome message
var greeting = "[not initialized]"; 
var name = "[not initialized]";
var message = "[not intialized]"; 

var welcome; 
// Concatenate the three variables above to create the welcome message
var sign = "[not initialized]";  
var tiles, subTotal, shipping , grandTotal;



function calcSign() {
	tiles = sign.length;
	subTotal = tiles * 5;
	shipping = 7;
	grandTotal = subTotal + shipping;
}

function initiateVars() {
    greeting = "Howdy";
	name = " Elijah";
    message = " Pls check order";
	sign = " platypus bear" ;
	welcome = greeting + name + message;
	calcSign();
}



function setTextContentById(getId, setMsg){ 
    // Get the element that has an id of greeting
	var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
}
function setSign(){
	setTextContentById("greeting", welcome );
	setTextContentById("userSign", sign );
	setTextContentById("tiles", tiles );
	setTextContentById("subTotal", '$' +  subTotal );
	setTextContentById("shipping", '$' +  shipping );
	setTextContentById("grandTotal", '$' + grandTotal );
}
initiateVars();
setSign();
//resetSign();

var el= document.getElementById('resetbutt');


el.addEventListener('click' , resetSign, false);
