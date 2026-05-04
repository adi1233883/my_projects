while (true) {
    let choice = prompt(
        "1. Print Table\n2. Quiz Mode\n3. Exit"
    );

    if (choice === "1") {
        let num = Number(prompt("Enter number"));
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    } 
    
    else if (choice === "2") {
        let num = Number(prompt("Enter number"));
        let score = 0;

        for (let i = 1; i <= 5; i++) {
            let r = Math.floor(Math.random() * 5) + 1;
            let ans = Number(prompt(`${num} x ${r} = ?`));

            if (ans === num * r) {
                console.log("Correct!");
                score++;
            } else {
                console.log(`Wrong! Answer is ${num * r}`);
            }
        }

        console.log(`Score: ${score}/5`);
    } 
    
    else if (choice === "3") {
        console.log("Goodbye");
        break;
    } 
    
    else {
        console.log("Invalid choice");
    }
}