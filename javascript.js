function hideShowHTML() {
    const image = document.getElementById('html-meme');
    if (image.getAttribute("hidden") === null) {
    image.setAttribute("hidden", "je suis une grosse truite")}
    else {
        image.removeAttribute("hidden")
    }
}

function printRandomNum() {
    let randomNum = Math.floor(Math.random() * 1000);
    document.getElementById('random-number').textContent = randomNum;
}


window.onload = () => {
    document.getElementById("height-counter").textContent = window.innerHeight;
    document.getElementById("width-counter").textContent = window.innerWidth;
}
window.onresize = () => {
    document.getElementById("height-counter").textContent = window.innerHeight;
    document.getElementById("width-counter").textContent = window.innerWidth;
}

const hideNav = () => {
    let input = document.getElementById('dropdown');
    input.checked = false;
    
    let ghostWindow = document.getElementById('ghost-window');
    ghostWindow.remove();
}

function displayNav() {
    let input = document.getElementById('dropdown');
    let ghostWindow = document.createElement('div');
    let state = input.checked;
    if (state){
    ghostWindow.className = 'ghost-window';
    ghostWindow.id = 'ghost-window';
    document.body.appendChild(ghostWindow);
    ghostWindow.addEventListener('click', hideNav);
    } else {
        let ghostWindow = document.getElementById('ghost-window');
        ghostWindow.remove();
    }
}

let input = document.getElementById('dropdown');
input.addEventListener('click', displayNav);
input.addEventListener('load', ghostDisplay)

function ghostDisplay() {
    let input = document.getElementById('dropdown');
    let ghostWindow = document.createElement('div');
    let state = input.checked;
    if (state){
        ghostWindow.className = 'ghost-window';
        ghostWindow.id = 'ghost-window';
        document.body.appendChild(ghostWindow);
        ghostWindow.addEventListener('click', hideNav);
    }
}