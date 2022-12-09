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
  if (computerChoice.toLowerCase() === rules[userInput.toLowerCase()]) {
    return "You win !";
  } else {
    return "You loose !";
  }
}

/* function showRed(id) {
  let img = document.getElementById(`memory-${id}`)
  let images = document.querySelectorAll(".memory-game img")

  for (let i = 0; i <= 16; i++) {
    if (img = images[i]) {
      document.getElementById(`memory-${id}`).src = "memory-game-red.png";
    } else {
      document.querySelectorAll(".memory-game img")[i].src = "memory-game-green.png"
    }
  }
} */

function onClickShowImage(id) {
  let image = document.getElementById(`memory-${id}`);
  image.classList.remove("image-hidden");
  image.classList.add("image-shown");
  let img = document.getElementById(`img-${id}`);
  img.classList.remove("img-hidden");
  img.classList.add("img-shown");
  onClickHideImages();
}
function onClickHideImages() {
  if (document.querySelectorAll(".image-shown").length > 2) {
    for (let i = 1; i <= 16; i++) {
      document.getElementById(`memory-${i}`).classList.remove("image-shown");
      document.getElementById(`memory-${i}`).classList.add("image-hidden");

      document.getElementById(`img-${i}`).classList.remove("img-shown");
      document.getElementById(`img-${i}`).classList.add("img-hidden");
    }
  }
}
function onLoadRandomPosition() {}
