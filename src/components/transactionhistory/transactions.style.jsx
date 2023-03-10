import styled from '@emotion/styled';

export const StringOfTable = styled.th`
  text-align: left;
  color: #fff;
  background-color: #706d97;
  padding: 10px;
  height: 20px;
`;

export const StringInfoOfTable = styled.td`
  min-width: 250px;
  color: #696969;
  border-bottom: 1px solid #eee;
  padding: 10px;
  height: 20px;
`;

export const StyledStringOfTable = styled.tr`
  :nth-child(odd) {
    background-color: #eee;
  }
`;
