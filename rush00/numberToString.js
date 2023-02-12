var input =[1,2,3,4,5,6,7,8,9,10];
function numberToString(_numbers){
var index = 0;
var numbers = {un:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10};
this.entiers = new Array();
for ( [ key,value] of Object.entries(numbers)) {

    _numbers[index] = key
    entiers[index] = value;
    index++
    if(index == _numbers.length)
    break;
}
console.log(_numbers) ;
}
numberToString(input);
module.exports = numberToString ;
