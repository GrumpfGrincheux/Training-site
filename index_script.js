function printRandomNum() {
  const randomNum = Math.floor(Math.random() * 1000);
  document.getElementById("random-number").textContent = randomNum;
}