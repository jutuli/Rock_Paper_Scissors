interface IResultProps {
  playerChoice: "rock" | "paper" | "scissors" | null;
  computerChoice: "rock" | "paper" | "scissors" | null;
  handleRound: () => void;
}

const Result = ({
  playerChoice,
  computerChoice,
  handleRound,
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

  const playerImageClassName = `size-50 ${
    playerChoice === "rock" ? "rotate-270" : ""
  }`;
  const computerImageClassName = `size-50 ${
    computerChoice === "rock" ? "rotate-270" : ""
  }`;
  return (
    <section className="mt-8 flex items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="text-4xl font-bold">Your Choice</h3>
        <img
          src={`src/assets/img/${playerChoice}.svg`}
          alt={playerChoice}
          className={playerImageClassName}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 text-4xl font-bold">
        <p>{winnerText}</p>
        <button
          onClick={handleRound}
          className="h-14 cursor-pointer rounded-lg border-4 border-transparent bg-amber-400 px-10 text-3xl font-bold text-slate-800 transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-slate-800 hover:text-slate-100"
        >
          Next Round
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="text-4xl font-bold">Computer Choice</h3>
        <img
          src={`src/assets/img/${computerChoice}.svg`}
          alt={computerChoice}
          className={computerImageClassName}
        />
      </div>
    </section>
  );
};

export default Result;
