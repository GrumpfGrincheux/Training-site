function onClickRps(userInput) {
  let rps = ["Rock", "Paper", "Scissors"];
  let computerChoice = rps[Math.round(Math.random() * 2)];
  document.querySelector("#user-input").textContent = userInput;
  document.querySelector("#computer-choice").textContent = computerChoice;
  document.querySelector("#result").textContent = rpsResult(
    userInput,
    computerChoice
  );
}
function rpsResult(userInput, computerChoice) {
  if (userInput === computerChoice) {
    return "Draw";
  }
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (userInput === rules[computerChoice]) {
    return "You win !";
  } else {
    return "You loose !";
  }
}
