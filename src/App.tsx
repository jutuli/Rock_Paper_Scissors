import { useState } from "react";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GamePlay from "./components/GamePlay";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const handleChoice = (choice: "rock" | "paper" | "scissors") => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
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
    </section>
  );
}

export default App;
