// Empty array to store entries
let entries = [];

const entriesContainer = document.querySelector("#entries");

const addNewEntry = (newEntry) => {
  entriesContainer.removeChild(entriesContainer.firstElementChild);
  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry.toFixed(1));
  listItem.appendChild(listValue);

  entriesContainer.appendChild(listItem);
};

const reducer = (total, currentValue) => {
  return total + currentValue;
};

const calcTotal = () => {
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.getElementById("total").innerText = totalValue;
  document.getElementById("progressTotal").innerText = totalValue;
};

const calcAverage = () => {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  document.getElementById("average").innerText = average;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const entry = Number(document.querySelector("#entry").value);
  //  clear entry if no value entered
  if (!entry) return;
  document.querySelector("form").reset();
  //   Add entries
  entries.push(entry);
  addNewEntry(entry);
  calcTotal();
  calcAverage();
};

// Grab elements needed

const form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
