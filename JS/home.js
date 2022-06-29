
console.log("hello");
//alert("hello this is Andrew"); 
//variables
var b = "smoothie";
console.log(b);
var someNumber = 45;
console.log("someNumber");


// var age = prompt("what is your age?");
// document.getElementById("someText").innerHTML = "age"; 
 //numbers in javascript
 console.log(5*12);
 //increament 
 var num1 = 10;

 
 console.log(num1% 6);
 //functions
 //create a function 
 //call a function 
 function fun(){

    console.log("this is a function");
     

 }
 fun(); 
 /*let's create a function that take in a name 
 and says hello folowed by your name
 */
 
function greetings(){
    var name = prompt('what is your name');
    results = 'hello' + ' ' + name;
    console.log(results);


}
//greetings();
//how arguments work in function
//how to add two numbers together in a function
function sumNumbers(num1, num2){
    var result =num1 +num2 ;
    console.log(result) ;



}
sumNumbers(12,12);
//while loops
/*
var num =0;
while (num < 100) {
    num++;
    console.log(num);


    

}

*/
//for loops
/*for(let num= 0; num<100; num++){ 
    console.log(num);
}*/
//datatypes
let yourAge= 18; //number
let yourName='bob'//string
let name ={first:'jane', last:'Doe'}; //object
let truth =false;
let groceries = ['apple','banana', 'oranges']; //array
let ramdom; //undefined
let nothing = null; /ff/
//strings in javascript (common methods)
//let fruit ='banana';
/*let moreFruits = 'banana \n apple';
console.log(fruit.length);
console.log(fruit.indexOf('nan'));*/
//console.log(fruit.slice(2,4));
//console.log(fruit.toUpperCase());

//arrays in javascript
let fruits= ['banana','apple', 'orange','pineapple'];
fruits = new Array('banana','apple', 'orange','pineapple');
console.log(fruits[2]); 
fruits[0]= 'pear';
console.log(fruits);
for (let i= 0; i<fruits.length;i++){
    console.log(fruits[i]);
}
//array common methods
console.log('to string',fruits.toString());
console.log(fruits, fruits.pop(), fruits);//removes last item
console.log(fruits, fruits.push('blackberries'), fruits);//append
fruits.shift();//remove first element from an array
console.log(fruits)
fruits.unshift('kiwi'); //add first element to array
console.log(fruits)
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.reverse());
let someNumbers= [5, 20, 2, 25,3, 255, 1, 2,5,334,321,2];
console.log(someNumbers.sort(function(a,b){return a-b}));//sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a}));//sorted in descending order
let emptyArray = new Array();
for(let num =0; num<=10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);
//objects in javascript
//dictionaries in python
/*let student = {
    first: 'Andrew', 
    last: 'Rono',
    age:23,
     heigth:145


     studentInfo: function(){
        return this.first +'\n'+ this.last;
}
};
console.log(student.studentInfo());
*/
//conditionals,control flows(if else)


/*var age = prompt('what is your age');
if( (age>=18 && age<=35) ){
    state ='target demo';
    console.log(state);

}
else{
    state= 'not my audience';
    console.log(state);
}*/
//switcday h statements
//differentiate between weekday vs weekend
/*switch(6){
    case 0 :
        text ='Weekend';
    case 5:
        text ='Weekend';

    case 6:
        text ='Weekend';
        break;
    default:
        text = 'Weekday'

}
console.log(text)
*/



 

 