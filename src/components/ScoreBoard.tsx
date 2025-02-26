interface IScoreBoardProps {
  playerScore: number;
  computerScore: number;
}

const ScoreBoard = ({ playerScore, computerScore }: IScoreBoardProps) => {
  const scoreDesign =
    "computer-score border-slate-100 flex flex-col items-center justify-center gap-5 w-60";
  return (
    <section className="score-board my-10 flex w-2/3 justify-between rounded-lg border-5 border-slate-100 py-5">
      <div className={`player-score ${scoreDesign} border-r`}>
        <h2 className="text-3xl font-bold">You</h2>
        <p className="text-5xl font-bold">{playerScore}</p>
      </div>
      <div className={`computer-score ${scoreDesign} border-l`}>
        <h2 className="text-3xl font-bold">Computer</h2>
        <p className="text-5xl font-bold">{computerScore}</p>
      </div>
    </section>
  );
};

export default ScoreBoard;
