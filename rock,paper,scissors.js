const getUsersChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === 'paper' || userInput === "scissors" || userInput === "bomb"){
    return userInput;
  } else{
    console.log('Error: please choose from rock, paper or scissors');
  }
  
};

let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0: 
      return "rock";
    case 1: 
      return "paper";
    case 2:
      return "scissors"
  }
};

let determinWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return "we have a tie!";
  }
  
  if(userChoice === "rock"){
    if(computerChoice === "paper"){
       return "computer won";
       } else {
         return "user won";
       }
  }else if(userChoice === "paper") {
    if(computerChoice === "scissors"){
      return "User won the game!";
    } else{
      return "computer won the game!"
    }
  }else if(userChoice === "scissors"){
    if(computerChoice === "rock") {
      return 'computer won the game!'
    }else {
      return "user won the game!"
    }
  }else if(userChoice === "bomb") {
    return "user cheated and he/she won the game!"
  }
}

let playGame = () => {
  const userChoice = getUsersChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(determinWinner(userChoice, computerChoice));
  console.log(userChoice,computerChoice )
}



getUsersChoice('rock'); 
playGame();











