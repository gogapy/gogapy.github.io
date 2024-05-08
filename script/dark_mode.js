const dc = document,
  ls = localStorage;
let $lightmodeContainer = dc.querySelector(".lightmode-container"),
  $darkmodeContainer = dc.querySelector(".darkmode-container");

function darkMode() {
  $lightmodeContainer.style.left = ".5rem";
  $darkmodeContainer.style.left = "-2rem";
  dc.body.classList.add("darkmode-active");
  ls.setItem("theme", "dark");
}
$darkmodeContainer.addEventListener("click", darkMode);

function lightMode() {
    $lightmodeContainer.style.left = "-2rem";
    $darkmodeContainer.style.left = ".5rem";
    dc.body.classList.remove("darkmode-active");
    ls.setItem("theme", "light");
  }
$lightmodeContainer.addEventListener("click", lightMode);

// localStorage
dc.addEventListener("DOMContentLoaded", (e) => {
  if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem("theme") === "light") lightMode();
  if (ls.getItem("theme") === "dark") darkMode();
});
