const mode = document.querySelector("#dark-light");
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const chooseMode = document.getElementById("choose-mode");
const selectedTheme = document.querySelectorAll(".item-selected");
mode.addEventListener("click", () => {
  chooseMode.classList.toggle("md:flex");
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

selectedTheme.forEach((item) => {
  item.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme;
    console.log(theme);
    switch (theme) {
      case "light": {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
        break;
      }
      case "dark": {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        break;
      }
      case "system": {
        localStorage.removeItem(theme);
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
        } else {
          document.documentElement.classList.remove("dark");
          sunIcon.classList.remove("hidden");
          moonIcon.classList.add("hidden");
        }
      }
      default:
        break;
    }
  });
});

// const selectedTheme = localStorage.getItem("theme");

// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (selectedTheme === "dark" || (!selectedTheme && systemTheme)) {
//   document.documentElement.classList.add("dark");
//   sunIcon.classList.add("hidden");
//   console.log("light");
// } else {
//   document.documentElement.classList.remove("dark");
//   moonIcon.classList.add("hidden");
// }
