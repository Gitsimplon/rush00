var numbers = {un:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10};
function numberToString(_numbers){
var index = 0;
this.lettres = new Array(3);
this.entiers = new Array(3);
for ( [ key,value] of Object.entries(_numbers)) {

    lettres[index] = key
    entiers[index] = value;
    index++
    
}
console.log(lettres) ;
}
numberToString(numbers)
module.exports = numberToString ;
