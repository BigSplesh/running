// создать переменную
let boy = document.getElementById("boy")
let newButton = document.getElementById("newButton")
let h3 = document.getElementById("h3")
let rock = document.getElementById("rock")
let spikes = document.getElementById("spikes")
let birds = document.getElementById("fliy")
let birdsDist = 0
let rockDist = 0
let score = 0
let canJump = true
let speed = 0
let boyJump = "24%"
let gameInterval
document.body.onkeydown = function (event) {
    if (event.keyCode == 32 && canJump == true) {
        // в кансоли выводится
        console.log("Кнопка нажата!");
        boyJump = "50%"
        boy.style.bottom = boyJump
        // время задержки
        setTimeout(function () {
            // время в воздухе
            boyJump = "24%"
            boy.style.bottom = boyJump
            setTimeout(function () {
                // можно прыгать
                canJump = true
            }, 400)
        }, 650)
        // нельза прыгать
        canJump = false
    }
}
newButton.onclick = function (event) {
    if (newButton.innerHTML == "Start") {
        gameInterval = setInterval(() => {
            score = score + 1
            speed = speed + 0.012
            // скорасть камня
            rockDist = rockDist + 35 + speed
            birdsDist = birdsDist + 48 + speed
            h3.innerHTML = "Score: " + score
            // spikes.style.right=score*20+"px"
            rock.style.right = rockDist + "px"
            birds.style.right=birdsDist+"px"
            if (rockDist > window.innerWidth) {
                rockDist = -Math.random() * 1600 - rock.offsetWidth
            }
            if (birdsDist > window.innerWidth) {
                birdsDist = -Math.random() * 1600 - birds.offsetWidth
            }
            if (birdsDist > 1000 && boyJump == "50%" && birdsDist < 1100) {
                clearInterval(gameInterval)
            }
            if (rockDist > 1000 && boyJump == "24%" && rockDist < 1100) {
                clearInterval(gameInterval)
            }
        }, 100);
        newButton.innerHTML = "Stop"
    }
    else {
        newButton.innerHTML = "Start"
        clearInterval(gameInterval)
    }
}

