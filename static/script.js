sections = document.getElementsByClassName("container")
contents = document.getElementsByClassName("content")
let subsections = []
let sectionLengths = []
let sectionIndexes = []
let len = sections.length
let index = 0

for (let i = 0; i < len; i++) {
    subsections[i] = sections[i].getElementsByClassName("list-item");
    sectionLengths[i] = subsections[i].length;
    sectionIndexes[i] = 0;
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