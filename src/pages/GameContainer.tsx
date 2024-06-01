
const GameContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="size-full bg-white mt-3 rounded-2xl overflow-y-auto px-1 shadow-inner shadow-black pt-3">
            {children}
        </div>
    )
}

export default GameContainer
