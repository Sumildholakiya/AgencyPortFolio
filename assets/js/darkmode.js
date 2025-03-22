

// const themeToggle = document.getElementById("theme-toggle");
// const body = document.body;

// // Check for saved theme preference in localStorage
// const currentTheme = localStorage.getItem("theme") || "light";
// body.setAttribute("data-theme", currentTheme);

// // Update button icon visibility based on the theme
// updateIcons(currentTheme);

// themeToggle.addEventListener("click", () => {
//     let newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
    
//     body.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);

//     updateIcons(newTheme);
// });

// function updateIcons(theme) {
//     document.querySelector(".sun-icon").style.display = theme === "light" ? "block" : "none";
//     document.querySelector(".moon-icon").style.display = theme === "light" ? "none" : "block";
// }










const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
const defaultTheme = savedTheme ? savedTheme : "dark";

body.setAttribute("data-theme", defaultTheme);
updateIcons(defaultTheme);

themeToggle.addEventListener("click", () => {
    let newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
    
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateIcons(newTheme);
});

function updateIcons(theme) {
    document.querySelector(".sun-icon").style.display = theme === "light" ? "block" : "none";
    document.querySelector(".moon-icon").style.display = theme === "light" ? "none" : "block";
}
