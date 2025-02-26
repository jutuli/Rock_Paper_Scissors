import { useState } from "react";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  return (
    <section className="flex h-screen flex-col items-center bg-slate-800 text-slate-100">
      <Header />
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
    </section>
  );
}

export default App;
