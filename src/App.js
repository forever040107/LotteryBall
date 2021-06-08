import React, { useState } from "react";
import RoundBall from "./RoundBall";
import { Wrapper, Block } from "./Styled";

function App() {
  const [active, setActive] = useState(false);
  const [lotteryResult, setLotteryResult] = useState([]);
  const balldataone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log("lotteryResult", lotteryResult);

  const handleResult = (active, value) => {
    setActive(active);
    const arr = [...lotteryResult];
    if (lotteryResult.indexOf(value) !== -1) {
      setLotteryResult(
        lotteryResult.filter((i) => i !== value).sort((a, b) => a - b)
      );
    } else {
      arr.push(value);
      if (lotteryResult.length > 1) {
        arr.sort((a, b) => a - b);
      }
      setLotteryResult(arr);
    }
  };

  return (
    <Wrapper>
      <Block>
        {balldataone?.map((value, index) => (
          <div
            key={index.toString()}
            onClick={() => handleResult(!active, value)}
          >
            <RoundBall
              lotteryResult={lotteryResult}
              index={index}
              value={value}
            />
          </div>
        ))}
      </Block>
      <div>已選取號碼：{lotteryResult}</div>
    </Wrapper>
  );
}

export default App;
