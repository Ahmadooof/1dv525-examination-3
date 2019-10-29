import MemoryGame from './memoryGame.js'
import Window from './window.js'
import Chat from './chat.js'
import SokobanGame from './sokobanGame.js'

const memoryGameButton = document.querySelector('#memory')
const chatButton = document.querySelector('#chat')
const sokobanGameButton = document.querySelector('#sokoban')

/**
 * adding memory game object to window object
 */
memoryGameButton.addEventListener('click', function () {
  const myWindow = new Window('.windowContainer')
  const memoryGame = new MemoryGame(4, 4, 'memoryContainer', myWindow)
  myWindow.div.appendChild(memoryGame.div)
})

/**
 * adding chat object to window object
 */
chatButton.addEventListener('click', function () {
  const myWindow = new Window('.windowContainer')
  const myChat = new Chat('.chatContainer', myWindow)
  myWindow.div.appendChild(myChat.div)
})

/**
 * adding sokoban game object to window object
 */
sokobanGameButton.addEventListener('click', function () {
  const myWindow = new Window('.windowContainer')
  const sokobanObj = new SokobanGame('.skoboanContainer', myWindow)
  myWindow.div.appendChild(sokobanObj.game)
})
