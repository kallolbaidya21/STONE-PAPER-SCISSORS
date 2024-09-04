let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const refreshBtn = document.querySelector("#btnRefresh");

//restart btn
function handleClick() {history.go(0);}
refreshBtn.addEventListener("click",handleClick);



//winner option
const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        msg.innerText = `You Win ! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost ! ${compChoice} Beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

//drawgame
const drawGame = () =>{
    msg.innerText = "Game Was Draw. play Again.";
    msg.style.backgroundColor = "#081b31"
};


//compChoice
const genCompChoice = () =>{
const options = ["rock", "paper", "scissors"];
const randIndx = Math.floor(Math.random () * 3);
return options  [randIndx];   
};

//userChoice
const playGame = (userChoice) =>{
    console.log("userchoice =", userChoice);

    //genCompchoice
const compChoice = genCompChoice();
console.log("compchoice =",compChoice);

//call drawgame
if(userChoice === compChoice){
   drawGame();
} else {
    let userWin = true ;
    if(userChoice === "rock"){
       userWin = compChoice ==="paper" ? false : true;
    } else if(userChoice === "paper"){
        userWin = compChoice === "scissors"? false : true ;
    } else if (userChoice ==="scissors"){
     userWin = compChoice ==="rock" ? false : true;
    }
  showWinner(userWin , userChoice , compChoice);
  }
}

choices.forEach((choice) => {
    choice.addEventListener ("click", () =>{
        const userChoice = choice.getAttribute("id")
playGame(userChoice);
    });
});