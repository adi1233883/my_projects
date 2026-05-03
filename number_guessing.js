let secret = Math.floor(Math.random()*10) + 1 
let attempts = 0 ;
while(attempts<5) {
        let guess = Number(prompt("Guess number(1-10"));
        attempts ++ ;
        if (guess === secret) {
            console.log("Congratulation you won")
            break ;
        }
        else if (guess>secret) {
            console.log("the number is low and you are moron,TRY AGAIN")
            
        }
        else {
            console.log("The number is high, why are u such a dumbass,TRY AGAIN")
        }
        if (attempts === 5) {
            console.log("U are the biggest nincompoop ever , The number is :",secret)
        }
}