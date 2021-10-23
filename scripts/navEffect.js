const menuBtn = document.querySelector(".menu-collapse")
const menuContainer = document.querySelector("nav")
const menuHeader = document.querySelector("header")

menuBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("show-on-mobile")
})
const yPosition = document.querySelector(".jumbotron--body-text").getBoundingClientRect().top
window.addEventListener("scroll", () => {
    if (window.scrollY >= yPosition) {
        menuHeader.classList.add("sticky-header")
    } else
        menuHeader.classList.remove("sticky-header")
})

