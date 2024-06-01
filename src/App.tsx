import './App.css'
import Game from './components/Game'
import GameContainer from './pages/GameContainer'
import { guessWhichParentGame, howWellDoYouKnowMom, priceIsRightGame } from './utils/games'

function App() {

  return (
    <main className='bg-pink-300 w-screen h-screen border border-white flex flex-col items-center p-4'>
      <div className='w-full flex gap-4 justify-start items-center'>
        <img src='/baby.png' className='w-[70px] h-[70px]' />
        <h1 className='text-5xl text-white font-bold'>Baby Shower Games</h1>
      </div>
      <GameContainer>
        <Game header="How well do you know Mom?" gameData={howWellDoYouKnowMom} />
        <hr />
        <Game header="The Price Is Right" gameData={priceIsRightGame} />
        <hr />
        <Game header='Guess Which Parent!' gameData={guessWhichParentGame} />
        <hr />
      </GameContainer>
    </main>
  )
}

export default App
