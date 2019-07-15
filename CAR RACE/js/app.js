const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = 1000
let speed = 10
let pause = false
let score = 0

let prevScoreCount = 0
let nextScoreCount = Math.floor(score/10)

const renderScore = () => {
	document.querySelector('#score').innerHTML = score
}

renderScore()

const skyBox = new Image()
skyBox.src = './assets/road.png'

skyBox.onload = () => {
	let y = 0
	const moveRoad = () => {
		ctx.drawImage(skyBox, 0, y - canvas.height, canvas.width, canvas.height * 2)
		y += speed
		if (y >= canvas.height)
			y = 0
		
		if (pause) return
		requestAnimationFrame(moveRoad)
		// requestAnimationFrame(() => console.log('hello'))
	}
	moveRoad()
}


const playerCar = new Image()
playerCar.src = './assets/cars/Audi.png'

let playerCarPositionX = 380 // canvas.width/2 - playerCar.width/2
let playerCarPositionY = canvas.height - playerCar.height

const drawCar = () => {
	ctx.drawImage(playerCar, playerCarPositionX, playerCarPositionY)

	if(pause) return
	requestAnimationFrame(drawCar)
}

playerCar.onload = () => {
	drawCar()
}


const obstaclePosition = [30, 380, 730]
const obstacleImage = new Image()
obstacleImage.src = './assets/cars/Police.png'
let obstaclePositionX = obstaclePosition[Math.floor(Math.random() * obstaclePosition.length)]
let obstaclePositionY = -350


const obstacle = () => {
	ctx.drawImage(obstacleImage, obstaclePositionX, obstaclePositionY)
	ctx.lineTo(obstaclePositionX +30, obstaclePositionY)
	ctx.lineTo(obstaclePositionX, obstaclePositionY)
	obstaclePositionY += speed

	if (obstaclePositionY > canvas.height + obstacleImage.height) {
		score++
		renderScore()
		speed += 0.5
		obstaclePositionX = obstaclePosition[Math.floor(Math.random() * obstaclePosition.length)]
		obstaclePositionY = -270
	}
	

	if(pause) return
	requestAnimationFrame(obstacle)

	if(obstaclePositionX == playerCarPositionX && canvas.height - obstaclePositionY < 435 && canvas.height - obstaclePositionY > 0){
		pause = true
		swal('Game Over', `SCORE: ${score}`, 'error')
		.then(() => window.location.reload())
	}
}

obstacleImage.onload = () => {
	obstacle()
}

document.addEventListener('keydown', e => {
	if (e.code == 'ArrowLeft' && playerCarPositionX > 30)
		playerCarPositionX -= 350

	if (e.code == 'ArrowRight' && playerCarPositionX < 730)
		playerCarPositionX += 350

	if (e.code == 'ShiftLeft')
		speed += 20
})

document.addEventListener('keyup', e => {
	if (e.code == 'ShiftLeft')
		speed -= 20
})

console.log(obstacleImage.height, playerCar.height)