class Hero {
  constructor (hero) {
    this._hero = hero
    this._heroTop = 255
    this._heroLeft = 255
    this._moveSpeed = 10
  }

  get topLocation () {
    return this._heroTop
  }

  get leftLocation () {
    return this._heroLeft
  }

  setStartLocation () {
    this._hero.style.top = `${this._heroTop}px`
    this._hero.style.left = `${this._heroLeft}px`
  }

  attack () {
    const attackDown = 'url(./assets/hero/Hero_Attack_Down.gif'
    const attackUp = 'url(./assets/hero/Hero_Attack_Up.gif'
    const attackRight = 'url(./assets/hero/Hero_Attack_Right.gif'
    const attackLeft = 'url(./assets/hero/Hero_Attack_Left.gif'
    this._hero.style.backgroundImage = attackDown
  }

  moveHero (event) {
    switch (event.code) {
      case 'ArrowUp':
        this._heroTop -= this._moveSpeed
        this._hero.style.top = `${this._heroTop}px`
        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Up.gif'
        document.addEventListener('keyup', () => {
          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle_Up.gif'
        })
        break
      case 'ArrowRight':
        this._heroLeft += this._moveSpeed
        this._hero.style.left = `${this._heroLeft}px`
        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Right.gif'
        document.addEventListener('keyup', () => {
          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle_Right.gif'
        })
        break
      case 'ArrowDown':
        this._heroTop += this._moveSpeed
        this._hero.style.top = `${this._heroTop}px`
        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Down.gif'
        document.addEventListener('keyup', () => {
          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle.gif'
        })
        break
      case 'ArrowLeft':
        this._heroLeft -= this._moveSpeed
        this._hero.style.left = `${this._heroLeft}px`
        this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Walk_Left.gif'
        document.addEventListener('keyup', () => {
          this._hero.style.backgroundImage = 'url(./assets/hero/Hero_Idle_Left.gif'
        })
        break
    }
  }
}

export { Hero }
