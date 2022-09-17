const domParser = new DOMParser()

const svgCrownText = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>`
const svgCrownDom = domParser.parseFromString(svgCrownText, 'text/html').querySelector('svg')

const svgArrowText = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`
const svgArrowDom = domParser.parseFromString(svgArrowText, 'text/html').querySelector('svg')

const containerModal = document.createElement('div')
containerModal.classList.add('modal')

const messageModal = document.createElement('div')
messageModal.classList.add('winner_message')

const buttonModal = document.createElement('button')
buttonModal.id = 'nextGame'

// messageModal.textContent = `Ganador: Prueba`

containerModal.appendChild(svgCrownDom)
containerModal.appendChild(messageModal)
buttonModal.appendChild(svgArrowDom)
containerModal.appendChild(buttonModal)

class Modal {

  constructor() {
    
  }

  getModal() {
    return containerModal
  }

  setMessage(message) {
    messageModal.textContent = message
  }

  open() {
    containerModal.style.display = 'flex'
  }

  close() {
    messageModal.textContent = ``
    containerModal.style.display = 'none'
  }
}

export { Modal }