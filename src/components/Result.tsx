interface IResultProps {
  playerChoice: "rock" | "paper" | "scissors" | null;
  computerChoice: "rock" | "paper" | "scissors" | null;
  handleRound: () => void;
  isFinalResult: boolean;
}

const Result = ({
  playerChoice,
  computerChoice,
  handleRound,
  isFinalResult,
}: IResultProps) => {
  if (!playerChoice || !computerChoice) return null;

  let winnerText = "Tie!";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerText = "You win!";
  } else if (playerChoice !== computerChoice) {
    winnerText = "Computer wins!";
  }

  const playerImageClassName = `size-24 md:size-50 ${
    playerChoice === "rock" ? "rotate-270" : ""
  }`;
  const computerImageClassName = `size-24 md:size-50 ${
    computerChoice === "rock" ? "rotate-270" : ""
  }`;
  return (
    <section className="my-4 flex flex-col items-center gap-6 md:mt-8 md:flex-row md:gap-20">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-10">
        <h3 className="text-2xl font-bold md:text-4xl">Your Choice</h3>
        <img
          src={`/img/${playerChoice}.svg`}
          alt={playerChoice}
          className={playerImageClassName}
        />
      </div>
      <div className="order-last flex flex-col items-center justify-center gap-5 text-4xl font-bold md:order-none">
        <p>{winnerText}</p>
        {!isFinalResult && (
          <button
            onClick={handleRound}
            className="h-10 cursor-pointer rounded-lg border-4 border-transparent bg-amber-400 px-6 text-xl font-bold text-slate-800 transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-slate-800 hover:text-slate-100 md:h-14 md:px-10 md:text-3xl"
          >
            Next Round
          </button>
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-10">
        <h3 className="text-2xl font-bold md:text-4xl">Computer Choice</h3>
        <img
          src={`/img/${computerChoice}.svg`}
          alt={computerChoice}
          className={computerImageClassName}
        />
      </div>
    </section>
  );
};

export default Result;
