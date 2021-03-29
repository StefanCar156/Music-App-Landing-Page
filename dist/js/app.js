// Nav
const navLinks = document.querySelector(".nav__links")
const navBtn = document.querySelector(".nav__btn")
const header = document.querySelector("header")

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--active")
  header.classList.toggle("header--fixed")
})

// Responsive Layout
const popularContainer = document.querySelector(".popular")
const popularArticles = document.querySelector(".popular__articles")
const popularText = document.querySelector(".popular__text")

const handleResponsive = () => {
  if (window.innerWidth < 1024) {
    popularContainer.insertBefore(popularArticles, popularText)
  } else {
    popularContainer.insertBefore(popularText, popularArticles)
  }
}

window.onload = handleResponsive
window.onresize = handleResponsive
