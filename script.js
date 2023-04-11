const d = document,
  $toggleButton = d.querySelector(".toggle-button"),
  $untoggleButton = d.querySelector(".untoggle-button"),
  $sideMenu = d.getElementById("side-menu");

$toggleButton.addEventListener("click", (e) => {
  $sideMenu.style.right = "0";
});

$untoggleButton.addEventListener("click", () => {
  $sideMenu.style.right = "-10rem";
});

const $tabLinks = d.querySelectorAll(".tab-links"),
  $tabContents = d.querySelectorAll(".tab-contents");

const openTab = (tabName) => {
  for (tabLink of $tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of $tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  d.getElementById(tabName).classList.add("active-tab");
};

// darkmode

const body = document.body;
let $lightmodeContainer = d.querySelector(".lightmode-container"),
$darkmodeContainer = d.querySelector(".darkmode-container");

$darkmodeContainer.addEventListener("click", (e) => {
  $lightmodeContainer.style.left = ".5rem";
  $darkmodeContainer.style.left = "-2rem";
  body.classList.add("darkmode-active")
});

$lightmodeContainer.addEventListener("click", () => {
  $lightmodeContainer.style.left = "-2rem";
  $darkmodeContainer.style.left = ".5rem";
  body.classList.remove("darkmode-active")
});
