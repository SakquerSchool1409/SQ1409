const buttonFlour1 = document.querySelector('.text-wrapper-41')
const buttonFlour2 = document.querySelector('.text-wrapper-42')
const buttonFlour3 = document.querySelector('.text-wrapper-43')

const swiftFlour = document.querySelector('.overlap-15')


const swiftMove = (y, flour) => {
    bod.style.transform = 'translateY(-1920px)'
    swiftFlour.style.transform = `translateY(${y}px)`
    setTimeout(() => {location.href = `../flour${flour}/index.html`}, 500)
}

buttonFlour1.addEventListener('click', () => {
    swiftMove(-235, 1)
})

buttonFlour2.addEventListener('click', () => {
    swiftMove(-155, 2)

})

buttonFlour3.addEventListener('click', () => {
    swiftMove(-75, 4)
})
