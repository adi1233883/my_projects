let choose = ["rock", "paper", "scissors"];

let player = prompt("Enter rock, paper or scissors").toLowerCase();


if (!choose.includes(player)) {
    console.log("Invalid input ❌");
}
else {
    let computer = choose[Math.floor(Math.random() * 3)];

    console.log("Computer:", computer);
    console.log("Player:", player);

    if (player === computer) {
        console.log("It's a draw");
    }
    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        console.log("You win 🎉");
    }
    else {
        console.log("Computer wins 💻");
    }
}