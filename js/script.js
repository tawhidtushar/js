function textChange(){
	document.getElementById('textchange').innerHTML="hello";
}
var date= new Date();
function getDate(){
	document.getElementById('res').innerText=date;
}
function greet(){
	var name= document.getElementById('name').value;
	var string= "Hello "+name;
	document.getElementsByClassName('greet')[0].innerHTML= string;
}
function bulbOn(){
	document.getElementById('bulb').src='images/on.gif';

}
function bulbOff(){
	document.getElementById('bulb').src='images/off.gif';
}
function colorchange(){
	document.getElementById('c_c').style.color="green"
}
function textShow(){
	document.getElementById('text').style.display="block";
}
function textHide(){
	document.getElementById('text').style.display="none";
}