const sections = document.getElementsByClassName("container")
const contents = document.getElementsByClassName("content")
const hamburger = document.getElementById("hamburger")
const browser = document.getElementsByClassName("browser")[0]
const content = document.getElementById("content")
const len = sections.length
let subsections = []
let sectionLengths = []
let sectionIndexes = []
let index = 0

for (let i = 0; i < len; i++) {
  subsections[i] = sections[i].getElementsByClassName("list-item");
  sectionLengths[i] = subsections[i].length;
  sectionIndexes[i] = 0;
}

for (let i = 0; i < len; i++) {
  sections[i].onclick = function() {
    if (index != i) {
      sectionIndexes[i] = 0;
    }
    index = i;
    update();
  }
  for (let j = 0; j < sectionLengths[i]; j++) {
    subsections[i][j].onclick = function(event) {
      event.stopPropagation();
      index = i;
      sectionIndexes[i] = j;
      update();
    }
  }
}

function update() {
  for (let i = 0; i < len; i++) {
    sections[i].classList.remove("active-container");
    contents[i].classList.remove("active-content");
    for (let j = 0; j < sectionLengths[i]; j++) {
      contents[i + j].classList.remove("active-content")
      subsections[i][j].classList.remove("active-list-item");
    }
  }
  sections[index].classList.add("active-container");
  contents[index + sectionIndexes[index]].classList.add("active-content");
  if (index != 0) {
    subsections[index][sectionIndexes[index]].classList.add("active-list-item")
  }
}

hamburger.onclick = function() {
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");
  browser.classList.toggle("mobile-hidden");
  content.classList.toggle("mobile-hidden");
}
