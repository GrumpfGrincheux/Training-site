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

function reset() {

    for (let y = document.querySelector(".showcase").childNodes.length; y > 2; y--) {
        document.querySelector(".showcase").lastChild.remove();
    }
    const showcase = document.querySelector(".showcase");
    const newItem1 = document.createElement("div");
    newItem1.classList.add("fi", "fi-1");
    const newItemText1 = document.createElement("p");
    newItemText1.textContent = "1";
    newItem1.appendChild(newItemText1);
    showcase.appendChild(newItem1);
    const newItem2 = document.createElement("div");
    newItem2.classList.add("fi", "fi-2");
    const newItemText2 = document.createElement("p");
    newItemText2.textContent = "2";
    newItem2.appendChild(newItemText2);
    showcase.appendChild(newItem2);
    const newItem3 = document.createElement("div");
    newItem3.classList.add("fi", "fi-3");
    const newItemText3 = document.createElement("p");
    newItemText3.textContent = "3";
    newItem3.appendChild(newItemText3);
    showcase.appendChild(newItem3);
    const newItem4 = document.createElement("div");
    newItem4.classList.add("fi", "fi-4");
    const newItemText4 = document.createElement("p");
    newItemText4.textContent = "4";
    newItem4.appendChild(newItemText4);
    showcase.appendChild(newItem4);
    document.querySelector(".showcase").className = "showcase";
    document.querySelector("#flex-direction-select").selectedIndex = 0;
    document.querySelector("#justify-content-select").selectedIndex = 0;
    document.querySelector("#align-content-select").selectedIndex = 0;
    document.querySelector("#align-items-select").selectedIndex = 0;
    document.querySelector("#flex-wrap-select").selectedIndex = 0;
    document.querySelector("#align-self-select").selectedIndex = 0;
    document.querySelector("#flex-grow-select").selectedIndex = 0;
    document.querySelector("#flex-shrink-select").selectedIndex = 0;
    document.querySelector("#flex-basis-select").selectedIndex = 0;
}
function addItem() {
    const showcase = document.querySelector(".showcase");
    const newItem = document.createElement("div");
    newItem.classList.add("fi", "fi-5");
    const newItemText = document.createElement("p");
    newItemText.textContent = "5";
    newItem.appendChild(newItemText);
    showcase.appendChild(newItem);
}
function removeItem() {
    if (document.querySelector(".showcase").childNodes.length == 3) {
        alert("You can't remove the last item !");
    } else {
    document.querySelector(".showcase").lastChild.remove();
    }
}
function selectOptions() {

// flex-container properties selector

    const flexContainer = document.querySelector(".showcase");
    const containerClassList = flexContainer.classList;
    
    const flexDirection = document.querySelector("#flex-direction-select");
    
    const justifyContent = document.querySelector("#justify-content-select");
    const justifyContentOption = justifyContent.value;
    const justifyContentClasses = ("justify-content-" + justifyContentOption).toString();
    
    const alignContent = document.querySelector("#align-content-select");
    const alignContentOption = alignContent.value;
    const alignContentClasses = ("align-content-" + alignContentOption).toString();
    
    const alignItems = document.querySelector("#align-items-select");
    const alignItemsOption = alignItems.value;
    const alignItemsClasses = ("align-items-" + alignItemsOption).toString();
    
    const flexWrap = document.querySelector("#flex-wrap-select");
    
    flexContainer.className = "showcase";
    containerClassList.add(flexDirection.value);
    containerClassList.add(justifyContentClasses);
    containerClassList.add(alignContentClasses);
    containerClassList.add(alignItemsClasses);
    containerClassList.add(flexWrap.value);

// flex-items properties selector

    const flexItem = document.querySelector(".fi-2");
    const itemClassList = flexItem.classList;

    const alignSelf = document.querySelector("#align-self-select");
    const alignSelfOption = alignSelf.value;
    const alignSelfClasses = ("align-self-" + alignSelfOption).toString();

    const flexGrow = document.querySelector("#flex-grow-select");
    const flexGrowOption = flexGrow.value;
    const flexGrowClasses = ("flex-grow-" + flexGrowOption).toString();

    const flexShrink = document.querySelector("#flex-shrink-select");
    const flexShrinkOption = flexShrink.value;
    const flexShrinkClasses = ("flex-shrink-" + flexShrinkOption).toString();

    const flexBasis = document.querySelector("#flex-basis-select");
    const flexBasisOption = flexBasis.value;
    const flexBasisClasses = ("flex-basis-" + flexBasisOption).toString();

    flexItem.className = "fi";
    itemClassList.add("fi-2");
    itemClassList.add(alignSelfClasses);
    itemClassList.add(flexGrowClasses);
    itemClassList.add(flexShrinkClasses);
    itemClassList.add(flexBasisClasses);

}