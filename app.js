let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara  = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    //rock, paper,scissors
    const options = ["rock","paper","scissor"]
    //Math.random() -> generate number between 0 -> 1
    //Math.random() * 3  // gives number between range 0-3
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = ("Game was draw,play again");
    msg.style.backgroundColor="#081b31";
};

const showWinner =(userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win!  your ${userChoice}  beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lose  ${compChoice}  beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>
{
  console.log("user choice = ",userChoice);
  //Genrerate computer choice -> modular
  const compChoice = genCompChoice();
  console.log("computer choice = ",compChoice);

  if(userChoice === compChoice)
  {
     //drawGame
     drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock")
    {
        //scissor,paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper")
    {
        //rock ,scissor
        userWin = compChoice === "scissor" ? false :true;
    }else{
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};


choices.forEach((choice) => 
{
    //console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice=  choice.getAttribute("id");
        console.log("choice was clicked",userChoice); 
        playGame(userChoice);
    });
});