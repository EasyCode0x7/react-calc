import React from "react";

const LightTheme = {
    text: "#23374D",
    toggle: "#757575",
    hover: "#0085FF",
    bgc: "#eee",
};

const DarkTheme = {
    text: "eee",
    toggle: "#0085FF",
    hover: "#00D4FF",
    bgc: "323374D",
}

const Themes = {
    light: LightTheme,
    dark: DarkTheme,
}

const Change = () => {
    let sun = document.getElementById("bssun")
    let moon = document.getElementById("bsmoon")

    sun.addEventListener('click', () => {
        let s = document.getElementById("bg")
        s.setAttribute("style", "background-color: black")
    })
    moon.addEventListener('click', () => {
        alert("Moon: Dark mode")
    })
}



export default Change;