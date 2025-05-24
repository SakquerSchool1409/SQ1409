const buttonFlour1 = document.querySelector('.text-wrapper-25')
const buttonFlour3 = document.querySelector('.text-wrapper-27')
const buttonFlour4 = document.querySelector('.text-wrapper-28')

const swiftFlour = document.querySelector('.overlap-19')


const swiftMove = (y, flour) => {
    bod.style.transform = 'translateY(-1920px)'
    swiftFlour.style.transform = `translateY(${y}px)`
    setTimeout(() => {location.href = `../flour${flour}/index.html`}, 500)
}

buttonFlour1.addEventListener('click', () => {
    swiftMove(-80, 1, )
})

buttonFlour3.addEventListener('click', () => {
    swiftMove(80, 3, )

})

buttonFlour4.addEventListener('click', () => {
    swiftMove(155, 4)
})
