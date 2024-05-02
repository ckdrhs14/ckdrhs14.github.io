/** A percentage of the screen to use in each grid, should be a fraction of 1 */
const STARS_GRID_SIZE = 1 / 4
/** Lower is more dense */
const STARS_DENSITY = 14

const METEOR_SPEED = 0.005
const METEOR_MAX_FRAMES = 1000
const METEOR_MAX_LIFE = 5000
const METEOR_SPAWN_INTERVAL = 3000

/**
 * Helper functions
 */
function rescale(value, currentMin, currentMax, newMin, newMax) {
  const percentage = (value - currentMin) / (currentMax - currentMin)
  return percentage * (newMax - newMin) + newMin
}

function random(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return randomNumber
  } else {
    return Math.floor(randomNumber)
  }
}

function debounce(func, wait, immediate) {
	let timeout
  
	return function(...args) {
		let context = this
		clearTimeout(timeout)
    
		timeout = setTimeout(function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}, wait)
    
		if (immediate && !timeout) func.apply(context, args)
	}
}

/**
 * The input values are percentages of the screen that the number can be picked within.
 *
 * For example, `pickRandomCoordinateOnScreen(0, 0.5, 0.75, 1)` can be picked within the
 * first 50% of the x axis (left half) and the last 25% of the y axis (bottom quarter).
 */
function pickRandomCoordinateOnScreen(xMin = 0, xMax = 1, yMin = 0, yMax = 1) {
  const maxX = window.innerWidth
  const maxY = window.innerHeight

  const x = rescale(random(0, maxX), 0, maxX, xMin * maxX, xMax * maxX)
  const y = rescale(random(0, maxY), 0, maxY, yMin * maxY, yMax * maxY)

  return { x, y }
}

/**
 * Classes
 */
class Meteor {
  constructor(x, y, speed) {
    this.pos = { x, y }
    const velScale = Math.min(window.innerWidth, window.innerHeight)
    this.vel = { x: -speed * velScale, y: speed * velScale }
    this.opacity = .25
    this.scale = random(0.2, 0.7)
    
    this.created = Date.now()
    
    this.element = document.createElement('div')
    this.element.classList.add('meteor')
    document.body.appendChild(this.element)
  }
  
  update() {
    this.pos.x += this.vel.x * this.scale
    this.pos.y += this.vel.y * this.scale
    this.updateElementStyle()
  }
  
  updateElementStyle() {
    this.element.style = `
      top: ${this.pos.y}px;
      left: ${this.pos.x}px;
      opacity: ${this.opacity};
      transform: rotate(-45deg) scale(${this.scale});
    `
  }
  
  cleanup() {
    this.element.remove()
  }
}

class Stars {
  constructor(gridSize = STARS_GRID_SIZE, density = STARS_DENSITY) {
    this.gridSize = gridSize
    this.density = density
    
    this.element = document.createElement('div')
    this.element.classList.add('stars')
    document.body.appendChild(this.element)
    
    this.update = debounce(this.update.bind(this), 500)
    this.update()
    window.addEventListener('resize', this.update)
  }
  
  stars = []
  
  update() {  
    const translations = []
    
    const w = window.screen.width
    const h = window.screen.height
    const count = Math.floor(Math.sqrt(w * h) / this.density * this.gridSize * this.gridSize)

    for (let x = 0; x < 1; x += this.gridSize) {
      for (let y = 0; y < 1; y += this.gridSize) {
        for (let i = 0; i < count; i++) {
          const xMax = x + this.gridSize
          const yMax = y + this.gridSize
          const coordinate = pickRandomCoordinateOnScreen()
          translations.push(`${coordinate.x}px ${coordinate.y}px`)
        }
      }
    }
    
    this.element.style = `
      box-shadow: ${translations
        .map((x) => `rgb(255, 255, 255) ${x}`)
        .join(', ')};
    `
  }
  
  cleanup() {
    window.removeEventListener('resize', this.update)
    this.element.remove()
  }
}

function spawnMeteor() {
  const startPoint = pickRandomCoordinateOnScreen(0.1, 1.5, -0.5, -0.25)
  const meteor = new Meteor(startPoint.x, startPoint.y, METEOR_SPEED)
  
  let frame = 0
  function updateMeteor() {
    meteor.update()
    const isWithinScreen = meteor.pos.x > -(window.innerWidth / 2) && meteor.pos.y < (window.innerHeight * 2)
    if (isWithinScreen && ++frame < METEOR_MAX_FRAMES && Date.now() - meteor.created < METEOR_MAX_LIFE) {
      requestAnimationFrame(updateMeteor)
    } else {
      meteor.cleanup()
    }
  }
  
  updateMeteor()
  setTimeout(spawnMeteor, random(0.1 * METEOR_SPAWN_INTERVAL, 0.5 * METEOR_SPAWN_INTERVAL))
}

/**
 * Main
 */
const stars = new Stars()
spawnMeteor()