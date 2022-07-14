
function init() {
    
    //Elements
    let startGameBut = document.querySelector(".start")
    let scoreSpan = document.querySelector(".score")
    let livesSpan = document.querySelector(".lives")
    let divOne = document.getElementById("1")
    let buttonEl = document.createElement("button")
    buttonEl.classList.add("moleButton")
    buttonEl.innerHTML = "Hello"
    let livesRemaining = 3
    let previousLocation = 15
    let score = 0
   
    //Execution

    function randomIDGenerator () {
        let randomNum = Math.floor(Math.random() * 24 + 1)
        
        if (randomNum === previousLocation) {
            console.log("matches")
            randomIDGenerator()

        }
        return randomNum
    }

    function moveLocation () {
        divOne = document.getElementById(`${randomIDGenerator()}`)
        divOne.appendChild(buttonEl)
    }
   
    function beginGame() {
        divOne = document.getElementById(`${randomIDGenerator()}`)
        divOne.appendChild(buttonEl)
        let timer = setInterval(() => {
            if (livesRemaining > 0) {
                // Check if divOne has a child element, if so, remove life 
                if (divOne.hasChildNodes()) {
                    moveLocation ()
                    console.log("hello if statement")
                    livesRemaining -= 1
                    livesSpan.innerHTML = livesRemaining
                }
                moveLocation ()
            } else {
                window.alert("Game over!")
                clearInterval(timer)
            }
        }, 2000)
    }

    function buttonClicked () {
        score += 100
        console.log(score)
        scoreSpan.innerHTML = score
        divOne.innerHTML = ""
    }

    //Events

    buttonEl.addEventListener("click", buttonClicked)
    startGameBut.addEventListener("click", beginGame)

    livesSpan.innerHTML = livesRemaining
    scoreSpan.innerHTML = score
}

document.addEventListener('DOMContentLoaded', init)


// function init() {
    
//     //Elements
//     let startGameBut = document.querySelector(".start")
//     let scoreSpan = document.querySelector(".score")
//     let livesSpan = document.querySelector(".lives")
//     let divOne = document.getElementById("1")
//     let buttonEl = document.createElement("button")
//     buttonEl.classList.add("moleButton")
//     buttonEl.innerHTML = "Hello"
//     let livesRemaining = 3
//     let previousLocation = 4
//     let currentLocation = 5
//     let score = 0
   
//     //Execution

//     function randomIDGenerator () {
//         let currentLocation = Math.floor(Math.random() * 24 + 1)
//         if (currentLocation === previousLocation) {
//             randomIDGenerator()
//         }
//         currentLocation = previousLocation
//     }

//     function moveLocation () {
//         randomIDGenerator()
//         divOne = document.getElementById(`${currentLocation}`)
//         divOne.appendChild(buttonEl)
//         // buttonEl.addEventListener("click", moveLocation)
//     }
   
//     function beginGame() {
//         livesRemaining = 3
//         score = 0
//         randomIDGenerator()
//         divOne = document.getElementById(`${currentLocation}`)
//         divOne.appendChild(buttonEl)
//         let timer = 2000
//         setInterval(() => {
//             moveLocation ()
//             // Check if divOne has a child element, if so, remove life 
//             // if (divOne.contains("button")) {
//             //     console.log("hello if statement")
//             //     livesRemaining -= 1
//             //     livesSpan.innerHTML = livesRemaining
//             // }
//         }, timer)
//     }

//     function buttonClicked () {
//         score += 100
//         console.log(score)
//         scoreSpan.innerHTML = score
//         divOne.innerHTML = ""
//     }

//     //Events

//     buttonEl.addEventListener("click", buttonClicked)
//     startGameBut.addEventListener("click", beginGame)

//     livesSpan.innerHTML = livesRemaining
//     scoreSpan.innerHTML = score
// }

// document.addEventListener('DOMContentLoaded', init)


//// Old code - changing random generator
