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
