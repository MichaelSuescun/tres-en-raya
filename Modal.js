const containerModal = document.createElement('div')
containerModal.classList.add('modal')

// containerModal.innerHTML = `
//   <div class="winner_message">Ganador: X</div>
//   <button id="nextGame">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//       <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
//     </svg>
//   </button>
// `

const messageModal = document.createElement('div')
messageModal.classList.add('winner_message')

const buttonModal = document.createElement('button')
buttonModal.id = 'nextGame'
buttonModal.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </svg>
`

containerModal.appendChild(messageModal)
containerModal.appendChild(buttonModal)


class Modal {

  constructor() {
    
  }

  getModal() {
    return containerModal
  }

  setWinner(winner) {
    messageModal.textContent = `Ganador: ${winner}`
  }

  open() {
    containerModal.style.display = 'block'
  }

  close() {
    containerModal.style.display = 'none'
  }
}

export { Modal }



// HTML Modal
/*
<div class="modal">
    <div class="winner_message">Ganador: X</div>
    <button id="nextGame">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
      </svg>
    </button>
  </div>
  */