    function game (playerChoice, pcChoice) {


        for (let games = 0; games <5; games++) {
        let playerChoice;
        let pcChoice;
        let tie = 0;
        let pcWin = 0;
        let playerWin = 0;
        
    
        let choices = ['rock', 'paper', 'scissors']
        playerChoice = prompt ('Pick')
        pcChoice = choices[Math.floor(Math.random()*choices.length)]

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


    }
    

    

