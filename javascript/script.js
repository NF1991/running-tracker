// Empty array to store entries
let entries = [];

const entriesContainer = document.querySelector("#entries");

const addNewEntry = (newEntry) => {
  entriesContainer.removeChild(entriesContainer.firstElementChild);
  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry);
  listItem.appendChild(listValue);

  entriesContainer.appendChild(listItem);
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
};

// Grab elements needed

const form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
