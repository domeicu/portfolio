const hamburger = document.getElementById("hamburger");
const browser = document.querySelector(".browser");
const mainContentDiv = document.getElementById("content");
const contentSections = document.querySelectorAll(".content");

let activeContainer = document.getElementById("home");
let activeContent = document.getElementById("home-home");
let activeListItem = null;

contentSections.forEach((content) => {
  const parentId = content.getAttribute("data-parent");
  const titleText = content.getAttribute("data-title");

  if (parentId && titleText) {
    const parentContainer = document.getElementById(parentId);
    if (parentContainer) {
      const listItem = document.createElement("div");
      listItem.className = "list-item";
      
      const p = document.createElement("p");
      p.innerText = titleText;
      listItem.appendChild(p);
      
      parentContainer.appendChild(listItem);

      listItem.onclick = (event) => {
        event.stopPropagation();
        updateDisplay(parentContainer, listItem, content);
      };

      // track first list elem. for when section is clicked
      if (!parentContainer.firstItemRef) {
          parentContainer.firstItemRef = listItem;
          parentContainer.firstContentRef = content;
      }
    }
  }
});

const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  container.onclick = () => {
    if (activeContainer !== container) {
      if (container.id === "home") {
          updateDisplay(container, null, document.getElementById("home-home"));
      } else if (container.firstItemRef && container.firstContentRef) {
          updateDisplay(container, container.firstItemRef, container.firstContentRef);
      }
    };
  }
});

function updateDisplay(newContainer, newItem, newContent) {
  if (activeContainer) activeContainer.classList.remove("active-container");
  if (activeListItem) activeListItem.classList.remove("active-list-item");
  if (activeContent) activeContent.classList.remove("active-content");

  activeContainer = newContainer;
  activeListItem = newItem;
  activeContent = newContent;

  if (activeContainer) activeContainer.classList.add("active-container");
  if (activeListItem) activeListItem.classList.add("active-list-item");
  if (activeContent) activeContent.classList.add("active-content");

  toggleMenu();
}

function toggleMenu() {
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");
  browser.classList.toggle("mobile-hidden");
  mainContentDiv.classList.toggle("mobile-hidden");
}

hamburger.onclick = toggleMenu;
