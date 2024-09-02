import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="./imgs/Dice.png" />
      <div className="main">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1182px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

.main {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;
