const gridContainer = document.querySelector('.grid_container')
const squares = document.querySelectorAll('.square')
const winnerAlert = document.querySelector('.winner_alert')
const resetButton = document.querySelector('#reset')

let cont = 1
let winner = false

function checkWinner(winnerSimbol) {
  winner = true
  winnerAlert.style.display = 'inline'
  winnerAlert.textContent = `Ganador: ${winnerSimbol}`
}

gridContainer.addEventListener('click', (e) => {

  // Comprueba la cantidad de turnos
  if (!(cont <= 9)) {
    console.log('Ya no hay turnos');
    return true
  }

  // Comprueba si ya hay un ganador
  if (winner) {
    return true
  }

  const squareNumber = e.target.id
  const square = squares[squareNumber]

  square.textContent = (cont % 2 === 0) ? 'X' : 'O'
  square.classList.add((cont % 2 === 0) ? 'red' : 'blue')

  const { textContent: SC0 } = squares[0]
  const { textContent: SC1 } = squares[1]
  const { textContent: SC2 } = squares[2]
  const { textContent: SC3 } = squares[3]
  const { textContent: SC4 } = squares[4]
  const { textContent: SC5 } = squares[5]
  const { textContent: SC6 } = squares[6]
  const { textContent: SC7 } = squares[7]
  const { textContent: SC8 } = squares[8]

  if ((SC0 != '') && (SC0 == SC1) && (SC0 == SC2)) {
    checkWinner(SC0)
  }

  if ((SC0 != '') && (SC0 == SC4) && (SC0 == SC8)) {
    checkWinner(SC0)
  }

  if ((SC0 != '') && (SC0 == SC3) && (SC0 == SC6)) {
    checkWinner(SC0)
  }

  if ((SC1 != '') && (SC1 == SC4) && (SC1 == SC7)) {
    checkWinner(SC1)
  }

  if ((SC2 != '') && (SC2 == SC4) && (SC2 == SC6)) {
    checkWinner(SC2)
  }

  if ((SC3 != '') && (SC3 == SC4) && (SC3 == SC5)) {
    checkWinner(SC3)
  }

  if ((SC2 != '') && (SC2 == SC5) && (SC2 == SC8)) {
    checkWinner(SC2)
  }

  if ((SC6 != '') && (SC6 == SC7) && (SC6 == SC8)) {
    checkWinner(SC6)
  }

  cont++
})

resetButton.addEventListener('click', () => {
  cont = 1
  winner = false
  winnerAlert.style.display = 'none'
  winnerAlert.textContent = ``

  for (let i = 0; i < squares.length; i++) {
    const square = squares[i]
    square.classList.remove('red')
    square.classList.remove('blue')
    square.textContent = ''
  }
})