var input =[1,2,3,5,10];
function numberToString(_numbers){
var index = 0;
var dictionnaire = {un:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10};
this.letteres = new Array();
this.entiers = new Array();
for ( [ key,value] of Object.entries(dictionnaire)) {
     for( index = 0; index < _numbers.length ; index++)
     {
if(_numbers[index] === value)
   { 
     letteres[index] = key
    entiers[index] = value;
   }
    
     }

   }
console.log(letteres);
}
numberToString(input);
module.exports = numberToString ;
