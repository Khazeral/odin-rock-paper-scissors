const choices = ['paper', 'rock', 'scissors']
const buttons = document.querySelectorAll("button")
const score = document.querySelector("span")
const message = document.querySelector("p")
let humanScore = 0;
let computerScore = 0;
score.textContent= `H score : ${humanScore} VS C Score : ${computerScore}`


const getComputerChoice = () =>{
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

const checkHumanInput = (input) =>{
    return choices.includes(input.toLowerCase())
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

const refreshScore = () =>  score.textContent= `H score : ${humanScore} VS C Score : ${computerScore}`

const checkSomeoneWin = () =>{
    if(humanScore === 5 || computerScore === 5){
        message.textContent = humanScore === 5 ? "You win !" : "You lose !"
        humanScore, computerScore = 0
    }
}

const playRound = (humanChoice, computerChoice) =>{
    if(checkHumanInput(humanChoice)){
        const roundResult = comparateChoices(humanChoice, computerChoice)
        if(roundResult === -1){
            message.textContent = "Nobody win"
            return 
        }
        message.textContent = roundResult === 0 ? 
            `You win ! ${humanChoice.toLowerCase()} beat ${computerChoice.toLowerCase()} !` 
            : 
            `You lose ! ${humanChoice.toLowerCase()} beat ${computerChoice.toLowerCase()} !`
        roundResult === 0 ? humanScore++ : computerScore++
        refreshScore()
        checkSomeoneWin()
    }
}

buttons.forEach(element => {
    element.addEventListener("click", ()=>{
        playRound(element.value, getComputerChoice())
    });
})
    

