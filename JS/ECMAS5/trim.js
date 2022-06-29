var myString='Some Tab and Spaces';
console.log(myString.length);
var myNewString=myString.trim();
console.log(myNewString);
console.log(myNewString.length);
console.log(myString,myString.length)   
/**High order array elements */
const companies = [
    {name:"Company One", category:"Finance", start:1982, end:2014},
    {name:"Company Two", category:"Retail", start:1992, end:2014},
    {name:"CompanyThree", category:"Auto", start:1992, end:2019},
    {name:"Company Four", category:"Retail", start:1989, end:2010},
    {name:"Company Five", category:"Technology", start:1986, end:2004},
    {name:"Company Six", category:"Finance", start:1980, end:2012},
    {name:"Company Seven", category:"Auto", start:1983, end:2010},
    {name:"Company Eight", category:"Technology", start:1982, end:2014},
    {name:"Company Nine", category:"Retail", start:1992, end:2004},
];
const ages=[8,45,34,23,21,12,54,46,65,22];
//forEach:iterates through an array(acts like a for loop) 
//comparison in code
//for loop
/**for(let i=0; i<companies.length;i++){
    console.log(companies[i]);
    */

//forEach
companies.forEach(function(company) {
    console.log(company);
});

//filter->allows to filter things from an array.
//comparison in code : Returns the same output
//using for loop


/**let canDrink=[];
for(let i = 0; i < ages.length; i++){
if (ages[i]>=25){
    canDrink.push(ages[i]);

}
}
console.log(canDrink);
*/

//using filter()
const canDrink =ages.filter(age=> age >=25);
console.log(canDrink);

/**const retailCompanies= companies.filter(function(company){
    if(company.category=== 'Retail'){
        return true;
    }

});
console.log(retailCompanies);
*/

//cheaper way with the same output
const retailCompanies= companies.filter(company=>company.category==='Retail');
console.log(retailCompanies);

const earlierCompanies=companies.filter(company=> company.start>=1980 &&company.start <1990);
console.log(earlierCompanies);

const oldCompanies=companies.filter(company=>((company.end)-(company.start)>=10));
console.log(oldCompanies);
//map can be used to create a new array
//create array of company names

const companyNames=companies.map(function(company){
    return company.name;

});
console.log(companyNames);

const testMap = companies.map(function(company){
    //use ES6 templates
return `${company.name}  [${company.start} - ${company.end}]`;
});
console.log(testMap);



    



















