const mbutton1 = document.querySelector('.mbutton1')
const mbutton2 = document.querySelector('.mbutton2')
const mbutton3 = document.querySelector('.mbutton3')
const mbutton4 = document.querySelector('.mbutton4')

const model = document.querySelector('.model')
const finder = document.querySelector('.magnifying-glass-wrapper')

const fastButtonToAct = document.querySelector('.overlap-three')
const fastButtonToBib = document.querySelector('.overlap-four')

const textMap = document.querySelector('.text-wrapper-two')
const textMap2 = document.querySelector('.text-wrapper-two2')
const textMap3 = document.querySelector('.text-wrapper-two3')

let point = sessionStorage.getItem("thisMap")

const textRoute = () => {
    if (point === "bib") {
        console.log("Text bib")
        textMap.textContent = "1. Пройдите к библиотеке указаной на карте 1 этажа"
    } else if (point === "act") {
        console.log("Text act")
        textMap2.style.visibility = "visible"
        textMap3.style.visibility = "visible"
        textMap.textContent = "1.Пройдите к лестнице указаной на карте 1 этажа"
        textMap2.textContent = "2. Поднимитесь по лестнице на 2 этаж"
        textMap3.textContent = "3. Пройдите к актовому залу указаному на карте 2 этажа"
    } else if(point === "pol") {
        textMap2.style.visibility = "visible"
        textMap3.style.visibility = "visible"
        textMap.textContent = "1. Пройдите к лестнице указаной на карте 1 этажа"
        textMap2.textContent = "2. Поднимитесь по лестнице на 4 этаж"
        textMap3.textContent = "3. Пройдите к IT полигону указаному на карте 4 этажа"
    } else if(point === "toilet") {
        textMap.textContent = "1. Пройдите к уборным указаным на карте 1 этажа"
    }
}

const clear = () => {
    sessionStorage.setItem("thisMap", "")
    document.documentElement.style.setProperty("--to-bibliotec", "hidden")
    document.documentElement.style.setProperty("--to-act-zal", "hidden")
    document.documentElement.style.setProperty("--to-toilet", "hidden")
    textMap.textContent = "Здесь будет текст маршрута"
    textMap2.style.visibility = "hidden"
    textMap3.style.visibility = "hidden"
}


const toPoint = () => {
    console.log(point)
    clear()
    textRoute()
    model.style.display = "none"
    if (point === "toilet") {
        sessionStorage.setItem("thisMap", "toilet")
        document.documentElement.style.setProperty("--to-toilet", "visible")
    } else if (point === "act") {
        sessionStorage.setItem("thisMap", "act")
        document.documentElement.style.setProperty("--to-act-zal", "visible")
    } else if (point === "bib") {
        sessionStorage.setItem("thisMap", "bib")
        document.documentElement.style.setProperty("--to-bibliotec", "visible")
    } else if (point === "pol") {
        sessionStorage.setItem("thisMap", "pol")
        document.documentElement.style.setProperty("--to-act-zal", "visible")
    }
}

toPoint(sessionStorage.getItem("thisMap")) // Для прогрузки маршрутов после перезагрузки страницы

fastButtonToAct.addEventListener('click', () => {
    point = "act"
    toPoint()
})
fastButtonToBib.addEventListener('click', () => {
    point = "bib"
    toPoint()
})


mbutton1.addEventListener('click', toPoint)
mbutton1.addEventListener('click', () => {point = "toilet"; toPoint()})
mbutton2.addEventListener('click', () => {point="act"; toPoint()})
mbutton3.addEventListener('click', () => {point="bib"; toPoint()})
mbutton4.addEventListener('click', () => {point="pol"; toPoint()})


finder.addEventListener('click', () => {
    model.style.display = "flex"
})
