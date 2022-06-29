function ageInDays(){
var birthYear=prompt("what year were you born good friend?");

var age=(2022-birthYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are'  +age  + 'days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('flex-box-result').remove();
}
function generateCat(){
    var image =document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}