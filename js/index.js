const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menuButton");
const sidebarOverlay = document.querySelector("#sidebarOverlay");
const navigationLinks = document.querySelectorAll(".nav-menu__link");

function setMenuState(isOpen) {
  sidebar.classList.toggle("is-open", isOpen);
  sidebarOverlay.classList.toggle("is-visible", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  setMenuState(isOpen);
});

sidebarOverlay.addEventListener("click", () => setMenuState(false));

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    setMenuState(false);
  }
});
