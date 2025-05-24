const buttonFlour2 = document.querySelector('.text-wrapper-four')
const buttonFlour3 = document.querySelector('.text-wrapper-five')
const buttonFlour4 = document.querySelector('.text-wrapper-six')
const swiftFlour = document.querySelector('.div-wrapper-m')


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
