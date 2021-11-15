const entryForm = document.getElementById("entryForm");
const textEnter = document.querySelector(".textEnter");
const entryToSection = document.getElementById("entryToSection");
const entryToDiv = document.querySelector(".entryToDiv");

let count = 1;

function addEntry(e) {
  e.preventDefault();

  const entryDiv = document.createElement("div");
  entryDiv.classList.add("Single-entry");
  entryDiv.innerText = textEnter.value;
  entryDiv.style.display = "none";
  entryToSection.appendChild(entryDiv);

  textEnter.value = "";

  const displayButton = document.createElement("button");
  displayButton.className = "display-button";
  displayButton.innerText = count;
  entryToDiv.appendChild(displayButton);

  displayButton.addEventListener("click", function () {
    const allentries = document.querySelectorAll(".Single-entry");

    for (let i = 0; i < allentries.length; i++) {
      allentries[i].style.display = "none";
    }
    entryDiv.style.display = "block";
  });
  count++;
}

entryForm.addEventListener("submit", addEntry);
