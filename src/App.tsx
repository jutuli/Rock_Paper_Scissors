import { useState } from "react";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GamePlay from "./components/GamePlay";
import Result from "./components/Result";
import GameOver from "./components/GameOver";

type Choice = "rock" | "paper" | "scissors";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [hasRoundEnded, setHasRoundEnded] = useState(false);
  const [isFinalResult, setIsFinalResult] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const choices: Choice[] = ["rock", "paper", "scissors"];

  // handle user choice and create a random choice for the computer
  const handleChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    const randomChoice: Choice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    // handle result of the game round and update scores
    if (!choice || !randomChoice) return;
    setTimeout(() => {
      if (choice !== randomChoice) {
        if (
          (choice === "rock" && randomChoice === "scissors") ||
          (choice === "paper" && randomChoice === "rock") ||
          (choice === "scissors" && randomChoice === "paper")
        ) {
          setPlayerScore((prev) => {
            const newScore = prev + 1;
            if (newScore === 5) {
              setIsFinalResult(true);
              setTimeout(() => setIsGameOver(true), 2000);
            }
            return newScore;
          });
        } else {
          setComputerScore((prev) => {
            const newScore = prev + 1;
            if (newScore === 5) {
              setIsFinalResult(true);
              setTimeout(() => setIsGameOver(true), 2000);
            }
            return newScore;
          });
        }
      }
      setHasRoundEnded(true);
    }, 500);
  };

  // handle the next round by resetting the choices and hasRoundEnded
  const handleRound = () => {
    if (isFinalResult) return;
    setPlayerChoice(null);
    setComputerChoice(null);
    setHasRoundEnded(false);
  };

  // handle the restart of the game by resetting the scores and hasRoundEnded
  const handleRestart = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice(null);
    setComputerChoice(null);
    setHasRoundEnded(false);
    setIsFinalResult(false);
    setIsGameOver(false);
  };

  return (
    <section className="flex h-screen flex-col items-center bg-slate-800 text-slate-100">
      <Header />
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
      {isGameOver ? (
        <GameOver
          playerScore={playerScore}
          computerScore={computerScore}
          handleRestart={handleRestart}
        />
      ) : hasRoundEnded ? (
        <Result
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          handleRound={handleRound}
          isFinalResult={isFinalResult}
        />
      ) : (
        <GamePlay makeChoice={handleChoice} />
      )}
    </section>
  );
}

export default App;
