console.log('Carousel exercise')

let slides = [
    './img/Barcellona.jpg', 
    './img/Berlino.jpg',
    './img/Londra.jpg',
    './img/Parigi.jpg',
    './img/Roma.jpg'
]
console.log(slides)

const slideCities = document.getElementsByClassName('slide')
console.log(slideCities)

const rightArrow = document.querySelector('.arrow-right')
console.log(rightArrow)

const leftArrow = document.querySelector('.arrow-left')
console.log(leftArrow)

let activeSlide = 0

rightArrow.addEventListener('click', function(){
    console.log('click')

    let currentSlide = slideCities [activeSlide] 
    console.log (currentSlide)

    currentSlide.classList.remove('active')

    activeSlide = activeSlide + 1

    let nextSlide = slideCities[activeSlide]
    console.log(nextSlide)

    nextSlide.classList.add('active')

})

leftArrow.addEventListener('click', function(){
    console.log('click')

    let currentSlide = slideCities [activeSlide] 
    console.log (currentSlide)

    currentSlide.classList.remove('active')

    activeSlide = activeSlide - 1

    let nextSlide = slideCities[activeSlide]
    console.log(nextSlide)

    nextSlide.classList.add('active')

})
