// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!
/* Start page
    Start game
    got to API
    get random category
    get list of questions from theat category
    present the user with a start button
        when button is clicked start the game

Game page
    display score, starts at 0
        track the score
    display category
    display the qestion from the API
        Randomly choose one of my questions from the list I got from the API
        Put the question on the page
    Display an input box
        When users submits I compare string from the input box to the answer of the question I selsected
    if user answers correctly add one to score,display a new random question
    if user answers inccorectly set score to 0, tell user they lost, let the pick if they want to play again
*/
//hide start page and show just game page//
function startGame() {
    let start = document.getElementById("gamePage")
    let hide = document.getElementById("startPage")
    start.style.display = "block";
    hide.style.display = "none"
}
function startOver() {
    let start = document.getElementById("gamePage")
    let hide = document.getElementById("startPage")
    start.style.display = "none";
    hide.style.display = "block"
    window.location.reload()
}

let category = document.getElementById("category")
let correctAnswer = document.getElementById("correctAnswer")
let question = document.getElementById("question")
let answer = document.getElementById("answer")
let incorrectAnswer = document.getElementById("incorrectAnswer")
let score = document.getElementsByClassName("score")

const POKE_URL = "https://pokeapi.co/api/v2/pokemon/"

let displayQuestion = function (picture) {
    category.innerHTML += "Whose that Pokemon?"
    let img = document.createElement("img")
    img.src += picture
    question.append(img)
}
let website = POKE_URL + Math.floor(Math.random() * 898)
const fetchPokemon = function (name) {
    fetch(website)
        .then(response => response.json())
        .then(data => {
            displayQuestion(data.sprites.front_default)
        })
}
fetchPokemon()

function gradeAnswer() {
    let theirAnswer = document.getElementById("typedAnswer").value

    let fetchedResponse = fetch(website)
        .then(response => response.json())
        .then(data => {
            if (theirAnswer === data.name){
                correctAnswer.style.display = "block";
            }else {
                incorrectAnswer.style.display = "block";
            }
            return data.name
        })
        console.log(fetchedResponse, theirAnswer)
}