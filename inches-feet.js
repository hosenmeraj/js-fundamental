function myInches(inches) {
    var feet = inches / 12;
    return feet;
}
var inches = 120;
var myFeet = myInches(inches);
console.log(myFeet);


var washInches = 300;
var thFeet = myInches(washInches);
console.log(thFeet);

var carInches = 500;
var foFeet = myInches(carInches);
console.log(foFeet);

function mileKm(mile) {
    var km = mile * 1.60934;
    return km;
}
var isKm = 10;
var myKm = mileKm(isKm);
console.log(myKm); 