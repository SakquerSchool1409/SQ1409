const swiftFlour = document.querySelector('.overlap-19')
const bod = document.querySelector(".overlap")

const finder = document.querySelector('.magnifying-glass-wrapper')
const model = document.querySelector('.model')
const buttonFlour1 = document.querySelector('.text-wrapper-25')
const buttonFlour3 = document.querySelector('.text-wrapper-27')
const buttonFlour4 = document.querySelector('.text-wrapper-28')

const mbutton1 = document.querySelector('.mbutton1')


const closeTo = () => {
    document.documentElement.style.setProperty('--to-act-zal2', 'hidden')
}

//map
if (sessionStorage.getItem("thisMap") === "act") {
    document.documentElement.style.setProperty('--to-act-zal2', 'visible')
} else {
    closeTo()
}




mbutton1.addEventListener('click', () => {
    closeTo()
    sessionStorage.setItem("thisMap", "act")
    document.documentElement.style.setProperty('--to-act-zal2', 'visible')
})


//animation
document.addEventListener("DOMContentLoaded", () => {
    bod.style.transform = 'translateY(1920px)'
})


//model
finder.addEventListener('click', () => {
    model.style.display = "flex"
})


const swiftMove = (y, flour) => {
    swiftFlour.style.transform = `translateY(${y}px)`
    bod.style.transform = 'translateY(-1920px)'
    setTimeout(() => {location.href = `../flour${flour}/index.html`}, 500)
}

buttonFlour1.addEventListener('click', () => {
    swiftMove(-80, 1)
})

buttonFlour3.addEventListener('click', () => {
    swiftMove(80, 3)

})

buttonFlour4.addEventListener('click', () => {
    swiftMove(155, 4)
})