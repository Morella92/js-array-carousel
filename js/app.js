console.log('Carousel exercise')

let slides = [  './img/Barcellona.jpg',
'./img/Berlino.jpg',
'./img/Londra.jpg',
'./img/Parigi.jpg',
'./img/Roma.jpg'
]
console.log(slides)

// const slideCities = document.getElementsByClassName('slide')
// console.log(slideCities)

const carousel = document.createElement('div')
console.log(carousel)

const rightArrow = document.querySelector('.arrow-right')
console.log(rightArrow)

const leftArrow = document.querySelector('.arrow-left')
console.log(leftArrow)

let activeSlide = 0

let citySlides = document.createElement('div')
console.log(citySlides)

citySlides.classList.add('.slide')

let slideContent = document.createElement('img')
console.log(slideContent)

slideContent.src = slides [activeSlide]

citySlides.appendChild(slideContent)

carousel.appendChild(citySlides)

for (let i = 0; i < slides.length; i++){

    
}

document.body.prepend(carousel)

rightArrow.addEventListener('click', function(){
    console.log('click')

    let currentSlide = citySlides [activeSlide]
    console.log (currentSlide)

    currentSlide.classList.remove('active')

    activeSlide = activeSlide + 1

    let nextSlide = citySlides[activeSlide]
    console.log(nextSlide)

    nextSlide.classList.add('active') 

})

leftArrow.addEventListener('click', function(){
    console.log('click')

    let currentSlide = citySlides [activeSlide]
    console.log (currentSlide)

    currentSlide.classList.remove('active')

    activeSlide = activeSlide - 1

    let nextSlide = citySlides[activeSlide]
    console.log(nextSlide)

    nextSlide.classList.add('active')

})
