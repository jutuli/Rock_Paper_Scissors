interface IGamePlayProps {
  makeChoice: (choice: "rock" | "paper" | "scissors") => void;
}

const GamePlay = ({ makeChoice }: IGamePlayProps) => {
  const buttonDesign =
    "size-50 rounded-full border-8 border-amber-400 bg-slate-700 p-8 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:shadow-lg flex items-center justify-center group";
  return (
    <section className="mt-6 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold">Make your Choice</h2>
      <div className="choices mt-8 flex justify-around gap-20">
        <button
          className={`${buttonDesign} `}
          onClick={() => makeChoice("rock")}
        >
          <img
            src="src/assets/img/rock.svg"
            alt="Rock"
            className="size-30 rotate-270 transition-transform duration-300 group-hover:scale-125"
          />
        </button>
        <button className={buttonDesign} onClick={() => makeChoice("paper")}>
          <img
            src="src/assets/img/paper.svg"
            alt="Paper"
            className="size-30 transition-transform duration-300 group-hover:scale-125"
          />
        </button>
        <button className={buttonDesign} onClick={() => makeChoice("scissors")}>
          <img
            src="src/assets/img/scissors.svg"
            alt="Scissors"
            className="size-30 transition-transform duration-300 group-hover:scale-125"
          />
        </button>
      </div>
    </section>
  );
};

export default GamePlay;
