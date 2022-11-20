function hideShowImg() {
    const image = document.getElementById('html-meme');
    if (image.getAttribute("hidden") === null) {
    image.setAttribute("hidden", "je suis une grosse truite")}
    else {
        image.removeAttribute("hidden")
    }
}

function printRandomNum() {
    const randomNum = Math.floor(Math.random() * 1000);
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
    const input = document.getElementById('dropdown');
    input.checked = false;
    
    const ghostWindow = document.getElementById('ghost-window');
    ghostWindow.remove();
}

function displayNav() {
    const input = document.getElementById('dropdown');
    const ghostWindow = document.createElement('div');
    const state = input.checked;
    if (state){
    ghostWindow.className = 'ghost-window';
    ghostWindow.id = 'ghost-window';
    document.body.appendChild(ghostWindow);
    ghostWindow.addEventListener('click', hideNav);
    } else {
        const ghostWindow = document.getElementById('ghost-window');
        ghostWindow.remove();
    }
}

const input = document.getElementById('dropdown');
input.addEventListener('click', displayNav);
input.addEventListener('load', ghostDisplay)

function ghostDisplay() {
    const input = document.getElementById('dropdown');
    const ghostWindow = document.createElement('div');
    const state = input.checked;
    if (state){
        ghostWindow.className = 'ghost-window';
        ghostWindow.id = 'ghost-window';
        document.body.appendChild(ghostWindow);
        ghostWindow.addEventListener('click', hideNav);
    }
}

const flexContainer = document.querySelector(".showcase");
const flexDirection = document.querySelector("#flex-direction-select");
const justifyContent = document.querySelector("#justify-content-select");
const containerClassList = flexContainer.classList;

function selectFlexDirection() {
    flexContainer.className = "showcase";
    containerClassList.add(flexDirection.value);
}

function selectJustifyContent() {
    flexContainer.className = "showcase";
    containerClassList.add(justifyContent.value);
}