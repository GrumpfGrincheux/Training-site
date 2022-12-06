function screenSizeCounter() {
    document.getElementById("height-counter").textContent = window.innerHeight;
    document.getElementById("width-counter").textContent = window.innerWidth;
  }
  window.onload = () => { screenSizeCounter() }
  window.onresize = () => { screenSizeCounter() }
  
  function navDisplay() {
    const ghostWindow = document.querySelector("#ghost-window")
    const ghostWindowClassList = ghostWindow.classList
    let isDisplayed = document.getElementById("dropdown").checked
    if (isDisplayed) {
      ghostWindowClassList.remove("ghost-window-none")    
      let opacity = 0
      // Se répète toutes les 10 ms
      let fadeIn = setInterval(() => {
        opacity += 0.01
        ghostWindow.style = `opacity: ${opacity};`
      }, 10);
      // S'arrête après 600 ms
      setTimeout(() => { clearInterval(fadeIn) }, 600);
    } else {
      let opacity = 0.6
      // Se répète toutes les 10 ms
      let fadeOut = setInterval(() => {
        opacity -= 0.01
        ghostWindow.style = `opacity: ${opacity};`
      }, 10);
      // S'arrête après 600 ms
      setTimeout(() => { clearInterval(fadeOut) }, 600);
  
      setTimeout(() => {ghostWindowClassList.add("ghost-window-none")}, 600);
    }
  }
  function navHide() {
    document.getElementById("dropdown").checked = false
    navDisplay()
  }
  