import { useState } from "react";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GamePlay from "./components/GamePlay";
import Result from "./components/Result";

type Choice = "rock" | "paper" | "scissors";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  const choices: Choice[] = ["rock", "paper", "scissors"];

  const handleChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    const randomChoice: Choice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    // handle result of the game round and update scores
    if (!choice || !randomChoice) return;
    if (choice !== randomChoice) {
      if (
        (choice === "rock" && randomChoice === "scissors") ||
        (choice === "paper" && randomChoice === "rock") ||
        (choice === "scissors" && randomChoice === "paper")
      ) {
        setPlayerScore((prev) => prev + 1);
      } else {
        setComputerScore((prev) => prev + 1);
      }
    }
  };

  return (
    <section className="flex h-screen flex-col items-center bg-slate-800 text-slate-100">
      <Header />
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
      <GamePlay makeChoice={handleChoice} />
      <Result playerChoice={playerChoice} computerChoice={computerChoice} />
    </section>
  );
}

export default App;
