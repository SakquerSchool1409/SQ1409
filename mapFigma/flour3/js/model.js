const mbutton1 = document.querySelector('.mbutton1')
const mbutton2 = document.querySelector('.mbutton2')
const mbutton3 = document.querySelector('.mbutton3')
const mbutton4 = document.querySelector('.mbutton4')

const finder = document.querySelector('.magnifying-glass-wrapper')
const model = document.querySelector('.model')

const fastButtonToAct = document.querySelector('.overlap-group-5')
const fastButtonToBib = document.querySelector('.overlap-25')

const textMap = document.querySelector('.text-wrapper-two')
const textMap2 = document.querySelector('.text-wrapper-two2')
const textMap3 = document.querySelector('.text-wrapper-two3')

let point = sessionStorage.getItem("thisMap")

const textRoute = () => {
    if (point === "bib") {
        textMap.textContent = "1. Пройдите к библиотеке указаной на карте 1 этажа"
    } else if (point === "act") {
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
    } else if (point === "act") {
        sessionStorage.setItem("thisMap", "act")
    } else if (point === "bib") {
        sessionStorage.setItem("thisMap", "bib")
    } else if (point === "pol") {
        sessionStorage.setItem("thisMap", "pol")
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
