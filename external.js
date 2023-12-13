
  function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log("Your choice " + playerSelection);
    console.log("Computer's choice " + computerSelection);
    if(playerSelection === computerSelection){
        return "You both are tied";
    }else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors"
    }else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
    }else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You Lose! Rock beats Scissors";
    }else{
        return "You Win! Scissors beats Paper";
    }
  }
  
  function getPlayerSelection(message){
    return message.slice(0,1).toUpperCase() + message.slice(1).toLowerCase();
  }

  function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "Rock";
    }else if(random === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
  }

let container = document.querySelector('.container');

container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id){
        case 'Rock':
            console.log(playRound(getComputerChoice(target.id), getComputerChoice()));
            break;
        case 'Paper':
            console.log(playRound(getComputerChoice(target.id), getComputerChoice()));
            break;
        case 'Scissors':
            console.log(playRound(getComputerChoice(target.id), getComputerChoice()));
            break;
    }
});

