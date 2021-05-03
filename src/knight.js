class Knight {
  constructor (knight) {
    this._knight = knight
    this._knightTop = 70
    this._knightLeft = 120
  }

  setStartLocation () {
    this._knight.style.top = `${this._knightTop}px`
    this._knight.style.left = `${this._knightLeft}px`
  }
}

export { Knight }
