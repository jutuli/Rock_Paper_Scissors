interface IGameOverProps {
  playerScore: number;
  computerScore: number;
  handleRestart: () => void;
}

const GameOver = ({
  playerScore,
  computerScore,
  handleRestart,
}: IGameOverProps) => {
  let gameWinnerText = (
    <>
      <span className="font-bold text-amber-400">Congratulations! 🎉</span>
      <br />
      You Win The Game!
    </>
  );
  if (playerScore < computerScore) {
    gameWinnerText = (
      <>
        <span className="font-bold text-amber-400">
          Better Luck Next Time! 😢
        </span>
        <br />
        Computer Wins The Game!
      </>
    );
  }
  return (
    <section className="mt-8 flex items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="text-4xl font-bold">{gameWinnerText}</h3>
        <button
          onClick={handleRestart}
          className="h-14 cursor-pointer rounded-lg border-4 border-transparent bg-amber-400 px-10 text-3xl font-bold text-slate-800 transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-slate-800 hover:text-slate-100"
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default GameOver;
