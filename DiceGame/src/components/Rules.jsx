import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>Rules:</h2>
      <p>1. You have to select a number between 1 to 6</p>
      <p>
        2. You will get +10 point if your selected number is equal to the dice
        number
      </p>
      <p>
        3. You will lose -1 point if your selected number is not equal to the
        dice number
      </p>
      <p>4. You can reset the score at any time</p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
  `;
