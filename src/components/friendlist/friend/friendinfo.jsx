import PropTypes from 'prop-types';
import { ListOfFriendsItem, Status, NameText } from './friendinfo.style';

export const FriendInfo = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListOfFriendsItem>
      <Status status={isOnline}></Status>

      <NameText>{name}</NameText>
      <img src={avatar} alt="User avatar" width="48" />
    </ListOfFriendsItem>
  );
};

FriendInfo.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
