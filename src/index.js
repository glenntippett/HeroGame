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

  function checkIfHeroisNearAVillager () {
    // Check if Hero is near the Knight
    const knightSpeech = document.querySelector('.knight-speech')
    hero.topLocation < 80 && (hero.leftLocation < 200 && hero.leftLocation > 50)
      ? knightSpeech.style.display = 'block'
      : knightSpeech.style.display = 'none'
    // Check if Hero is near the Old Man
    const oldManSpeech = document.querySelector('.old-man-speech')
    hero.topLocation > 70 && hero.topLocation < 130 && (hero.leftLocation < 525 && hero.leftLocation > 415)
      ? oldManSpeech.style.display = 'block'
      : oldManSpeech.style.display = 'none'
  }

  function moveHero (event) {
    if (event.code === 'Space') hero.attack()
    hero.moveHero(event)
    checkIfHeroisNearAVillager()
  }

  document.addEventListener('keydown', moveHero)

  startGame()
})
