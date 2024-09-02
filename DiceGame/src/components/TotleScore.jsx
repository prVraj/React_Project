import styled from "styled-components";

const TotleScore = ({score}) => {

 
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Totle score</p>
    </ScoreContainer>
  );
};

export default TotleScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
  }
`;
