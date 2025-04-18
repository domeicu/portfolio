sections = document.getElementsByClassName("container")
contents = document.getElementsByClassName("content")

const len = 2
let index = 0

function update(index) {
    for (let i = 0; i <= len; i++) {
        sections[i].classList.remove("active-container");
        contents[i].classList.remove("active-content");
    }
    sections[index].classList.add("active-container");
    contents[index].classList.add("active-content");
}

document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowLeft") {
        if (index > 0) {
            index --;
            update(index);
        }
    }
    if (event.key == "ArrowRight") {
        if (index < len) {
            index ++;
            update(index);
        }
    }
});

for (let i = 0; i <= len; i++) {
    sections[i].onclick = function () {
        update(i)
    }
}