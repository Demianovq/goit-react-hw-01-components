import PropTypes from 'prop-types';
import { ListOfFriendsItem, Status, NameText } from './friendinfo.style';

export const FriendInfo = ({ avatar, name, isOnline }) => {
  return (
    <ListOfFriendsItem>
      <Status status={isOnline}></Status>

      <NameText>{name}</NameText>
      <img src={avatar} alt="avatar" width="48" />
    </ListOfFriendsItem>
  );
};

FriendInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
