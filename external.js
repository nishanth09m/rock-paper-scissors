
  function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log("Your choice " + playerSelection);
    console.log("Computer's choice " + computerSelection);
    if(playerSelection === computerSelection){
        console.log("You both are tied");
        playRound(getPlayerSelection(),getComputerChoice());
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
  
  function getPlayerSelection(){
    const message = prompt("Your choice?");
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

  for(let i = 0; i < 5; i++){
    console.log(playRound(getPlayerSelection(),getComputerChoice()));
  }



