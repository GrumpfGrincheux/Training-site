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

function onClickShowImage(id) {
  const img = document.getElementById(`img-${id}`);
  img.classList.remove("img-hidden");
  img.classList.add("img-shown");
  onClickValidateImages();
  onClickHideImages();
}
function onClickHideImages() {
  const images = document.querySelectorAll(".img");
  if (document.querySelectorAll(".img-shown").length > 2) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("img-shown");
      images[i].classList.add("img-hidden");
    }
  }
}
function onClickValidateImages() {
  let shownImages = document.querySelectorAll(".img-shown");
  let firstImage = shownImages[0];
  let secondImage = shownImages[1];
  if (firstImage.classList[0] === secondImage.classList[0]) {
    firstImage.classList.add("img-valid");
    firstImage.classList.remove("img-shown");
    secondImage.classList.add("img-valid");
    secondImage.classList.remove("img-shown");
  }
}
function swapElements(arr, i1, i2) {
  // Step 1
  let temp = arr[i1];
  // Step 2
  arr[i1] = arr[i2];
  // Step 3
  arr[i2] = temp;
}
function onLoadRandomPosition() {13
  let randomPosArray = [];
  for (let i = 1; i <= 16; i++) {
    randomPosArray.push(i);
  }
  let numSwap = 0;
  while (++numSwap < randomPosArray.length) {
    swapElements(randomPosArray, 0, Math.round(Math.random() * 15));
  }
  const images = document.querySelectorAll(".image");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("style", `order: ${randomPosArray[i]}`);
  }
}
window.onload = onLoadRandomPosition;
window.onload = () => {console.log("Hello")}