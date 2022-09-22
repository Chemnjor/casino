

let cards = []

let sum = 0
console.log(sum)
let amAlive = false
let display = " "

let roundEl = document.getElementById("round-el")
console.log(roundEl)
let cardNumber = document.getElementById("card-no")
console.log(cardNumber)
let addCard = document.getElementById("add-el")
console.log(addCard)

let gamer = {
  Name: "Joe",
 Chip: 150
}
let creditSc = document.getElementById("credit")
creditSc.textContent = gamer.Name + ": $ " + gamer.Chip

function pickRandomCard() {
 
  let randomCard = Math.floor(Math.random() * 13) + 1
if (randomCard > 10){
  return 10
}else if (randomCard === 1) {
  return 12
} else {
  return randomCard
}

}



let gameWon = false

function startGame (){
  amAlive = true
   let cardOne = pickRandomCard()
   let cardTwo = pickRandomCard()
   card = [cardOne, cardTwo]
  sum =cardOne + cardTwo
    continueGame()
    
}



function continueGame() {
    
    cardNumber.textContent = "Card: " 
  for (let i = 0; i < cards.length; i++) {
     cardNumber.textContent += cards[i] + " "
  }
  
  
    addCard.textContent = "Total: " + sum
    if (sum < 22 ){
    display = "Draw new card?"
} else if (sum === 22) {
    display = "You have won"
    amAlive = true
    gameWon = true
} else {
    display = "You are out of the game"
    amAlive = false
}
roundEl.textContent = display
}


function drawNewCard() {
  
  if ( amAlive === true && gameWon == false)
      {
        console.log("Drawing a new card")
    let newCard = pickRandomCard()
    sum += newCard
    cards.push(newCard)
     console.log(cards)
    continueGame()
      }

}
