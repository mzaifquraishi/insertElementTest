console.log("JS Starting");

const root = document.getElementById("root");
var L = 1;

const addElementButton = document.createElement("button");
addElementButton.innerText = "Add Element";
addElementButton.onclick = () => {
  const newElement = document.createElement(`h${L++}`);
  if (L == 7) L = 1;
  newElement.innerText = "Wow New Element";
  root.appendChild(newElement);
};
root.appendChild(addElementButton);

console.log("JS Ending");
