let choose = [ "rock", "paper","scissors"]
let player = prompt ("Enter rock, paper or scissors").toLowerCase();
let computer = choose[Math.floor(Math.random() * 3)];
console.log("Computer", computer);
console.log("player",player);
if (player===computer) {
    console.log("its a draw");

}
else if (
   ( player === "rock" && computer === "scissors") ||
   (player === "scissors" &&  computer === "paper") ||
   (player === "paper"  && computer === "rock") 
)  {
    console.log("you win") ;
}
 else {
    console.log("Computer wins")
 }




