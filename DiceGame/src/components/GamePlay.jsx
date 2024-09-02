import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotleScore from "./TotleScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const ranNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const dice = ranNumber(1, 7);
    setCurrentDice(dice);

    if (selectedNum === dice) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="maincon">
        <TotleScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button
      onClick={() => setShowRules(!showRules)}
      >{showRules ? "Hide" : "Shaw"} Rules</Button>
      </div>
      
       {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .maincon {
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
  }
`;
