let hit = document.getElementById("hit")
let stand = document.getElementById("stand")
let deal = document.getElementById("deal")

let playerWindow = document.getElementById("player")
let botWindow = document.getElementById("bot")

let letsPlay = document.getElementById("lets-play")
let playerScore = document.getElementById("player-score")

let botScore = document.getElementById("bot-score")

let wins = document.getElementById("header1")
let loses = document.getElementById("header2")
let draws = document.getElementById("header3")

let cards = ["images/10.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png","images/A.png","images/J.png","images/K.png","images/Q.png"]





hit.addEventListener("click", add)

playerCunt = 0
botCunt = 0


loseCunt = 0
winCunt = 0
drawCunt = 0





function add(){

	let cardimage = document.createElement("img")
	cardimage.src = cards[Math.floor(Math.random() * cards.length)]
	cardimage.style.width = 100 + "px"
	cardimage.style.height = 140 + "px"
	playerWindow.appendChild(cardimage)

	deal.addEventListener("click", ()=> {
		cardimage.remove()
		playerScore.innerHTML = 0
		playerCunt = 0
		letsPlay.innerHTML = "Let's Play"
		letsPlay.style.color = "white"
		hit.disabled = false 
		stand.disabled = false
	})


	if (cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/10.png") {
		playerCunt += 10
		playerScore.innerHTML = playerCunt
	}else if (cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/2.png"){
		playerCunt += 2
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/3.png"){
		playerCunt += 3
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/4.png"){
		playerCunt += 4
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/5.png"){
		playerCunt += 5
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/6.png"){
		playerCunt += 6
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/7.png"){
		playerCunt += 7
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/8.png"){
		playerCunt += 8
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/9.png"){
		playerCunt += 9
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/A.png"){
		let ace11 = 11
		let ace1 = 1
		let randAce = [ace1,ace11]

		playerCunt += randAce[Math.floor(Math.random() * randAce.length)]
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/J.png"){
		playerCunt += 10
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/K.png"){
		playerCunt += 10
		playerScore.innerHTML = playerCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/Q.png"){
		playerCunt += 10
		playerScore.innerHTML = playerCunt
	}
	if (playerCunt > 21) {
		letsPlay.style.color = "red"
		letsPlay.innerHTML = "You Lost"
		loseCunt += 1
		loses.innerHTML = loseCunt
		hit.disabled = true
		stand.disabled = true
	}else if(playerCunt == 21){
		letsPlay.style.color = "green"
		letsPlay.innerHTML = "You Won"
		winCunt += 1
		wins.innerHTML = winCunt
		hit.disabled = true
		stand.disabled = true
	}
}



stand.addEventListener("click", botAdd)

function botAdd(){
	stand.disabled = true
	hit.disabled = true
	intervalId = setInterval(botPlay, 2000)
}

function botPlay(){
	let cardimage = document.createElement("img")
	cardimage.src = cards[Math.floor(Math.random() * cards.length)]
	cardimage.style.width = 100 + "px"
	cardimage.style.height = 140 + "px"
	botWindow.appendChild(cardimage)

	deal.addEventListener("click", ()=> {
		cardimage.remove()
		botScore.innerHTML = 0
		botCunt = 0
		letsPlay.innerHTML = "Let's Play"
		letsPlay.style.color = "white"
		hit.disabled = false 
		stand.disabled = false
	})

	if (cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/10.png") {
		botCunt += 10
		botScore.innerHTML = botCunt
	}else if (cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/2.png"){
		botCunt += 2
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/3.png"){
		botCunt += 3
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/4.png"){
		botCunt += 4
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/5.png"){
		botCunt += 5
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/6.png"){
		botCunt += 6
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/7.png"){
		botCunt += 7
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/8.png"){
		botCunt += 8
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/9.png"){
		botCunt += 9
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/A.png"){
		let ace11 = 11
		let ace1 = 1
		let randAce = [ace1,ace11]

		botCunt += randAce[Math.floor(Math.random() * randAce.length)]
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/J.png"){
		botCunt += 10
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/K.png"){
		botCunt += 10
		botScore.innerHTML = botCunt
	}else if(cardimage.src == "file:///C:/Users/asdfghjkl/Desktop/W/images/Q.png"){
		botCunt += 10
		botScore.innerHTML = botCunt
	}
	if (botCunt > 21) {
		letsPlay.style.color = "lightgreen"
		letsPlay.innerHTML = "You Won"
		winCunt += 1
		wins.innerHTML = winCunt
		clearInterval(intervalId)
	}else if(botCunt > playerCunt && botCunt <= 21){
		loseCunt += 1
		loses.innerHTML = loseCunt
		letsPlay.style.color = "red"
		letsPlay.innerHTML = "You Lost"
		clearInterval(intervalId)

	}else if(botCunt == playerCunt){
		drawCunt += 1
		draws.innerHTML = drawCunt
		letsPlay.style.color = "orange"
		letsPlay.innerHTML = "Its Draw!"
		clearInterval(intervalId)
	}else if(playerCunt == 21){
		winCunt += 1 
		wins.innerHTML = winCunt
		letsPlay.style.color = "lightgreen"
		letsPlay.innerHTML = "You Won"
	}




}