  // my values, variables, arrays etc.
            
  let options = ["rock", "paper", "scissors"]
  let i = 0
  playerScore = 0
  compScore = 0
  
  const compNumber = document.querySelector('#compNumber');
  const scoreNumber = document.querySelector('#number');
  const score = document.querySelector('#score');
  const restart = document.querySelector('#restart');
  const rockChoice = document.querySelector('#rock');
  const paperChoice = document.querySelector('#paper');
  const scissorChoice = document.querySelector('#scissors');
  
  // choice functions
  
  function rock(){
      return playRound('rock', computerPlay());
  }
  
  function paper(){
      return playRound('paper', computerPlay());
  }
  
  function scissors(){
      return playRound('scissors', computerPlay());
  }
  
  // choices
  function redo(){
      location.reload();
  }

  restart.addEventListener('click', redo);

  function playerChoice(){
   rockChoice.addEventListener('click', rock);
   paperChoice.addEventListener('click', paper);
   scissorChoice.addEventListener('click', scissors);
  }

  let playerSelection = playerChoice();
  

  // computer random choice  
  
  function computerPlay(){
   let result = Math.floor(Math.random() * (3));
   return options[result];
  }
  
 let computerSelection = computerPlay();
 
  // round
  
  function playRound (playerSelection, computerSelection) {
     if (playerSelection == computerSelection){
         i++;
          score.innerHTML = 'Its a tie!'          
      }
      else if (playerSelection == "rock" && computerSelection == "scissors"){
          i++;
          playerScore++;
          score.innerHTML = 'You Win! Rock beats Scissors';
          scoreNumber.innerHTML = 'Player Score:' + playerScore;
          
      }
  
      else if (playerSelection == "paper" && computerSelection == "rock"){
          i++;
          playerScore++;
          score.innerHTML = 'You Win! Paper beats Rock!';
          scoreNumber.innerHTML = 'Player Score:' + playerScore;
      } 
      else if (playerSelection == "scissors" && computerSelection == "paper"){
          i++;
          playerScore++;
          score.innerHTML = 'You Win! Scissors beats Paper!';
          scoreNumber.innerHTML ='Player Score:' + playerScore;
      } 
      else if (playerSelection == "rock" && computerSelection == "paper"){
          i++;
          compScore++;
          score.innerHTML = 'You Lose! Rock loses to Paper';
          compNumber.innerHTML = 'Computer Score:' + compScore;
      } 
      else if (playerSelection == "paper" && computerSelection == "scissors"){
          i++
          compScore++;
          score.innerHTML = 'You Lose! Paper loses to Scissors!';
          compNumber.innerHTML = 'Computer Score:' + compScore;
      } 
      else if (playerSelection == "scissors" && computerSelection == "rock"){
          i++;
          compScore++;
          score.innerHTML = 'You Lose! Scissors loses to Rock!';
          compNumber.innerHTML = 'Computer Score:' + compScore;
      } if (i == 5 && playerScore == compScore){
        score.innerHTML = 'Its a tie! Try again!!';
        } else if (i == 5 && playerScore > compScore){
            score.innerHTML = 'Congratulations! You beat the Computer!';
         } else if (i == 5 && playerScore < compScore){
            score.innerHTML = 'You Lose! Better luck next time!';
            } if (i == 5){
                rockChoice.disabled = true;
                paperChoice.disabled = true;
                scissorChoice.disabled = true;
            } 
  }
 

 
