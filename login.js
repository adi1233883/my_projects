let savedUsername = prompt("create username");
let savedPassword = prompt("create password");

let Username,Password 
let attempts = 0 ;
while (attempts>3) {
    Username = prompt("EnterUsername");
    Password = prompt("EnterPassword");
    attempts++;
    if (savedUsername===Username && savedPassword===Password) {
        console.log("Login entry succesfull")
        break;
    }
    else {
        console.log("Entry denied")
    }
    if (attempts === 3) {
        console.log("Access blocked")
    }
}