import { useState } from "react"
import { GameFieldTypes } from "../utils/games"

type GameProps = {
    header: string
    gameData: GameFieldTypes
}

const Game = ({ header, gameData }: GameProps) => {
    const [shouldShowAnswer, setShouldShowAnswer] = useState<boolean[]>(Array(gameData.length).fill(false));

    const toggleAnswer = (index: number) => {
        const newShowAnswer = [...shouldShowAnswer];
        newShowAnswer[index] = !newShowAnswer[index];
        setShouldShowAnswer(newShowAnswer);
    };

    return (
        <div className="w-full p-2">
            <br/>
            <h2 className="text-green-300 text-4xl text-left px-5 py-3 font-extrabold">{header}</h2>
            <div className="p-2 flex flex-col justify-start items-start w-full gap-3">
                {gameData.map((game, idx) => (
                    <div key={idx} className="w-full">
                        <div className="border border-pink-300 p-3 rounded-md flex w-full justify-between items-center z-50">
                            <p className="text-black text-left font-semibold text-2xl">{game.question}</p>
                            <button
                                className="bg-green-200 rounded-md border border-gray-400 text-xl font-medium px-4 py-2 hover:bg-green-400/90 transition-colors duration-150"
                                onClick={() => toggleAnswer(idx)}
                            >
                                {game.buttonText}
                            </button>
                        </div>
                        {shouldShowAnswer[idx] &&
                            <div className="bg-gray-800/40 fixed top-0 left-0 w-screen h-screen">
                                <div className="fixed w-2/3 h-1/2 z-0 min-h-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 overflow-auto rounded-2xl bg-pink-300 p-4 text-center">
                                    <div className="relative size-full flex justify-between items-center py-12">
                                        <button onClick={() => toggleAnswer(idx)} className="absolute top-2 right-2 text-3xl text-white hover:text-green-300 transition-colors duration-150 font-bold">X</button>
                                        <p className="font-bold text-white leading-6 text-4xl text-wrap text-center w-full">{game.answer}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}
                <div>
                </div>
            </div>
        </div>
    )
}

export default Game
