interface IGamePlayProps {
  makeChoice: (choice: "rock" | "paper" | "scissors") => void;
}

const GamePlay = ({ makeChoice }: IGamePlayProps) => {
  const buttonDesign =
    "size-24 md:size-50 rounded-full border-4 md:border-8 border-amber-400 bg-slate-700 p-4 md:p-8 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:shadow-lg flex items-center justify-center group";
  return (
    <section className="mt-4 flex flex-col items-center gap-4 md:mt-6">
      <h2 className="text-2xl font-bold md:text-4xl">Make your Choice</h2>
      <div className="choices mt-4 flex flex-col justify-around gap-6 md:mt-8 md:flex-row md:gap-20">
        <button
          className={`${buttonDesign} `}
          onClick={() => makeChoice("rock")}
        >
          <img
            src="/img/rock.svg"
            alt="Rock"
            className="size-16 rotate-270 transition-transform duration-300 group-hover:scale-125 md:size-30"
          />
        </button>
        <button className={buttonDesign} onClick={() => makeChoice("paper")}>
          <img
            src="/img/paper.svg"
            alt="Paper"
            className="size-16 transition-transform duration-300 group-hover:scale-125 md:size-30"
          />
        </button>
        <button className={buttonDesign} onClick={() => makeChoice("scissors")}>
          <img
            src="/img/scissors.svg"
            alt="Scissors"
            className="size-16 transition-transform duration-300 group-hover:scale-125 md:size-30"
          />
        </button>
      </div>
    </section>
  );
};

export default GamePlay;
