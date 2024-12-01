//Cuando hago CLICK en .Header-svg
   //a .Header.nav se le ADD la clase isActive


const headerSvg = document.querySelector(`.Header-svg`)
const headerNav = document.querySelector(`.Header-nav`)

console.log(headerNav)

headerSvg.addEventListener(`click` , () => {
    headerNav.classList.toggle(`isActive`)
})