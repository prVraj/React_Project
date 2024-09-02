import styled from "styled-components";

const NumberSelector = ({ setError, error, selectedNum, setSelectedNum }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (num) => {
    setSelectedNum(num);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="err">{error}</p>
      <div className="flexing">
        {arrNum.map((num, i) => (
          <Box
            isSelected={num === selectedNum}
            key={i}
            onClick={() => numberSelectorHandler(num)}
            style={{
              backgroundColor: selectedNum === num ? "black" : "white",
              color: selectedNum === num ? "white" : "black",
            }}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>selected number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .err {
    color: red;
    font-size: 15px;
  }
  .flexing {
    display: flex;
    gap: 8px;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  border: 1px solid #000;
  font-size: 24px;
  cursor: pointer;
  font-weight: 400;
`;
