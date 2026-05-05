let balance = 1000;
let history = [];

while (true) {
    let choice = prompt(
        "1. Deposit\n2. Withdraw\n3. Check Balance\n4. History\n5. Exit"
    );

    if (choice === "1") {
        let amt = Number(prompt("Enter amount"));

        if (isNaN(amt) || amt <= 0) {
            console.log("Invalid amount");
            continue;
        }

        balance += amt;
        history.push(`Deposited ₹${amt}`);
        console.log(`₹${amt} added. New balance: ₹${balance}`);
    } 
    
    else if (choice === "2") {
        let amt = Number(prompt("Enter amount"));

        if (isNaN(amt) || amt <= 0) {
            console.log("Invalid amount");
            continue;
        }

        if (amt <= balance) {
            balance -= amt;
            history.push(`Withdrew ₹${amt}`);
            console.log(`₹${amt} withdrawn. Remaining: ₹${balance}`);
        } else {
            console.log("Insufficient balance");
        }
    } 
    
    else if (choice === "3") {
        console.log(`Current Balance: ₹${balance}`);
    } 
    
    else if (choice === "4") {
        if (history.length === 0) {
            console.log("No transactions yet");
        } else {
            console.log("Transaction History:");
            for (let i = 0; i < history.length; i++) {
                console.log(history[i]);
            }
        }
    } 
    
    else if (choice === "5") {
        console.log("Thank you for using ATM");
        break;
    } 
    
    else {
        console.log("Invalid choice");
    }
}