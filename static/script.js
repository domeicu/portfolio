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

console.log(subsections[1])

function update(index) {
    for (let i = 0; i < len; i++) {
        sections[i].classList.remove("active-container");
        contents[i].classList.remove("active-content");
        for (let j = 0; j < sectionLengths[i]; j++) {
            console.log(i, j)
            subsections[i][j].classList.remove("active-list-item");
        }
    }
    sections[index].classList.add("active-container");
    contents[index].classList.add("active-content");
    subsections[index][sectionIndexes[index]].classList.add("active-list-item")
}

// document.addEventListener('keydown', function(event) {
//     if (event.key == "ArrowLeft") {
//         if (index > 0) {
//             index --;
//             update(index);
//         }
//     }
//     if (event.key == "ArrowRight") {
//         if (index < len) {
//             index ++;
//             update(index);
//         }
//     }
// });

for (let i = 0; i < len; i++) {
    sections[i].onclick = function () {
        index = i;
        update(index);
    }
}