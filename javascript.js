function hideShowImg() {
  const image = document.getElementById("html-meme");
  if (image.getAttribute("hidden") === null) {
    image.setAttribute("hidden", "je suis une grosse truite");
  } else {
    image.removeAttribute("hidden");
  }
}

function printRandomNum() {
  const randomNum = Math.floor(Math.random() * 1000);
  document.getElementById("random-number").textContent = randomNum;
}

window.onload = () => {
  document.getElementById("height-counter").textContent = window.innerHeight;
  document.getElementById("width-counter").textContent = window.innerWidth;
};
window.onresize = () => {
  document.getElementById("height-counter").textContent = window.innerHeight;
  document.getElementById("width-counter").textContent = window.innerWidth;
};

const hideNav = () => {
  const input = document.getElementById("dropdown");
  input.checked = false;

  const ghostWindow = document.getElementById("ghost-window");
  ghostWindow.remove();
};

function displayNav() {
  const input = document.getElementById("dropdown");
  const ghostWindow = document.createElement("div");
  const state = input.checked;
  if (state) {
    ghostWindow.className = "ghost-window";
    ghostWindow.id = "ghost-window";
    document.body.appendChild(ghostWindow);
    ghostWindow.addEventListener("click", hideNav);
  } else {
    const ghostWindow = document.getElementById("ghost-window");
    ghostWindow.remove();
  }
}

const input = document.getElementById("dropdown");
input.addEventListener("click", displayNav);
input.addEventListener("load", ghostDisplay);

function ghostDisplay() {
  const ghostWindow = document.createElement("div");
  const state = input.checked;
  if (state) {
    ghostWindow.className = "ghost-window";
    ghostWindow.id = "ghost-window";
    document.body.appendChild(ghostWindow);
    ghostWindow.addEventListener("click", hideNav);
  }
}

const showcase = document.querySelector(".showcase");

const flexProperties = [
  "flex-direction",
  "justify-content",
  "align-content",
  "align-items",
  "flex-wrap",
  "item",
  "align-self",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
];

const flexItemProperties = [
  "align-self",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
];

function getInputs() {
  const itemHeight = document.querySelector("#height").value;
  const itemWidth = document.querySelector("#width").value;

  return { itemHeight, itemWidth };
}

let selectedItem = document.querySelector("#item-select").value;

function onchangeSelectItem() {
  selectedItem = document.querySelector("#item-select").value;
}

function onclickItem(index) {
  selectedItem = index;
  document.querySelector("#item-select").selectedIndex = index - 1;
}

function reset() {
  while (document.querySelectorAll(".showcase > div").length > 4) {
    document.querySelector(".showcase").lastChild.remove();
  }

  while (document.querySelectorAll(".showcase > div").length < 4) {
    addItem();
  }

  document.querySelector(".showcase").className = "showcase";

  for (let i = 0; i < flexProperties.length; i++) {
    document.querySelector(
      "#" + flexProperties[i] + "-select"
    ).selectedIndex = 0;
  }

  document.querySelector("#flex-shrink-select").selectedIndex = 1;

  const items = showcase.querySelectorAll("div");

  for (let i = 0; i < items.length; i++) {
    items[i].className = "fi";
    items[i].classList.add(`fi-${i + 1}`);
    items[i].style = undefined;
  }
  clearInputs();
}

function clearInputs() {
  document.querySelector("#height").value = undefined;
  document.querySelector("#width").value = undefined;
}

function addItem() {
  const newItem = document.createElement("div");
  newItem.classList.add(
    "fi",
    "fi-" + (showcase.querySelectorAll("div").length + 1).toString()
  );
  const newItemText = document.createElement("p");
  newItemText.textContent = (
    showcase.querySelectorAll("div").length + 1
  ).toString();
  newItem.addEventListener(
    "click",
    onclickItem.bind(null, newItemText.textContent)
  );
  newItem.appendChild(newItemText);
  showcase.appendChild(newItem);
}

function removeItem() {
  if (document.querySelectorAll(".showcase > div").length === 1) {
    alert("You can't remove the last item !");
  } else {
    document.querySelector(".showcase > div:last-of-type").remove();
  }
}

function selectOptions() {
  // flex-container properties selector

  const showcaseClassList = showcase.classList;

  const flexDirection = document.querySelector("#flex-direction-select");

  const justifyContent = document.querySelector("#justify-content-select");
  const justifyContentOption = justifyContent.value;
  const justifyContentClasses = "justify-content-" + justifyContentOption;

  const alignContent = document.querySelector("#align-content-select");
  const alignContentOption = alignContent.value;
  const alignContentClasses = "align-content-" + alignContentOption;

  const alignItems = document.querySelector("#align-items-select");
  const alignItemsOption = alignItems.value;
  const alignItemsClasses = "align-items-" + alignItemsOption;

  const flexWrap = document.querySelector("#flex-wrap-select");

  showcase.className = "showcase";
  showcaseClassList.add(flexDirection.value);
  showcaseClassList.add(justifyContentClasses);
  showcaseClassList.add(alignContentClasses);
  showcaseClassList.add(alignItemsClasses);
  showcaseClassList.add(flexWrap.value);

  // flex-items properties selector

  /*   const itemSelect = document.querySelector("#item-select");
  const selectedItem = itemSelect.value; */

  const flexItem = document.querySelector(".fi-" + selectedItem);
  const itemClassList = flexItem.classList;

  const alignSelf = document.querySelector("#align-self-select");
  const alignSelfOption = alignSelf.value;
  const alignSelfClasses = "align-self-" + alignSelfOption;

  const flexGrow = document.querySelector("#flex-grow-select");
  const flexGrowOption = flexGrow.value;
  const flexGrowClasses = "flex-grow-" + flexGrowOption;

  const flexShrink = document.querySelector("#flex-shrink-select");
  const flexShrinkOption = flexShrink.value;
  const flexShrinkClasses = "flex-shrink-" + flexShrinkOption;

  const flexBasis = document.querySelector("#flex-basis-select");
  const flexBasisOption = flexBasis.value;
  const flexBasisClasses = "flex-basis-" + flexBasisOption;

  flexItem.className = "fi";
  itemClassList.add("fi-" + selectedItem);
  itemClassList.add(alignSelfClasses);
  itemClassList.add(flexGrowClasses);
  itemClassList.add(flexShrinkClasses);
  itemClassList.add(flexBasisClasses);

  return { selectedItem };
}

function reinitValues(itemNumber) {
  let currentStyle = window.getComputedStyle(
    document.querySelector(".fi-" + itemNumber),
    null
  );
  for (let i = 0; i < flexItemProperties.length; i++) {
    document.querySelector(
      `#${
        flexItemProperties[i]
      }-select > option[value='${currentStyle.getPropertyValue(
        flexItemProperties[i]
      )}']`
    ).selected = true;
  }
  clearInputs();
}

function apply() {
  const itemValues = getInputs();
  const selectedItem = selectOptions();
  const item = document.querySelector(`.fi-${selectedItem}`);
  item.style = `width: ${itemValues.itemWidth}px;
                  height: ${itemValues.itemHeight}px;`;
}
