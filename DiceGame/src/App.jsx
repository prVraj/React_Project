import GamePlay from "./components/gamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const toggleGame = () => {
    setGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        gameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} />
      }
    </>
  );
}

export default App;

