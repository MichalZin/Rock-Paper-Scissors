    function game (playerChoice, pcChoice) {
        let tie = 0;
        let pcWin = 0;
        let playerWin = 0;

        for (let games = 0; games <5; games++) {
        let choices = ['rock', 'paper', 'scissors']
        let playerChoice = prompt ('Pick')
        let pcChoice = choices[Math.floor(Math.random()*choices.length)]

    if (playerChoice === pcChoice) 
    {
        console.log (pcChoice + " " + "Tie! Play again!") 
        tie++
    
        
    }
    else if (playerChoice === `paper` && pcChoice === 'scissors' ||
            playerChoice === `rock` && pcChoice === 'paper' ||
            playerChoice === `scissors` && pcChoice === 'rock') 
            {
                console.log (pcChoice + " " + "You lost!")

            pcWin++
                
            }
    else  if (playerChoice === `paper` && pcChoice === 'rock' ||
            playerChoice === `rock` && pcChoice === 'scissors' ||
            playerChoice === `scissors` && pcChoice === 'paper')
    {
        console.log (pcChoice + " " + "You won!")
        playerWin++
    }

}
console.log("Wins : " + playerWin + " " +
    "Loses : " + " " + pcWin + " " +
    " Ties : " + tie);

    }