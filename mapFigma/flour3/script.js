const buttonFlour1 = document.querySelector('.text-wrapper-30')
const buttonFlour2 = document.querySelector('.text-wrapper-31')
const buttonFlour4 = document.querySelector('.text-wrapper-32')
const swiftFlour = document.querySelector('.overlap-24')

const bod = document.querySelector('.overlap')

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

buttonFlour1.addEventListener('click', () => {
    swiftMove(-160, 1)
})

buttonFlour2.addEventListener('click', () => {
    swiftMove(-80, 2)

})

buttonFlour4.addEventListener('click', () => {
    swiftMove(75, 4)
})



