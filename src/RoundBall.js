import React from "react";
import { Ball } from "./Styled";

function RoundBall({ value, lotteryResult }) {
  console.log("include", lotteryResult.includes(value));
  return <Ball active={lotteryResult.includes(value)}>{value}</Ball>;
}
export default RoundBall;
