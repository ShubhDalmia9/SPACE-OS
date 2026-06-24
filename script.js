  function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("notes"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
 
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")


welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});




var selectedIcon = undefined;

function selectIcon(element) {

  if (selectedIcon !== undefined) {
    deselectIcon(selectedIcon);
  }

  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element) {
  console.log("selected?", element.classList.contains("selected"));

  if (element.classList.contains("selected")) {
    deselectIcon(element);
  } else {
    selectIcon(element);
  }
}

var app1 = document.querySelector("#app1");
console.log(app1);

var factsApp = document.querySelector("#factsApp");

factsApp.addEventListener("click", function () {
  handleIconTap(factsApp);
});

app1.addEventListener("click", function () {
  console.log("CLICKED");
  handleIconTap(app1);
});



var notesScreen = document.querySelector("#notes")

var notesScreenClose = document.querySelector("#notesclose")

notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));

var app1 = document.querySelector("#app1");
var notesWindow = document.querySelector("#notes");

app1.addEventListener("click", function() {
  openWindow(notesWindow);
});

var notesWindow = document.querySelector("#notes");
var notesClose = document.querySelector("#notesclose");

notesClose.addEventListener("click", function () {
closeWindow(notesWindow);
});

app1.addEventListener("click", function () {
openWindow(notesWindow);
});


dragElement(document.getElementById("facts"));

var factsWindow = document.querySelector("#facts");
var factsClose = document.querySelector("#factsclose");
var factsApp = document.querySelector("#factsApp");

factsApp.addEventListener("click", function() {
  openWindow(factsWindow);
});

factsClose.addEventListener("click", function() {
  closeWindow(factsWindow);
});

var facts = [
  "Sputnik 1 was the first artificial satellite launched into space.",
  "A day on Venus is longer than a year on Venus.",
  "Chandrayaan-3 made India the first nation to land near the Moon's south pole.",
  "Voyager 1 is the most distant human-made object from Earth.",
  "Mars has the tallest volcano in the Solar System: Olympus Mons.",
  "The International Space Station travels at about 28,000 km/h.",
  "Jupiter is so large that more than 1,300 Earths could fit inside it.",
  "The Sun contains about 99.8% of the mass in our Solar System.",
  "Space is completely silent because there is no atmosphere to carry sound waves."
];

var factButton = document.querySelector("#factButton");
var factText = document.querySelector("#factText");

factButton.addEventListener("click", function() {
  var randomNumber = Math.floor(Math.random() * facts.length);
  factText.innerHTML = facts[randomNumber];
});
