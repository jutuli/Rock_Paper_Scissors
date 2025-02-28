interface IScoreBoardProps {
  playerScore: number;
  computerScore: number;
}

const ScoreBoard = ({ playerScore, computerScore }: IScoreBoardProps) => {
  const scoreDesign =
    "computer-score border-slate-100 flex flex-col items-center justify-center gap-2 w-32 md:gap-5 md:w-60";
  return (
    <section className="score-board my-4 flex w-11/12 justify-between rounded-lg border-5 border-slate-100 py-3 md:my-10 md:w-2/3 md:py-5">
      <div className={`player-score ${scoreDesign} border-r`}>
        <h2 className="text-xl font-bold md:text-3xl">You</h2>
        <p className="text-3xl font-bold md:text-5xl">{playerScore}</p>
      </div>
      <div className={`computer-score ${scoreDesign} border-l`}>
        <h2 className="text-xl font-bold md:text-3xl">Computer</h2>
        <p className="text-3xl font-bold md:text-5xl">{computerScore}</p>
      </div>
    </section>
  );
};

export default ScoreBoard;
