 'use strict';

var zufallszahl
var anzahlFarbe1=0
var anzahlFarbe2=0
var anzahlFarbe3=0
var anzahlFarbe4=0
var anzahlFarbe5=0
var anzahlFarbe6=0


document.addEventListener('DOMContentLoaded', function () {
		console.log('DOM bereit');
 });
	
const zeigeFlaschen = document.querySelector('#button');



const zufallsbild = function() {
	$("#orakel1").attr("src", zufallszahlAusgeben());
	$("#orakel2").attr("src", zufallszahlAusgeben());
	$("#orakel3").attr("src", zufallszahlAusgeben());
	console.log("img1: "+anzahlFarbe1);
	console.log("img2: "+anzahlFarbe2);
	console.log("img3: "+anzahlFarbe3);
	console.log("img4: "+anzahlFarbe3);
	console.log("img5: "+anzahlFarbe3);
	console.log("img6: "+anzahlFarbe3);
	document.getElementById("button").style = "opacity: 0;"
	document.getElementById("orakelergebnis").style = "opacity: 1;"
}
		
zeigeFlaschen.addEventListener('click', zufallsbild);

function zufallszahlAusgeben(){
	zufallszahl = rand(1,6);
	if(zufallszahl==1){anzahlFarbe1++};
	if(zufallszahl==2){anzahlFarbe2++};
	if(zufallszahl==3){anzahlFarbe3++};
	if(zufallszahl==4){anzahlFarbe4++};
	if(zufallszahl==5){anzahlFarbe5++};
	if(zufallszahl==6){anzahlFarbe6++};
	return "bilder/img"+zufallszahl+".png";
}

function rand (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}





