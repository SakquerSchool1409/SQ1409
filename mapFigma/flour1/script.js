const swiftFlour = document.querySelector('.div-wrapper-m')
const bod = document.querySelector('.body')


const model = document.querySelector('.model')
const finder = document.querySelector('.magnifying-glass-wrapper')

const buttonFlour2 = document.querySelector('.text-wrapper-four')
const buttonFlour3 = document.querySelector('.text-wrapper-five')
const buttonFlour4 = document.querySelector('.text-wrapper-six')


const mbutton1 = document.querySelector('.mbutton1')
const mbutton2 = document.querySelector('.mbutton2')
const mbutton3 = document.querySelector('.mbutton3')
const mbutton4 = document.querySelector('.mbutton4')


finder.addEventListener('click', () => {
    model.style.display = "flex"
})


//map
const clearTo = () => {
    document.documentElement.style.setProperty("--to-act-zal", "hidden")
    document.documentElement.style.setProperty("--to-bibliotec", "hidden")
    document.documentElement.style.setProperty("--to-toilet-down", "hidden")
}

clearTo()

if (sessionStorage.getItem("thisMap") === "act") {
    document.documentElement.style.setProperty("--to-act-zal", "visible")
}
else if (sessionStorage.getItem("thisMap") === "bib") {
    document.documentElement.style.setProperty("--to-bibliotec", "visible")
}
else if (sessionStorage.getItem("thisMap") === "pol") {
    document.documentElement.style.setProperty("--to-act-zal", "visible")
}
else {
    document.documentElement.style.setProperty("--to-act-zal", "hidden")
    document.documentElement.style.setProperty("--to-bibliotec", "hidden")
}


const toToilet = () => {
    clearTo()
    document.documentElement.style.setProperty("--to-toilet-down", "visible")
    model.style.display = "none"
}

const toAct1 = () => {
    clearTo()
    sessionStorage.setItem("thisMap", "act")
    document.documentElement.style.setProperty("--to-act-zal", "visible")
    model.style.display = "none"
}

const toBib1 = () => {
    clearTo()
    sessionStorage.setItem("thisMap", "bib")
    document.documentElement.style.setProperty("--to-bibliotec", "visible")
    model.style.display = "none"
}

const toPol1 = () => {
    clearTo()
    sessionStorage.setItem("thisMap", "pol")
    document.documentElement.style.setProperty("--to-act-zal", "visible")
    model.style.display = "none"
}


mbutton1.addEventListener('click', toToilet)
mbutton2.addEventListener('click', toAct1)
mbutton3.addEventListener('click', toBib1)
mbutton4.addEventListener('click', toPol1)



// animation
document.addEventListener('DOMContentLoaded', () => {
    bod.style.transform = 'translateY(1920px)'
})

//navigation
const swiftMove = (y, flour) => {
    bod.style.transform = 'translateY(-1920px)'
    swiftFlour.style.transform = `translateY(${y}px)`
    setTimeout(() => {location.href = `../flour${flour}/index.html`}, 500)
}

buttonFlour2.addEventListener('click', () => {
    swiftMove(80, 2, )
})

buttonFlour3.addEventListener('click', () => {
    swiftMove(160, 3, )

})

buttonFlour4.addEventListener('click', () => {
    swiftMove(235, 4)
})




const mapToToilet = document.querySelector('.mbutton1')
const mapToAct = document.querySelector('.mbutton2')
const mapToBib = document.querySelector('.mbutton3')
const mapToPolygon = document.querySelector('.mbutton4')

