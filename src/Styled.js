import styled from "styled-components";

export const Wrapper = styled.div`
  width: 414px;
  padding: 10px;
  border: 1px solid #ff0000;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
`;

export const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? "#FF0000" : "#CCC")};
  cursor: pointer;
`;
