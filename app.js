import { Modal } from './Modal.js';

const gridContainerBoard = document.querySelector('.grid_container_board')
const squares = document.querySelectorAll('.square')
const resetButton = document.querySelector('#reset')

const gridContainerMenu = document.querySelector('.grid_container_menu')
const modal = new Modal()
gridContainerMenu.insertAdjacentElement('afterend', modal.getModal())
const nextGameButton = document.querySelector('#nextGame')

const playerScoreXAlert = document.querySelector('#player_score_x')
const playerScoreYAlert = document.querySelector('#player_score_y')

const sequence1 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
const sequence2 = [[2, 4, 6]]
const sequence3 = [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
const sequence4 = [[0, 4, 8]]

let cont = 1
let playerScoreX = 0
let playerScoreY = 0
let winner = false

playerScoreXAlert.textContent = playerScoreX
playerScoreYAlert.textContent = playerScoreY

// Functions
function checkWinner(winnerSimbol) {
  winner = true

  if (winnerSimbol == 'X') {
    playerScoreXAlert.textContent = ++playerScoreX
  } else if (winnerSimbol == 'O') {
    playerScoreYAlert.textContent = ++playerScoreY
  }

  modal.open()
  modal.setWinner(winnerSimbol)
}

function clearBoard() {
  for (const square of squares) {
    square.classList.remove('red')
    square.classList.remove('blue')
    square.textContent = ''
  }
}

// Events listeners
resetButton.addEventListener('click', () => {
  cont = 1
  winner = false
  playerScoreX = 0
  playerScoreY = 0

  playerScoreXAlert.textContent = playerScoreX
  playerScoreYAlert.textContent = playerScoreY

  clearBoard()
})

nextGameButton.addEventListener('click', () => {
  cont = 1
  winner = false

  clearBoard()
  modal.close()
})

gridContainerBoard.addEventListener('click', (e) => {

  // Comprueba la cantidad de turnos
  if (!(cont <= 9)) {
    console.log('Ya no hay turnos');
    return true
  }

  // Comprueba si ya hay un ganador
  if (winner) {
    return true
  }

  // Identifica donde el usuario hizo click y agrega un valor
  const IdSquare = e.target.id
  const square = squares[IdSquare]

  if (!square.textContent) {
    square.textContent = (cont % 2 === 0) ? 'X' : 'O'
    square.classList.add((cont % 2 === 0) ? 'red' : 'blue')
    cont++
  }

  // Comprueba los valores de la secuencia de cuadros 1-2-3, 4-5-6, 7-8-9
  for (const sequence of sequence1) {
    const { textContent: SC0 } = squares[sequence[0]]
    const { textContent: SC1 } = squares[sequence[1]]
    const { textContent: SC2 } = squares[sequence[2]]

    if ((SC0 != '') && (SC0 == SC1) && (SC0 == SC2)) {
      checkWinner(SC0)
    }
  }

  // Comprueba los valores de la secuencia de cuadros 3-5-7
  for (const sequence of sequence2) {
    const { textContent: SC0 } = squares[sequence[0]]
    const { textContent: SC1 } = squares[sequence[1]]
    const { textContent: SC2 } = squares[sequence[2]]

    if ((SC0 != '') && (SC0 == SC1) && (SC0 == SC2)) {
      checkWinner(SC0)
    }
  }

  // Comprueba los valores de la secuencia de cuadros 1-4-7, 2-5-8, 3-6-9
  for (const sequence of sequence3) {
    const { textContent: SC0 } = squares[sequence[0]]
    const { textContent: SC1 } = squares[sequence[1]]
    const { textContent: SC2 } = squares[sequence[2]]

    if ((SC0 != '') && (SC0 == SC1) && (SC0 == SC2)) {
      checkWinner(SC0)
    }
  }

  // Comprueba los valores de la secuencia de cuadros 1-5-9
  for (const sequence of sequence4) {
    const { textContent: SC0 } = squares[sequence[0]]
    const { textContent: SC1 } = squares[sequence[1]]
    const { textContent: SC2 } = squares[sequence[2]]

    if ((SC0 != '') && (SC0 == SC1) && (SC0 == SC2)) {
      checkWinner(SC0)
    }
  }
})
