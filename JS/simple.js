var fullName = "Andrew Rono";
var phoneNumber = "0712345678";
var email = "123@gmail.com"

console.log(`
username is: ${fullName}
the contacts is: ${phoneNumber}
email address is: ${email}
`)


//ternary operator

var authenticated = true;

 authenticated ? console.log("show login button") : console.log("show signup button");


 //switch

 let user = "testprep";
 switch(user){
    case "admin":
    console.log("you get the full access");
    break;


    case "subadmin":
    console.log("you get access to create and delete courses");
    break;

    case "testprep":
    console.log("you get access to create and delete tests");
    break;

    case "user":
    console.log("you get access to consume the content")
    break;

    default:
        console.log("you have no privillseges")



 }
