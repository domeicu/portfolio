const body = document.body;
const main = document.getElementById("root");

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;

body.style.height = main.clientHeight + "px";

main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

// Bind a scroll function
window.addEventListener("scroll", easeScroll);

function easeScroll() {
    sx = window.scrollX;
    sy = window.scrollY;
}

window.requestAnimationFrame(render);

function render() {
    //We calculate our container position by linear interpolation method
    dx = li(dx, sx, 0.11);
    dy = li(dy, sy, 0.11);

    dx = Math.floor(dx * 100) / 100;
    dy = Math.floor(dy * 100) / 100;

    main.style.transform = `translate(-${dx}px, -${dy}px)`;

    window.requestAnimationFrame(render);
}

function li(a, b, n) {
    return (1 - n) * a + n * b;
}