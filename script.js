const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    const pScore = document.querySelector('.p-count');
    const cScore = document.querySelector('.c-count');
    const result = document.querySelector('.result');
    const round = document.querySelector('.round');
    const score = document.querySelector('.score');

    const playerSelection = document.querySelectorAll('.options button');

    const startGame = () => {
        const startBtn = document.querySelector('.start');
        const introScreen = document.querySelector('.intro');

        startBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            round.classList.add('fadeIn');
            score.classList.add('fadeIn');
        });
    };

    const playRound = () => {


        playerSelection.forEach((playerSelection) => {
            playerSelection.addEventListener('click', function(){
                computerSelection = computerPlay();

                updateText(playerSelection.value, computerSelection);
                resetGame();

             });
        }); 

    };

    const updateText = function(playerSelection,computerSelection){
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
                result.textContent = 'Player Wins, Rock beats Scissors';
                playerScore++;
                pScore.textContent = playerScore;
                return;
            } else if (computerSelection === 'paper'){
                result.textContent = 'Computer Wins, Paper beats Rock';
                computerScore++;
                cScore.textContent = computerScore;
                return;
            }
    }

        // Checking for Scissors
        if (playerSelection === 'scissors') {
            if(computerSelection === 'rock') {
                result.textContent = 'Computer Wins, Rock beats Scissors';
                computerScore++;
                cScore.textContent = computerScore;
                return;
            } else if (computerSelection === 'paper'){
                result.textContent = 'Player Wins, Scissors beats Paper';
                playerScore++;
                pScore.textContent = playerScore;
                return;
            }
        }

        // Checking for Paper
        if (playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
                result.textContent = 'Computer Wins, Scissors beats Paper';
                computerScore++;
                cScore.textContent = computerScore;
                return;
            } else if (computerSelection === 'rock'){
                result.textContent = 'Player Wins, Paper beats Rock';
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

    const resetGame = () => {
        console.log(computerScore);
        const resetBtn = document.querySelector('.restart');
        const resetScreen = document.querySelector('.reset-container');
        const winner = document.querySelector('.winner');
       
        resetBtn.addEventListener('click', () => {
            resetScreen.classList.remove('fadeIn');
            round.classList.add('fadeIn');
            score.classList.add('fadeIn');
            pScore.textContent = '0';
            cScore.textContent = '0';
            playerScore = 0;
            computerScore = 0;
            console.log(playerScore);
            console.log(computerScore);
            result.textContent = 'Choose an option';
        });

        if (playerScore === 5) {
            console.log(playerScore);
            resetScreen.classList.add('fadeIn');
            round.classList.remove('fadeIn');
            score.classList.remove('fadeIn');
            winner.textContent = 'Player Wins';

        }

        if (computerScore === 5) {
            console.log(computerScore);
            resetScreen.classList.add('fadeIn');
            round.classList.remove('fadeIn');
            score.classList.remove('fadeIn');
            winner.textContent = 'Computer Wins'
        }
    
    };



    startGame();
    playRound();

};

game();
