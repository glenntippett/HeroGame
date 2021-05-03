import { Hero } from './hero'
import { Knight } from './knight'

document.addEventListener('DOMContentLoaded', () => {
  // Global Variables
  const hero = new Hero(document.querySelector('.hero'))
  const knight = new Knight(document.querySelector('.knight'))

  function startGame () {
    hero.setStartLocation()
    knight.setStartLocation()
  }

  function moveHero (event) {
    if (event.code === 'Space') hero.attack()
    hero.moveHero(event)
    const knightSpeech = document.querySelector('.knight-speech')
    if (hero.topLocation < 80 && (hero.leftLocation < 200 && hero.leftLocation > 50)) {
      knightSpeech.style.display = 'block'
    } else {
      knightSpeech.style.display = 'none'
    }
  }

  document.addEventListener('keydown', moveHero)

  startGame()
})
