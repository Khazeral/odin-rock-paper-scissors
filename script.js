const choices = ['paper', 'rock', 'scissors']

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () =>{
    const randomIndex = Math.floor(Math.random() * choices.length)
    console.log(randomIndex)
    return choices[randomIndex]
}

const checkHumanInput = (input) =>{
    return choices.includes(input.toLowerCase())
}

const getHumanChoice = () => {
    let humanInput = prompt("rock, paper or scissors ? ")
    while(!checkHumanInput(humanInput)){
        alert("That's not a choice")
        humanInput = prompt("rock, paper or scissors ? ")
        checkHumanInput(humanInput)
    }
    return humanInput
}

const comparateChoices = (humanChoice, computerChoice) => {
    if(humanChoice === choices[0] && computerChoice === choices[1]){
        return 1
    }else if(humanChoice === choices[1] && computerChoice === choices[2]){
        return 1
    }else if(humanChoice === choices[2] && computerChoice === choices[0]){
        return 1
    }else if(humanChoice === computerChoice){
            return -1
    }else{
        
        return 0
    }
}

const getScore = () =>  console.log("H score : ", humanScore, " VS C Score : ", computerScore)

const playRound = (humanChoice, computerChoice) =>{
    const roundResult = comparateChoices(humanChoice, computerChoice)
    if(roundResult === -1){
        console.log("Nobody win")
        return 
    }
    console.log(roundResult === 0 ? `You win ! ${humanChoice.toLowerCase()} beat ${computerChoice.toLowerCase()} !` : `You lose ! ${humanChoice.toLowerCase()} beat ${computerChoice.toLowerCase()} !`)
    roundResult === 0 ? humanScore++ : computerScore++
}

const game = () => {
    let humanSelection;
    let computerSelection;
    for(let i=0; i<5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        getScore()
    }
    const winner = humanScore > computerScore ? "Human" : "Computer"
    console.log("The winner is : ", winner)
}

game()