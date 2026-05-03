let saved_Username = "";
let saved_Password = "";

let choice;

while (true) {
    choice = prompt("1. Signup\n2. Login\n3. Reset Password\n4. Exit");

    // 🔹 SIGNUP
    if (choice === "1") {
        saved_Username = prompt("Create Username:");
        saved_Password = prompt("Create Password:");
        console.log("✅ Signup successful");
    }

    // 🔹 LOGIN
    else if (choice === "2") {

        if (!saved_Username || !saved_Password) {
            console.log("⚠️ Please signup first");
            continue;
        }

        let attempts = 0;
        let Username, Password;

        while (attempts < 3) {
            Username = prompt("Enter Username:");
            Password = prompt("Enter Password:");

            if (Username !== saved_Username) {
                console.log("❌ Username not found");
                attempts++;
            } 
            else if (Password !== saved_Password) {
                console.log("❌ Incorrect password");
                attempts++;
            } 
            else {
                console.log("✅ Login successful");
                break;
            }

            console.log(`${3 - attempts} attempts left`);
        }

        if (attempts === 3) {
            console.log("🚫 Too many failed attempts");
        }
    }

    // 🔹 RESET PASSWORD
    else if (choice === "3") {
        if (!saved_Username) {
            console.log("⚠️ No account found. Signup first.");
            continue;
        }

        saved_Password = prompt("Enter new password:");
        console.log("🔁 Password reset successful");
    }

    // 🔹 EXIT
    else if (choice === "4") {
        console.log("👋 Exiting program");
        break;
    }

    // 🔹 INVALID
    else {
        console.log("❌ Invalid choice");
    }
}