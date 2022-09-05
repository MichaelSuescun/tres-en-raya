const gridContainer = document.querySelector('.grid_container')
const squares = document.querySelectorAll('.square')
const winnerAlert = document.querySelector('.winner_alert')

let cont = 0
let winner = {
  state: false,
  player: ''
}

function checkWinner(winnerSimbol) {
  winner.state = true
  winnerAlert.style.display = 'inline'
  winnerAlert.textContent = `Ganador: ${winnerSimbol}`
}

gridContainer.addEventListener('click', (e) => {
  if (!(cont <= 8)) {
    console.log('Ya no hay turnos');
    return true
  }

  if (winner.state) {
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
    winner.player = SC0 
    checkWinner(winner.player)
  }

  if ((SC0 != '') && (SC0 == SC4) && (SC0 == SC8)) {
    winner.player = SC0
    checkWinner(winner.player)
  }

  if ((SC0 != '') && (SC0 == SC3) && (SC0 == SC6)) {
    winner.player = SC0
    checkWinner(winner.player)
  }

  if ((SC1 != '') && (SC1 == SC4) && (SC1 == SC7)) {
    winner.player = SC1
    checkWinner(winner.player)
  }

  if ((SC2 != '') && (SC2 == SC4) && (SC2 == SC6)) {
    winner.player = SC2
    checkWinner(winner.player)
  }

  if ((SC3 != '') && (SC3 == SC4) && (SC3 == SC5)) {
    winner.player = SC3
    checkWinner(winner.player)
  }

  if ((SC2 != '') && (SC2 == SC5) && (SC2 == SC8)) {
    winner.player = SC2
    checkWinner(winner.player)
  }

  if ((SC6 != '') && (SC6 == SC7) && (SC6 == SC8)) {
    winner.player = SC6
    checkWinner(winner.player)
  }

  cont++
})
