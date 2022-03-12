const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const startBtn = document.querySelector('.start');
        const introScreen = document.querySelector('.intro');
        const round = document.querySelector('.round');

        startBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            round.classList.add('fadeIn');
        });
    };

    const playRound = () => {

        const playerSelection = document.querySelectorAll('.options button');

        playerSelection.forEach((playerSelection) => {
            playerSelection.addEventListener('click', function(){
                computerSelection = computerPlay();

                updateText(playerSelection.value, computerSelection);

             });
        }); 
    };

    const updateText = function(playerSelection,computerSelection){
        // Update text and declare winner
        const result = document.querySelector('.result');
        const pScore = document.querySelector('.p-count');
        const cScore = document.querySelector('.c-count');

        console.log(playerSelection);
        console.log(computerSelection);

        // Checking for Draw 
        if (playerSelection === computerSelection) {
            result.textContent = 'It\'s a draw!';
            return;
        }

        // Checking for Rock
        if (playerSelection === 'rock'){
            if(computerSelection === 'scissors'){
                result.textContent = 'Player Wins';
                playerScore++;
                pScore.textContent = playerScore;
                return;
            } else if (computerSelection === 'paper'){
                result.textContent = 'Computer Wins';
                computerScore++;
                cScore.textContent = computerScore;
                return;
            }
    }

        // Checking for Scissors
        if (playerSelection === 'scissors') {
            if(computerSelection === 'rock') {
                result.textContent = 'Computer Wins';
                computerScore++;
                cScore.textContent = computerScore;
                return;
            } else if (computerSelection === 'paper'){
                result.textContent = 'Player Wins';
                playerScore++;
                pScore.textContent = playerScore;
                return;
            }
        }

        // Checking for Paper
        if (playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
                result.textContent = 'Computer Wins';
                computerScore++;
                cScore.textContent = computerScore;
                return;
            } else if (computerSelection === 'rock'){
                result.textContent = 'Player Wins';
                 playerScore++;
                 pScore.textContent = playerScore;
                return;
            }
        }
    }

    const computerPlay = () => {
       const options = ['rock', 'paper', 'scissors'];
       const computerChoice = Math.floor(Math.random()* 3);
       
       return options[computerChoice];
    };



    startGame();
    playRound();
};

game();
