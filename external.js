let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('input');


function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    // your code here!
    if(playerSelection == computerSelection){
        result = "Your Score: " + playerScore + "<br>Computer's Score: " + computerScore + "<br><br>You both are tied";

    }else if((playerSelection == "Rock" && computerSelection == "Paper") || 
                (playerSelection == "Paper" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Rock")
                ){
        computerScore++;
        result = "Your Score: " + playerScore + "<br>Computer's Score: " + computerScore + "<br><br> You Lose! " + computerSelection + " beats " +  playerSelection;
        if(computerScore == 5){
            result += "<br><br>You lost the game! Reload to play again."
            disableButtons();
        }
    }else{
        playerScore++;
        result =  "Your Score: " + playerScore + "<br>Computer's Score: " + computerScore + "<br><br> You Win! " + playerSelection + " beats " +  computerSelection;
        if(playerScore == 5){
            result += "<br><br> You won the game! Reload to play again."
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result
    return 
  }
  

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
    playRound(button.value);
    })
});

