import styled from '@emotion/styled';

export const StatList = styled.ul`
  margin-top: 100px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StatItem = styled.li`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  background-color: ${randomBgColor};
`;

export const StatBlock = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Label = styled.span`
  display: block;
  font-weight: bold;
`;

export const Percentage = styled.span`
  display: block;
`;

function randomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
