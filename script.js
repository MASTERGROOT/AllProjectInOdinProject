const choice = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(player, com) {
    let capital = (str) => {return str.toUpperCase().charAt(0) + str.slice(1)} 
    if ((player.toLowerCase() === 'rock' && com.toLowerCase() === 'paper') || (player.toLowerCase() === 'paper' && com.toLowerCase() === 'scissor') || (player.toLowerCase() === 'scissor' && com.toLowerCase() === 'rock')) {
        return `You Lose! ${capital(com)} beats ${capital(player)}`
    } else if (player.toLowerCase() === com.toLowerCase()) {
        return 'Tie'
    } else {
        return `You Win! ${capital(player)} beats ${capital(com)}`
    }
}

const playGame= () => {
    let playerScore = 0
    let comScore = 0
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('write "rock", "paper", or "scissor"');
        if (!choice.includes(playerInput.toLowerCase())) {
            alert('Please enter a valid choice!!')
        } else {
            let computerSelect = getComputerChoice();
            let res = playRound(playerInput, computerSelect);
            if (res.includes('Win')) {
                playerScore++;
                document.getElementById('HumanResult').innerHTML = playerScore;
            } else if (res.includes('Lose')) {
                comScore++;
                document.getElementById('AIresult').innerHTML = comScore;
            }
            alert(res)
        }
    };
    if (playerScore > comScore) {
        return alert('Congratulations!!!')
    } else {
        return alert('So close')
    }
}