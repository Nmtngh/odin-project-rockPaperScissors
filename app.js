
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1
    let computerChoice = ''
    switch(random) {
        case 1:
            computerChoice = 'rock'
            break
        case 2:
            computerChoice =  'paper'
            break
        case 3:
            computerChoice =  'scissor'
            break
    }
    return computerChoice
}
function getUserChoice() {
    const choice = prompt('Type Your Choice!').toLowerCase()
    return choice
}

const humanSelection = getUserChoice()
const computerSelection = getComputerChoice()

function playRound(humanChoice, botChoice) {
    let display = `human choose: ${humanChoice}, computer choose: ${botChoice}`
    let result = ''
    if(humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissor') {
        return 'INVALID INPUT, the choose are either rock, paper, or scissor'
    }
    switch(true) {
        case humanChoice === botChoice:
            result = 'TIE'
            break
        case humanChoice === 'rock' && botChoice === 'paper':
            result = 'COMPUTER WIN'
            break
        case humanChoice === 'paper' && botChoice === 'scissor':
            result = 'COMPUTER WIN'
            break
        case humanChoice === 'scissor' && botChoice === 'rock':
            result = 'COMPUTER WIN'
            break
        default:
            result = 'HUMAN WIN'
            break
    }
    return [display, result]

}
//those localStorage thing, i ask AI, i dont know how to store the data to the browser lmao 
let computerScore = Number(localStorage.getItem('computerScore')) || 0
let humanScore = Number(localStorage.getItem('humanScore')) || 0

function score(winner){
    if(winner === 'COMPUTER WIN') {
        computerScore += 1
        localStorage.setItem('computerScore', computerScore)
        return `computer score: ${computerScore}`
    } else if (winner === 'HUMAN WIN') {
        humanScore += 1
        localStorage.setItem('humanScore', humanScore)
        return `human score: ${humanScore}`
    } else {
        return 'NO SCORE ADDED'
    }
}


const game = playRound(humanSelection, computerSelection)
const hasil = score(game[1])
console.log(game, hasil)
