import styled from '@emotion/styled';

export const ListOfFriendsItem = styled.li`
  position: relative;
  padding-left: 20px;
`;

export const NameText = styled.span``;

export const Status = styled.span`
  position: absolute;
  top: 70%;
  left: 0%;
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  ${({ status }) => {
    if (status === true) {
      return 'background-color: green;';
    } else if (status === false) {
      return 'background-color: red;';
    } else {
      return 'background-color: grey;';
    }
  }}
`;
