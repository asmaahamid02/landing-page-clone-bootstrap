const moveCarousel = (key) => {
  const carousel = document.querySelector(
    `#${key}-carousel > .carousel-container`
  )
  const prevBtn = document.querySelector(`#${key}-carousel .control-prev`)
  const nextBtn = document.querySelector(`#${key}-carousel .control-next`)
  const firstCardWidth = document.querySelector(
    `#${key}-carousel .card`
  ).offsetWidth

  prevBtn.addEventListener('click', () => {
    carousel.scrollLeft -= firstCardWidth
  })

  nextBtn.addEventListener('click', () => {
    carousel.scrollLeft += firstCardWidth
  })
}

moveCarousel('recommended')
moveCarousel('popular')
moveCarousel('trending')
