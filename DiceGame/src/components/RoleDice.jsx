import styled from "styled-components";

const RoleDice = ({currentDice, rollDice}) => {
  return (
    <DiceContainer>
      <div className="rolling" onClick={rollDice}>
        <img src={`./Dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 20px;
    margin-top: 10px;
  }

  .rolling {
    cursor: pointer;
  }
`;
