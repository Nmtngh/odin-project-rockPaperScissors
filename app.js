
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1
    let botChoice = ''
    switch(random) {
        case 1:
            botChoice = 'rock'
            break
        case 2:
            botChoice =  'paper'
            break
        case 3:
            botChoice =  'scissor'
            break
    }
    return botChoice
}
function getUserChoice() {
    const choice = prompt('Type Your Choice!').toLowerCase()
    return choice
}

function game(getComputerChoice, getUserChoice) {
    if(getUserChoice !== 'rock' && getUserChoice !== 'paper' && getUserChoice !== 'scissor') {
        return 'invalid!, the choice are "rock", "paper", and "scissor"'
    } else {
        return `bot choose: ${getComputerChoice}, and user choose: ${getUserChoice}`
    }
}






const testing = game(getComputerChoice(), getUserChoice())
console.log(testing)
